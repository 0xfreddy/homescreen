import { hidePush, state } from "../state";

export const PushBanner = () => {
  const push = state.$push!.value;
  if (!push?.visible) return null;
  return (
    <div class="fixed top-safe-t left-3 right-3 z-50 mt-2 rounded-2xl bg-white border border-neutral-200 p-4 shadow-lg">
      <div class="row aic gap-3">
        <div class="w-10 h-10 rounded-xl bg-violet-100 flex-none row aic jcc text-lg">
          🔔
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-sm text-neutral-900">{push.title}</p>
          <p class="text-xs text-neutral-600 mt-0.5">{push.body}</p>
        </div>
        <button
          class="text-neutral-400 text-lg px-1"
          onClick={hidePush}
        >
          ×
        </button>
      </div>
      {push.cta && (
        <button
          class="mt-3 w-full rounded-xl bg-violet-600 text-white py-2.5 text-sm font-semibold"
          onClick={() => {
            push.onCta?.();
            hidePush();
          }}
        >
          {push.cta}
        </button>
      )}
    </div>
  );
};
