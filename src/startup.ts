import * as window from "./ui/window";

export function startup() {
  if (typeof ui !== "undefined") {
    window.initialize();

    const menuItemName = "Cost Multipliers";
    ui.registerMenuItem(menuItemName, window.openWindow);
  }
}
