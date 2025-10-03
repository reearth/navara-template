import { EventHandler, FeatureId } from '@navara/core';
import { Core } from '../navara_wasm';
import { FeatureEvaluator } from './evaluations/FeatureEvaluator';
import { LayerDescription } from './type';
export type LayerEvent = {
    featureCreated: (evaluator: FeatureEvaluator) => void;
    featureUpdated: (evaluator: FeatureEvaluator, updatedAt: number) => void;
    afterFeatureUpdated: () => void;
    deleted: () => void;
};
export type FeatureEvaluatorCallback = (evaluator: FeatureEvaluator) => void;
export declare class Layer extends EventHandler<LayerEvent> {
    id: string;
    private core;
    private featureEvaluators;
    private needUpdate;
    constructor(id: string, core: Core);
    /**
     * Register a feature evaluator with this layer
     * @internal Used by the event system
     */
    _registerFeatureEvaluator(featureId: FeatureId, evaluator: FeatureEvaluator): void;
    /**
     * Get a feature evaluator by ID
     * @internal Used by the event system
     */
    _getFeatureEvaluator(featureId: FeatureId): FeatureEvaluator | undefined;
    /**
     * Unregister a feature evaluator from this layer
     * @internal Used by the event system
     */
    _unregisterFeatureEvaluator(featureId: FeatureId): void;
    /**
     * Process feature updates for all registered features
     * @internal Used by the animation loop
     */
    _processFeatureUpdates(updatedAt: number): boolean;
    forceUpdate(): void;
    update(l: LayerDescription): void;
    delete(): void;
}
