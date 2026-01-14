import { EventHandler } from '@navara/core';
import { PolylineMesh as NavaraPolylineMesh, PolylineMaterial } from '../../navara_wasm';
import { BufferAttribute, BufferGeometry, Color, ShaderMaterial } from 'three';
import { ViewEvents } from '..';
import { BufferLoader } from '../event';
import { CommonUniforms } from '../uniforms';
import { BatchedFeatureMesh, BatchedFeatureAttributes } from './batchedFeature';
import { DefaultBatchAttributeValues } from './batchTexture';
type Attributes = BatchedFeatureAttributes<{
    position: BufferAttribute;
    start: BufferAttribute;
    normal: BufferAttribute;
    start_normal: BufferAttribute;
    right_normal_and_texture_coordinate_normalization_y: BufferAttribute;
    end_normal_and_texture_coordinate_normalization_x: BufferAttribute;
    forward_offset: BufferAttribute;
    batchIdAndSel: BufferAttribute;
}>;
export declare class PolylineMesh extends BatchedFeatureMesh<BufferGeometry<Attributes>, ShaderMaterial> {
    constructor(mesh: NavaraPolylineMesh, buf: BufferLoader, uniforms: CommonUniforms, viewEvents: EventHandler<ViewEvents>);
    private initGeometry;
    private initMaterial;
    _update(material: PolylineMaterial, active: boolean): void;
    get color(): any;
    _getDefaultBatchAttributeValues(): DefaultBatchAttributeValues;
    _setFeatureColor(color: Color): void;
    _setFeatureShow(visible: boolean): void;
}
export {};
