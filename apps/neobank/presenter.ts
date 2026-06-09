import { Step } from "./state";

export type PresenterStep = {
  journey: string;
  title: string;
  body: string;
  talkingPoints: string[];
};

export const PRESENTER_STEPS: Record<Step, PresenterStep> = {
  1: {
    journey: "Journey A",
    title: "Neobank home — activate & fund",
    body: "[Placeholder] Plasma-style neobank home at $0. Tap Activate card on the neobank card, then fund via Secure Checkout drawer.",
    talkingPoints: [
      "[Placeholder] Activate card → virtual account ready drawer with mocked credit card.",
      "[Placeholder] Fund account opens checkout — adjust amount in $10 steps.",
      "[Placeholder] Balance updates on the home screen after payment confirms.",
    ],
  },
  2: {
    journey: "Journey A",
    title: "Bank connect — trojan horse moment",
    body: "[Placeholder] Push notification invites bank linking for +5% cashback. Fake Plaid flow, then tier progress appears.",
    talkingPoints: [
      "[Placeholder] Emphasise 10 seconds, no new KYC.",
      "[Placeholder] After connect, show deposit tier progress ($120 / $500).",
      "[Placeholder] Continue into the active Iron account experience.",
    ],
  },
  3: {
    journey: "Journey B",
    title: "Autocategorization — live today",
    body: "[Placeholder] Transaction feed auto-populates with categories powered by Nuvolari.",
    talkingPoints: [
      "[Placeholder] Call out the Nuvolari badge — live feature, not roadmap.",
      "[Placeholder] Walk through Netflix, AWS, rent, Starbucks examples.",
      "[Placeholder] Integrator inputs stable account → Nuvolari returns categories.",
    ],
  },
  4: {
    journey: "Journey B",
    title: "Subscriptions detected",
    body: "[Placeholder] Recurring spend surfaced. AWS is short — top up from balance to cover.",
    talkingPoints: [
      "[Placeholder] Netflix and Notion are covered; AWS needs $34.",
      "[Placeholder] Nuvolari notification fires 3 days before due date.",
      "[Placeholder] One tap top-up flips AWS to covered.",
    ],
  },
  5: {
    journey: "Journey B",
    title: "Automatic payments",
    body: "[Placeholder] Scheduled payouts — rent pre-seeded, add beneficiary flow with zero fees.",
    talkingPoints: [
      "[Placeholder] Core POC: subscriptions + auto payments.",
      "[Placeholder] Show ACH / SWIFT fees waived badges.",
      "[Placeholder] Optional: walk through add beneficiary modal.",
    ],
  },
  6: {
    journey: "Journey B",
    title: "Tier qualification — upsell moment",
    body: "[Placeholder] Progress panel shows deposits, card spend, and frequency milestones.",
    talkingPoints: [
      "[Placeholder] $10 bonus unlocked at $500 deposits.",
      "[Placeholder] Visa Platinum push notification fires via Nuvolari trigger.",
      "[Placeholder] MoonPay integrator sees conversion event in dashboard.",
    ],
  },
  7: {
    journey: "Journey B",
    title: "Analytics — user insights",
    body: "[Placeholder] Personal spending breakdown — categories, subscription profile.",
    talkingPoints: [
      "[Placeholder] User view only for this demo.",
      "[Placeholder] Show how categorisation feeds insight panels.",
      "[Placeholder] Bridge to analytics-as-a-service on payment rails.",
    ],
  },
  8: {
    journey: "Close",
    title: "Iron × Nuvolari — the split",
    body: "[Placeholder] MoonPay / Iron provides rails. Nuvolari provides intelligence. One line close.",
    talkingPoints: [
      "[Placeholder] Walk the comparison table row by row.",
      "[Placeholder] Nuvolari is the intelligence layer. Iron is the rails.",
      "[Placeholder] Restart demo for the next audience.",
    ],
  },
};

export const syncPresenter = (step: Step, open = true) => {
  if (window.parent === window) return;
  window.parent.postMessage({ type: "neobank-presenter", step, open }, "*");
};
