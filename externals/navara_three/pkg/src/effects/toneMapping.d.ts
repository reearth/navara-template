import { ToneMappingMode, ToneMappingEffect } from 'postprocessing';
import { Camera } from 'three';
import { Effect, EffectOptions } from './effect';
export { ToneMappingMode } from 'postprocessing';
export type ToneMappingOptions = {
    mode?: ToneMappingMode;
} & EffectOptions;
export declare const DEFAULT_TONE_MAPPING_OPTIONS: Required<ToneMappingOptions>;
export declare class ToneMapping extends Effect<ToneMappingEffect, ToneMappingOptions> {
    constructor(camera: Camera, options?: ToneMappingOptions);
    protected onMounted(): void;
    get mode(): ToneMappingMode;
    set mode(v: ToneMappingMode);
}
