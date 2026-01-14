import { default as ThreeView, Layer, TilesLayer } from '@navara/three';
type DefaultEffects = ReturnType<ThreeView["addDefaultEffectLayers"]>;
type DefaultAtmosphere = ReturnType<ThreeView["addDefaultAtmosphereLayers"]>;
export declare function useDefaultLayers(view: ThreeView | null): {
    effects: DefaultEffects;
    atmosphere: DefaultAtmosphere;
} | null;
export declare function useCloudOverlayOpacity(view: ThreeView | null, layerHandle: Layer | null, description: TilesLayer, targetHeight?: number): void;
export {};
