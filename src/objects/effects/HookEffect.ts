import { Effect } from "./BaseEffect";

export abstract class HookEffect extends Effect {
  /**
   * The handle to the subscription that is created when the effect is activated.
   */
  subscriptionHandle: IDisposable | undefined;
}
