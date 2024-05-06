import { Operation } from "./modifyGuestGoal";
import { noopAction } from "./noop";
export const modifyExpenditureMultiplierAction = (
  multiplier: number,
  operation: Operation,
  expenditureType: ExpenditureType
) => {
  noopAction(() => {
    switch (operation) {
      case "add": {
        park.expenditureMultipliers[expenditureType] += multiplier;
        break;
      }
      case "subtract": {
        park.expenditureMultipliers[expenditureType] -= multiplier;
        break;
      }

      case "divide": {
        park.expenditureMultipliers[expenditureType] /= multiplier;
        break;
      }
      case "multiply": {
        park.expenditureMultipliers[expenditureType] *= multiplier;
        break;
      }
    }
  });
};
