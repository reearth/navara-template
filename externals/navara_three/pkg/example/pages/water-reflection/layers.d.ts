import { MeshLayerDeclaration, MeshLayerConfig, MeshLayerUpdate, ViewContext } from '@navara/three';
import { Matrix4, Mesh, Material } from 'three';
type WaterPlaneLayerDescription = {
    waterPlane?: {
        width?: number;
        height?: number;
        material?: Material;
        transformMatrix?: Matrix4;
    };
};
export type WaterPlaneLayerConfig = MeshLayerConfig & WaterPlaneLayerDescription;
export type WaterPlaneLayerUpdate = MeshLayerUpdate & WaterPlaneLayerDescription;
export declare class WaterPlaneLayer extends MeshLayerDeclaration<WaterPlaneLayerConfig, WaterPlaneLayerUpdate, Mesh> {
    private config;
    constructor(view: ViewContext, config: WaterPlaneLayerConfig);
    protected getPassKey(): "mrt";
    createMesh(): Mesh;
    onUpdateConfig(updates: WaterPlaneLayerUpdate): void;
}
type ReflectiveBoxLayerDescription = {
    reflectiveBox?: {
        width?: number;
        height?: number;
        depth?: number;
        material?: Material;
        transformMatrix?: Matrix4;
    };
};
export type ReflectiveBoxLayerConfig = MeshLayerConfig & ReflectiveBoxLayerDescription;
export type ReflectiveBoxLayerUpdate = MeshLayerUpdate & ReflectiveBoxLayerDescription;
export declare class ReflectiveBoxLayer extends MeshLayerDeclaration<ReflectiveBoxLayerConfig, ReflectiveBoxLayerUpdate, Mesh> {
    private config;
    constructor(view: ViewContext, config: ReflectiveBoxLayerConfig);
    protected getPassKey(): "mrt";
    createMesh(): Mesh;
    onUpdateConfig(updates: ReflectiveBoxLayerUpdate): void;
}
export {};
