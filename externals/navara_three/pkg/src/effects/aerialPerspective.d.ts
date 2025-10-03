import { AerialPerspectiveEffect, AtmosphereOverlay, AtmosphereShadow, AtmosphereShadowLength } from '@takram/three-atmosphere';
import { PerspectiveCamera, Texture } from 'three';
import { Atmosphere } from '../atmosphere';
import { Effect, EffectOptions } from '../effects';
export type AerialPerspectiveOptions = {
    inscatter?: boolean;
    transmittance?: boolean;
    irradiance?: boolean;
} & EffectOptions;
export declare const DEFAULT_AERIAL_PERSPECTIVE_OPTIONS: Required<AerialPerspectiveOptions>;
export declare class AerialPerspective extends Effect<AerialPerspectiveEffect, AerialPerspectiveOptions> {
    atmosphere: Atmosphere;
    private cloudsShadows;
    constructor(atmosphere: Atmosphere, camera: PerspectiveCamera, normalBuffer: Texture, _options?: AerialPerspectiveOptions);
    onUpdate: () => void;
    init(): void;
    onTextureLoaded: () => void;
    onOverlayChanged: (v: AtmosphereOverlay | null) => void;
    onShadowChanged: (v: AtmosphereShadow | null) => void;
    onShadowLengthChanged: (v: AtmosphereShadowLength | null) => void;
    onEnableShadowChanged: (v: boolean) => void;
    _update(): void;
    get inscatter(): boolean;
    set inscatter(v: boolean);
    get transmittance(): boolean;
    set transmittance(v: boolean);
    get irradiance(): boolean;
    set irradiance(v: boolean);
}
