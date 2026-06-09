import { Overlay } from "../components/Overlay";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { showToast, state } from "../state";

export const BeneficiaryModal = () => (
  <Overlay onClose={() => (state.showBeneficiary = false)}>
    <div class={`${theme.modal} !p-5`}>
      <h2 class="text-lg font-semibold text-neutral-900">Add beneficiary</h2>
      <Field label="Name" value="Landlord · Rent" />
      <Field label="IBAN / ACH" value="US12 IRON 0000 9876 5432 10" />
      <Field label="Amount" value="$1,200.00" />
      <Field label="Frequency" value="Monthly" />
      <div class="row gap-2">
        <span class="rounded-full bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1">
          ACH fee: $0
        </span>
        <span class="rounded-full bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1">
          SWIFT fee: $0
        </span>
      </div>
      <PrimaryButton
        onClick={() => {
          state.showBeneficiary = false;
          state.rentScheduled = true;
          showToast("Payout scheduled — rent · $1,200 · monthly");
        }}
      >
        Confirm payout
      </PrimaryButton>
    </div>
  </Overlay>
);

const Field = (props: { label: string; value: string }) => (
  <div class="col gap-1">
    <label class={`text-xs ${theme.muted}`}>{props.label}</label>
    <div class="rounded-xl bg-neutral-50 border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900">
      {props.value}
    </div>
  </div>
);
