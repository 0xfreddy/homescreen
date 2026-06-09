import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { theme } from "../theme";
import { goTo, resetDemo } from "../state";

const ROWS = [
  { iron: "VA rails, card issuance", nuvolari: "Autocategorization (live)" },
  { iron: "ACH / SWIFT, FX", nuvolari: "Subscription detection" },
  { iron: "Tier mechanics", nuvolari: "Notification triggers" },
  { iron: "KYC, onboarding", nuvolari: "User clustering" },
  { iron: "Ramps widget", nuvolari: "Automatic payment logic" },
];

export const Close = () => (
  <>
    <DemoHeader title="Iron × Nuvolari" />
    <Page>
      <div class="col gap-5 pt-4 pb-8">
        <p class={`text-center text-lg font-medium ${theme.accent}`}>
          Nuvolari is the intelligence layer. Iron is the rails.
        </p>

        <div class={`${theme.card} overflow-hidden text-sm p-0`}>
          <div class="grid grid-cols-2 bg-neutral-100 font-semibold text-xs uppercase tracking-wide text-neutral-600">
            <div class="p-3 border-r border-neutral-200">MoonPay / Iron</div>
            <div class="p-3">Nuvolari</div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={i}
              class="grid grid-cols-2 border-t border-neutral-200 text-xs"
            >
              <div class="p-3 border-r border-neutral-200 text-neutral-700">
                {row.iron}
              </div>
              <div class="p-3 text-neutral-700">{row.nuvolari}</div>
            </div>
          ))}
        </div>

        <button
          class="text-violet-600 text-sm text-center py-2 font-medium"
          onClick={() => {
            resetDemo();
            goTo(1);
          }}
        >
          Restart demo
        </button>
      </div>
    </Page>
  </>
);
