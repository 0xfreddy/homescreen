import { cx } from "@twind/core";
import { ComponentChildren } from "preact";
import { Main } from "../../../components/Main";
import { theme } from "../theme";

export const Page = (props: {
  children: ComponentChildren;
  class?: string;
  flush?: boolean;
}) => (
  <Main
    class={cx(
      "pt-header pb-safe-b",
      theme.page,
      !props.flush && "px-4",
      props.class
    )}
  >
    {props.children}
  </Main>
);
