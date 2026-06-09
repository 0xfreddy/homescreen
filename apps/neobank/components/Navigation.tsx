import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "preact/compat";
import { ComponentChildren, JSX } from "preact";

type Indicator = { size: number; position: number };

type NavCtx = {
  activeId: string | null;
  activate: (id: string, el: HTMLElement) => void;
  ready: boolean;
};

const Ctx = createContext<NavCtx>({ activeId: null, activate: () => {}, ready: false });

let _uid = 0;
const uid = () => String(++_uid);

// ─── Navigation root ──────────────────────────────────────────────────────────

type RootProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  class?: string;
  style?: JSX.CSSProperties;
  children: (ctx: {
    ready: boolean;
    size: string;
    position: string;
    duration: string;
  }) => ComponentChildren;
};

function Root({ as: Tag = "div", className, class: cls, style, children }: RootProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const activate = useCallback((id: string, el: HTMLElement) => {
    const container = (el.closest("ul, ol") ?? el.parentElement)!;
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    setIndicator({ size: eRect.width, position: eRect.left - cRect.left });
    setActiveId(id);
    setReady(true);
  }, []);

  return (
    <Ctx.Provider value={{ activeId, activate, ready }}>
      <Tag ref={containerRef} className={className ?? cls} style={style}>
        {children({
          ready,
          size: indicator ? `${indicator.size}px` : "0px",
          position: indicator ? `${indicator.position}px` : "0px",
          duration: "300ms",
        })}
      </Tag>
    </Ctx.Provider>
  );
}

// ─── Navigation.List ─────────────────────────────────────────────────────────

type ListProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  class?: string;
  children: ComponentChildren;
};

function List({ as: Tag = "ul", className, class: cls, children }: ListProps) {
  return <Tag className={className ?? cls}>{children}</Tag>;
}

// ─── Navigation.Item ─────────────────────────────────────────────────────────

type ItemProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  class?: string;
  onActivated?: () => void;
  children: (ctx: { setActive: () => void; isActive: boolean }) => ComponentChildren;
};

function Item({ as: Tag = "li", className, class: cls, onActivated, children }: ItemProps) {
  const { activeId, activate, ready } = useContext(Ctx);
  const ref = useRef<HTMLElement>(null);
  const [id] = useState(uid);
  const isActive = activeId === id;

  // First item activates itself on mount
  useEffect(() => {
    if (ref.current) {
      const list = ref.current.parentElement;
      if (list && list.firstElementChild === ref.current) {
        activate(id, ref.current);
      }
    }
  }, []);

  const setActive = useCallback(() => {
    if (ref.current) {
      activate(id, ref.current);
      onActivated?.();
    }
  }, [id, activate, onActivated]);

  return (
    <Tag ref={ref} className={className ?? cls}>
      {children({ setActive, isActive })}
    </Tag>
  );
}

export const Navigation = Object.assign(Root, { List, Item });
