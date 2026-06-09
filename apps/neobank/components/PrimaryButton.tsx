import { cx } from "@twind/core";

export const PrimaryButton = (props: {
  children: string;
  onClick: () => void;
  class?: string;
  disabled?: boolean;
}) => (
  <button
    disabled={props.disabled}
    onClick={props.onClick}
    class={cx(
      "w-full rounded-2xl bg-violet-600 text-white py-3.5 font-semibold text-base",
      "disabled:opacity-40 disabled:pointer-events-none",
      props.class
    )}
  >
    {props.children}
  </button>
);
