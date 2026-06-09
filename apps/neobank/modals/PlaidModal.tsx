import { BottomDrawer } from "../components/BottomDrawer";
import { connectBank, state } from "../state";

export const PlaidModal = () => (
  <BottomDrawer onClose={() => (state.showPlaid = false)}>
    <div class="px-5 pt-2 pb-6 col gap-5">
      <div class="col gap-1">
        <h2 class="text-xl font-bold text-neutral-900">Connect your bank</h2>
        <p class="text-sm text-neutral-500">
          Securely link your account. Takes about 10 seconds.
        </p>
      </div>

      <div class="col gap-2">
        {["Chase", "Bank of America", "Wells Fargo"].map((bank) => (
          <button
            key={bank}
            class="row aic gap-3 rounded-2xl border border-neutral-200 px-4 py-3.5 text-left active:bg-neutral-50"
            onClick={connectBank}
          >
            <div class="w-9 h-9 rounded-xl bg-neutral-100 flex-none" />
            <span class="font-medium text-neutral-900">{bank}</span>
          </button>
        ))}
      </div>

      <p class="text-xs text-neutral-400 text-center">
        Plaid · Bank-level encryption
      </p>
    </div>
  </BottomDrawer>
);
