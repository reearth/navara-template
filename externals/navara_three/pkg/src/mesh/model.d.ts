import { EventHandler } from '@navara/core';
import { ModelMaterial as NavaraModelMaterial, ModelMesh as NavaraModelMesh } from '../../navara_wasm';
import { BufferGeometry, Color, DataTexture, Group, Mesh, MeshPhysicalMaterial, MeshStandardMaterial, Object3D, NormalBufferAttributes } from 'three';
import { ViewEvents } from '..';
import { BufferLoader } from '../event';
import { CommonUniforms } from '../uniforms';
import { BatchTextureConfig } from './batchTexture';
import { FeatureMesh } from './featureMesh';
import { PickableMesh } from './pickableMesh';
export type ModelMaterial = MeshStandardMaterial | MeshPhysicalMaterial;
export type ModelBatchedAttributeName = "color" | "show" | "height";
export declare const MODEL_BATCH_TEXTURE_CONFIG: BatchTextureConfig;
export declare class ModelMesh extends Object3D implements FeatureMesh, PickableMesh {
    water: boolean;
    private waterNormalMapTexture;
    private mixer;
    private actions;
    private currentAction;
    private animationSpeed;
    private lastUpdateTime?;
    constructor(rawScene: Group, m: NavaraModelMesh, uniforms: CommonUniforms, buf: BufferLoader, viewEvents: EventHandler<ViewEvents>);
    private init;
    _initBatchedMaterial(mesh: Mesh<BufferGeometry<NormalBufferAttributes>, ModelMaterial>): void;
    _initBatchDataTexture(mesh: Mesh<BufferGeometry<NormalBufferAttributes>, ModelMaterial>, batchLength: number): void;
    _getBatchDataTexture(mesh: Mesh<BufferGeometry<NormalBufferAttributes>, ModelMaterial>): DataTexture | undefined;
    _updateBatchAttribute(mesh: Mesh<BufferGeometry<NormalBufferAttributes>, ModelMaterial>, batchId: number, attribute: ModelBatchedAttributeName, value: number | number[] | boolean): void;
    private overrideCesium3DTilesMaterial;
    /**
     * Override a material that is used to generate a shadow map.
     */
    initDepthMaterial(mesh: Mesh<BufferGeometry<NormalBufferAttributes>, ModelMaterial>): void;
    _update(material: NavaraModelMaterial, active: boolean): void;
    private setMaterial;
    traverseMesh(callback: (m: Mesh<BufferGeometry<NormalBufferAttributes>, ModelMaterial>) => void): void;
    _setFeatureColor(color: Color, m?: ModelMaterial): void;
    _getFeatureColor(): Color;
    _setFeatureShow(visible: boolean): void;
    _setFeatureExtrudedHeight(_height: number): void;
    _setFrustumCulled(culled: boolean): void;
    _setPickable(pickable: boolean): void;
}
