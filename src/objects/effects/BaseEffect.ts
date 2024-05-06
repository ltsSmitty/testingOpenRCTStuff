import { Image } from "../Image";
import { EffectDescription } from "./EffectDescription";

export abstract class Effect implements EffectDescription {
  abstract name: string;
  abstract description: string;
  abstract image: Image;

  /**
   * Activates the effect.
   */
  abstract activate(): void;
  /**
   * Cancels or undoes the effect.
   */
  abstract cancelOrUndo(): void;
}
