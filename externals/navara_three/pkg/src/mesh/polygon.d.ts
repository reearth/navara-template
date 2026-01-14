import { EventHandler, TileHandle } from '@navara/core';
import { PolygonMesh as NavaraPolygonMesh, PolygonMaterial } from '../../navara_wasm';
import { BufferAttribute, BufferGeometry, Color, MeshLambertMaterial } from 'three';
import { ViewEvents } from '..';
import { BufferLoader } from '../event';
import { CommonUniforms } from '../uniforms';
import { BatchedFeatureMesh, BatchedFeatureAttributes } from './batchedFeature';
import { DefaultBatchAttributeValues } from './batchTexture';
type Attributes = BatchedFeatureAttributes<{
    position: BufferAttribute;
    normal: BufferAttribute;
    scaleNormalAndCap: BufferAttribute;
    batchIdAndSel: BufferAttribute;
}>;
export declare class PolygonMesh extends BatchedFeatureMesh<BufferGeometry<Attributes>, MeshLambertMaterial> {
    constructor(buf?: BufferGeometry<Attributes>, mat?: MeshLambertMaterial);
    init(mesh: NavaraPolygonMesh, buf: BufferLoader, uniforms: CommonUniforms, tileHandle: TileHandle | undefined, viewEvents: EventHandler<ViewEvents>): this;
    clone(): this;
    private initGeometry;
    private initMaterial;
    /**
     * Override a material that is used to generate a shadow map.
     */
    initDepthMaterial(): void;
    _update(material: PolygonMaterial, active: boolean, isTexturized: boolean): void;
    _getDefaultBatchAttributeValues(): DefaultBatchAttributeValues;
    _setFeatureColor(color: Color): void;
    _setFeatureShow(visible: boolean): void;
    _setFeatureExtrudedHeight(height: number): void;
    get water(): boolean;
    set water(v: boolean);
}
export {};
