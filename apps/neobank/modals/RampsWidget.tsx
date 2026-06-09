import { BottomDrawer } from "../components/BottomDrawer";
import { completeDeposit, state } from "../state";

export const RampsWidget = () => (
  <BottomDrawer onClose={() => (state.showRamps = false)}>
    <div class="px-5 pt-2 pb-6 col gap-5">
      <div class="col gap-3">
        <h2 class="text-xl font-bold text-neutral-900">Secure Checkout</h2>

        <div class="row aic gap-3">
          <img
            src="/images/avatar.jpg"
            alt=""
            class="w-10 h-10 rounded-full object-cover flex-none"
          />
          <div class="flex-1 min-w-0 col gap-0.5">
            <span class="font-semibold text-neutral-900 text-sm">
              Alex Smith
            </span>
            <span class="text-xs text-neutral-500 tabular-nums">
              0x1234…abcd
            </span>
          </div>
          <div class="row aic gap-1 rounded-full bg-violet-50 border border-violet-100 px-2.5 py-1 flex-none">
            <span class="text-violet-600 text-xs">🛡</span>
            <span class="text-[10px] font-semibold text-violet-700">
              KYC Verified
            </span>
          </div>
        </div>
      </div>

      <div class="rounded-2xl border border-neutral-200 p-4 col gap-4">
        <div class="row aic jcsb">
          <div class="col gap-1">
            <span class="text-xs text-neutral-500">Buying</span>
            <div class="row aic gap-2">
              <div class="w-8 h-8 rounded-full bg-[#2775CA] row aic jcc text-white text-xs font-bold">
                $
              </div>
              <span class="font-semibold text-neutral-900">USDC</span>
            </div>
          </div>
          <div class="col gap-1 aife">
            <span class="text-xs text-neutral-500">Price</span>
            <span class="font-semibold text-neutral-900 tabular-nums">
              $1.00
            </span>
          </div>
        </div>

        <div class="row aic gap-2 text-sm">
          <div class="flex-1 col gap-0.5">
            <span class="text-xs text-neutral-500">You pay</span>
            <span class="font-semibold text-neutral-900 tabular-nums">
              $1,420.00 USD
            </span>
          </div>
          <span class="text-neutral-300 text-lg">→</span>
          <div class="flex-1 col gap-0.5 aife text-right">
            <span class="text-xs text-neutral-500">You receive</span>
            <span class="font-semibold text-neutral-900 tabular-nums">
              1,420 USDC
            </span>
          </div>
        </div>
      </div>

      <div class="col gap-2">
        <span class="text-xs text-neutral-500">Payment Method</span>
        <div class="rounded-2xl border-2 border-transparent p-[2px] bg-gradient-to-r from-violet-500 to-blue-500">
          <div class="rounded-[14px] bg-white px-4 py-3.5 row aic gap-3">
            <div class="row aic gap-2 flex-1">
              <span class="text-[11px] font-bold italic text-[#1A1F71] bg-neutral-100 px-1.5 py-0.5 rounded">
                VISA
              </span>
              <span class="font-medium text-neutral-900">Apple Pay</span>
            </div>
            <div class="w-6 h-6 rounded-full bg-blue-600 row aic jcc">
              <span class="text-white text-xs">✓</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={completeDeposit}
        class="w-full rounded-2xl bg-blue-600 text-white py-4 font-semibold text-base shadow-lg shadow-blue-600/25 active:scale-[0.99] transition-transform"
      >
        Pay with Credit/Debit Card
      </button>

      <p class="text-center text-xs text-neutral-400 row aic jcc gap-1.5">
        <span>🔒</span>
        Secured by 256-bit encryption
      </p>
    </div>
  </BottomDrawer>
);
