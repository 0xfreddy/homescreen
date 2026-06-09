import { BottomDrawer } from "../components/BottomDrawer";
import Counter, { amountPlaces } from "../components/Counter";
import { SlideToConfirm } from "../components/SlideToConfirm";
import {
  adjustCheckoutAmount,
  completeDeposit,
  state,
} from "../state";

export const RampsWidget = () => {
  const amount = state.$checkoutAmount!.value;

  return (
    <BottomDrawer onClose={() => (state.showRamps = false)}>
      <div class="px-5 pt-2 pb-6 col gap-5">
        <div class="col gap-3">
          <h2 class="text-xl font-bold text-neutral-900">Secure Checkout</h2>

          <div class="row aic gap-3">
            <div class="w-11 h-11 rounded-full bg-white border border-neutral-200 row aic jcc text-lg font-semibold text-neutral-800 shadow-sm flex-none">
              A
            </div>
            <div class="flex-1 min-w-0 col gap-0.5">
              <span class="font-semibold text-neutral-900 text-sm">
                Alex Smith
              </span>
              <span class="text-xs text-neutral-500 tabular-nums">
                0x1234...abcd
              </span>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-neutral-200 p-4 col gap-4">
          <div class="row aic jcsb">
            <div class="row aic gap-2">
              <img src="/images/usdclogo.png" class="w-8 h-8 rounded-full" alt="USDC" />
              <span class="font-semibold text-neutral-900">USDC</span>
            </div>
            <span class="font-semibold text-neutral-900 tabular-nums">
              $1.00
            </span>
          </div>

          <div class="col gap-3 items-center py-2">
            <span class="text-xs text-neutral-500">You pay</span>
            <div class="row aic gap-4">
              <button
                onClick={() => adjustCheckoutAmount(-10)}
                class="w-10 h-10 rounded-full bg-neutral-100 text-xl font-medium text-neutral-700"
              >
                −
              </button>
              <div class="row aic gap-1">
                <span class="text-2xl font-bold text-neutral-400">$</span>
                <Counter
                  value={amount}
                  places={amountPlaces(amount)}
                  fontSize={44}
                  padding={4}
                  gap={4}
                  textColor="#171717"
                  fontWeight={700}
                  gradientFrom="white"
                  gradientTo="transparent"
                  gradientHeight={8}
                />
              </div>
              <button
                onClick={() => adjustCheckoutAmount(10)}
                class="w-10 h-10 rounded-full bg-neutral-100 text-xl font-medium text-neutral-700"
              >
                +
              </button>
            </div>
          </div>

          <div class="row aic gap-2 text-sm border-t border-neutral-100 pt-3">
            <span class="text-neutral-500 flex-1">You receive</span>
            <span class="font-semibold text-neutral-900 tabular-nums">
              {amount.toLocaleString()} USDC
            </span>
          </div>
        </div>

        <div class="col gap-2">
          <span class="text-xs text-neutral-500">Payment Method</span>
          <div class="rounded-2xl border-2 border-neutral-900 px-4 py-3.5 row aic gap-3">
            <div class="row aic gap-2 flex-1">
              <span class="text-[11px] font-bold italic text-[#1A1F71] bg-neutral-100 px-1.5 py-0.5 rounded">
                VISA
              </span>
              <span class="font-medium text-neutral-900">Apple Pay</span>
            </div>
            <div class="w-6 h-6 rounded-full bg-blue-600 row aic jcc">
              <span class="text-white text-xs font-bold">✓</span>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <SlideToConfirm
            text="Slide to pay"
            successText="Payment confirmed"
            onConfirm={completeDeposit}
            width={320}
            height={56}
          />
        </div>

        <p class="text-center text-xs text-neutral-400">
          Secured by 256-bit encryption
        </p>
      </div>
    </BottomDrawer>
  );
};
