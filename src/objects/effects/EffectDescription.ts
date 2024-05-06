import { Image } from "../Image";

export interface EffectDescription {
  /**
   * The name of the effect.
   */
  name: string;
  /**
   * A description of the effect.
   */
  description: string;
  /**
   * The image that represents the effect.
   */
  image: Image;
}
