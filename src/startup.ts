import { PriceReducer } from "./reducePriceAction";

function onClickMenuItem(m: PriceReducer) {
  // Write code here that should happen when the player clicks the menu item under the map icon.
  m.reduceBy(10);
  console.log("Hello world!");
}

export function startup() {
  // Write code here that should happen on startup of the plugin.
  const m = new PriceReducer(50);
  console.log(JSON.stringify(m));

  // Register a menu item under the map icon:
  if (typeof ui !== "undefined") {
    ui.registerMenuItem("My plugin", () => onClickMenuItem(m));
  }
}
