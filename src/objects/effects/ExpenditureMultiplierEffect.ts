import { modifyExpenditureMultiplierAction } from "../../actions/modifyExpenditureMultiplier";
import { Operation, getUndoOperationValues } from "../../utils/doOperation";
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
    modifyExpenditureMultiplierAction(this.multiplier, this.operation, this.expenditureType);
  }
  cancelOrUndo() {
    const { undoValue, undoOperation } = getUndoOperationValues(this.multiplier, this.operation);
    modifyExpenditureMultiplierAction(undoValue, undoOperation, this.expenditureType);
  }
}
