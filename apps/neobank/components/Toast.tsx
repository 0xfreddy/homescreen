import { state } from "../state";

export const Toast = () => {
  const toast = state.$toast!.value;
  if (!toast?.visible) return null;
  return (
    <div class="fixed bottom-24 left-4 right-4 z-50 mx-auto max-w-sm rounded-2xl bg-neutral-900 text-white px-4 py-3 text-sm text-center shadow-xl">
      {toast.message}
    </div>
  );
};
