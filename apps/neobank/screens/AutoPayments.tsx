import { DemoHeader } from "../components/DemoHeader";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { theme } from "../theme";
import { BeneficiaryModal } from "../modals/BeneficiaryModal";
import { goNext, state } from "../state";

export const AutoPayments = () => (
  <>
    <DemoHeader title="Scheduled payouts" />
    <Page>
      <div class="col gap-4 pt-4">
        <button
          class="rounded-2xl border border-dashed border-violet-400 py-4 text-violet-700 text-sm font-medium bg-violet-50"
          onClick={() => (state.showBeneficiary = true)}
        >
          + Add beneficiary →
        </button>

        {state.$rentScheduled!.value && (
          <div class={`${theme.card} p-4 col gap-2`}>
            <div class="row jcsb">
              <span class="font-medium text-neutral-900">Rent</span>
              <span class="text-emerald-600 text-xs font-medium">Active</span>
            </div>
            <p class="text-2xl font-light tabular-nums text-neutral-900">
              $1,200
            </p>
            <div class={`row jcsb text-sm ${theme.muted}`}>
              <span>Monthly</span>
              <span>Next: June 1</span>
            </div>
            <div class="row gap-2 mt-1">
              <span class="rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
                ACH fee: $0
              </span>
              <span class="rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
                SWIFT fee: $0
              </span>
            </div>
          </div>
        )}

        <PrimaryButton onClick={goNext} class="mt-4">
          Continue →
        </PrimaryButton>
      </div>
    </Page>
    {state.$showBeneficiary!.value && <BeneficiaryModal />}
  </>
);
