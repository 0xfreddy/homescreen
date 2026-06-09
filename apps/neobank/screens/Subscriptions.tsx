import { useEffect } from "preact/hooks";
import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { goNext, showPush, state, topUpAws } from "../state";

export const Subscriptions = () => {
  const awsCovered = state.$awsCovered!.value;

  useEffect(() => {
    if (!awsCovered && !state.awsPushShown) {
      const t = setTimeout(() => {
        state.awsPushShown = true;
        showPush({
          title: "AWS payment due in 3 days",
          body: "Short $34. Top up from balance?",
          cta: "Top up from balance →",
          onCta: topUpAws,
        });
      }, 800);
      return () => clearTimeout(t);
    }
  }, [awsCovered]);

  return (
    <>
      <DemoHeader title="Subscriptions" />
      <Page>
        <div class="col gap-4 pt-4">
          <p class={`text-sm ${theme.subtle}`}>Recurring spend detected</p>

          <SubRow name="Netflix" amount={15.99} status="covered" />
          <SubRow name="Notion" amount={16.0} status="covered" />
          <SubRow
            name="AWS"
            amount={94.0}
            status={awsCovered ? "covered" : "short"}
            note={awsCovered ? undefined : "Short by $34"}
          />

          {!awsCovered && (
            <PrimaryButton onClick={topUpAws}>
              Top up from balance →
            </PrimaryButton>
          )}

          {awsCovered && (
            <PrimaryButton onClick={goNext}>Continue →</PrimaryButton>
          )}
        </div>
      </Page>
    </>
  );
};

const SubRow = (props: {
  name: string;
  amount: number;
  status: "covered" | "short";
  note?: string;
}) => (
  <div class={`${theme.card} p-4 row aic gap-3`}>
    <div class="flex-1">
      <p class="font-medium text-neutral-900">{props.name}</p>
      <p class={`text-sm ${theme.muted} tabular-nums`}>
        ${props.amount.toFixed(2)}/mo
      </p>
      {props.note && (
        <p class={`text-xs ${theme.warning} mt-1`}>⚠️ {props.note}</p>
      )}
    </div>
    <span
      class={
        props.status === "covered"
          ? "text-emerald-600 text-sm font-medium"
          : "text-amber-600 text-sm font-medium"
      }
    >
      {props.status === "covered" ? "✅ covered" : "⚠️ short"}
    </span>
  </div>
);
