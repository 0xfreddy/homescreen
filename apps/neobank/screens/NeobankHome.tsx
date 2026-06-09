import clsx from "clsx";
import { Page } from "../components/Page";
import { PrimaryButton } from "../components/PrimaryButton";
import { NeobankCard } from "../components/NeobankCard";
import { Navigation } from "../components/Navigation";
import { activateVa, goTo, state } from "../state";
import { ActivationDrawer } from "../modals/ActivationDrawer";
import { RampsWidget } from "../modals/RampsWidget";

export const NeobankHome = () => {
  const balance = state.$balance!.value;
  const activated = state.$vaActivated!.value;
  const funded = state.$depositComplete!.value;

  const navItems = ["Home", "Earn", "Rewards"];

  return (
    <>
      <Page class="!px-0 !bg-[#f4f4f5] !pt-safe-t">
        <div class="col gap-5 pt-4 pb-28">
          <div class="px-5 col gap-4">
            <div class="w-11 h-11 rounded-full bg-white border border-neutral-200 row aic jcc text-lg font-semibold text-neutral-800 shadow-sm">
              A
            </div>

            <div class="col gap-2">
              <p class="text-sm text-neutral-500">Cash Balance</p>
              <div class="row aic jcsb gap-3 flex-wrap">
                <p class="text-[42px] font-semibold text-neutral-900 leading-none tabular-nums">
                  ${balance.toLocaleString()}
                </p>
              </div>
            </div>

            <div class="row gap-3">
              <button
                disabled={!activated}
                onClick={() => activated && (state.showRamps = true)}
                class="flex-1 rounded-full bg-neutral-900 text-white py-3.5 text-sm font-medium disabled:opacity-30"
              >
                Add funds
              </button>
              <button class="flex-1 rounded-full bg-white border border-neutral-200 text-neutral-900 py-3.5 text-sm font-medium">
                Send
              </button>
            </div>
          </div>

          <div class="px-4">
            <NeobankCard
              activated={activated}
              balance={balance}
              onActivate={activateVa}
            />
          </div>

          <div class="mx-3 mt-2 rounded-t-[28px] bg-white px-4 pt-4 col gap-0 flex-1 min-h-[200px]">
            {[
              { name: "Google CLOUD", time: "1:50 AM", amount: "9.19" },
              { name: "Google CLOUD", time: "Jun 8", amount: "9.19" },
            ].map((tx, i) => (
              <div key={i} class="row aic gap-3 py-4 border-b border-neutral-100">
                <div class="relative w-10 h-10 rounded-full bg-neutral-100 flex-none">
                  <span class="absolute inset-0 row aic jcc text-neutral-400 text-xs">
                    ...
                  </span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-medium text-neutral-900 text-sm">{tx.name}</p>
                  <p class="text-xs text-neutral-400">{tx.time}</p>
                </div>
                <span class="text-sm text-neutral-400 line-through tabular-nums">
                  -${tx.amount}
                </span>
              </div>
            ))}
          </div>

          {funded && (
            <div class="px-5">
              <PrimaryButton onClick={() => goTo(2)}>
                Continue
              </PrimaryButton>
            </div>
          )}
        </div>

      </Page>

      <nav class="fixed bottom-0 left-0 right-0 z-40 bg-white px-4 pt-2 pb-safe-b">
        <div class="mx-auto shrink-0 overflow-hidden rounded-full">
          <Navigation
            as="nav"
            className="relative rounded-full border border-neutral-200 bg-neutral-100 p-2"
          >
            {({ ready, size, position, duration }) => (
              <div
                style={{
                  "--size": size,
                  "--position": position,
                  "--duration": duration,
                } as any}
              >
                <div
                  class={clsx(
                    { hidden: !ready },
                    "absolute bottom-0 h-1/2 w-[var(--size)] translate-x-[var(--position)] bg-black/10 blur-xl transition-[width,transform] duration-[--duration]"
                  )}
                />
                <div class="absolute inset-0 rounded-full bg-neutral-100" />
                <div class="relative">
                  <div
                    class={clsx(
                      { hidden: !ready },
                      "absolute inset-y-0 h-full w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white shadow-sm transition-[width,transform] duration-[--duration]"
                    )}
                  />
                  <Navigation.List as="ul" className="relative flex items-center">
                    {navItems.map((item, index) => (
                      <Navigation.Item key={index} as="li" className="flex-1">
                        {({ setActive, isActive }) => (
                          <a
                            href="#"
                            className={clsx(
                              isActive
                                ? "text-neutral-900"
                                : "text-neutral-400 hover:text-neutral-600",
                              "block text-center py-1.5 text-sm font-medium transition-colors duration-300"
                            )}
                            onClick={(e) => { e.preventDefault(); setActive(); }}
                          >
                            {item}
                          </a>
                        )}
                      </Navigation.Item>
                    ))}
                  </Navigation.List>
                </div>
              </div>
            )}
          </Navigation>
        </div>
      </nav>

      {state.$showActivation!.value && <ActivationDrawer />}
      {state.$showRamps!.value && <RampsWidget />}
    </>
  );
};
