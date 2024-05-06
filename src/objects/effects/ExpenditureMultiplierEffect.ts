import { Operation } from "../../actions/modifyGuestGoal";
import { noopAction } from "../../actions/noop";
import { Image } from "../Image";
import { Effect } from "./BaseEffect";

export class ExpenditureMultiplierEffect extends Effect {
  override name: string = "Expenditure Multiplier Effect";
  override description: string = "This effect multiplies the player's expenditure.";
  override image!: Image;
  multiplier: number;
  operation: Operation;
  expenditureType: ExpenditureType;

  constructor(params: { expenditureType: ExpenditureType; multiplier: number; operation: Operation }) {
    super();
    this.expenditureType = params.expenditureType;
    this.multiplier = params.multiplier;
    this.operation = params.operation;
  }
  activate() {
    //TODO implement in c++
    noopAction(() => setExpenditureMultiplier(this.multiplier, this.operation, this.expenditureType));
  }
  cancelOrUndo() {
    switch (this.operation) {
      case "add": {
        setExpenditureMultiplier(this.multiplier, "subtract", this.expenditureType);
        break;
      }
      case "subtract": {
        setExpenditureMultiplier(this.multiplier, "add", this.expenditureType);
        break;
      }
      case "divide": {
        setExpenditureMultiplier(this.multiplier, "multiply", this.expenditureType);
        break;
      }
      case "multiply": {
        setExpenditureMultiplier(this.multiplier, "divide", this.expenditureType);
        break;
      }
    }
  }
}

const setExpenditureMultiplier = (multiplier: number, operation: Operation, expenditureType: ExpenditureType) => {
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
};
