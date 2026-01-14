import { ViewContext, MeshLayerDeclaration, MeshLayerConfig, MeshLayerUpdate } from '../../core';
import { SnowMesh, SnowConfig } from '../../mesh';
type LayerDescription = {
    snow?: Partial<SnowConfig>;
};
export type SnowMeshLayerConfig = MeshLayerConfig & LayerDescription;
export type SnowMeshLayerUpdate = MeshLayerUpdate & LayerDescription;
export declare class SnowMeshLayer extends MeshLayerDeclaration<SnowMeshLayerConfig, SnowMeshLayerUpdate, SnowMesh> {
    private config;
    constructor(view: ViewContext, config: SnowMeshLayerConfig);
    getPassKey(): "opaque" | "transparent";
    createMesh(): SnowMesh;
    onUpdateConfig(updates: SnowMeshLayerUpdate): void;
    update(time: number): void;
    protected disposeMesh(): void;
}
export {};
