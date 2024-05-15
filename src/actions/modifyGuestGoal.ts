import { Operation, doOperation } from "../utils/doOperation";
import { noop } from "./noop";

/**
 * This action modifies the guest goal by either subtracting or dividing the goal.
 */

export const modifyGuestGoalAction = (goal: number, operation: Operation) => {
  context.executeAction(noop, {}, () => {
    doOperation(operation, scenario.objective.guests, goal);
  });
};
