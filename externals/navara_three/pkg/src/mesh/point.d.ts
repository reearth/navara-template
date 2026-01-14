import { PointMaterial as NavaraPointMaterial } from '../../navara_wasm';
import { Color, Sprite } from 'three';
import { CommonUniforms } from '../uniforms';
import { FeatureMesh } from './featureMesh';
export declare class PointMesh extends Sprite implements FeatureMesh {
    constructor(material: NavaraPointMaterial, uniforms: CommonUniforms, batchId: number, selected: boolean, active: boolean);
    private initMaterial;
    _update(material: NavaraPointMaterial, active: boolean): void;
    _setFeatureColor(color: Color): void;
    _getFeatureColor(): Color;
    _setFeatureShow(visible: boolean): void;
    _setFrustumCulled(culled: boolean): void;
    _setFeatureExtrudedHeight(_height: number): void;
}
