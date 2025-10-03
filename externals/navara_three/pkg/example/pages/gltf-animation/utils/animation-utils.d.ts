import { AnimationState } from '../types';
/**
 * Calculate crossfade weights between two animation states
 */
export declare function getCrossfadeWeights(from: AnimationState, to: AnimationState, t: number): {
    idle: number;
    walk: number;
    run: number;
};
/**
 * Get current primary animation state based on weights
 */
export declare function getCurrentPrimaryAnimation(weights: {
    idle: number;
    walk: number;
    run: number;
}): AnimationState | null;
