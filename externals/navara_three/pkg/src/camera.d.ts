import { CRSTypes, CameraPositionByCRS, EventHandler } from '@navara/core';
import { Core } from '../navara_wasm';
import { PerspectiveCamera } from 'three';
export type CameraEvent = {
    movestart: () => void;
    move: () => void;
    moveend: () => void;
    frustumChanged: () => void;
};
export declare class ThreeViewCamera extends EventHandler<CameraEvent> {
    raw: PerspectiveCamera;
    private _core;
    private _status;
    constructor(cam?: PerspectiveCamera);
    set core(core: Core | undefined);
    updateStatus(): void;
    getPosition<CRS extends CRSTypes = "geographic">(crs?: CRS): CameraPositionByCRS<CRS> | undefined;
    set fov(val: number);
    set near(val: number);
    set far(val: number);
}
