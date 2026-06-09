import { css } from "@twind/core";
import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";

export const BottomDrawer = (props: {
  children: ComponentChildren;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const close = () => {
    setOpen(false);
    setTimeout(props.onClose, 280);
  };

  return (
    <div class="fixed inset-0 z-50">
      <button
        class={css`
          @apply absolute inset-0 bg-neutral-900/30 backdrop-blur-md;
          transition: opacity 0.28s ease;
          opacity: ${open ? 1 : 0};
        `}
        aria-label="Close"
        onClick={close}
      />
      <div
        class={css`
          @apply absolute bottom-0 left-0 right-0 bg-white rounded-t-[28px] shadow-2xl;
          @apply max-h-[88vh] overflow-y-auto pb-safe-b;
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
          transform: translateY(${open ? "0" : "100%"});
        `}
      >
        <div class="w-10 h-1 rounded-full bg-neutral-200 mx-auto mt-3 mb-1" />
        {props.children}
      </div>
    </div>
  );
};
