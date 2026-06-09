import { Overlay } from "../components/Overlay";
import { connectBank, state } from "../state";

export const PlaidModal = () => (
  <Overlay onClose={() => (state.showPlaid = false)}>
    <div class="rounded-3xl bg-white text-neutral-900 overflow-hidden col">
      <div class="bg-[#111] text-white px-5 py-4 row aic jcsb">
        <span class="font-bold tracking-tight">plaid</span>
        <button
          class="text-neutral-400 text-xl"
          onClick={() => (state.showPlaid = false)}
        >
          ×
        </button>
      </div>
      <div class="p-5 col gap-4">
        <h2 class="text-xl font-semibold">Connect your bank</h2>
        <p class="text-sm text-neutral-600">
          Securely link your account. Takes about 10 seconds.
        </p>
        <div class="col gap-2">
          {["Chase", "Bank of America", "Wells Fargo"].map((bank) => (
            <button
              key={bank}
              class="row aic gap-3 rounded-xl border border-neutral-200 px-4 py-3 text-left hover:bg-neutral-50"
              onClick={connectBank}
            >
              <div class="w-9 h-9 rounded-lg bg-neutral-200" />
              <span class="font-medium">{bank}</span>
            </button>
          ))}
        </div>
        <p class="text-xs text-neutral-400 text-center">
          Plaid · Bank-level encryption
        </p>
      </div>
    </div>
  </Overlay>
);
