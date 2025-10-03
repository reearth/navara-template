import { BillboardMaterial as NavaraBillboardMaterial } from '../../navara_wasm';
import { Color, Sprite } from 'three';
import { CommonUniforms } from '../uniforms';
import { FeatureMesh } from './featureMesh';
export declare class BillboardMesh extends Sprite implements FeatureMesh {
    constructor();
    _init(material: NavaraBillboardMaterial, uniforms: CommonUniforms, batchId: number, selected: boolean, active: boolean): Promise<void>;
    private initMaterial;
    _update(material: NavaraBillboardMaterial, active: boolean): Promise<void>;
    _setFeatureColor(color: Color): void;
    _getFeatureColor(): Color;
    _setFeatureShow(visible: boolean): void;
    _setFrustumCulled(culled: boolean): void;
    _setFeatureExtrudedHeight(_height: number): void;
}
