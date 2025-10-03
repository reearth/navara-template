import { FeatureId } from '@navara/core';
import { ModelMaterial as NavaraModelMaterial, PointMaterial, PolygonMaterial, PolylineMaterial, TextMaterial } from '../../navara_wasm';
import { Color, Object3D } from 'three';
import { FeatureHandler } from '../event';
import { ExtractProperties } from '../type';
type AvailableMaterialProperty = ExtractProperties<PointMaterial & PolylineMaterial & PolygonMaterial & NavaraModelMaterial & TextMaterial>;
export type EvaluatableMaterialProperty = {
    color: AvailableMaterialProperty["color"];
    show: AvailableMaterialProperty["show"];
    extrudedHeight: AvailableMaterialProperty["extruded_height"];
    height: AvailableMaterialProperty["height"];
    text: AvailableMaterialProperty["text"];
};
type EvaluatableMaterialPropertyKey = keyof EvaluatableMaterialProperty;
type EvaluatedMaterialProperty = {
    color: Color;
    show: boolean;
    extrudedHeight: number;
    height: number;
    text: string;
};
export type EvaluatedValue = {
    [K in EvaluatableMaterialPropertyKey]: EvaluatedMaterialProperty[K];
};
export declare class FeatureEvaluator {
    private handler;
    private featureId;
    private cachedBatchedProperties?;
    private batchIds;
    obj: Object3D;
    private result;
    constructor(handler: FeatureHandler, featureId: FeatureId, obj: Object3D);
    get id(): bigint;
    readFeatureProperties(): Map<string, unknown> | undefined;
    evaluate(f: (batchId: number, v: Map<string, unknown> | undefined) => Partial<EvaluatedValue>): void;
    private update;
    private apply;
}
export {};
