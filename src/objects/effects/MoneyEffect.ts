import { addMoneyAction } from "../../actions/addMoney";
import { Image } from "../Image";
import { Effect } from "./BaseEffect";

export class MoneyEffect extends Effect {
  name = `Money Effect`;
  description = `This effect gives the player more money.`;
  // TODO Fix this error: Property 'image' has no initializer and is not definitely assigned in the constructor.
  image!: Image;
  amount: number;

  constructor(params: { amount: number }) {
    super();
    this.amount = params.amount;
  }

  override activate(): void {
    addMoneyAction(this.amount);
  }
  override cancelOrUndo(): void {
    addMoneyAction(-this.amount);
  }
}
