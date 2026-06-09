import { useEffect } from "preact/hooks";
import { Screen } from "../../components/Screen";
import { Toast } from "./components/Toast";
import { PushBanner } from "./components/PushBanner";
import { FaceIdSuccess } from "./components/FaceIdSuccess";
import { theme } from "./theme";
import { syncPresenter } from "./presenter";
import { state } from "./state";
import { NeobankHome } from "./screens/NeobankHome";
import { BankConnect } from "./screens/BankConnect";
import { Transactions } from "./screens/Transactions";
import { Subscriptions } from "./screens/Subscriptions";
import { AutoPayments } from "./screens/AutoPayments";
import { Tiers } from "./screens/Tiers";
import { Analytics } from "./screens/Analytics";
import { Close } from "./screens/Close";

const SCREENS = {
  1: NeobankHome,
  2: BankConnect,
  3: Transactions,
  4: Subscriptions,
  5: AutoPayments,
  6: Tiers,
  7: Analytics,
  8: Close,
} as const;

export default () => {
  const step = state.$step!.value;
  const ScreenComponent = SCREENS[step];

  useEffect(() => {
    syncPresenter(state.step, true);
    return () => syncPresenter(1, false);
  }, []);

  const showFaceId = state.$showFaceIdSuccess!.value;

  return (
    <Screen class={theme.screen}>
      <ScreenComponent />
      <Toast />
      <PushBanner />
      {showFaceId && <FaceIdSuccess />}
    </Screen>
  );
};
