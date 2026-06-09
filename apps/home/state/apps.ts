import { JSX } from "preact/jsx-runtime";

const installed = import.meta.glob("../../*/index.tsx");
const icons = import.meta.glob("../../*/icon.png", { eager: true });

const DOCKED_APPS = ["app store", "calculator", "camera", "clock"];

const APP_NAMES: Record<string, string> = {
  neobank: "Neobank",
};

export type App = {
  id: string;
  name: string;
  icon: string;
  page: number;
  docked: boolean;
  grid: boolean;
  mod: () => Promise<{ default: () => JSX.Element }>;
  order?: number;
};

export const apps = Object.fromEntries(
  Object.entries(installed)
    .filter(([path]) => path.startsWith("../../"))
    .map(([path, mod], i) => {
      const id = path.split("/")[2];
      return [
        id,
        {
          id,
          name: APP_NAMES[id] ?? id,
          mod: mod as App["mod"],
          icon: (icons[`../../${id}/icon.png`] as { default: string })?.default,
          page: id === "neobank" ? 0 : Math.random() < 0.5 ? 0 : 1,
          docked: DOCKED_APPS.includes(id),
          grid: id === "neobank",
          order: id === "clock" ? 1 : 0,
        },
      ];
    })
);
