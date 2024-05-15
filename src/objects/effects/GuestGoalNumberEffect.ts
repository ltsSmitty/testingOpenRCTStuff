import { modifyGuestGoalAction } from "../../actions/modifyGuestGoal";
import { Operation, getUndoOperationValues } from "../../utils/doOperation";
import { Image } from "../Image";
import { Effect } from "./BaseEffect";

export class GuestGoalNumberEffect extends Effect {
  name: string = "Guest Goal Number Effect";
  description: string = "This effect represents a guest goal number.";
  image!: Image;
  goal: number;
  operation: Operation;

  constructor(params: { goal: number; operation: Operation }) {
    super();
    this.goal = params.goal;
    this.operation = params.operation;
  }

  override activate(): void {
    modifyGuestGoalAction(this.goal, this.operation);
  }
  override cancelOrUndo(): void {
    const { undoValue, undoOperation } = getUndoOperationValues(this.goal, this.operation);
    modifyGuestGoalAction(undoValue, undoOperation);
  }
}
