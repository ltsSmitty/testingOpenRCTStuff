export class PriceReducer {
  // The percent by which the price should be multiplied
  private _multiplier: number = 100;
  subscription?: IDisposable;

  get enabled() {
    return this.subscription !== undefined;
  }

  set enabled(value: boolean) {
    if (value) {
      this.setSubscriptionMultiplier();
    } else {
      this.subscription?.dispose();
      this.subscription = undefined;
    }
  }

  constructor(n?: number) {
    if (n) {
      this.multiplier = n;
    }
  }

  set multiplier(n: number) {
    this._multiplier = n;
    this.setSubscriptionMultiplier();
  }

  reduceBy(n: number) {
    this.multiplier = this._multiplier - n;
  }

  private setSubscriptionMultiplier() {
    if (this.subscription) {
      this.subscription.dispose();
    }
    this.subscription = context.subscribe("action.execute", this.reduceCost.bind(this));
  }

  private reduceCost(e: GameActionEventArgs) {
    if (
      this.enabled &&
      e.result.cost &&
      // Possibly could keep this open to punish demolishing rides
      (e.args as any).flags < 0 &&
      // trackdesign fires a cost when building a tracked ride,
      // but then there's also a cost for the track itself
      // so ignore this event
      e.action !== "trackdesign"
    ) {
      // Rather than modifying the cost directly, we'll refund the difference
      let refund = -(e.result.cost * (this._multiplier - 100)) / 100;
      console.log(`Refunding ${refund / 10} from ${e.result.cost / 10} for ${e.action} `);
      context.executeAction("cheatset", { type: 16, param1: refund, param2: 0 });
      if (e.result.cost < 0) {
        console.log("Negative cost detected, deleting 100");
        context.executeAction("cheatset", { type: 17, param1: -1000, param2: -1000 });
      }
    }
  }
}
