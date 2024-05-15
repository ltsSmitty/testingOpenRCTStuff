import { Operation, doOperation } from "../utils/doOperation";
import { noopAction } from "./noop";
export const modifyExpenditureMultiplierAction = (
  multiplier: number,
  operation: Operation,
  expenditureType: ExpenditureType
) => {
  noopAction(() => {
    doOperation(operation, park.expenditureMultipliers[expenditureType], multiplier);
  });
};
