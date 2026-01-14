import { default as ThreeView, GLTFModelLayer, LayerHandle } from '@navara/three';
import { Pane, FolderApi } from 'tweakpane';
import { AnimationControlReturn } from '../types';
/**
 * Add GLTF model for normal surface alignment
 */
export declare const addTestModelForNormal: (view: ThreeView) => LayerHandle<GLTFModelLayer>;
/**
 * Add text model control panel
 */
export declare const addTextModelControl: (_view: ThreeView, pane: Pane | FolderApi, modelLayer: LayerHandle<GLTFModelLayer>) => AnimationControlReturn;
/**
 * Add GLTF model that runs around the earth
 * Fixed latitude, changing longitude over time
 */
export declare const addRunningModelAroundEarth: (view: ThreeView) => LayerHandle<GLTFModelLayer>;
/**
 * Add running model control panel
 */
export declare const addRunningModelControl: (pane: Pane | FolderApi) => {
    movementSpeed: number;
    direction: "East" | "West";
};
