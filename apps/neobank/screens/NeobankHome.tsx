import clsx from "clsx";
import { Page } from "../components/Page";
import { NeobankCard } from "../components/NeobankCard";
import { Navigation } from "../components/Navigation";
import { PlaidModal } from "../modals/PlaidModal";
import { activateVa, state } from "../state";
import { ActivationDrawer } from "../modals/ActivationDrawer";
import { RampsWidget } from "../modals/RampsWidget";
import { SpotlightButton } from "../../../components/SpotlightButton";
import { AnimatedStroke } from "../../../components/AnimatedStroke";

export const NeobankHome = () => {
  const balance = state.$balance!.value;
  const activated = state.$vaActivated!.value;
  const funded = state.$depositComplete!.value;
  const bankConnected = state.$bankConnected!.value;

  const navItems = bankConnected
    ? ["Home", "Earn", "Rewards", "Connected bank"]
    : ["Home", "Earn", "Rewards"];

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
              <AnimatedStroke active={activated && !funded} class="flex-1">
                <SpotlightButton
                  disabled={!activated}
                  onClick={() => activated && (state.showRamps = true)}
                  class="w-full py-3.5"
                >
                  <span
                    class="relative mt-px bg-clip-text text-sm font-medium text-transparent transition-all duration-200"
                    style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7), #fff)" }}
                  >
                    Add funds
                  </span>
                </SpotlightButton>
              </AnimatedStroke>
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

          {funded && (
            <div class="mx-4 rounded-[24px] bg-white overflow-hidden">
              {[
                { name: "Google CLOUD 24XZCz", time: "1:50 AM", amount: "$9.19" },
                { name: "Google CLOUD G5HZvC", time: "Jun 8",   amount: "$9.19" },
              ].map((tx, i, arr) => (
                <div key={i} class={`row aic gap-3 px-4 py-3.5 ${i < arr.length - 1 ? "border-b border-neutral-100" : ""}`}>
                  {/* Avatar */}
                  <div class="relative flex-none">
                    <div class="w-11 h-11 rounded-full bg-neutral-200 row aic jcc">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    {/* Red cancelled badge */}
                    <div class="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 border-2 border-white row aic jcc">
                      <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                        <line x1="2" y1="2" x2="8" y2="8" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                        <line x1="8" y1="2" x2="2" y2="8" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Name + time */}
                  <div class="flex-1 min-w-0 col gap-0.5">
                    <span class="text-sm font-medium text-neutral-900 truncate">{tx.name}</span>
                    <span class="text-xs text-neutral-400">{tx.time}</span>
                  </div>

                  {/* Strikethrough amount */}
                  <span class="text-sm text-neutral-400 line-through tabular-nums flex-none">
                    −{tx.amount}
                  </span>
                </div>
              ))}
            </div>
          )}

          {funded && !bankConnected && (
            <div class="px-5">
              <button
                onClick={() => (state.showPlaid = true)}
                class="w-full rounded-2xl bg-neutral-900 text-white py-3.5 font-semibold text-base"
              >
                Connect bank
              </button>
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
                      <Navigation.Item key={`${item}-${index}`} as="li" className="flex-1">
                        {({ setActive, isActive }) => (
                          <a
                            href="#"
                            className={clsx(
                              isActive
                                ? "text-neutral-900"
                                : "text-neutral-400 hover:text-neutral-600",
                              "block text-center py-1.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap px-1"
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
      {state.$showPlaid!.value && <PlaidModal />}
    </>
  );
};
