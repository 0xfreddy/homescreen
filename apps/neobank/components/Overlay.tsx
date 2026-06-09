import { ComponentChildren } from "preact";

export const Overlay = (props: {
  children: ComponentChildren;
  onClose?: () => void;
}) => (
  <div class="fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-sm row aic jcc p-4">
    {props.onClose && (
      <button
        class="absolute inset-0"
        aria-label="Close"
        onClick={props.onClose}
      />
    )}
    <div class="relative z-10 w-full max-w-sm">{props.children}</div>
  </div>
);
