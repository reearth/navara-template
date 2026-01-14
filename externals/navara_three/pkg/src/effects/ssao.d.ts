import { Nullable } from '@navara/core';
import { N8AOPostPass, QualityMode } from 'n8ao';
import { Color, Camera } from 'three';
import { Pass, EffectOptions } from './effect';
export { ToneMappingMode } from 'postprocessing';
export { type QualityMode as SSAOQualityMode } from 'n8ao';
export type SSAOOptions = {
    samples?: Nullable<number>;
    radius?: Nullable<number>;
    intensity?: number;
    color?: Color;
    halfRes?: Nullable<boolean>;
    quality?: QualityMode;
} & EffectOptions;
export declare const DEFAULT_SSAO_OPTIONS: Required<SSAOOptions>;
export declare class SSAO extends Pass<N8AOPostPass, unknown, SSAOOptions> {
    camera: Camera;
    width: number;
    height: number;
    constructor(camera: Camera, width: number, height: number, options?: SSAOOptions);
    protected onMounted(): void;
    get quality(): QualityMode;
    set quality(v: QualityMode);
    get halfRes(): boolean;
    set halfRes(v: boolean);
    get samples(): Nullable<number>;
    set samples(v: Nullable<number>);
    get radius(): Nullable<number>;
    set radius(v: Nullable<number>);
    get intensity(): number;
    set intensity(v: number);
    get color(): Color;
    set color(v: Color);
}
