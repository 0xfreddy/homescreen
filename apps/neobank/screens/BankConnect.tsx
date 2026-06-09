import { useEffect } from "preact/hooks";
import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { PlaidModal } from "../modals/PlaidModal";
import { goTo, showPush, state } from "../state";

export const BankConnect = () => {
  const connected = state.$bankConnected!.value;
  const progress = state.$depositProgress!.value;

  useEffect(() => {
    if (!connected && !state.bankPushShown) {
      const t = setTimeout(() => {
        state.bankPushShown = true;
        showPush({
          title: "Connect your bank",
          body: "Unlock +5% cashback on eligible spend. Takes 10 seconds. No new KYC.",
          cta: "Connect bank →",
          onCta: () => (state.showPlaid = true),
        });
      }, 600);
      return () => clearTimeout(t);
    }
  }, [connected]);

  return (
    <>
      <DemoHeader title="Iron Account" />
      <Page>
        <div class="col gap-5 pt-4">
          <div class="col gap-1">
            <p class={`${theme.muted} text-sm`}>Available balance</p>
            <p class="text-4xl font-light tabular-nums text-neutral-900">
              $1,420
            </p>
          </div>

          {connected && (
            <div class={`${theme.card} p-4 col gap-3`}>
              <div class="row jcsb text-sm">
                <span class={theme.muted}>Deposit tier progress</span>
                <span class="tabular-nums text-neutral-900">
                  ${progress} / $500
                </span>
              </div>
              <div class="h-2 rounded-full bg-neutral-200 overflow-hidden">
                <div
                  class="h-full rounded-full bg-violet-600"
                  style={{ width: `${Math.min(100, (progress / 500) * 100)}%` }}
                />
              </div>
              <p class={`text-xs ${theme.muted}`}>
                $10 bonus at $500 deposited
              </p>
            </div>
          )}

          {connected ? (
            <div class="col gap-3">
              <div class={`${theme.success} p-4 text-sm`}>
                ✓ Bank connected · +5% cashback active
              </div>
              <PrimaryButton onClick={() => goTo(4)}>
                View your Iron account →
              </PrimaryButton>
            </div>
          ) : (
            <PrimaryButton onClick={() => (state.showPlaid = true)}>
              Connect bank →
            </PrimaryButton>
          )}
        </div>
      </Page>
      {state.$showPlaid!.value && <PlaidModal />}
    </>
  );
};
