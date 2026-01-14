import { LngLat } from '@navara/core';
import { Object3D } from 'three';
export type ArcLineConfig = {
    thickness: number;
    segments: number;
    srcColor: number;
    tgtColor: number;
    height: number;
    arcHeightScale: number;
    geometry: LngLat[];
};
export declare const DefaultArcLineConfig: ArcLineConfig;
export declare class ArcLine extends Object3D {
    private readonly _config;
    private _subMeshes;
    constructor(config?: Partial<ArcLineConfig>[]);
    private initSubMeshes;
    private createSubMesh;
    private fillSingleConfigAttributes;
    private fillSingleConfigInstanceData;
    private createMaterial;
    private updateBoundingSphere;
    updateConfig(newConfig: Partial<ArcLineConfig>[]): void;
    onResize(width: number, height: number): void;
    dispose(): void;
}
