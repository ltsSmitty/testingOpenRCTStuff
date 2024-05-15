import { WindowTemplate, Colour, window as flexWindow } from "openrct2-flexui";
import { expenditureWidgets } from "./expenditureWidgets";

let window: WindowTemplate;
let isWindowOpen = false;

export function initialize() {
  window = flexWindow({
    title: "Cost Multipliers",
    width: 250,
    height: 280,
    colours: [Colour.LightBlue, Colour.LightBlue],
    onOpen: () => (isWindowOpen = true),
    onClose: () => (isWindowOpen = false),
    content: expenditureWidgets,
  });
}

/**
 * Opens the main window. If already open, the window will be focused.
 */
export function openWindow() {
  if (isWindowOpen) {
    window.focus();
  } else {
    window.open();
  }
}
