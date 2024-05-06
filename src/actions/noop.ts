/**
 * This is a noop action that does nothing, for triggering gameactions in valid game windows.
 */
export const noop = "noop";

export const registerNoop = () => {
  context.registerAction(
    noop,
    () => {
      return {};
    },
    () => {
      return {};
    }
  );
};

export const noopAction = (callback: () => void) => {
  context.executeAction(noop, {}, () => {
    callback();
  });
};
