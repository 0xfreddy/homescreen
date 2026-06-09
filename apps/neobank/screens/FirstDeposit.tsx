import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { RampsWidget } from "../modals/RampsWidget";
import { goTo, state } from "../state";

export const FirstDeposit = () => {
  const balance = state.$balance!.value;
  const funded = state.$depositComplete!.value;

  return (
    <>
      <DemoHeader title="Iron Account" />
      <Page>
        <div class="col gap-5 pt-4">
          <div class="col gap-1">
            <p class={`${theme.muted} text-sm`}>Available balance</p>
            <p class="text-4xl font-light tabular-nums text-neutral-900">
              ${balance.toLocaleString()}
            </p>
          </div>

          {!funded && (
            <div class="col gap-3">
              <Incentive
                title="Earn cashback on your next crypto purchase"
                sub="Fund Iron first"
              />
              <Incentive title="First deposit: $10 bonus" sub="Limited time" />
            </div>
          )}

          {!funded ? (
            <PrimaryButton onClick={() => (state.showRamps = true)}>
              Fund account · Buy USDC
            </PrimaryButton>
          ) : (
            <div class="col gap-3">
              <div class={`${theme.success} p-4 text-sm`}>
                Account funded · Cashback active
              </div>
              <PrimaryButton onClick={() => goTo(3)}>
                Continue →
              </PrimaryButton>
            </div>
          )}
        </div>
      </Page>
      {state.$showRamps!.value && <RampsWidget />}
    </>
  );
};

const Incentive = (props: { title: string; sub: string }) => (
  <div class={`${theme.card} p-4 col gap-1`}>
    <p class="text-sm font-medium text-neutral-900">{props.title}</p>
    <p class={`text-xs ${theme.muted}`}>{props.sub}</p>
  </div>
);
