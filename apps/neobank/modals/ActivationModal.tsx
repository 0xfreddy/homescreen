import { Overlay } from "../components/Overlay";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { VA_DETAILS, completeActivation, state } from "../state";

export const ActivationModal = () => {
  const phase = state.$activationPhase!.value;

  return (
    <Overlay>
      <div class={theme.modal}>
        {phase === "loading" && (
          <>
            <div class="row jcc py-6">
              <div class="w-12 h-12 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
            </div>
            <p class="text-center text-neutral-700">
              Spinning up your virtual account…
            </p>
          </>
        )}
        {phase === "success" && (
          <>
            <div class="text-center text-4xl text-emerald-600">✓</div>
            <h2 class="text-xl font-semibold text-center text-neutral-900">
              Virtual account ready
            </h2>
            <p class="text-sm text-neutral-600 text-center">
              No forms. No extra KYC. You're live.
            </p>
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
    </Overlay>
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
