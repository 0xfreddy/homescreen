import { deepSignal } from "deepsignal";

export type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Toast = { message: string; visible: boolean } | null;

type Push = {
  title: string;
  body: string;
  cta?: string;
  onCta?: () => void;
  visible: boolean;
} | null;

type State = {
  step: Step;
  balance: number;
  vaActivated: boolean;
  depositComplete: boolean;
  bankConnected: boolean;
  depositProgress: number;
  awsCovered: boolean;
  toast: Toast;
  push: Push;
  showActivation: boolean;
  activationPhase: "idle" | "loading" | "success";
  showRamps: boolean;
  showPlaid: boolean;
  showBeneficiary: boolean;
  rentScheduled: boolean;
  platinumOfferShown: boolean;
  bankPushShown: boolean;
  awsPushShown: boolean;
};

export const state = deepSignal<State>({
  step: 1,
  balance: 0,
  vaActivated: false,
  depositComplete: false,
  bankConnected: false,
  depositProgress: 120,
  awsCovered: false,
  toast: null,
  push: null,
  showActivation: false,
  activationPhase: "idle",
  showRamps: false,
  showPlaid: false,
  showBeneficiary: false,
  rentScheduled: true,
  platinumOfferShown: false,
  bankPushShown: false,
  awsPushShown: false,
});

export const goTo = (step: Step) => {
  state.step = step;
};

export const goNext = () => {
  if (state.step < 9) state.step = (state.step + 1) as Step;
};

export const goBack = () => {
  if (state.step > 1) state.step = (state.step - 1) as Step;
};

export const showToast = (message: string, ms = 3500) => {
  state.toast = { message, visible: true };
  setTimeout(() => {
    state.toast = null;
  }, ms);
};

export const showPush = (push: Omit<NonNullable<Push>, "visible">) => {
  state.push = { ...push, visible: true };
};

export const hidePush = () => {
  state.push = null;
};

export const activateVa = () => {
  state.showActivation = true;
  state.activationPhase = "loading";
  setTimeout(() => {
    state.activationPhase = "success";
    state.vaActivated = true;
  }, 1800);
};

export const completeActivation = () => {
  state.showActivation = false;
  state.activationPhase = "idle";
  goTo(2);
};

export const completeDeposit = () => {
  state.balance = 1420;
  state.depositComplete = true;
  state.showRamps = false;
  showToast("🎉 $10 bonus credited + cashback activated");
};

export const connectBank = () => {
  state.bankConnected = true;
  state.showPlaid = false;
  showPush({
    title: "Bank connected",
    body: "You're earning +5% cashback on eligible spend.",
  });
  setTimeout(() => hidePush(), 3000);
};

export const topUpAws = () => {
  state.awsCovered = true;
  state.balance -= 34;
  showToast("Balance topped up — AWS payment covered");
};

export const VA_DETAILS = {
  accountName: "Iron Virtual Account",
  accountNumber: "•••• 4829",
  routingNumber: "021000021",
  iban: "US12 IRON 0000 1234 5678 90",
};

export const resetDemo = () => {
  state.step = 1;
  state.balance = 0;
  state.vaActivated = false;
  state.depositComplete = false;
  state.bankConnected = false;
  state.awsCovered = false;
  state.platinumOfferShown = false;
  state.showActivation = false;
  state.activationPhase = "idle";
  state.showRamps = false;
  state.showPlaid = false;
  state.showBeneficiary = false;
  state.toast = null;
  state.push = null;
  state.bankPushShown = false;
  state.awsPushShown = false;
};
