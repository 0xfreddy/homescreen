import { useEffect } from "preact/hooks";
import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { goNext, showPush, state } from "../state";

export const Tiers = () => {
  useEffect(() => {
    if (!state.platinumOfferShown) {
      const t = setTimeout(() => {
        state.platinumOfferShown = true;
        showPush({
          title: "Visa Platinum upgrade",
          body: "You're 60% of the way there. Unlock premium rewards with $1,000 card spend.",
          cta: "View offer →",
          onCta: () => {},
        });
      }, 1000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      <DemoHeader title="Rewards" />
      <Page>
        <div class="col gap-4 pt-4">
          <TierRow
            label="Deposits"
            value="$500"
            status="done"
            note="$10 bonus unlocked"
          />
          <TierRow
            label="Card spend"
            value="$340 / $1,000"
            progress={34}
            note="60% to Visa Platinum"
          />
          <TierRow label="Frequency" value="8 txns this month" status="done" />

          <div class={`${theme.banner} p-4 col gap-2 mt-2`}>
            <p class={theme.accentBg}>Nuvolari trigger fired</p>
            <p class="text-sm text-neutral-700">
              User hit deposit threshold — Visa Platinum upgrade offer sent
            </p>
          </div>

          <PrimaryButton onClick={goNext} class="mt-2">
            Continue →
          </PrimaryButton>
        </div>
      </Page>
    </>
  );
};

const TierRow = (props: {
  label: string;
  value: string;
  status?: "done";
  progress?: number;
  note?: string;
}) => (
  <div class={`${theme.card} p-4 col gap-2`}>
    <div class="row jcsb">
      <span class={`text-sm ${theme.muted}`}>{props.label}</span>
      {props.status === "done" && (
        <span class="text-emerald-600 text-sm">✅</span>
      )}
    </div>
    <p class="font-medium tabular-nums text-neutral-900">{props.value}</p>
    {props.progress !== undefined && (
      <div class="h-1.5 rounded-full bg-neutral-200 overflow-hidden">
        <div
          class="h-full rounded-full bg-violet-600"
          style={{ width: `${props.progress}%` }}
        />
      </div>
    )}
    {props.note && <p class={`text-xs ${theme.muted}`}>{props.note}</p>}
  </div>
);
