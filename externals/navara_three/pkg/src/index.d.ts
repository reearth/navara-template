import { EventHandler, CameraPosition, Nullable, XYZ } from '@navara/core';
import { TerrainHeightUpdatedEvent } from '../navara_wasm';
import { LLE as ApiLLE } from '@navara/three_api';
import { PerspectiveCamera, WebGLRenderer, Vector3, Texture, Vector2, Material } from 'three';
import { Atmosphere, AtmosphereOptions } from './atmosphere';
import { ThreeViewCamera } from './camera';
import { LayerDeclaration, MeshLayerConstructor, LightLayerConstructor, EffectLayerConstructor } from './core';
import { LayerHandle } from './core/LayerHandle';
import { AntialiasOptions, EffectOptions, LensFlareOptions, SSAOOptions, ToneMappingOptions, CloudsOptions, AerialPerspectiveOptions } from './effects';
import { Layer, LayerEvent } from './layer';
import { SunLightLayer, SkyLightProbeLayer } from './layers';
import { LensFlareEffectLayer, MRTPassEffectLayer, SMAAEffectLayer, ToneMappingEffectLayer, TransparentPassEffectLayer } from './layers/effect';
import { AerialPerspectiveEffectLayer } from './layers/effect/AerialPerspectiveEffectLayer';
import { FinalCopyEffectLayer } from './layers/effect/FinalCopyEffectLayer';
import { SkyMeshLayer } from './layers/mesh/SkyMeshLayer';
import { StarsLayer } from './layers/mesh/StarsLayer';
import { Light } from './light';
import { RenderPassOrchestrator } from './orchestrators/RenderPassOrchestrator';
import { Picking } from './pick/picking';
import { LayerDescription as ActualLayerDescription, PickedFeature } from './type';
export type { Nullable, XYZ, LngLat, LngLatHeight } from '@navara/core';
export * from './type';
export * from './constants';
export * from './light';
export * from './mesh';
export * from './layer';
export * from './effects';
export * from './shaders';
export * from './event/loaders';
export * from './material';
export * from './core';
export * from './layers';
export * from './lights';
export * from '@navara/three_api';
export { CascadedShadowMaps, CSMHelper } from '@navara/three_csm';
export type Options = {
    container?: HTMLElement;
    canvas?: HTMLCanvasElement | OffscreenCanvas;
    initialWidth?: number;
    initialHeight?: number;
    initialPixelRatio?: number;
    disableAutoResize?: boolean;
    debug?: boolean;
    camera?: PerspectiveCamera;
    antialias?: AntialiasOptions;
    light?: Light;
    atmosphere?: AtmosphereOptions;
    aerialPerspective?: AerialPerspectiveOptions;
    clouds?: CloudsOptions;
    backgroundColor?: number;
    picking?: Picking;
    animation?: boolean;
    multisampling?: number;
    halfFloat?: boolean;
    toneMapping?: ToneMappingOptions;
    lensFlare?: LensFlareOptions;
    dithering?: EffectOptions;
    ssao?: SSAOOptions;
    logarithmicDepthBuffer?: boolean;
    shadow?: boolean;
};
export type MapMouseEvent = {
    map: XYZ;
} & MouseEvent;
export type ViewEvents = {
    resize: (w: number, h: number) => void;
    pick: (info: Nullable<PickedFeature>) => void;
    layer: <K extends keyof LayerEvent>(k: K, layerId: string, ...args: Parameters<LayerEvent[K]>) => void;
    /** Emitted before an update process happens */
    preUpdate: (t: number) => void;
    /**
     * Emitted after an update process happened only when any states are changed.
     * */
    postUpdate: (t: number) => void;
    /**
     * Emitted before a rendering process happened.
     * Enabling `animation` flag emits this event every frame.
     * */
    preRender: (t: number) => void;
    /**
     * Emitted after a rendering process happened.
     * Enabling `animation` flag emits this event every frame.
     * */
    postRender: (t: number) => void;
    _sample_terrain_height_received: (ev: TerrainHeightUpdatedEvent) => void;
    /**
     * This event injects a shader code for CSM. The shader code only executed when the shadow is enabled.
     * You should pass a material that needs the shadow when it's initialized.
     */
    _csmMounted: (material: Material) => void;
    mousedown: (event: MapMouseEvent) => void;
    mouseenter: (event: MapMouseEvent) => void;
    mouseleave: (event: MapMouseEvent) => void;
    mousemove: (event: MapMouseEvent) => void;
    mouseup: (event: MapMouseEvent) => void;
    click: (event: MapMouseEvent) => void;
};
export default class ThreeView<CustomLayerDescriptions extends Record<string, unknown> | undefined = undefined, LayerDescription extends ActualLayerDescription = CustomLayerDescriptions extends undefined ? ActualLayerDescription : ActualLayerDescription | CustomLayerDescriptions> extends EventHandler<ViewEvents> {
    camera: ThreeViewCamera;
    renderer: WebGLRenderer;
    control?: {
        update: () => void;
        get target(): Vector3 | undefined;
    };
    atmosphere: Atmosphere;
    mrtPassLayer: LayerHandle<MRTPassEffectLayer>;
    transparentPassLayer: LayerHandle<TransparentPassEffectLayer>;
    finalPassLayer: LayerHandle<FinalCopyEffectLayer>;
    renderPassOrchestrator: RenderPassOrchestrator;
    private _scenes;
    private _drapedFeatureMaterials;
    private _core;
    private _options;
    private _stats;
    private _eventDisposer;
    private _disposed;
    private _renderFlag;
    private _uniforms;
    private _meshes;
    private _abortControllers;
    private _workerPoolPromises;
    private _loadedTexs;
    private _texturizedSceneByTileCoordinates;
    private _tileMapByHandle;
    private _initialized;
    private _buf;
    private _texFragment;
    private _tileHandler;
    private _workerTaskHandler;
    private _featureHandler;
    private _meshHandler;
    private _eventManager;
    private _pickHelper?;
    private _terrainPicker;
    private _defaultTextureOptions;
    private layersManager;
    private shadowMapViewers;
    private registries;
    constructor(options?: Options);
    /**
     * Convert a mouse event to a MapMouseEvent by adding map coordinates
     */
    private convertMouseEventToMapEvent;
    initializeRenderPass(): Promise<void>;
    private get renderPass();
    get toneMappingExposure(): number;
    set toneMappingExposure(v: number);
    get globeDepthTexture(): Texture;
    get globeNormalTexture(): Texture;
    get normalTexture(): Texture;
    forceUpdate: () => void;
    init(): Promise<void>;
    dispose(): void;
    resize: (width?: number, height?: number, pixelRatio?: number) => void;
    private _updateUniforms;
    /** Returns true if the scene was updated and needs to be rendered. */
    private _update;
    /**
     * Process feature updates for all layers
     * This is called after the main update loop to batch feature updates
     */
    private _forceFeatureUpdates;
    private _render;
    addLayer<L = unknown>(l: LayerDescription): L extends LayerDeclaration ? LayerHandle<L> : Layer;
    updateLayerById(layerId: string, l: LayerDescription): void;
    deleteLayerById(layerId: string): void;
    private registerBuiltIns;
    private registerBuiltInMeshes;
    private registerBuiltInLights;
    private registerBuiltInEffects;
    private addMeshLayer;
    private addLightLayer;
    private addEffectLayer;
    registerMesh(name: string, meshClass: MeshLayerConstructor): void;
    registerLight(name: string, lightClass: LightLayerConstructor): void;
    registerEffect(name: string, effectClass: EffectLayerConstructor): void;
    /**
     * Find the sun light layer in the current layers
     */
    private findSunLightLayer;
    /**
     * Setup CSM for a single material
     */
    private setupCSMForMaterial;
    addDefaultAtmosphereLayers(): {
        sky: LayerHandle<SkyMeshLayer>;
        stars: LayerHandle<StarsLayer>;
        skyLightProbe: LayerHandle<SkyLightProbeLayer>;
        sun: LayerHandle<SunLightLayer>;
    };
    addDefaultEffectLayers(): {
        aerialPerspective: LayerHandle<AerialPerspectiveEffectLayer>;
        lensFlare: LayerHandle<LensFlareEffectLayer>;
        toneMapping: LayerHandle<ToneMappingEffectLayer>;
        smaa: LayerHandle<SMAAEffectLayer>;
    };
    getEffectOrder(): string[];
    setCamera(camPos: CameraPosition): void;
    moveCamera(move: string, amount: number): void;
    moveCameraWithDirection(dir: number[], amount: number): void;
    flyTo(camPos: CameraPosition & Required<Pick<CameraPosition, "lng" | "lat" | "height">>, duration?: number, maxHeight?: number): void;
    lookAt(target: ApiLLE, offset: Vector3): void;
    sampleTerrainHeight(pos: ApiLLE): number | undefined;
    addTerrainHeightEvent(pos: ApiLLE, cb: (height: number) => void): () => void;
    rotateAroundAxis(axis: Vector3, angle: number): void;
    private _startMainLoop;
    private _getCanvasSize;
    private _handleResize;
    onPick(pickArr: number[]): number[];
    get animation(): boolean;
    set animation(v: boolean);
    get screenSize(): Vector2;
    get pixelRatio(): number;
    /**
     * Display shadow map on the left side of your screen.
     */
    get shadowMapViewersEnabled(): boolean;
    set shadowMapViewersEnabled(v: boolean);
    pickTerrainPosition(x: number, y: number): Nullable<Vector3>;
}
