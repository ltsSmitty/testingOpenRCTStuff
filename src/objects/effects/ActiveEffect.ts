export interface ActiveEffect {
  /**
   * Whether the effect is currently active.
   */
  isActive: boolean;
  /**
   * The number of times the effect can still be activated.
   */
  remainingActivations: number;
}
