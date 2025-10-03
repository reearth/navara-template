import { default as ThreeView, MeshLayerDeclaration, MeshLayerConfig, ViewContext } from '@navara/three';
import { Matrix4, Material } from 'three';
import { MarchingCubes } from 'three-stdlib';
type MarchingCubesLayerDescription = {
    marchingCubes?: {
        resolution?: number;
        material: Material;
        castShadow?: boolean;
        receiveShadow?: boolean;
        enableUvs?: boolean;
        enableColors?: boolean;
        transformMatrix?: Matrix4;
    };
};
export type MarchingCubesLayerConfig = MeshLayerConfig & MarchingCubesLayerDescription;
export type MarchingCubesLayerUpdate = Pick<MeshLayerConfig, "position" | "visible"> & MarchingCubesLayerDescription;
export declare class MarchingCubesLayer extends MeshLayerDeclaration<MarchingCubesLayerConfig, MarchingCubesLayerUpdate, MarchingCubes> {
    private config;
    constructor(view: ViewContext, config: MarchingCubesLayerConfig);
    createMesh(): MarchingCubes;
    onUpdateConfig(updates: MarchingCubesLayerUpdate): void;
    protected disposeMesh(): void;
}
export declare const run: (view: ThreeView<MarchingCubesLayerConfig>) => Promise<void>;
export {};
