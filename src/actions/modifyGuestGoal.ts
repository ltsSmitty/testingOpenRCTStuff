import { noop } from "./noop";

/**
 * This action modifies the guest goal by either subtracting or dividing the goal.
 */

export type Operation = "add" | "subtract" | "divide" | "multiply";

export const modifyGuestGoalAction = (goal: number, operation: Operation) => {
  context.executeAction(noop, {}, () => {
    switch (operation) {
      case "add": {
        scenario.objective.guests += goal;
        break;
      }
      case "subtract": {
        scenario.objective.guests -= goal;
        break;
      }
      case "divide": {
        scenario.objective.guests /= goal;
        break;
      }
      case "multiply": {
        scenario.objective.guests *= goal;
        break;
      }
    }
  });
};
