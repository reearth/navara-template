import { EventHandler, EventManager } from '@navara/core';
import { Events, Transform, TextureFragmentStatus, DelegatedWorkerTasksResult, TransferableTile, TransferableMartini, ReconstructableEntity, ElevationDecoder, ReturnedTransferablePolygonBatchedFeature, ReturnedTransferablePolylineBatchedFeature, VectorTileState } from '../../navara_wasm';
import { Material, Object3D, Texture } from 'three';
import { ViewEvents } from '..';
import { ThreeViewCamera } from '../camera';
import { LayersManager } from '../layersManager';
import { Scenes, TexturizedSceneByTileCoordinates } from '../scene';
import { TextureOptions } from '../textures';
import { AbortControllers, MeshCache, WorkerPoolPromises, RenderFlag, TileMapByHandle } from '../type';
import { CommonUniforms } from '../uniforms';
export type BufferLoader = {
    u8: (handle: number) => Uint8Array | null;
    f32: (handle: number) => Float32Array | null;
    u32: (handle: number) => Uint32Array | null;
    removeU8: (handle: number) => Uint8Array | null;
    removeF32: (handle: number) => Float32Array | null;
    removeU32: (handle: number) => Uint32Array | null;
    setU8: (handle: number, bits: bigint, bytes: Uint8Array) => void;
    newU8: (bytes: Uint8Array) => number | undefined;
    newU32: (bytes: Uint32Array) => number | undefined;
    newF32: (bytes: Float32Array) => number | undefined;
    remove: (handle: number) => void;
    triggerDataRequesterFailed: (bits: bigint) => void;
};
export type TextureFragmentHandler = {
    triggerTextureFragmentLoaded: (bits: bigint, status: TextureFragmentStatus) => void;
};
export type WorkerTaskHandler = {
    triggerWorkerTaskCompleted: (bits: bigint, result: DelegatedWorkerTasksResult) => void;
    hasWorkerTask: (bits: bigint) => boolean;
};
export type TileHandler = {
    getMartini: (bits: ReconstructableEntity) => TransferableMartini | undefined;
    getTile: (handle: bigint) => TransferableTile | undefined;
    getParentTile: (handle: bigint) => TransferableTile | undefined;
    getTileElevationDecoder: (handle: bigint) => ElevationDecoder | undefined;
    getVectorTileStates: (handle: bigint) => VectorTileState[] | undefined;
};
export type FeatureHandler = {
    getTransferablePolygonBatchedFeature: (bits: bigint) => ReturnedTransferablePolygonBatchedFeature | undefined;
    getTransferablePolylineBatchedFeature: (bits: bigint) => ReturnedTransferablePolylineBatchedFeature | undefined;
    markFeatureIsRendered: (type: "point" | "polyline" | "polygon" | "model", bits: bigint) => void;
    readPropertiesFromFeature(bits: bigint, callback: (batchId: number, properties?: Map<string, unknown>) => void): void;
};
export type MeshHandler = {
    setTileMeshPrepared: (handle: bigint) => void;
};
export declare function processEvent(eventManager: EventManager, scenes: Scenes, camera: ThreeViewCamera, meshes: MeshCache, abortControllers: AbortControllers, buf: BufferLoader, texFragment: TextureFragmentHandler, tileHandler: TileHandler, workerTaskHandler: WorkerTaskHandler, meshHandler: MeshHandler, featureHandler: FeatureHandler, loadedTexs: Map<string, Texture>, workerPoolPromises: WorkerPoolPromises, event: Events | undefined, uniforms: CommonUniforms, drapedFeatureMaterials: Map<string, Material>, texturizedSceneByTileCoordinates: TexturizedSceneByTileCoordinates, tileMapByHandle: TileMapByHandle, textureOptions: TextureOptions, renderFlag: RenderFlag, viewEvents: EventHandler<ViewEvents>, layersManager: LayersManager, updatedAt: number): void;
export declare function setTransform(obj: Object3D, transform: Transform, keepPosition?: boolean): void;
