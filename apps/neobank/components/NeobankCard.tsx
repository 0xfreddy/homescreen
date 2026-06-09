import { VA_DETAILS } from "../state";

export const NeobankCard = (props: {
  activated: boolean;
  balance: number;
  onActivate?: () => void;
}) => (
  <div class="relative mx-1 rounded-[28px] overflow-hidden aspect-[1.58/1] bg-gradient-to-br from-[#1a2e1f] via-[#0f1410] to-[#050605] shadow-xl">
    <div
      class="absolute inset-0 opacity-30"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #3dff8f33 0%, transparent 50%)",
      }}
    />
    <div class="relative h-full p-5 col jcsb">
      <div class="row jcsb aifs">
        <span class="text-white/90 text-lg font-medium tracking-wide">
          neobank
        </span>
      </div>

      {props.activated ? (
        <div class="row jcsb aife">
          <div class="row aic gap-2">
            <span class="text-2xl font-light text-white tabular-nums">
              ${props.balance.toLocaleString()}
            </span>
            <span class="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span class="text-white/70 text-sm tabular-nums">
            {VA_DETAILS.accountNumber}
          </span>
        </div>
      ) : (
        <button
          onClick={props.onActivate}
          class="self-start rounded-full bg-white/25 backdrop-blur border border-white/40 px-4 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Activate card
        </button>
      )}
    </div>
  </div>
);

export const MockCreditCard = () => (
  <div class="relative rounded-[22px] overflow-hidden aspect-[1.58/1] bg-gradient-to-br from-[#1a2e1f] via-[#0f1410] to-[#050605] shadow-lg">
    <div
      class="absolute inset-0 opacity-40"
      style={{
        background:
          "radial-gradient(circle at 80% 20%, #3dff8f44 0%, transparent 45%)",
      }}
    />
    <div class="relative h-full p-5 col jcsb text-white">
      <div class="row jcsb aifs">
        <span class="text-base font-medium">neobank</span>
      </div>
      <div class="col gap-3">
        <p class="text-lg tracking-[0.2em] tabular-nums">•••• •••• •••• 4829</p>
        <div class="row jcsb text-xs text-white/70">
          <span>IRON VIRTUAL</span>
          <span>VALID THRU 06/29</span>
        </div>
      </div>
    </div>
  </div>
);
