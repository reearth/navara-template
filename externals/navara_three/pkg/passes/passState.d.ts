/**
 * Shared state for render passes.
 *
 * This module provides a centralized state object that can be accessed by both
 * render passes and meshes to avoid expensive scene traversal operations.
 *
 * Instead of iterating through all scene children (potentially 300+ meshes) to
 * set material properties, passes update these state variables, and meshes
 * check them in their onBeforeRender callbacks.
 */
export type PassState = {
    /**
     * Controls whether globe meshes should write to the depth buffer.
     * Used during multi-pass rendering to render depth and color separately.
     */
    globeDepthWrite: boolean;
    /**
     * Controls whether globe meshes should write to the color buffer.
     * Used during multi-pass rendering to render depth and color separately.
     */
    globeColorWrite: boolean;
};
