import { TextMaterial as NavaraTextMaterial } from '../../navara_wasm';
import { Color, Group, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { Text } from 'troika-three-text';
import { CommonUniforms } from '../uniforms';
import { FeatureMesh } from './featureMesh';
import { PickableMesh } from './pickableMesh';
export declare class TextMesh extends Group implements FeatureMesh, PickableMesh {
    text: Text;
    background?: Mesh<PlaneGeometry, MeshBasicMaterial>;
    constructor(meshMaterial: NavaraTextMaterial, uniforms: CommonUniforms, batchId: number, selected: boolean);
    private initText;
    _createBackground(): Mesh<PlaneGeometry, MeshBasicMaterial, import('three').Object3DEventMap>;
    _updateTextByMaterial(material: NavaraTextMaterial, active: boolean, needRender?: () => void): void;
    updateBackground(): void;
    setText(text: string): void;
    _setFeatureColor(color: Color): void;
    _getFeatureColor(): Color;
    _setFeatureShow(visible: boolean): void;
    _setFrustumCulled(culled: boolean): void;
    _setFeatureExtrudedHeight(_height: number): void;
    _setPickable(pickable: boolean): void;
}
