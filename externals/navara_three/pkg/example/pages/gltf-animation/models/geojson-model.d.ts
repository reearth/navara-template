import { default as ThreeView, Layer } from '@navara/three';
import { FolderApi } from 'tweakpane';
/**
 * Add GeoJSON animated model
 */
export declare const addGeoJsonAnimatedModel: (_view: ThreeView) => Layer;
/**
 * Add GeoJSON model control panel
 */
export declare const addGeoJsonModelControl: (view: ThreeView, folder: FolderApi, initialLayer: Layer) => void;
