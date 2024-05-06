import { Operation, modifyGuestGoalAction } from "../../actions/modifyGuestGoal";
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
    switch (this.operation) {
      case "add": {
        modifyGuestGoalAction(-this.goal, "add");
        break;
      }
      case "subtract": {
        modifyGuestGoalAction(-this.goal, "subtract");
        break;
      }
      case "divide": {
        modifyGuestGoalAction(this.goal, "multiply");
        break;
      }
      case "multiply": {
        modifyGuestGoalAction(this.goal, "divide");
        break;
      }
    }
  }
}
