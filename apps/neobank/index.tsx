import { Screen } from "../../components/Screen";
import { Toast } from "./components/Toast";
import { PushBanner } from "./components/PushBanner";
import { theme } from "./theme";
import { state } from "./state";
import { WalletEntry } from "./screens/WalletEntry";
import { FirstDeposit } from "./screens/FirstDeposit";
import { BankConnect } from "./screens/BankConnect";
import { Transactions } from "./screens/Transactions";
import { Subscriptions } from "./screens/Subscriptions";
import { AutoPayments } from "./screens/AutoPayments";
import { Tiers } from "./screens/Tiers";
import { Analytics } from "./screens/Analytics";
import { Close } from "./screens/Close";

const SCREENS = {
  1: WalletEntry,
  2: FirstDeposit,
  3: BankConnect,
  4: Transactions,
  5: Subscriptions,
  6: AutoPayments,
  7: Tiers,
  8: Analytics,
  9: Close,
} as const;

export default () => {
  const step = state.$step!.value;
  const ScreenComponent = SCREENS[step];

  return (
    <Screen class={theme.screen}>
      <ScreenComponent />
      <Toast />
      <PushBanner />
    </Screen>
  );
};
