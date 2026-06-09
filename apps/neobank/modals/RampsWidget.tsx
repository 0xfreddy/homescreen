import { Overlay } from "../components/Overlay";
import { PrimaryButton } from "../components/PrimaryButton";
import { completeDeposit, state } from "../state";

export const RampsWidget = () => (
  <Overlay onClose={() => (state.showRamps = false)}>
    <div class="rounded-3xl bg-white text-neutral-900 p-5 col gap-4">
      <div class="row aic jcsb">
        <span class="font-bold text-lg">MoonPay</span>
        <button
          class="text-neutral-400 text-xl"
          onClick={() => (state.showRamps = false)}
        >
          ×
        </button>
      </div>
      <p class="text-sm text-neutral-600">Buy crypto to fund your Iron account</p>
      <div class="rounded-2xl bg-neutral-100 p-4 col gap-3">
        <div class="row jcsb text-sm">
          <span class="text-neutral-500">You pay</span>
          <span class="font-semibold">$1,420.00 USD</span>
        </div>
        <div class="row jcsb text-sm">
          <span class="text-neutral-500">You receive</span>
          <span class="font-semibold">1,420 USDC</span>
        </div>
        <div class="h-px bg-neutral-200" />
        <div class="row jcsb text-xs text-neutral-500">
          <span>Fee</span>
          <span>$0.00</span>
        </div>
      </div>
      <div class="rounded-xl border border-neutral-200 px-3 py-2.5 text-sm text-neutral-500">
        Visa •••• 4242
      </div>
      <PrimaryButton
        class="!bg-[#7B3FE4] !text-white"
        onClick={completeDeposit}
      >
        Confirm purchase
      </PrimaryButton>
    </div>
  </Overlay>
);
