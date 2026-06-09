import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { goNext } from "../state";

export const Analytics = () => (
  <>
    <DemoHeader title="Insights" />
    <Page>
      <div class="col gap-4 pt-4">
        <p class={`text-sm ${theme.subtle}`}>Your spending this month</p>

        <div class={`${theme.card} p-4 col gap-3`}>
          <p class="text-3xl font-light tabular-nums text-neutral-900">
            $1,472
          </p>
          <p class={`text-xs ${theme.muted}`}>Across 8 transactions</p>
        </div>

        <div class="col gap-2">
          {[
            { label: "Housing", pct: 82, amount: "$1,200" },
            { label: "SaaS / Dev", pct: 6, amount: "$94" },
            { label: "Food & Drink", pct: 5, amount: "$25" },
            { label: "Entertainment", pct: 1, amount: "$16" },
          ].map((c) => (
            <div key={c.label} class="col gap-1">
              <div class="row jcsb text-sm text-neutral-900">
                <span>{c.label}</span>
                <span class={`${theme.muted} tabular-nums`}>{c.amount}</span>
              </div>
              <div class="h-1.5 rounded-full bg-neutral-200 overflow-hidden">
                <div
                  class="h-full rounded-full bg-violet-600"
                  style={{ width: `${c.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div class={`${theme.card} p-4 col gap-2`}>
          <p class="text-sm font-medium text-neutral-900">
            Subscription profile
          </p>
          <p class={`text-xs ${theme.muted}`}>
            3 recurring charges detected · $126/mo
          </p>
        </div>

        <PrimaryButton onClick={goNext} class="mt-2">
          Continue →
        </PrimaryButton>
      </div>
    </Page>
  </>
);
