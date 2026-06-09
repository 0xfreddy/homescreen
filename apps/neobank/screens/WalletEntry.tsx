import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { activateVa, state } from "../state";
import { ActivationModal } from "../modals/ActivationModal";

export const WalletEntry = () => (
  <>
    <DemoHeader title="MoonPay" showBack={false} />
    <Page>
      <div class="col gap-6 pt-4">
        <div class="col gap-1">
          <p class={`${theme.muted} text-sm`}>Total balance</p>
          <p class="text-4xl font-light tabular-nums text-neutral-900">
            $2,847.50
          </p>
          <p class={`text-xs ${theme.subtle}`}>Crypto only · No fiat rails</p>
        </div>

        <div class="grid grid-cols-3 gap-3">
          {[
            { label: "BTC", value: "$1,240" },
            { label: "ETH", value: "$980" },
            { label: "USDC", value: "$627" },
          ].map((a) => (
            <div key={a.label} class={`${theme.card} p-3 col gap-1`}>
              <span class={`text-xs ${theme.muted}`}>{a.label}</span>
              <span class="font-medium tabular-nums text-neutral-900">
                {a.value}
              </span>
            </div>
          ))}
        </div>

        <div class={`${theme.banner} p-4 col gap-3`}>
          <p class={theme.accentBg}>Iron Virtual Account</p>
          <p class="text-sm text-neutral-700 leading-relaxed">
            Unlock your Iron virtual account — bank account in one click, no
            extra KYC
          </p>
          <PrimaryButton onClick={activateVa}>Activate now →</PrimaryButton>
        </div>
      </div>
    </Page>
    {state.$showActivation!.value && <ActivationModal />}
  </>
);
