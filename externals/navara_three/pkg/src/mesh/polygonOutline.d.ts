import { EventHandler } from '@navara/core';
import { PolygonMesh as NavaraPolygonMesh, PolygonMaterial } from '../../navara_wasm';
import { Color } from 'three';
import { Line2 } from 'three-stdlib';
import { ViewEvents } from '..';
import { BufferLoader } from '../event';
import { FeatureMesh } from './featureMesh';
export declare class PolygonOutlineMesh extends Line2 implements FeatureMesh {
    private resizeEventUnsubscribe?;
    constructor(mesh: NavaraPolygonMesh, buf: BufferLoader, viewEvents: EventHandler<ViewEvents>);
    private initGeometry;
    private initScaleNormalCapAttributes;
    private initMaterial;
    _update(material: PolygonMaterial, active: boolean): void;
    _setFeatureColor(color: Color): void;
    _getFeatureColor(): Color;
    _setFeatureShow(visible: boolean): void;
    _setFrustumCulled(culled: boolean): void;
    _setFeatureExtrudedHeight(height: number): void;
    updateResolution(width: number, height: number): void;
    dispose(): void;
}
