import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { goNext } from "../state";

const TRANSACTIONS = [
  { emoji: "🎬", name: "Netflix", amount: 15.99, category: "Entertainment" },
  { emoji: "☁️", name: "AWS", amount: 94.0, category: "SaaS / Dev" },
  { emoji: "🏠", name: "Rent", amount: 1200.0, category: "Housing" },
  { emoji: "☕", name: "Starbucks", amount: 6.45, category: "Food & Drink" },
  { emoji: "☕", name: "Starbucks", amount: 5.8, category: "Food & Drink" },
  { emoji: "☕", name: "Starbucks", amount: 7.2, category: "Food & Drink" },
  { emoji: "☕", name: "Starbucks", amount: 6.1, category: "Food & Drink" },
  { emoji: "🛒", name: "Whole Foods", amount: 84.32, category: "Groceries" },
  { emoji: "⛽", name: "Shell", amount: 52.0, category: "Transport" },
];

export const Transactions = () => (
  <>
    <DemoHeader title="Activity" />
    <Page flush>
      <div class="px-4 pt-2 pb-3">
        <span class="inline-block rounded-full bg-violet-100 text-violet-700 text-xs font-medium px-3 py-1">
          Powered by Nuvolari — live today
        </span>
        <p class={`text-xs ${theme.muted} mt-2`}>
          Integrator inputs associated stable account → Nuvolari returns
          categories + clusters
        </p>
      </div>
      <div class={`col divide-y ${theme.divider} bg-white`}>
        {TRANSACTIONS.map((tx, i) => (
          <div key={i} class="row aic gap-3 px-4 py-3.5">
            <span class="text-2xl w-10 text-center">{tx.emoji}</span>
            <div class="flex-1 min-w-0">
              <p class="font-medium text-neutral-900">{tx.name}</p>
              <p class={`text-xs ${theme.muted}`}>{tx.category}</p>
            </div>
            <span class="tabular-nums text-neutral-700">
              −${tx.amount.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div class="p-4 mt-4">
        <PrimaryButton onClick={goNext}>Continue →</PrimaryButton>
      </div>
    </Page>
  </>
);
