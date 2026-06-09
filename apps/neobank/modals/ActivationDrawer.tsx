import { BottomDrawer } from "../components/BottomDrawer";
import { PrimaryButton } from "../components/PrimaryButton";
import { MockCreditCard } from "../components/NeobankCard";
import { theme } from "../theme";
import { VA_DETAILS, completeActivation, state } from "../state";

export const ActivationDrawer = () => {
  const phase = state.$activationPhase!.value;

  return (
    <BottomDrawer onClose={() => (state.showActivation = false)}>
      <div class="px-5 pt-2 pb-6 col gap-5">
        {phase === "loading" && (
          <>
            <div class="row jcc py-8">
              <div class="w-12 h-12 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
            </div>
            <p class="text-center text-neutral-700 pb-4">
              Spinning up your virtual account…
            </p>
          </>
        )}

        {phase === "success" && (
          <>
            <div class="col gap-1 text-center">
              <h2 class="text-xl font-bold text-neutral-900">
                Virtual account ready
              </h2>
            </div>

            <MockCreditCard />

            <div class={theme.modalField}>
              <Row label="Account" value={VA_DETAILS.accountName} />
              <Row label="Account no." value={VA_DETAILS.accountNumber} />
              <Row label="Routing" value={VA_DETAILS.routingNumber} />
              <Row label="IBAN" value={VA_DETAILS.iban} />
            </div>

            <PrimaryButton onClick={completeActivation}>
              Continue →
            </PrimaryButton>
          </>
        )}
      </div>
    </BottomDrawer>
  );
};

const Row = (props: { label: string; value: string }) => (
  <div class="row jcsb gap-2">
    <span class="text-neutral-600">{props.label}</span>
    <span class="font-medium tabular-nums text-right text-neutral-900">
      {props.value}
    </span>
  </div>
);
