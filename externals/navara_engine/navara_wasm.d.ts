/* tslint:disable */
/* eslint-disable */
export function orthoCameraTransform(child: bigint, parent: bigint): OrthoCamTransform;
export function generateId(): string;
export function start(): void;
/**
 * Coordinate reference system
 */
export enum CRS {
  /**
   * EPSG:4326
   */
  Geographic = 0,
  /**
   * EPSG:4978
   */
  Geocentric = 1,
}
export enum CameraDirection {
  Forward = 0,
  Backward = 1,
  Left = 2,
  Right = 3,
  Up = 4,
  Down = 5,
}
export enum CameraStatusType {
  Change = 0,
  LookAt = 1,
  Rotate = 2,
  MoveStart = 3,
  Moving = 4,
  MoveEnd = 5,
}
export enum TextureFragmentStatus {
  Success = 0,
  Fail = 1,
  Pending = 2,
}
export class B3dmLayerDescription {
  private constructor();
  free(): void;
  get type(): string | undefined;
  set type(value: string | null | undefined);
  get crs(): string | undefined;
  set crs(value: string | null | undefined);
  data: any;
  get model(): ModelMaterial | undefined;
  set model(value: ModelMaterial | null | undefined);
}
export class BillboardMaterial {
  private constructor();
  free(): void;
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get size(): number | undefined;
  set size(value: number | null | undefined);
  get color(): number | undefined;
  set color(value: number | null | undefined);
  get center(): Vec2 | undefined;
  set center(value: Vec2 | null | undefined);
  get height(): number | undefined;
  set height(value: number | null | undefined);
  get url(): string | undefined;
  set url(value: string | null | undefined);
  get scale_by_distance(): boolean | undefined;
  set scale_by_distance(value: boolean | null | undefined);
  get clamp_to_ground(): boolean | undefined;
  set clamp_to_ground(value: boolean | null | undefined);
  get depth_test(): boolean | undefined;
  set depth_test(value: boolean | null | undefined);
  get transparent(): boolean | undefined;
  set transparent(value: boolean | null | undefined);
  get alpha_test(): number | undefined;
  set alpha_test(value: number | null | undefined);
  get id_property(): string | undefined;
  set id_property(value: string | null | undefined);
}
export class BillboardMesh {
  private constructor();
  free(): void;
  material: BillboardMaterial;
  transform: Transform;
  geometry: TransferablePointGeometry;
  active: boolean;
}
export class CachedMeshHandle {
  free(): void;
  constructor(vertices: number, indices: number, uvs: number, heights?: number | null);
  vertices: number;
  indices: number;
  uvs: number;
  get heights(): number | undefined;
  set heights(value: number | null | undefined);
}
export class CameraFrustum {
  free(): void;
  constructor(near: number, far: number, fov: number, aspect_ratio: number);
  near: number;
  far: number;
  fov: number;
  aspect_ratio: number;
}
export class CameraOrientation {
  private constructor();
  free(): void;
  heading: number;
  pitch: number;
  roll: number;
}
export class CameraStatus {
  private constructor();
  free(): void;
  status: any[];
}
export class Cesium3dTilesLayerDescription {
  private constructor();
  free(): void;
  get type(): string | undefined;
  set type(value: string | null | undefined);
  get crs(): string | undefined;
  set crs(value: string | null | undefined);
  data: any;
  get model(): ModelMaterial | undefined;
  set model(value: ModelMaterial | null | undefined);
}
export class ConstructPolygonBatchedFeatureParameters {
  private constructor();
  free(): void;
  batched_feature: ReconstructableEntity;
  flat: boolean;
}
export class ConstructPolygonBatchedFeatureResult {
  free(): void;
  constructor(geometry: TransferablePolygonGeometry, extent?: ExtentRadianF32 | null);
  geometry: TransferablePolygonGeometry;
  get extent(): ExtentRadianF32 | undefined;
  set extent(value: ExtentRadianF32 | null | undefined);
}
export class ConstructPolylineBatchedFeatureParameters {
  private constructor();
  free(): void;
  batched_feature: ReconstructableEntity;
}
export class ConstructPolylineBatchedFeatureResult {
  free(): void;
  constructor(geometry: TransferablePolylineGeometry, extent: ExtentRadianF32);
  geometry: TransferablePolylineGeometry;
  extent: ExtentRadianF32;
}
export class ConstructTerrainMeshParameters {
  private constructor();
  free(): void;
  tile_size: number;
  bytes_handle: number;
  tile_handle: bigint;
}
export class ConstructTerrainMeshResult {
  free(): void;
  constructor(geometry: TransferableGeometry, heights: number, min_height: number, max_height: number);
  geometry: TransferableGeometry;
  heights: number;
  min_height: number;
  max_height: number;
}
export class ConstructedPolygonGeometry {
  private constructor();
  free(): void;
  position(): Float32Array;
  position_size(): number;
  normal(): Float32Array | undefined;
  normal_size(): number | undefined;
  scale_normal_and_cap(): Float32Array | undefined;
  scale_normal_and_cap_size(): number | undefined;
  batch_id(): Float32Array | undefined;
  batch_id_size(): number | undefined;
  batch_index(): Uint32Array | undefined;
  batch_index_size(): number | undefined;
  indices(): Uint32Array;
  get extent(): ExtentRadianF32 | undefined;
  set extent(value: ExtentRadianF32 | null | undefined);
}
export class ConstructedPolylineGeometry {
  private constructor();
  free(): void;
  position(): Float32Array;
  position_size(): number;
  start(): Float32Array;
  start_size(): number;
  forward_offset(): Float32Array;
  forward_offset_size(): number;
  start_normals(): Float32Array;
  start_normals_size(): number;
  end_normal_and_texture_coordinate_normalization_x(): Float32Array;
  end_normal_and_texture_coordinate_normalization_x_size(): number;
  right_normal_and_texture_coordinate_normalization_y(): Float32Array;
  right_normal_and_texture_coordinate_normalization_y_size(): number;
  batch_id(): Float32Array | undefined;
  batch_id_size(): number | undefined;
  batch_index(): Uint32Array | undefined;
  batch_index_size(): number | undefined;
  indices(): Uint32Array;
  extent: ExtentRadianF32;
}
export class Core {
  free(): void;
  constructor(id: string);
  start(): void;
  update(updated_at: number): void;
  readEvents(): Events | undefined;
  input(input: any): void;
  getBufferU8(handle: number): Uint8Array | undefined;
  getBufferU32(handle: number): Uint32Array | undefined;
  getBufferF32(handle: number): Float32Array | undefined;
  setBufferU8(handle: number, bits: bigint, byte_length: number, f: Function): void;
  newBufferU8(byte_length: number, f: Function): number | undefined;
  newBufferU32(byte_length: number, f: Function): number | undefined;
  newBufferF32(byte_length: number, f: Function): number | undefined;
  newBufferU8Cloned(data: Uint8Array): number | undefined;
  newBufferU32Cloned(data: Uint32Array): number | undefined;
  newBufferF32Cloned(data: Float32Array): number | undefined;
  removeBuffer(handle: number): void;
  removeBufferU8(handle: number): Uint8Array | undefined;
  removeBufferU32(handle: number): Uint32Array | undefined;
  removeBufferF32(handle: number): Float32Array | undefined;
  triggerDataRequesterFailed(bits: bigint): void;
  resize(width: number, height: number, pixel_ratio: number): void;
  addLayer(layer: any): string;
  updateLayer(layer_id: string, layer: any): void;
  deleteLayer(layer_id: string): void;
  triggerTextureFragmentLoaded(bits: bigint, status: TextureFragmentStatus): void;
  setTileMeshPrepared(handle: bigint): void;
  markFeatureIsRendered(feature_type: string, bits: bigint): void;
  triggerWorkerTaskCompleted(bits: bigint, result: DelegatedWorkerTasksResult): void;
  getMartini(martini_id: ReconstructableEntity): TransferableMartini | undefined;
  hasDataRequester(id: bigint): boolean;
  hasWorkerTask(id: bigint): boolean;
  getTile(handle: bigint): TransferableTile | undefined;
  getParentTile(handle: bigint): TransferableTile | undefined;
  getVectorTileStates(handle: bigint): VectorTileState[];
  getTileElevationDecoder(handle: bigint): ElevationDecoder | undefined;
  getTransferablePolygonBatchedFeature(batched_feature_id: bigint): ReturnedTransferablePolygonBatchedFeature | undefined;
  getTransferablePolylineBatchedFeature(batched_feature_id: bigint): ReturnedTransferablePolylineBatchedFeature | undefined;
  getBatchProp(batch_id: number): any;
  getPickedBatchIds(batch_id: number): Uint32Array;
  clearPickingStatus(): void;
  readPropertiesFromFeature(renderable_feature_bits: bigint, callback: Function): void;
  changeCamera(position?: Float32Array | null, pitch?: number | null, heading?: number | null, roll?: number | null): void;
  moveCamera(direction: CameraDirection, amount: number): void;
  moveCameraWithDirection(direction: Float32Array, amount: number): void;
  flyTo(position?: Float32Array | null, pitch?: number | null, heading?: number | null, roll?: number | null, duration?: number | null, max_height?: number | null): void;
  lookAt(target: Float32Array, offset: Float32Array): void;
  getCameraStatus(): CameraStatus | undefined;
  getCameraPositionLLE(): Float32Array | undefined;
  getCameraPositionECEF(): Float32Array | undefined;
  getCameraOrientation(): CameraOrientation | undefined;
  rotateAroundAxis(axis: Float32Array | null | undefined, angle: number): void;
  sampleTerrainHeight(lle: LLE): number | undefined;
  registerSampleTerrainHeightEvent(lle: LLE): bigint;
  unregisterSampleTerrainHeightEvent(bits: bigint): void;
  setFrustum(fov?: number | null, near?: number | null, far?: number | null): void;
  id: string;
}
export class DataRequestEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  handle: number;
  extension: string;
  url: string;
}
export class DataRequesterRemovedEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  handle: number;
}
export class DelegatedWorkerTasksParameters {
  private constructor();
  free(): void;
  delegator_id: ReconstructableEntity;
  get construct_terrain_mesh(): ConstructTerrainMeshParameters | undefined;
  set construct_terrain_mesh(value: ConstructTerrainMeshParameters | null | undefined);
  get upsample_terrain_mesh(): UpsampleTerrainMeshParameters | undefined;
  set upsample_terrain_mesh(value: UpsampleTerrainMeshParameters | null | undefined);
  get construct_polygon_batched_feature(): ConstructPolygonBatchedFeatureParameters | undefined;
  set construct_polygon_batched_feature(value: ConstructPolygonBatchedFeatureParameters | null | undefined);
  get construct_polyline_batched_feature(): ConstructPolylineBatchedFeatureParameters | undefined;
  set construct_polyline_batched_feature(value: ConstructPolylineBatchedFeatureParameters | null | undefined);
}
export class DelegatedWorkerTasksResult {
  private constructor();
  free(): void;
  static withConstructTerrainMesh(delegator_id: ReconstructableEntity, construct_terrain_mesh?: ConstructTerrainMeshResult | null): DelegatedWorkerTasksResult;
  static withUpsampleTerrainMesh(delegator_id: ReconstructableEntity, upsample_terrain_mesh?: UpsampleTerrainMeshResult | null): DelegatedWorkerTasksResult;
  static withConstructPolygonBatchedFeature(delegator_id: ReconstructableEntity, construct_polygon_batched_feature?: ConstructPolygonBatchedFeatureResult | null): DelegatedWorkerTasksResult;
  static withConstructPolylineBatchedFeature(delegator_id: ReconstructableEntity, construct_polyline_batched_feature?: ConstructPolylineBatchedFeatureResult | null): DelegatedWorkerTasksResult;
  delegator_id: ReconstructableEntity;
  get construct_terrain_mesh(): ConstructTerrainMeshResult | undefined;
  set construct_terrain_mesh(value: ConstructTerrainMeshResult | null | undefined);
  get upsample_terrain_mesh(): UpsampleTerrainMeshResult | undefined;
  set upsample_terrain_mesh(value: UpsampleTerrainMeshResult | null | undefined);
  get construct_polygon_batched_feature(): ConstructPolygonBatchedFeatureResult | undefined;
  set construct_polygon_batched_feature(value: ConstructPolygonBatchedFeatureResult | null | undefined);
  get construct_polyline_batched_feature(): ConstructPolylineBatchedFeatureResult | undefined;
  set construct_polyline_batched_feature(value: ConstructPolylineBatchedFeatureResult | null | undefined);
}
export class ElevationDecoder {
  free(): void;
  constructor(r_scaler: number, g_scaler: number, b_scaler: number, offset: number, max_offset: number, min_offset: number, boundary: number, epsilon: number);
  static japanGSI(): ElevationDecoder;
  static mapbox(): ElevationDecoder;
  r_scaler: number;
  g_scaler: number;
  b_scaler: number;
  offset: number;
  max_offset: number;
  min_offset: number;
  boundary: number;
  epsilon: number;
}
export class EllipsoidGeodesic {
  free(): void;
  constructor(start: LLE, end: LLE);
  interpolateGeodeticPoints(granularity?: number | null): LLE[];
  interpolateDistance(distance: number): LLE;
  start: LLE;
  end: LLE;
  distance: number;
  start_heading: number;
  end_heading: number;
}
export class EntityEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
}
export class Events {
  private constructor();
  free(): void;
  get camera_transform_updated(): Transform | undefined;
  set camera_transform_updated(value: Transform | null | undefined);
  get camera_frustum_updated(): CameraFrustum | undefined;
  set camera_frustum_updated(value: CameraFrustum | null | undefined);
  object_transform_updated: ObjectTransformEvent[];
  mesh_removed: EntityEvent[];
  mesh_added: MeshAdded[];
  mesh_updated: MeshChanged[];
  data_requested: DataRequestEvent[];
  data_requester_removed: DataRequesterRemovedEvent[];
  texture_fragment_requested: TextureFragmentRequestedEvent[];
  texture_fragment_removed: EntityEvent[];
  worker_task_delegated: WorkerTaskDelegatedEvent[];
  worker_task_removed: EntityEvent[];
  renderable_feature_added: RenderableFeatureAddedEvent[];
  renderable_feature_changed: RenderableFeatureChangedEvent[];
  renderable_feature_removed: RenderableFeatureRemovedEvent[];
  update_sample_terrain_height: TerrainHeightUpdatedEvent[];
}
export class ExtentRadianF32 {
  free(): void;
  constructor(west: number, south: number, east: number, north: number);
  west: number;
  south: number;
  east: number;
  north: number;
}
export class FloatAttribute {
  free(): void;
  constructor(data: Float32Array, size: number);
  transferData(): Float32Array;
  size: number;
}
export class GeoJsonLayerDescription {
  private constructor();
  free(): void;
  get type(): string | undefined;
  set type(value: string | null | undefined);
  get crs(): string | undefined;
  set crs(value: string | null | undefined);
  data: any;
  get point(): PointMaterial | undefined;
  set point(value: PointMaterial | null | undefined);
  get billboard(): BillboardMaterial | undefined;
  set billboard(value: BillboardMaterial | null | undefined);
  get text(): TextMaterial | undefined;
  set text(value: TextMaterial | null | undefined);
  get polyline(): PolylineMaterial | undefined;
  set polyline(value: PolylineMaterial | null | undefined);
  get polygon(): PolygonMaterial | undefined;
  set polygon(value: PolygonMaterial | null | undefined);
  get model(): ModelMaterial | undefined;
  set model(value: ModelMaterial | null | undefined);
}
export class Geometry {
  free(): void;
  constructor(vertices: Float32Array, indices: Uint32Array, uvs: Float32Array);
  transferVertices(): Float32Array;
  transferUvs(): Float32Array;
  transferIndices(): Uint32Array;
}
export class LLE {
  free(): void;
  constructor(lat: number, lng: number, height: number);
  lat: number;
  lng: number;
  height: number;
}
export class LayerDescription {
  private constructor();
  free(): void;
  get type(): string | undefined;
  set type(value: string | null | undefined);
}
export class LayerDescriptionData {
  private constructor();
  free(): void;
  data: any;
}
export class LayerDescriptionUrl {
  private constructor();
  free(): void;
  url: string;
}
export class Mesh {
  private constructor();
  free(): void;
  vertices: number;
  uvs: number;
  indices: number;
  active: boolean;
  render_order: number;
  uv_transform: TileUvTransform;
}
export class MeshAdded {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  tile_handle: bigint;
  get ready_parent_tile_handle(): bigint | undefined;
  set ready_parent_tile_handle(value: bigint | null | undefined);
  mesh: Mesh;
  material: RasterTileInternalMaterial;
  transform: Transform;
}
export class MeshChanged {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  get ready_parent_tile_handle(): bigint | undefined;
  set ready_parent_tile_handle(value: bigint | null | undefined);
  mesh: Mesh;
  material: RasterTileInternalMaterial;
}
export class ModelMaterial {
  private constructor();
  free(): void;
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get cast_shadow(): boolean | undefined;
  set cast_shadow(value: boolean | null | undefined);
  get receive_shadow(): boolean | undefined;
  set receive_shadow(value: boolean | null | undefined);
  get url(): string | undefined;
  set url(value: string | null | undefined);
  get size(): number | undefined;
  set size(value: number | null | undefined);
  get height(): number | undefined;
  set height(value: number | null | undefined);
  get max_sse(): number | undefined;
  set max_sse(value: number | null | undefined);
  get clamp_to_ground(): boolean | undefined;
  set clamp_to_ground(value: boolean | null | undefined);
  get should_rotate_in_default(): boolean | undefined;
  set should_rotate_in_default(value: boolean | null | undefined);
  get id_property(): string | undefined;
  set id_property(value: string | null | undefined);
  get color(): number | undefined;
  set color(value: number | null | undefined);
  get metalness(): number | undefined;
  set metalness(value: number | null | undefined);
  get roughness(): number | undefined;
  set roughness(value: number | null | undefined);
  get reflectivity(): number | undefined;
  set reflectivity(value: number | null | undefined);
  get water(): boolean | undefined;
  set water(value: boolean | null | undefined);
  get water_normal_url(): string | undefined;
  set water_normal_url(value: string | null | undefined);
  get water_scale_normal(): number | undefined;
  set water_scale_normal(value: number | null | undefined);
  get water_speed(): number | undefined;
  set water_speed(value: number | null | undefined);
  get shininess(): number | undefined;
  set shininess(value: number | null | undefined);
  get specular_strength(): number | undefined;
  set specular_strength(value: number | null | undefined);
  get apply_water_normal(): boolean | undefined;
  set apply_water_normal(value: boolean | null | undefined);
  get animation_enabled(): boolean | undefined;
  set animation_enabled(value: boolean | null | undefined);
  get animation_clips(): string[] | undefined;
  set animation_clips(value: string[] | null | undefined);
  get animation_active_clip(): string | undefined;
  set animation_active_clip(value: string | null | undefined);
  get animation_speed(): number | undefined;
  set animation_speed(value: number | null | undefined);
  get animation_loop(): boolean | undefined;
  set animation_loop(value: boolean | null | undefined);
  get animation_crossfade_duration(): number | undefined;
  set animation_crossfade_duration(value: number | null | undefined);
  get animation_auto_play(): boolean | undefined;
  set animation_auto_play(value: boolean | null | undefined);
}
export class ModelMesh {
  private constructor();
  free(): void;
  material: ModelMaterial;
  transform: Transform;
  get bin(): number | undefined;
  set bin(value: number | null | undefined);
  geometry: TransferableModelGeometry;
  active: boolean;
}
export class MvtLayerDescription {
  private constructor();
  free(): void;
  get type(): string | undefined;
  set type(value: string | null | undefined);
  get crs(): string | undefined;
  set crs(value: string | null | undefined);
  data: any;
  get point(): PointMaterial | undefined;
  set point(value: PointMaterial | null | undefined);
  get billboard(): BillboardMaterial | undefined;
  set billboard(value: BillboardMaterial | null | undefined);
  get text(): TextMaterial | undefined;
  set text(value: TextMaterial | null | undefined);
  get polyline(): PolylineMaterial | undefined;
  set polyline(value: PolylineMaterial | null | undefined);
  get polygon(): PolygonMaterial | undefined;
  set polygon(value: PolygonMaterial | null | undefined);
  get vector_tile(): VectorTileMaterial | undefined;
  set vector_tile(value: VectorTileMaterial | null | undefined);
}
export class NearFar {
  private constructor();
  free(): void;
  near: number;
  far: number;
}
export class ObjectTransformEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  transform: Transform;
}
export class OrthoCamTransform {
  free(): void;
  constructor(left: number, right: number, top: number, bottom: number);
  left: number;
  right: number;
  top: number;
  bottom: number;
}
export class OverscaledTileHandle {
  private constructor();
  free(): void;
  handle: bigint;
}
export class Plane {
  private constructor();
  free(): void;
  normal: Vec3;
  distance: number;
}
export class PointMaterial {
  private constructor();
  free(): void;
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get size(): number | undefined;
  set size(value: number | null | undefined);
  get color(): number | undefined;
  set color(value: number | null | undefined);
  get center(): Vec2 | undefined;
  set center(value: Vec2 | null | undefined);
  get height(): number | undefined;
  set height(value: number | null | undefined);
  get scale_by_distance(): boolean | undefined;
  set scale_by_distance(value: boolean | null | undefined);
  get clamp_to_ground(): boolean | undefined;
  set clamp_to_ground(value: boolean | null | undefined);
  get depth_test(): boolean | undefined;
  set depth_test(value: boolean | null | undefined);
  get transparent(): boolean | undefined;
  set transparent(value: boolean | null | undefined);
  get id_property(): string | undefined;
  set id_property(value: string | null | undefined);
}
export class PointMesh {
  private constructor();
  free(): void;
  material: PointMaterial;
  transform: Transform;
  geometry: TransferablePointGeometry;
  active: boolean;
}
export class PolygonGeometry {
  private constructor();
  free(): void;
  position(): Float32Array;
  position_size(): number;
  normal(): Float32Array | undefined;
  normal_size(): number | undefined;
  scale_normal_and_cap(): Float32Array | undefined;
  scale_normal_and_cap_size(): number | undefined;
  batch_id(): Float32Array | undefined;
  batch_id_size(): number | undefined;
  batch_index(): Uint32Array | undefined;
  batch_index_size(): number | undefined;
  indices(): Uint32Array;
}
export class PolygonGeometryAttributes {
  private constructor();
  free(): void;
  transfer_position(): Float32Array;
  transfer_position_size(): number;
  transfer_normal(): Float32Array | undefined;
  transfer_normal_size(): number | undefined;
  transfer_scale_normal_and_cap(): Float32Array | undefined;
  transfer_scale_normal_and_cap_size(): number | undefined;
  transfer_batch_id(): Float32Array | undefined;
  transfer_batch_id_size(): number | undefined;
  transfer_batch_index(): Uint32Array | undefined;
  transfer_batch_index_size(): number | undefined;
}
export class PolygonInternalMaterial {
  private constructor();
  free(): void;
  min_max_heights: Float32Array;
}
export class PolygonMaterial {
  free(): void;
  constructor(show?: boolean | null, cast_shadow?: boolean | null, receive_shadow?: boolean | null, color?: number | null, clamp_to_ground?: boolean | null, use_ground_normals?: boolean | null, height?: number | null, extruded_height?: number | null, wireframe?: boolean | null, reflectivity?: number | null, roughness?: number | null, __internal__?: PolygonInternalMaterial | null, id_property?: string | null, surface_show?: boolean | null, outline_show?: boolean | null, outline_color?: number | null, outline_width?: number | null);
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get cast_shadow(): boolean | undefined;
  set cast_shadow(value: boolean | null | undefined);
  get receive_shadow(): boolean | undefined;
  set receive_shadow(value: boolean | null | undefined);
  get color(): number | undefined;
  set color(value: number | null | undefined);
  get clamp_to_ground(): boolean | undefined;
  set clamp_to_ground(value: boolean | null | undefined);
  get use_ground_normals(): boolean | undefined;
  set use_ground_normals(value: boolean | null | undefined);
  get height(): number | undefined;
  set height(value: number | null | undefined);
  get extruded_height(): number | undefined;
  set extruded_height(value: number | null | undefined);
  get wireframe(): boolean | undefined;
  set wireframe(value: boolean | null | undefined);
  get reflectivity(): number | undefined;
  set reflectivity(value: number | null | undefined);
  get roughness(): number | undefined;
  set roughness(value: number | null | undefined);
  get __internal__(): PolygonInternalMaterial | undefined;
  set __internal__(value: PolygonInternalMaterial | null | undefined);
  get id_property(): string | undefined;
  set id_property(value: string | null | undefined);
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  get surface_show(): boolean | undefined;
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  set surface_show(value: boolean | null | undefined);
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  get outline_show(): boolean | undefined;
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  set outline_show(value: boolean | null | undefined);
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  get outline_color(): number | undefined;
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  set outline_color(value: number | null | undefined);
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  get outline_width(): number | undefined;
  /**
   * Currently, this property is supported only in GeoJSON.
   */
  set outline_width(value: number | null | undefined);
  get water(): boolean | undefined;
  set water(value: boolean | null | undefined);
  get water_normal_url(): string | undefined;
  set water_normal_url(value: string | null | undefined);
  get water_scale_normal(): number | undefined;
  set water_scale_normal(value: number | null | undefined);
  get water_speed(): number | undefined;
  set water_speed(value: number | null | undefined);
  get shininess(): number | undefined;
  set shininess(value: number | null | undefined);
  get specular_strength(): number | undefined;
  set specular_strength(value: number | null | undefined);
  get apply_water_normal(): boolean | undefined;
  set apply_water_normal(value: boolean | null | undefined);
}
export class PolygonMesh {
  private constructor();
  free(): void;
  material: PolygonMaterial;
  geometry: TransferablePolygonGeometry;
  get outline_geometry(): TransferablePolygonOutlineGeometry | undefined;
  set outline_geometry(value: TransferablePolygonOutlineGeometry | null | undefined);
  transform: Transform;
  active: boolean;
}
export class PolylineGeometry {
  private constructor();
  free(): void;
  position(): Float32Array;
  position_size(): number;
  start(): Float32Array;
  start_size(): number;
  forward_offset(): Float32Array;
  forward_offset_size(): number;
  start_normals(): Float32Array;
  start_normals_size(): number;
  end_normal_and_texture_coordinate_normalization_x(): Float32Array;
  end_normal_and_texture_coordinate_normalization_x_size(): number;
  right_normal_and_texture_coordinate_normalization_y(): Float32Array;
  right_normal_and_texture_coordinate_normalization_y_size(): number;
  batch_id(): Float32Array | undefined;
  batch_id_size(): number | undefined;
  batch_index(): Uint32Array | undefined;
  batch_index_size(): number | undefined;
  indices(): Uint32Array;
}
export class PolylineGeometryAttributes {
  private constructor();
  free(): void;
  transfer_position(): Float32Array;
  transfer_position_size(): number;
  transfer_start(): Float32Array;
  transfer_start_size(): number;
  transfer_forward_offset(): Float32Array;
  transfer_forward_offset_size(): number;
  transfer_start_normals(): Float32Array;
  transfer_start_normals_size(): number;
  transfer_end_normal_and_texture_coordinate_normalization_x(): Float32Array;
  transfer_end_normal_and_texture_coordinate_normalization_x_size(): number;
  transfer_right_normal_and_texture_coordinate_normalization_y(): Float32Array;
  transfer_right_normal_and_texture_coordinate_normalization_y_size(): number;
  transfer_batch_id(): Float32Array | undefined;
  transfer_batch_id_size(): number | undefined;
  transfer_batch_index(): Uint32Array | undefined;
  transfer_batch_index_size(): number | undefined;
}
export class PolylineInternalMaterial {
  private constructor();
  free(): void;
  min_max_heights: Float32Array;
}
export class PolylineMaterial {
  free(): void;
  constructor(show?: boolean | null, cast_shadow?: boolean | null, receive_shadow?: boolean | null, color?: number | null, clamp_to_ground?: boolean | null, use_ground_normals?: boolean | null, height?: number | null, width?: number | null, __internal__?: PolylineInternalMaterial | null, id_property?: string | null);
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get cast_shadow(): boolean | undefined;
  set cast_shadow(value: boolean | null | undefined);
  get receive_shadow(): boolean | undefined;
  set receive_shadow(value: boolean | null | undefined);
  get color(): number | undefined;
  set color(value: number | null | undefined);
  get width(): number | undefined;
  set width(value: number | null | undefined);
  get clamp_to_ground(): boolean | undefined;
  set clamp_to_ground(value: boolean | null | undefined);
  get use_ground_normals(): boolean | undefined;
  set use_ground_normals(value: boolean | null | undefined);
  get height(): number | undefined;
  set height(value: number | null | undefined);
  get __internal__(): PolylineInternalMaterial | undefined;
  set __internal__(value: PolylineInternalMaterial | null | undefined);
  get id_property(): string | undefined;
  set id_property(value: string | null | undefined);
}
export class PolylineMesh {
  private constructor();
  free(): void;
  material: PolylineMaterial;
  geometry: TransferablePolylineGeometry;
  transform: Transform;
  active: boolean;
}
export class RasterTerrainMaterial {
  private constructor();
  free(): void;
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get cast_shadow(): boolean | undefined;
  set cast_shadow(value: boolean | null | undefined);
  get receive_shadow(): boolean | undefined;
  set receive_shadow(value: boolean | null | undefined);
  get segments(): number | undefined;
  set segments(value: number | null | undefined);
  get max_zoom(): number | undefined;
  set max_zoom(value: number | null | undefined);
  get min_zoom(): number | undefined;
  set min_zoom(value: number | null | undefined);
  get wireframe(): boolean | undefined;
  set wireframe(value: boolean | null | undefined);
  get elevation_decoder(): ElevationDecoder | undefined;
  set elevation_decoder(value: ElevationDecoder | null | undefined);
  get tile_size(): number | undefined;
  set tile_size(value: number | null | undefined);
}
export class RasterTileInternalMaterial {
  private constructor();
  free(): void;
  texture_fragments(): any[] | undefined;
  shows: Uint8Array;
  colors: Uint32Array;
  opacities: Float32Array;
  get cast_shadow(): boolean | undefined;
  set cast_shadow(value: boolean | null | undefined);
  get receive_shadow(): boolean | undefined;
  set receive_shadow(value: boolean | null | undefined);
  get should_compute_normal_from_vertex(): boolean | undefined;
  set should_compute_normal_from_vertex(value: boolean | null | undefined);
  wireframe: boolean;
}
export class RasterTileMaterial {
  private constructor();
  free(): void;
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get segments(): number | undefined;
  set segments(value: number | null | undefined);
  get color(): number | undefined;
  set color(value: number | null | undefined);
  get opacity(): number | undefined;
  set opacity(value: number | null | undefined);
  get max_zoom(): number | undefined;
  set max_zoom(value: number | null | undefined);
  get min_zoom(): number | undefined;
  set min_zoom(value: number | null | undefined);
  get max_sse(): number | undefined;
  set max_sse(value: number | null | undefined);
  get wireframe(): boolean | undefined;
  set wireframe(value: boolean | null | undefined);
  get tms(): boolean | undefined;
  set tms(value: boolean | null | undefined);
  get should_compute_normal_from_vertex(): boolean | undefined;
  set should_compute_normal_from_vertex(value: boolean | null | undefined);
}
export class Ray {
  free(): void;
  constructor(origin: Vec3, direction: Vec3);
  getPoint(t: number): Vec3;
  origin: Vec3;
  direction: Vec3;
}
/**
 * This is used to share the entity id between WASM and client.
 * You can reconstruct Bevy Entity by `Entity:from_bits`.
 */
export class ReconstructableEntity {
  private constructor();
  free(): void;
  0: bigint;
}
export class RenderableFeature {
  private constructor();
  free(): void;
  get point(): PointMesh | undefined;
  set point(value: PointMesh | null | undefined);
  get billboard(): BillboardMesh | undefined;
  set billboard(value: BillboardMesh | null | undefined);
  get text(): TextMesh | undefined;
  set text(value: TextMesh | null | undefined);
  get polyline(): PolylineMesh | undefined;
  set polyline(value: PolylineMesh | null | undefined);
  get polygon(): PolygonMesh | undefined;
  set polygon(value: PolygonMesh | null | undefined);
  get model(): ModelMesh | undefined;
  set model(value: ModelMesh | null | undefined);
}
export class RenderableFeatureAddedEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  feature: RenderableFeature;
  layer_id: string;
  get overscaled_tile_handle(): OverscaledTileHandle | undefined;
  set overscaled_tile_handle(value: OverscaledTileHandle | null | undefined);
}
export class RenderableFeatureChangedEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  feature: RenderableFeature;
  layer_id: string;
  get overscaled_tile_handle(): OverscaledTileHandle | undefined;
  set overscaled_tile_handle(value: OverscaledTileHandle | null | undefined);
}
export class RenderableFeatureRemovedEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  layer_id: string;
}
export class ReturnedConstructedTerrainMesh {
  free(): void;
  constructor(geometry: Geometry, max_height: number, min_height: number, heights: Float32Array);
  transferVertices(): Float32Array;
  transferUvs(): Float32Array;
  transferIndices(): Uint32Array;
  transferHeights(): Float32Array;
  max_height: number;
  min_height: number;
}
export class ReturnedTransferablePolygonBatchedFeature {
  private constructor();
  free(): void;
  transferBatchIds(): Uint32Array;
  transferBatchIndices(): Uint32Array;
  transferOuterRing(): Float32Array;
  transferOuterRingSizes(): Uint32Array;
  transferHoles(): Float32Array;
  transferHolesBoundaries(): Uint32Array;
  transferHolesSizes(): Uint32Array;
  transferHolesTotalSizes(): Uint32Array;
  transferExpectedWindingOrders(): Uint8Array;
  crs(): CRS;
  length(): number;
  material: PolygonMaterial;
}
export class ReturnedTransferablePolylineBatchedFeature {
  private constructor();
  free(): void;
  transferBatchIds(): Uint32Array;
  transferBatchIndices(): Uint32Array;
  transferPoints(): Float32Array;
  transferPointsSizes(): Uint32Array;
  crs(): CRS;
  length(): number;
  material: PolylineMaterial;
}
export class TerrainHeightUpdatedEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  lle: LLE;
  get height(): number | undefined;
  set height(value: number | null | undefined);
}
export class TerrainLayerDescription {
  private constructor();
  free(): void;
  type: string;
  data: any;
  get raster_terrain(): RasterTerrainMaterial | undefined;
  set raster_terrain(value: RasterTerrainMaterial | null | undefined);
  /**
   * Compute normals from vertices if the model doesn't have a normal.
   */
  get should_compute_normal_from_vertex(): boolean | undefined;
  /**
   * Compute normals from vertices if the model doesn't have a normal.
   */
  set should_compute_normal_from_vertex(value: boolean | null | undefined);
}
export class TextMaterial {
  private constructor();
  free(): void;
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get size(): number | undefined;
  set size(value: number | null | undefined);
  get color(): number | undefined;
  set color(value: number | null | undefined);
  get center(): Vec2 | undefined;
  set center(value: Vec2 | null | undefined);
  get height(): number | undefined;
  set height(value: number | null | undefined);
  get scale_by_distance(): boolean | undefined;
  set scale_by_distance(value: boolean | null | undefined);
  get clamp_to_ground(): boolean | undefined;
  set clamp_to_ground(value: boolean | null | undefined);
  get depth_test(): boolean | undefined;
  set depth_test(value: boolean | null | undefined);
  get text(): string | undefined;
  set text(value: string | null | undefined);
  get font(): string | undefined;
  set font(value: string | null | undefined);
  get background_color(): number | undefined;
  set background_color(value: number | null | undefined);
  get border_color(): number | undefined;
  set border_color(value: number | null | undefined);
  get border_width(): number | undefined;
  set border_width(value: number | null | undefined);
  get corner_radius(): number | undefined;
  set corner_radius(value: number | null | undefined);
  get padding(): Vec2 | undefined;
  set padding(value: Vec2 | null | undefined);
  get id_property(): string | undefined;
  set id_property(value: string | null | undefined);
  get outline_blur(): number | undefined;
  set outline_blur(value: number | null | undefined);
  get outline_color(): number | undefined;
  set outline_color(value: number | null | undefined);
  get outline_offset(): Vec2 | undefined;
  set outline_offset(value: Vec2 | null | undefined);
  get outline_opacity(): number | undefined;
  set outline_opacity(value: number | null | undefined);
  get outline_width(): number | undefined;
  set outline_width(value: number | null | undefined);
}
export class TextMesh {
  private constructor();
  free(): void;
  material: TextMaterial;
  transform: Transform;
  geometry: TransferablePointGeometry;
  active: boolean;
}
export class TextureFragment {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
}
export class TextureFragmentRequestedEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  url: string;
  status: TextureFragmentStatus;
}
export class TileLayerDescription {
  private constructor();
  free(): void;
  type: string;
  data: any;
  get raster_tile(): RasterTileMaterial | undefined;
  set raster_tile(value: RasterTileMaterial | null | undefined);
}
export class TileUvTransform {
  private constructor();
  free(): void;
  offset: Vec2;
  scale: Vec2;
}
export class TileXYZ {
  free(): void;
  constructor(x: number, y: number, z: number);
  x: number;
  y: number;
  z: number;
}
export class TransferableFloatAttribute {
  free(): void;
  constructor(data: number, size: number);
  data: number;
  size: number;
}
export class TransferableGeometry {
  free(): void;
  constructor(vertices: number, uvs: number, indices: number);
  vertices: number;
  uvs: number;
  indices: number;
}
export class TransferableHierarchy {
  private constructor();
  free(): void;
  expected_winding_order: number;
}
/**
 * To transfer the hierarchy efficiently, the holes are managed as one-dimensional array.
 */
export class TransferableHoles {
  private constructor();
  free(): void;
}
export class TransferableMartini {
  free(): void;
  constructor(size: number, coords: Uint32Array);
  transfer_coords(): Uint32Array;
  static fromSize(size: number): TransferableMartini;
  size: number;
}
export class TransferableModelGeometry {
  private constructor();
  free(): void;
  get batch_id_and_selected_status(): TransferableFloatAttribute | undefined;
  set batch_id_and_selected_status(value: TransferableFloatAttribute | null | undefined);
}
export class TransferablePointGeometry {
  private constructor();
  free(): void;
  position: TransferableFloatAttribute;
  batch_id_and_sel: TransferableFloatAttribute;
  batch_index: TransferableUintAttribute;
}
/**
 * To transfer the batched feature efficiently, the all feature's properties are managed as one-dimensional array.
 */
export class TransferablePolygonBatchedFeature {
  free(): void;
  constructor(crs: CRS, length: number);
  setOuterRing(byte_length: number, f: Function): void;
  setOuterRingSizes(byte_length: number, f: Function): void;
  setHoles(byte_length: number, f: Function): void;
  setHolesSizes(byte_length: number, f: Function): void;
  setHolesTotalSizes(byte_length: number, f: Function): void;
  setHolesBoundaries(byte_length: number, f: Function): void;
  setBatchIds(byte_length: number, f: Function): void;
  setBatchIndices(byte_length: number, f: Function): void;
  setExpectedWindingOrders(byte_length: number, f: Function): void;
  transferBatchIds(): Uint32Array;
  transferBatchIndices(): Uint32Array;
  transferOuterRing(): Float32Array;
  transferOuterRingSizes(): Uint32Array;
  transferHoles(): Float32Array;
  transferHolesBoundaries(): Uint32Array;
  transferHolesSizes(): Uint32Array;
  transferHolesTotalSizes(): Uint32Array;
  transferExpectedWindingOrders(): Uint8Array;
  crs: CRS;
  length: number;
}
export class TransferablePolygonGeometry {
  free(): void;
  constructor(position: TransferableFloatAttribute, normal: TransferableFloatAttribute | null | undefined, scale_normal_and_cap: TransferableFloatAttribute | null | undefined, batch_id_and_sel: TransferableFloatAttribute | null | undefined, batch_index: TransferableUintAttribute | null | undefined, indices: number);
  position: TransferableFloatAttribute;
  get normal(): TransferableFloatAttribute | undefined;
  set normal(value: TransferableFloatAttribute | null | undefined);
  get scale_normal_and_cap(): TransferableFloatAttribute | undefined;
  set scale_normal_and_cap(value: TransferableFloatAttribute | null | undefined);
  get batch_id_and_sel(): TransferableFloatAttribute | undefined;
  set batch_id_and_sel(value: TransferableFloatAttribute | null | undefined);
  get batch_index(): TransferableUintAttribute | undefined;
  set batch_index(value: TransferableUintAttribute | null | undefined);
  indices: number;
}
export class TransferablePolygonOutlineGeometry {
  free(): void;
  constructor(position?: TransferableFloatAttribute | null, scale_normal_and_cap?: TransferableFloatAttribute | null, skip_indices?: number | null);
  get position(): TransferableFloatAttribute | undefined;
  set position(value: TransferableFloatAttribute | null | undefined);
  get scale_normal_and_cap(): TransferableFloatAttribute | undefined;
  set scale_normal_and_cap(value: TransferableFloatAttribute | null | undefined);
  get skip_indices(): number | undefined;
  set skip_indices(value: number | null | undefined);
}
/**
 * To transfer the batched feature efficiently, the all feature's properties are managed as one-dimensional array.
 */
export class TransferablePolylineBatchedFeature {
  free(): void;
  constructor(crs: CRS, length: number);
  setBatchIds(byte_length: number, f: Function): void;
  setBatchIndices(byte_length: number, f: Function): void;
  setPoints(byte_length: number, f: Function): void;
  setPointsSizes(byte_length: number, f: Function): void;
  transferBatchIds(): Uint32Array;
  transferBatchIndices(): Uint32Array;
  transferPoints(): Float32Array;
  transferPointsSizes(): Uint32Array;
  crs: CRS;
  length: number;
}
export class TransferablePolylineGeometry {
  free(): void;
  constructor(position: TransferableFloatAttribute, start: TransferableFloatAttribute, forward_offset: TransferableFloatAttribute, start_normals: TransferableFloatAttribute, end_normal_and_texture_coordinate_normalization_x: TransferableFloatAttribute, right_normal_and_texture_coordinate_normalization_y: TransferableFloatAttribute, batch_id_and_sel: TransferableFloatAttribute | null | undefined, batch_index: TransferableUintAttribute | null | undefined, indices: number);
  position: TransferableFloatAttribute;
  start: TransferableFloatAttribute;
  forward_offset: TransferableFloatAttribute;
  start_normals: TransferableFloatAttribute;
  end_normal_and_texture_coordinate_normalization_x: TransferableFloatAttribute;
  right_normal_and_texture_coordinate_normalization_y: TransferableFloatAttribute;
  get batch_id_and_sel(): TransferableFloatAttribute | undefined;
  set batch_id_and_sel(value: TransferableFloatAttribute | null | undefined);
  get batch_index(): TransferableUintAttribute | undefined;
  set batch_index(value: TransferableUintAttribute | null | undefined);
  indices: number;
}
export class TransferableRasterDEMData {
  free(): void;
  constructor(decoder: ElevationDecoder);
  decoder: ElevationDecoder;
}
export class TransferableTile {
  free(): void;
  constructor(coords: TileXYZ, max_height: number, cached_mesh_handle?: CachedMeshHandle | null);
  coords: TileXYZ;
  max_height: number;
  get cached_mesh_handle(): CachedMeshHandle | undefined;
  set cached_mesh_handle(value: CachedMeshHandle | null | undefined);
}
export class TransferableUintAttribute {
  free(): void;
  constructor(data: number, size: number);
  data: number;
  size: number;
}
export class Transform {
  free(): void;
  constructor(tx: number, ty: number, tz: number, qx: number, qy: number, qz: number, qw: number, sx: number, sy: number, sz: number);
  tx: number;
  ty: number;
  tz: number;
  qx: number;
  qy: number;
  qz: number;
  qw: number;
  sx: number;
  sy: number;
  sz: number;
}
export class UintAttribute {
  free(): void;
  constructor(data: Uint32Array, size: number);
  transferData(): Uint32Array;
  size: number;
}
export class UpsamplableTerrainGeometry {
  free(): void;
  constructor(uvs: Float32Array, indices: Uint32Array, heights: Float32Array);
}
export class UpsampleTerrainMeshParameters {
  free(): void;
  constructor(tile_handle: bigint);
  tile_handle: bigint;
}
export class UpsampleTerrainMeshResult {
  free(): void;
  constructor(geometry: TransferableGeometry, heights: number, min_height: number, max_height: number);
  geometry: TransferableGeometry;
  heights: number;
  min_height: number;
  max_height: number;
}
export class Vec2 {
  free(): void;
  constructor(x: number, y: number);
  x: number;
  y: number;
}
export class Vec3 {
  free(): void;
  constructor(x: number, y: number, z: number);
  x: number;
  y: number;
  z: number;
}
export class VectorTileMaterial {
  private constructor();
  free(): void;
  get show(): boolean | undefined;
  set show(value: boolean | null | undefined);
  get cast_shadow(): boolean | undefined;
  set cast_shadow(value: boolean | null | undefined);
  get receive_shadow(): boolean | undefined;
  set receive_shadow(value: boolean | null | undefined);
  get max_zoom(): number | undefined;
  set max_zoom(value: number | null | undefined);
  get max_sse(): number | undefined;
  set max_sse(value: number | null | undefined);
  get layers(): string[] | undefined;
  set layers(value: string[] | null | undefined);
  get overscaled_max_zoom(): number | undefined;
  set overscaled_max_zoom(value: number | null | undefined);
}
export class VectorTileState {
  private constructor();
  free(): void;
  layer_id: string;
  get ready_parent_tile_handle(): bigint | undefined;
  set ready_parent_tile_handle(value: bigint | null | undefined);
  is_rendered: boolean;
}
export class WindingOrder {
  private constructor();
  free(): void;
  0: number;
}
export class Window {
  free(): void;
  constructor(width: number, height: number, pixel_ratio: number);
  width: number;
  height: number;
  pixel_ratio: number;
}
export class WorkerTaskDelegatedEvent {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
  bits: bigint;
  task: DelegatedWorkerTasksParameters;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_tilelayerdescription_free: (a: number, b: number) => void;
  readonly __wbg_get_tilelayerdescription_type: (a: number) => [number, number];
  readonly __wbg_set_tilelayerdescription_type: (a: number, b: number, c: number) => void;
  readonly __wbg_get_tilelayerdescription_data: (a: number) => any;
  readonly __wbg_set_tilelayerdescription_data: (a: number, b: any) => void;
  readonly __wbg_get_tilelayerdescription_raster_tile: (a: number) => number;
  readonly __wbg_set_tilelayerdescription_raster_tile: (a: number, b: number) => void;
  readonly __wbg_terrainlayerdescription_free: (a: number, b: number) => void;
  readonly __wbg_get_terrainlayerdescription_type: (a: number) => [number, number];
  readonly __wbg_set_terrainlayerdescription_type: (a: number, b: number, c: number) => void;
  readonly __wbg_get_terrainlayerdescription_data: (a: number) => any;
  readonly __wbg_set_terrainlayerdescription_data: (a: number, b: any) => void;
  readonly __wbg_get_terrainlayerdescription_raster_terrain: (a: number) => number;
  readonly __wbg_set_terrainlayerdescription_raster_terrain: (a: number, b: number) => void;
  readonly __wbg_get_terrainlayerdescription_should_compute_normal_from_vertex: (a: number) => number;
  readonly __wbg_set_terrainlayerdescription_should_compute_normal_from_vertex: (a: number, b: number) => void;
  readonly __wbg_geojsonlayerdescription_free: (a: number, b: number) => void;
  readonly __wbg_get_geojsonlayerdescription_type: (a: number) => [number, number];
  readonly __wbg_set_geojsonlayerdescription_type: (a: number, b: number, c: number) => void;
  readonly __wbg_get_geojsonlayerdescription_crs: (a: number) => [number, number];
  readonly __wbg_set_geojsonlayerdescription_crs: (a: number, b: number, c: number) => void;
  readonly __wbg_get_geojsonlayerdescription_data: (a: number) => any;
  readonly __wbg_set_geojsonlayerdescription_data: (a: number, b: any) => void;
  readonly __wbg_get_geojsonlayerdescription_point: (a: number) => number;
  readonly __wbg_set_geojsonlayerdescription_point: (a: number, b: number) => void;
  readonly __wbg_get_geojsonlayerdescription_billboard: (a: number) => number;
  readonly __wbg_set_geojsonlayerdescription_billboard: (a: number, b: number) => void;
  readonly __wbg_get_geojsonlayerdescription_text: (a: number) => number;
  readonly __wbg_set_geojsonlayerdescription_text: (a: number, b: number) => void;
  readonly __wbg_get_geojsonlayerdescription_polyline: (a: number) => number;
  readonly __wbg_set_geojsonlayerdescription_polyline: (a: number, b: number) => void;
  readonly __wbg_get_geojsonlayerdescription_polygon: (a: number) => number;
  readonly __wbg_set_geojsonlayerdescription_polygon: (a: number, b: number) => void;
  readonly __wbg_get_geojsonlayerdescription_model: (a: number) => number;
  readonly __wbg_set_geojsonlayerdescription_model: (a: number, b: number) => void;
  readonly __wbg_b3dmlayerdescription_free: (a: number, b: number) => void;
  readonly __wbg_get_b3dmlayerdescription_type: (a: number) => [number, number];
  readonly __wbg_set_b3dmlayerdescription_type: (a: number, b: number, c: number) => void;
  readonly __wbg_get_b3dmlayerdescription_crs: (a: number) => [number, number];
  readonly __wbg_set_b3dmlayerdescription_crs: (a: number, b: number, c: number) => void;
  readonly __wbg_get_b3dmlayerdescription_data: (a: number) => any;
  readonly __wbg_set_b3dmlayerdescription_data: (a: number, b: any) => void;
  readonly __wbg_get_b3dmlayerdescription_model: (a: number) => number;
  readonly __wbg_set_b3dmlayerdescription_model: (a: number, b: number) => void;
  readonly __wbg_cesium3dtileslayerdescription_free: (a: number, b: number) => void;
  readonly __wbg_mvtlayerdescription_free: (a: number, b: number) => void;
  readonly __wbg_get_mvtlayerdescription_type: (a: number) => [number, number];
  readonly __wbg_set_mvtlayerdescription_type: (a: number, b: number, c: number) => void;
  readonly __wbg_get_mvtlayerdescription_crs: (a: number) => [number, number];
  readonly __wbg_set_mvtlayerdescription_crs: (a: number, b: number, c: number) => void;
  readonly __wbg_get_mvtlayerdescription_data: (a: number) => any;
  readonly __wbg_set_mvtlayerdescription_data: (a: number, b: any) => void;
  readonly __wbg_get_mvtlayerdescription_vector_tile: (a: number) => number;
  readonly __wbg_set_mvtlayerdescription_vector_tile: (a: number, b: number) => void;
  readonly __wbg_layerdescription_free: (a: number, b: number) => void;
  readonly __wbg_get_layerdescription_type: (a: number) => [number, number];
  readonly __wbg_set_layerdescription_type: (a: number, b: number, c: number) => void;
  readonly __wbg_layerdescriptiondata_free: (a: number, b: number) => void;
  readonly __wbg_get_layerdescriptiondata_data: (a: number) => any;
  readonly __wbg_set_layerdescriptiondata_data: (a: number, b: any) => void;
  readonly __wbg_layerdescriptionurl_free: (a: number, b: number) => void;
  readonly __wbg_get_layerdescriptionurl_url: (a: number) => [number, number];
  readonly __wbg_set_layerdescriptionurl_url: (a: number, b: number, c: number) => void;
  readonly __wbg_set_cesium3dtileslayerdescription_data: (a: number, b: any) => void;
  readonly __wbg_get_cesium3dtileslayerdescription_model: (a: number) => number;
  readonly __wbg_get_mvtlayerdescription_text: (a: number) => number;
  readonly __wbg_get_mvtlayerdescription_polygon: (a: number) => number;
  readonly __wbg_set_cesium3dtileslayerdescription_type: (a: number, b: number, c: number) => void;
  readonly __wbg_set_cesium3dtileslayerdescription_crs: (a: number, b: number, c: number) => void;
  readonly __wbg_set_mvtlayerdescription_text: (a: number, b: number) => void;
  readonly __wbg_get_cesium3dtileslayerdescription_data: (a: number) => any;
  readonly __wbg_get_mvtlayerdescription_billboard: (a: number) => number;
  readonly __wbg_set_cesium3dtileslayerdescription_model: (a: number, b: number) => void;
  readonly __wbg_get_mvtlayerdescription_point: (a: number) => number;
  readonly __wbg_get_cesium3dtileslayerdescription_type: (a: number) => [number, number];
  readonly __wbg_get_cesium3dtileslayerdescription_crs: (a: number) => [number, number];
  readonly __wbg_set_mvtlayerdescription_billboard: (a: number, b: number) => void;
  readonly __wbg_set_mvtlayerdescription_point: (a: number, b: number) => void;
  readonly __wbg_set_mvtlayerdescription_polyline: (a: number, b: number) => void;
  readonly __wbg_get_mvtlayerdescription_polyline: (a: number) => number;
  readonly __wbg_set_mvtlayerdescription_polygon: (a: number, b: number) => void;
  readonly __wbg_orthocamtransform_free: (a: number, b: number) => void;
  readonly __wbg_get_orthocamtransform_left: (a: number) => number;
  readonly __wbg_set_orthocamtransform_left: (a: number, b: number) => void;
  readonly __wbg_get_orthocamtransform_right: (a: number) => number;
  readonly __wbg_set_orthocamtransform_right: (a: number, b: number) => void;
  readonly __wbg_get_orthocamtransform_top: (a: number) => number;
  readonly __wbg_set_orthocamtransform_top: (a: number, b: number) => void;
  readonly __wbg_get_orthocamtransform_bottom: (a: number) => number;
  readonly __wbg_set_orthocamtransform_bottom: (a: number, b: number) => void;
  readonly orthocamtransform_new: (a: number, b: number, c: number, d: number) => number;
  readonly orthoCameraTransform: (a: bigint, b: bigint) => number;
  readonly __wbg_constructpolygonbatchedfeatureparameters_free: (a: number, b: number) => void;
  readonly __wbg_get_constructpolygonbatchedfeatureparameters_batched_feature: (a: number) => number;
  readonly __wbg_set_constructpolygonbatchedfeatureparameters_batched_feature: (a: number, b: number) => void;
  readonly __wbg_get_constructpolygonbatchedfeatureparameters_flat: (a: number) => number;
  readonly __wbg_set_constructpolygonbatchedfeatureparameters_flat: (a: number, b: number) => void;
  readonly __wbg_constructpolygonbatchedfeatureresult_free: (a: number, b: number) => void;
  readonly __wbg_get_constructpolygonbatchedfeatureresult_geometry: (a: number) => number;
  readonly __wbg_set_constructpolygonbatchedfeatureresult_geometry: (a: number, b: number) => void;
  readonly __wbg_get_constructpolygonbatchedfeatureresult_extent: (a: number) => number;
  readonly __wbg_set_constructpolygonbatchedfeatureresult_extent: (a: number, b: number) => void;
  readonly constructpolygonbatchedfeatureresult_new: (a: number, b: number) => number;
  readonly __wbg_constructpolylinebatchedfeatureparameters_free: (a: number, b: number) => void;
  readonly __wbg_constructpolylinebatchedfeatureresult_free: (a: number, b: number) => void;
  readonly __wbg_get_constructpolylinebatchedfeatureresult_geometry: (a: number) => number;
  readonly __wbg_set_constructpolylinebatchedfeatureresult_geometry: (a: number, b: number) => void;
  readonly __wbg_get_constructpolylinebatchedfeatureresult_extent: (a: number) => number;
  readonly __wbg_set_constructpolylinebatchedfeatureresult_extent: (a: number, b: number) => void;
  readonly constructpolylinebatchedfeatureresult_new: (a: number, b: number) => number;
  readonly __wbg_transferablegeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablegeometry_vertices: (a: number) => number;
  readonly __wbg_set_transferablegeometry_vertices: (a: number, b: number) => void;
  readonly __wbg_get_transferablegeometry_uvs: (a: number) => number;
  readonly __wbg_set_transferablegeometry_uvs: (a: number, b: number) => void;
  readonly __wbg_get_transferablegeometry_indices: (a: number) => number;
  readonly __wbg_set_transferablegeometry_indices: (a: number, b: number) => void;
  readonly transferablegeometry_new: (a: number, b: number, c: number) => number;
  readonly __wbg_transferablepolylinegeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinegeometry_position: (a: number) => number;
  readonly __wbg_set_transferablepolylinegeometry_position: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinegeometry_start: (a: number) => number;
  readonly __wbg_set_transferablepolylinegeometry_start: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinegeometry_forward_offset: (a: number) => number;
  readonly __wbg_set_transferablepolylinegeometry_forward_offset: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinegeometry_end_normal_and_texture_coordinate_normalization_x: (a: number) => number;
  readonly __wbg_set_transferablepolylinegeometry_end_normal_and_texture_coordinate_normalization_x: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinegeometry_right_normal_and_texture_coordinate_normalization_y: (a: number) => number;
  readonly __wbg_set_transferablepolylinegeometry_right_normal_and_texture_coordinate_normalization_y: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinegeometry_indices: (a: number) => number;
  readonly __wbg_set_transferablepolylinegeometry_indices: (a: number, b: number) => void;
  readonly transferablepolylinegeometry_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly __wbg_transferablepolygongeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygongeometry_position: (a: number) => number;
  readonly __wbg_set_transferablepolygongeometry_position: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygongeometry_scale_normal_and_cap: (a: number) => number;
  readonly __wbg_set_transferablepolygongeometry_scale_normal_and_cap: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygongeometry_batch_id_and_sel: (a: number) => number;
  readonly __wbg_set_transferablepolygongeometry_batch_id_and_sel: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygongeometry_batch_index: (a: number) => number;
  readonly __wbg_set_transferablepolygongeometry_batch_index: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygongeometry_indices: (a: number) => number;
  readonly __wbg_set_transferablepolygongeometry_indices: (a: number, b: number) => void;
  readonly transferablepolygongeometry_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbg_transferablepolygonoutlinegeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygonoutlinegeometry_skip_indices: (a: number) => number;
  readonly __wbg_set_transferablepolygonoutlinegeometry_skip_indices: (a: number, b: number) => void;
  readonly transferablepolygonoutlinegeometry_new: (a: number, b: number, c: number) => number;
  readonly __wbg_transferablepointgeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablepointgeometry_position: (a: number) => number;
  readonly __wbg_set_transferablepointgeometry_position: (a: number, b: number) => void;
  readonly __wbg_get_transferablepointgeometry_batch_id_and_sel: (a: number) => number;
  readonly __wbg_set_transferablepointgeometry_batch_id_and_sel: (a: number, b: number) => void;
  readonly __wbg_get_transferablepointgeometry_batch_index: (a: number) => number;
  readonly __wbg_set_transferablepointgeometry_batch_index: (a: number, b: number) => void;
  readonly __wbg_transferablemodelgeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablemodelgeometry_batch_id_and_selected_status: (a: number) => number;
  readonly __wbg_set_transferablemodelgeometry_batch_id_and_selected_status: (a: number, b: number) => void;
  readonly __wbg_set_transferablepolylinegeometry_batch_id_and_sel: (a: number, b: number) => void;
  readonly __wbg_set_transferablepolylinegeometry_batch_index: (a: number, b: number) => void;
  readonly __wbg_set_transferablepolygonoutlinegeometry_position: (a: number, b: number) => void;
  readonly __wbg_set_transferablepolygonoutlinegeometry_scale_normal_and_cap: (a: number, b: number) => void;
  readonly __wbg_set_transferablepolygongeometry_normal: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinegeometry_batch_id_and_sel: (a: number) => number;
  readonly __wbg_get_transferablepolylinegeometry_batch_index: (a: number) => number;
  readonly __wbg_get_transferablepolygonoutlinegeometry_position: (a: number) => number;
  readonly __wbg_get_transferablepolygonoutlinegeometry_scale_normal_and_cap: (a: number) => number;
  readonly __wbg_get_transferablepolygongeometry_normal: (a: number) => number;
  readonly __wbg_get_transferablepolylinegeometry_start_normals: (a: number) => number;
  readonly __wbg_set_constructpolylinebatchedfeatureparameters_batched_feature: (a: number, b: number) => void;
  readonly __wbg_get_constructpolylinebatchedfeatureparameters_batched_feature: (a: number) => number;
  readonly __wbg_set_transferablepolylinegeometry_start_normals: (a: number, b: number) => void;
  readonly __wbg_pointmesh_free: (a: number, b: number) => void;
  readonly __wbg_get_pointmesh_material: (a: number) => number;
  readonly __wbg_set_pointmesh_material: (a: number, b: number) => void;
  readonly __wbg_get_pointmesh_transform: (a: number) => number;
  readonly __wbg_set_pointmesh_transform: (a: number, b: number) => void;
  readonly __wbg_get_pointmesh_geometry: (a: number) => number;
  readonly __wbg_set_pointmesh_geometry: (a: number, b: number) => void;
  readonly __wbg_get_pointmesh_active: (a: number) => number;
  readonly __wbg_set_pointmesh_active: (a: number, b: number) => void;
  readonly __wbg_billboardmesh_free: (a: number, b: number) => void;
  readonly __wbg_get_billboardmesh_material: (a: number) => number;
  readonly __wbg_set_billboardmesh_material: (a: number, b: number) => void;
  readonly __wbg_get_billboardmesh_transform: (a: number) => number;
  readonly __wbg_set_billboardmesh_transform: (a: number, b: number) => void;
  readonly __wbg_get_billboardmesh_geometry: (a: number) => number;
  readonly __wbg_set_billboardmesh_geometry: (a: number, b: number) => void;
  readonly __wbg_get_billboardmesh_active: (a: number) => number;
  readonly __wbg_set_billboardmesh_active: (a: number, b: number) => void;
  readonly __wbg_textmesh_free: (a: number, b: number) => void;
  readonly __wbg_get_textmesh_material: (a: number) => number;
  readonly __wbg_set_textmesh_material: (a: number, b: number) => void;
  readonly __wbg_get_textmesh_transform: (a: number) => number;
  readonly __wbg_set_textmesh_transform: (a: number, b: number) => void;
  readonly __wbg_get_textmesh_geometry: (a: number) => number;
  readonly __wbg_set_textmesh_geometry: (a: number, b: number) => void;
  readonly __wbg_get_textmesh_active: (a: number) => number;
  readonly __wbg_set_textmesh_active: (a: number, b: number) => void;
  readonly __wbg_polylinemesh_free: (a: number, b: number) => void;
  readonly __wbg_get_polylinemesh_material: (a: number) => number;
  readonly __wbg_set_polylinemesh_material: (a: number, b: number) => void;
  readonly __wbg_get_polylinemesh_geometry: (a: number) => number;
  readonly __wbg_set_polylinemesh_geometry: (a: number, b: number) => void;
  readonly __wbg_get_polylinemesh_transform: (a: number) => number;
  readonly __wbg_set_polylinemesh_transform: (a: number, b: number) => void;
  readonly __wbg_get_polylinemesh_active: (a: number) => number;
  readonly __wbg_set_polylinemesh_active: (a: number, b: number) => void;
  readonly __wbg_polygonmesh_free: (a: number, b: number) => void;
  readonly __wbg_get_polygonmesh_material: (a: number) => number;
  readonly __wbg_set_polygonmesh_material: (a: number, b: number) => void;
  readonly __wbg_get_polygonmesh_geometry: (a: number) => number;
  readonly __wbg_set_polygonmesh_geometry: (a: number, b: number) => void;
  readonly __wbg_get_polygonmesh_outline_geometry: (a: number) => number;
  readonly __wbg_set_polygonmesh_outline_geometry: (a: number, b: number) => void;
  readonly __wbg_get_polygonmesh_transform: (a: number) => number;
  readonly __wbg_set_polygonmesh_transform: (a: number, b: number) => void;
  readonly __wbg_get_polygonmesh_active: (a: number) => number;
  readonly __wbg_set_polygonmesh_active: (a: number, b: number) => void;
  readonly __wbg_modelmesh_free: (a: number, b: number) => void;
  readonly __wbg_get_modelmesh_material: (a: number) => number;
  readonly __wbg_set_modelmesh_material: (a: number, b: number) => void;
  readonly __wbg_get_modelmesh_transform: (a: number) => number;
  readonly __wbg_set_modelmesh_transform: (a: number, b: number) => void;
  readonly __wbg_get_modelmesh_bin: (a: number) => number;
  readonly __wbg_set_modelmesh_bin: (a: number, b: number) => void;
  readonly __wbg_get_modelmesh_geometry: (a: number) => number;
  readonly __wbg_set_modelmesh_geometry: (a: number, b: number) => void;
  readonly __wbg_get_modelmesh_active: (a: number) => number;
  readonly __wbg_set_modelmesh_active: (a: number, b: number) => void;
  readonly __wbg_renderablefeature_free: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeature_point: (a: number) => number;
  readonly __wbg_set_renderablefeature_point: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeature_billboard: (a: number) => number;
  readonly __wbg_set_renderablefeature_billboard: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeature_text: (a: number) => number;
  readonly __wbg_set_renderablefeature_text: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeature_polyline: (a: number) => number;
  readonly __wbg_set_renderablefeature_polyline: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeature_polygon: (a: number) => number;
  readonly __wbg_set_renderablefeature_polygon: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeature_model: (a: number) => number;
  readonly __wbg_set_renderablefeature_model: (a: number, b: number) => void;
  readonly __wbg_returnedtransferablepolygonbatchedfeature_free: (a: number, b: number) => void;
  readonly returnedtransferablepolygonbatchedfeature_transferBatchIds: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferBatchIndices: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferOuterRing: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferOuterRingSizes: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferHoles: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferHolesBoundaries: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferHolesSizes: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferHolesTotalSizes: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_transferExpectedWindingOrders: (a: number) => any;
  readonly returnedtransferablepolygonbatchedfeature_crs: (a: number) => number;
  readonly returnedtransferablepolygonbatchedfeature_length: (a: number) => number;
  readonly __wbg_returnedtransferablepolylinebatchedfeature_free: (a: number, b: number) => void;
  readonly returnedtransferablepolylinebatchedfeature_transferBatchIds: (a: number) => any;
  readonly returnedtransferablepolylinebatchedfeature_transferBatchIndices: (a: number) => any;
  readonly returnedtransferablepolylinebatchedfeature_transferPoints: (a: number) => any;
  readonly returnedtransferablepolylinebatchedfeature_transferPointsSizes: (a: number) => any;
  readonly returnedtransferablepolylinebatchedfeature_crs: (a: number) => number;
  readonly returnedtransferablepolylinebatchedfeature_length: (a: number) => number;
  readonly __wbg_get_returnedtransferablepolygonbatchedfeature_material: (a: number) => number;
  readonly __wbg_set_returnedtransferablepolygonbatchedfeature_material: (a: number, b: number) => void;
  readonly __wbg_set_returnedtransferablepolylinebatchedfeature_material: (a: number, b: number) => void;
  readonly __wbg_get_returnedtransferablepolylinebatchedfeature_material: (a: number) => number;
  readonly __wbg_core_free: (a: number, b: number) => void;
  readonly __wbg_get_core_id: (a: number) => [number, number];
  readonly __wbg_set_core_id: (a: number, b: number, c: number) => void;
  readonly core_new: (a: number, b: number) => number;
  readonly core_start: (a: number) => void;
  readonly core_update: (a: number, b: number) => void;
  readonly core_readEvents: (a: number) => number;
  readonly core_input: (a: number, b: any) => void;
  readonly core_getBufferU8: (a: number, b: number) => any;
  readonly core_getBufferU32: (a: number, b: number) => any;
  readonly core_getBufferF32: (a: number, b: number) => any;
  readonly core_setBufferU8: (a: number, b: number, c: bigint, d: number, e: any) => void;
  readonly core_newBufferU8: (a: number, b: number, c: any) => number;
  readonly core_newBufferU32: (a: number, b: number, c: any) => number;
  readonly core_newBufferF32: (a: number, b: number, c: any) => number;
  readonly core_newBufferU8Cloned: (a: number, b: number, c: number) => number;
  readonly core_newBufferU32Cloned: (a: number, b: number, c: number) => number;
  readonly core_newBufferF32Cloned: (a: number, b: number, c: number) => number;
  readonly core_removeBuffer: (a: number, b: number) => void;
  readonly core_removeBufferU8: (a: number, b: number) => any;
  readonly core_removeBufferU32: (a: number, b: number) => any;
  readonly core_removeBufferF32: (a: number, b: number) => any;
  readonly core_triggerDataRequesterFailed: (a: number, b: bigint) => void;
  readonly core_resize: (a: number, b: number, c: number, d: number) => void;
  readonly core_addLayer: (a: number, b: any) => [number, number];
  readonly core_updateLayer: (a: number, b: number, c: number, d: any) => void;
  readonly core_deleteLayer: (a: number, b: number, c: number) => void;
  readonly core_triggerTextureFragmentLoaded: (a: number, b: bigint, c: number) => void;
  readonly core_setTileMeshPrepared: (a: number, b: bigint) => void;
  readonly core_markFeatureIsRendered: (a: number, b: number, c: number, d: bigint) => void;
  readonly core_triggerWorkerTaskCompleted: (a: number, b: bigint, c: number) => void;
  readonly core_getMartini: (a: number, b: number) => number;
  readonly core_hasDataRequester: (a: number, b: bigint) => number;
  readonly core_hasWorkerTask: (a: number, b: bigint) => number;
  readonly core_getTile: (a: number, b: bigint) => number;
  readonly core_getParentTile: (a: number, b: bigint) => number;
  readonly core_getVectorTileStates: (a: number, b: bigint) => [number, number];
  readonly core_getTileElevationDecoder: (a: number, b: bigint) => number;
  readonly core_getTransferablePolygonBatchedFeature: (a: number, b: bigint) => number;
  readonly core_getTransferablePolylineBatchedFeature: (a: number, b: bigint) => number;
  readonly core_getBatchProp: (a: number, b: number) => any;
  readonly core_getPickedBatchIds: (a: number, b: number) => [number, number];
  readonly core_clearPickingStatus: (a: number) => void;
  readonly core_readPropertiesFromFeature: (a: number, b: bigint, c: any) => void;
  readonly core_changeCamera: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly core_moveCamera: (a: number, b: number, c: number) => void;
  readonly core_moveCameraWithDirection: (a: number, b: number, c: number, d: number) => void;
  readonly core_flyTo: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly core_lookAt: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly core_getCameraStatus: (a: number) => number;
  readonly core_getCameraPositionLLE: (a: number) => [number, number];
  readonly core_getCameraPositionECEF: (a: number) => [number, number];
  readonly core_getCameraOrientation: (a: number) => number;
  readonly core_rotateAroundAxis: (a: number, b: number, c: number, d: number) => void;
  readonly core_sampleTerrainHeight: (a: number, b: number) => number;
  readonly core_registerSampleTerrainHeightEvent: (a: number, b: number) => bigint;
  readonly core_unregisterSampleTerrainHeightEvent: (a: number, b: bigint) => void;
  readonly core_setFrustum: (a: number, b: number, c: number, d: number) => void;
  readonly generateId: () => [number, number];
  readonly start: () => void;
  readonly __wbg_events_free: (a: number, b: number) => void;
  readonly __wbg_get_events_camera_transform_updated: (a: number) => number;
  readonly __wbg_set_events_camera_transform_updated: (a: number, b: number) => void;
  readonly __wbg_get_events_camera_frustum_updated: (a: number) => number;
  readonly __wbg_set_events_camera_frustum_updated: (a: number, b: number) => void;
  readonly __wbg_get_events_object_transform_updated: (a: number) => [number, number];
  readonly __wbg_set_events_object_transform_updated: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_mesh_removed: (a: number) => [number, number];
  readonly __wbg_set_events_mesh_removed: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_mesh_added: (a: number) => [number, number];
  readonly __wbg_set_events_mesh_added: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_mesh_updated: (a: number) => [number, number];
  readonly __wbg_set_events_mesh_updated: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_data_requested: (a: number) => [number, number];
  readonly __wbg_set_events_data_requested: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_data_requester_removed: (a: number) => [number, number];
  readonly __wbg_set_events_data_requester_removed: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_texture_fragment_requested: (a: number) => [number, number];
  readonly __wbg_set_events_texture_fragment_requested: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_texture_fragment_removed: (a: number) => [number, number];
  readonly __wbg_set_events_texture_fragment_removed: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_worker_task_delegated: (a: number) => [number, number];
  readonly __wbg_set_events_worker_task_delegated: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_worker_task_removed: (a: number) => [number, number];
  readonly __wbg_set_events_worker_task_removed: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_renderable_feature_added: (a: number) => [number, number];
  readonly __wbg_set_events_renderable_feature_added: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_renderable_feature_changed: (a: number) => [number, number];
  readonly __wbg_set_events_renderable_feature_changed: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_renderable_feature_removed: (a: number) => [number, number];
  readonly __wbg_set_events_renderable_feature_removed: (a: number, b: number, c: number) => void;
  readonly __wbg_get_events_update_sample_terrain_height: (a: number) => [number, number];
  readonly __wbg_set_events_update_sample_terrain_height: (a: number, b: number, c: number) => void;
  readonly __wbg_objecttransformevent_free: (a: number, b: number) => void;
  readonly __wbg_get_objecttransformevent_gen: (a: number) => number;
  readonly __wbg_set_objecttransformevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_objecttransformevent_transform: (a: number) => number;
  readonly __wbg_set_objecttransformevent_transform: (a: number, b: number) => void;
  readonly __wbg_meshadded_free: (a: number, b: number) => void;
  readonly __wbg_get_meshadded_ind: (a: number) => number;
  readonly __wbg_set_meshadded_ind: (a: number, b: number) => void;
  readonly __wbg_get_meshadded_gen: (a: number) => number;
  readonly __wbg_set_meshadded_gen: (a: number, b: number) => void;
  readonly __wbg_get_meshadded_tile_handle: (a: number) => bigint;
  readonly __wbg_set_meshadded_tile_handle: (a: number, b: bigint) => void;
  readonly __wbg_get_meshadded_ready_parent_tile_handle: (a: number) => [number, bigint];
  readonly __wbg_set_meshadded_ready_parent_tile_handle: (a: number, b: number, c: bigint) => void;
  readonly __wbg_get_meshadded_mesh: (a: number) => number;
  readonly __wbg_set_meshadded_mesh: (a: number, b: number) => void;
  readonly __wbg_get_meshadded_material: (a: number) => number;
  readonly __wbg_set_meshadded_material: (a: number, b: number) => void;
  readonly __wbg_get_meshadded_transform: (a: number) => number;
  readonly __wbg_set_meshadded_transform: (a: number, b: number) => void;
  readonly __wbg_meshchanged_free: (a: number, b: number) => void;
  readonly __wbg_get_meshchanged_ind: (a: number) => number;
  readonly __wbg_set_meshchanged_ind: (a: number, b: number) => void;
  readonly __wbg_get_meshchanged_gen: (a: number) => number;
  readonly __wbg_set_meshchanged_gen: (a: number, b: number) => void;
  readonly __wbg_get_meshchanged_mesh: (a: number) => number;
  readonly __wbg_set_meshchanged_mesh: (a: number, b: number) => void;
  readonly __wbg_get_meshchanged_material: (a: number) => number;
  readonly __wbg_set_meshchanged_material: (a: number, b: number) => void;
  readonly __wbg_mesh_free: (a: number, b: number) => void;
  readonly __wbg_get_mesh_indices: (a: number) => number;
  readonly __wbg_set_mesh_indices: (a: number, b: number) => void;
  readonly __wbg_get_mesh_active: (a: number) => number;
  readonly __wbg_set_mesh_active: (a: number, b: number) => void;
  readonly __wbg_get_mesh_render_order: (a: number) => number;
  readonly __wbg_set_mesh_render_order: (a: number, b: number) => void;
  readonly __wbg_get_mesh_uv_transform: (a: number) => number;
  readonly __wbg_set_mesh_uv_transform: (a: number, b: number) => void;
  readonly __wbg_tileuvtransform_free: (a: number, b: number) => void;
  readonly __wbg_get_tileuvtransform_offset: (a: number) => number;
  readonly __wbg_set_tileuvtransform_offset: (a: number, b: number) => void;
  readonly __wbg_get_tileuvtransform_scale: (a: number) => number;
  readonly __wbg_set_tileuvtransform_scale: (a: number, b: number) => void;
  readonly __wbg_datarequestevent_free: (a: number, b: number) => void;
  readonly __wbg_get_datarequestevent_ind: (a: number) => number;
  readonly __wbg_set_datarequestevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_datarequestevent_gen: (a: number) => number;
  readonly __wbg_set_datarequestevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_datarequestevent_handle: (a: number) => number;
  readonly __wbg_set_datarequestevent_handle: (a: number, b: number) => void;
  readonly __wbg_get_datarequestevent_extension: (a: number) => [number, number];
  readonly __wbg_set_datarequestevent_extension: (a: number, b: number, c: number) => void;
  readonly __wbg_get_datarequestevent_url: (a: number) => [number, number];
  readonly __wbg_set_datarequestevent_url: (a: number, b: number, c: number) => void;
  readonly __wbg_datarequesterremovedevent_free: (a: number, b: number) => void;
  readonly __wbg_get_datarequesterremovedevent_ind: (a: number) => number;
  readonly __wbg_set_datarequesterremovedevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_datarequesterremovedevent_gen: (a: number) => number;
  readonly __wbg_set_datarequesterremovedevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_datarequesterremovedevent_bits: (a: number) => bigint;
  readonly __wbg_set_datarequesterremovedevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_get_datarequesterremovedevent_handle: (a: number) => number;
  readonly __wbg_set_datarequesterremovedevent_handle: (a: number, b: number) => void;
  readonly __wbg_texturefragmentrequestedevent_free: (a: number, b: number) => void;
  readonly __wbg_get_texturefragmentrequestedevent_ind: (a: number) => number;
  readonly __wbg_set_texturefragmentrequestedevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_texturefragmentrequestedevent_status: (a: number) => number;
  readonly __wbg_set_texturefragmentrequestedevent_status: (a: number, b: number) => void;
  readonly __wbg_terrainheightupdatedevent_free: (a: number, b: number) => void;
  readonly __wbg_get_terrainheightupdatedevent_ind: (a: number) => number;
  readonly __wbg_set_terrainheightupdatedevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_terrainheightupdatedevent_gen: (a: number) => number;
  readonly __wbg_set_terrainheightupdatedevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_terrainheightupdatedevent_lle: (a: number) => number;
  readonly __wbg_set_terrainheightupdatedevent_lle: (a: number, b: number) => void;
  readonly __wbg_get_terrainheightupdatedevent_height: (a: number) => [number, number];
  readonly __wbg_set_terrainheightupdatedevent_height: (a: number, b: number, c: number) => void;
  readonly __wbg_entityevent_free: (a: number, b: number) => void;
  readonly __wbg_get_entityevent_ind: (a: number) => number;
  readonly __wbg_set_entityevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_entityevent_gen: (a: number) => number;
  readonly __wbg_set_entityevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_texturefragmentrequestedevent_url: (a: number) => [number, number];
  readonly __wbg_get_objecttransformevent_ind: (a: number) => number;
  readonly __wbg_get_datarequestevent_bits: (a: number) => bigint;
  readonly __wbg_get_texturefragmentrequestedevent_bits: (a: number) => bigint;
  readonly __wbg_get_texturefragmentrequestedevent_gen: (a: number) => number;
  readonly __wbg_get_terrainheightupdatedevent_bits: (a: number) => bigint;
  readonly __wbg_get_mesh_vertices: (a: number) => number;
  readonly __wbg_get_mesh_uvs: (a: number) => number;
  readonly __wbg_get_meshchanged_ready_parent_tile_handle: (a: number) => [number, bigint];
  readonly __wbg_set_texturefragmentrequestedevent_url: (a: number, b: number, c: number) => void;
  readonly __wbg_set_meshchanged_ready_parent_tile_handle: (a: number, b: number, c: bigint) => void;
  readonly __wbg_set_objecttransformevent_ind: (a: number, b: number) => void;
  readonly __wbg_set_datarequestevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_set_texturefragmentrequestedevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_set_texturefragmentrequestedevent_gen: (a: number, b: number) => void;
  readonly __wbg_set_terrainheightupdatedevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_set_mesh_vertices: (a: number, b: number) => void;
  readonly __wbg_set_mesh_uvs: (a: number, b: number) => void;
  readonly __wbg_transferablefloatattribute_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablefloatattribute_data: (a: number) => number;
  readonly __wbg_set_transferablefloatattribute_data: (a: number, b: number) => void;
  readonly __wbg_get_transferablefloatattribute_size: (a: number) => number;
  readonly __wbg_set_transferablefloatattribute_size: (a: number, b: number) => void;
  readonly transferablefloatattribute_new: (a: number, b: number) => number;
  readonly __wbg_transferableuintattribute_free: (a: number, b: number) => void;
  readonly transferableuintattribute_new: (a: number, b: number) => number;
  readonly __wbg_get_transferableuintattribute_data: (a: number) => number;
  readonly __wbg_set_transferableuintattribute_size: (a: number, b: number) => void;
  readonly __wbg_get_transferableuintattribute_size: (a: number) => number;
  readonly __wbg_set_transferableuintattribute_data: (a: number, b: number) => void;
  readonly __wbg_reconstructableentity_free: (a: number, b: number) => void;
  readonly __wbg_constructterrainmeshparameters_free: (a: number, b: number) => void;
  readonly __wbg_get_constructterrainmeshparameters_tile_size: (a: number) => number;
  readonly __wbg_set_constructterrainmeshparameters_tile_size: (a: number, b: number) => void;
  readonly __wbg_get_constructterrainmeshparameters_bytes_handle: (a: number) => number;
  readonly __wbg_set_constructterrainmeshparameters_bytes_handle: (a: number, b: number) => void;
  readonly __wbg_get_constructterrainmeshparameters_tile_handle: (a: number) => bigint;
  readonly __wbg_set_constructterrainmeshparameters_tile_handle: (a: number, b: bigint) => void;
  readonly __wbg_constructterrainmeshresult_free: (a: number, b: number) => void;
  readonly __wbg_get_constructterrainmeshresult_geometry: (a: number) => number;
  readonly __wbg_set_constructterrainmeshresult_geometry: (a: number, b: number) => void;
  readonly __wbg_get_constructterrainmeshresult_heights: (a: number) => number;
  readonly __wbg_set_constructterrainmeshresult_heights: (a: number, b: number) => void;
  readonly __wbg_get_constructterrainmeshresult_min_height: (a: number) => number;
  readonly __wbg_set_constructterrainmeshresult_min_height: (a: number, b: number) => void;
  readonly __wbg_get_constructterrainmeshresult_max_height: (a: number) => number;
  readonly __wbg_set_constructterrainmeshresult_max_height: (a: number, b: number) => void;
  readonly constructterrainmeshresult_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_upsampleterrainmeshparameters_free: (a: number, b: number) => void;
  readonly upsampleterrainmeshparameters_new: (a: bigint) => number;
  readonly __wbg_upsampleterrainmeshresult_free: (a: number, b: number) => void;
  readonly __wbg_vectortilestate_free: (a: number, b: number) => void;
  readonly __wbg_get_vectortilestate_layer_id: (a: number) => [number, number];
  readonly __wbg_set_vectortilestate_layer_id: (a: number, b: number, c: number) => void;
  readonly __wbg_get_vectortilestate_ready_parent_tile_handle: (a: number) => [number, bigint];
  readonly __wbg_set_vectortilestate_ready_parent_tile_handle: (a: number, b: number, c: bigint) => void;
  readonly __wbg_get_vectortilestate_is_rendered: (a: number) => number;
  readonly __wbg_set_vectortilestate_is_rendered: (a: number, b: number) => void;
  readonly __wbg_set_upsampleterrainmeshresult_geometry: (a: number, b: number) => void;
  readonly __wbg_get_reconstructableentity_0: (a: number) => bigint;
  readonly __wbg_get_upsampleterrainmeshparameters_tile_handle: (a: number) => bigint;
  readonly __wbg_get_upsampleterrainmeshresult_heights: (a: number) => number;
  readonly __wbg_get_upsampleterrainmeshresult_min_height: (a: number) => number;
  readonly __wbg_get_upsampleterrainmeshresult_max_height: (a: number) => number;
  readonly upsampleterrainmeshresult_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_get_upsampleterrainmeshresult_geometry: (a: number) => number;
  readonly __wbg_set_reconstructableentity_0: (a: number, b: bigint) => void;
  readonly __wbg_set_upsampleterrainmeshparameters_tile_handle: (a: number, b: bigint) => void;
  readonly __wbg_set_upsampleterrainmeshresult_heights: (a: number, b: number) => void;
  readonly __wbg_set_upsampleterrainmeshresult_min_height: (a: number, b: number) => void;
  readonly __wbg_set_upsampleterrainmeshresult_max_height: (a: number, b: number) => void;
  readonly __wbg_renderablefeatureaddedevent_free: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeatureaddedevent_ind: (a: number) => number;
  readonly __wbg_set_renderablefeatureaddedevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeatureaddedevent_gen: (a: number) => number;
  readonly __wbg_set_renderablefeatureaddedevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeatureaddedevent_bits: (a: number) => bigint;
  readonly __wbg_set_renderablefeatureaddedevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_get_renderablefeatureaddedevent_feature: (a: number) => number;
  readonly __wbg_set_renderablefeatureaddedevent_feature: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeatureaddedevent_layer_id: (a: number) => [number, number];
  readonly __wbg_set_renderablefeatureaddedevent_layer_id: (a: number, b: number, c: number) => void;
  readonly __wbg_get_renderablefeatureaddedevent_overscaled_tile_handle: (a: number) => number;
  readonly __wbg_set_renderablefeatureaddedevent_overscaled_tile_handle: (a: number, b: number) => void;
  readonly __wbg_renderablefeaturechangedevent_free: (a: number, b: number) => void;
  readonly __wbg_renderablefeatureremovedevent_free: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeatureremovedevent_ind: (a: number) => number;
  readonly __wbg_set_renderablefeatureremovedevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeatureremovedevent_gen: (a: number) => number;
  readonly __wbg_set_renderablefeatureremovedevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_renderablefeatureremovedevent_bits: (a: number) => bigint;
  readonly __wbg_set_renderablefeatureremovedevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_get_renderablefeatureremovedevent_layer_id: (a: number) => [number, number];
  readonly __wbg_set_renderablefeatureremovedevent_layer_id: (a: number, b: number, c: number) => void;
  readonly __wbg_workertaskdelegatedevent_free: (a: number, b: number) => void;
  readonly __wbg_get_workertaskdelegatedevent_ind: (a: number) => number;
  readonly __wbg_set_workertaskdelegatedevent_ind: (a: number, b: number) => void;
  readonly __wbg_get_workertaskdelegatedevent_gen: (a: number) => number;
  readonly __wbg_set_workertaskdelegatedevent_gen: (a: number, b: number) => void;
  readonly __wbg_get_workertaskdelegatedevent_bits: (a: number) => bigint;
  readonly __wbg_set_workertaskdelegatedevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_get_workertaskdelegatedevent_task: (a: number) => number;
  readonly __wbg_set_workertaskdelegatedevent_task: (a: number, b: number) => void;
  readonly __wbg_delegatedworkertasksparameters_free: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksparameters_delegator_id: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksparameters_delegator_id: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksparameters_construct_terrain_mesh: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksparameters_construct_terrain_mesh: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksparameters_upsample_terrain_mesh: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksparameters_upsample_terrain_mesh: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksparameters_construct_polygon_batched_feature: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksparameters_construct_polygon_batched_feature: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksparameters_construct_polyline_batched_feature: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksparameters_construct_polyline_batched_feature: (a: number, b: number) => void;
  readonly __wbg_delegatedworkertasksresult_free: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksresult_delegator_id: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksresult_delegator_id: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksresult_construct_terrain_mesh: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksresult_construct_terrain_mesh: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksresult_upsample_terrain_mesh: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksresult_upsample_terrain_mesh: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksresult_construct_polygon_batched_feature: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksresult_construct_polygon_batched_feature: (a: number, b: number) => void;
  readonly __wbg_get_delegatedworkertasksresult_construct_polyline_batched_feature: (a: number) => number;
  readonly __wbg_set_delegatedworkertasksresult_construct_polyline_batched_feature: (a: number, b: number) => void;
  readonly delegatedworkertasksresult_withConstructTerrainMesh: (a: number, b: number) => number;
  readonly delegatedworkertasksresult_withUpsampleTerrainMesh: (a: number, b: number) => number;
  readonly delegatedworkertasksresult_withConstructPolygonBatchedFeature: (a: number, b: number) => number;
  readonly delegatedworkertasksresult_withConstructPolylineBatchedFeature: (a: number, b: number) => number;
  readonly __wbg_get_renderablefeaturechangedevent_layer_id: (a: number) => [number, number];
  readonly __wbg_get_renderablefeaturechangedevent_overscaled_tile_handle: (a: number) => number;
  readonly __wbg_get_renderablefeaturechangedevent_ind: (a: number) => number;
  readonly __wbg_get_renderablefeaturechangedevent_gen: (a: number) => number;
  readonly __wbg_get_renderablefeaturechangedevent_bits: (a: number) => bigint;
  readonly __wbg_get_renderablefeaturechangedevent_feature: (a: number) => number;
  readonly __wbg_set_renderablefeaturechangedevent_feature: (a: number, b: number) => void;
  readonly __wbg_set_renderablefeaturechangedevent_overscaled_tile_handle: (a: number, b: number) => void;
  readonly __wbg_set_renderablefeaturechangedevent_layer_id: (a: number, b: number, c: number) => void;
  readonly __wbg_set_renderablefeaturechangedevent_ind: (a: number, b: number) => void;
  readonly __wbg_set_renderablefeaturechangedevent_gen: (a: number, b: number) => void;
  readonly __wbg_set_renderablefeaturechangedevent_bits: (a: number, b: bigint) => void;
  readonly __wbg_transferablemartini_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablemartini_size: (a: number) => number;
  readonly __wbg_set_transferablemartini_size: (a: number, b: number) => void;
  readonly transferablemartini_new: (a: number, b: number, c: number) => number;
  readonly transferablemartini_transfer_coords: (a: number) => any;
  readonly transferablemartini_fromSize: (a: number) => number;
  readonly __wbg_transferabletile_free: (a: number, b: number) => void;
  readonly __wbg_get_transferabletile_coords: (a: number) => number;
  readonly __wbg_set_transferabletile_coords: (a: number, b: number) => void;
  readonly __wbg_get_transferabletile_max_height: (a: number) => number;
  readonly __wbg_set_transferabletile_max_height: (a: number, b: number) => void;
  readonly __wbg_get_transferabletile_cached_mesh_handle: (a: number) => number;
  readonly __wbg_set_transferabletile_cached_mesh_handle: (a: number, b: number) => void;
  readonly transferabletile_new: (a: number, b: number, c: number) => number;
  readonly __wbg_transferablerasterdemdata_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablerasterdemdata_decoder: (a: number) => number;
  readonly __wbg_set_transferablerasterdemdata_decoder: (a: number, b: number) => void;
  readonly transferablerasterdemdata_new: (a: number) => number;
  readonly __wbg_pointmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_show: (a: number) => number;
  readonly __wbg_set_pointmaterial_show: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_scale_by_distance: (a: number) => number;
  readonly __wbg_set_pointmaterial_scale_by_distance: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_clamp_to_ground: (a: number) => number;
  readonly __wbg_set_pointmaterial_clamp_to_ground: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_depth_test: (a: number) => number;
  readonly __wbg_set_pointmaterial_depth_test: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_transparent: (a: number) => number;
  readonly __wbg_set_pointmaterial_transparent: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_id_property: (a: number) => [number, number];
  readonly __wbg_set_pointmaterial_id_property: (a: number, b: number, c: number) => void;
  readonly __wbg_nearfar_free: (a: number, b: number) => void;
  readonly __wbg_get_nearfar_near: (a: number) => number;
  readonly __wbg_set_nearfar_near: (a: number, b: number) => void;
  readonly __wbg_get_nearfar_far: (a: number) => number;
  readonly __wbg_set_nearfar_far: (a: number, b: number) => void;
  readonly __wbg_billboardmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_show: (a: number) => number;
  readonly __wbg_set_billboardmaterial_show: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_size: (a: number) => number;
  readonly __wbg_set_billboardmaterial_size: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_color: (a: number) => number;
  readonly __wbg_set_billboardmaterial_color: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_center: (a: number) => number;
  readonly __wbg_set_billboardmaterial_center: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_height: (a: number) => number;
  readonly __wbg_set_billboardmaterial_height: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_url: (a: number) => [number, number];
  readonly __wbg_set_billboardmaterial_url: (a: number, b: number, c: number) => void;
  readonly __wbg_get_billboardmaterial_scale_by_distance: (a: number) => number;
  readonly __wbg_set_billboardmaterial_scale_by_distance: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_clamp_to_ground: (a: number) => number;
  readonly __wbg_set_billboardmaterial_clamp_to_ground: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_depth_test: (a: number) => number;
  readonly __wbg_set_billboardmaterial_depth_test: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_transparent: (a: number) => number;
  readonly __wbg_set_billboardmaterial_transparent: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_alpha_test: (a: number) => number;
  readonly __wbg_set_billboardmaterial_alpha_test: (a: number, b: number) => void;
  readonly __wbg_get_billboardmaterial_id_property: (a: number) => [number, number];
  readonly __wbg_set_billboardmaterial_id_property: (a: number, b: number, c: number) => void;
  readonly __wbg_textmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_show: (a: number) => number;
  readonly __wbg_set_textmaterial_show: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_scale_by_distance: (a: number) => number;
  readonly __wbg_set_textmaterial_scale_by_distance: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_clamp_to_ground: (a: number) => number;
  readonly __wbg_set_textmaterial_clamp_to_ground: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_depth_test: (a: number) => number;
  readonly __wbg_set_textmaterial_depth_test: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_text: (a: number) => [number, number];
  readonly __wbg_set_textmaterial_text: (a: number, b: number, c: number) => void;
  readonly __wbg_get_textmaterial_font: (a: number) => [number, number];
  readonly __wbg_set_textmaterial_font: (a: number, b: number, c: number) => void;
  readonly __wbg_get_textmaterial_background_color: (a: number) => number;
  readonly __wbg_set_textmaterial_background_color: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_border_color: (a: number) => number;
  readonly __wbg_set_textmaterial_border_color: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_border_width: (a: number) => number;
  readonly __wbg_set_textmaterial_border_width: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_corner_radius: (a: number) => number;
  readonly __wbg_set_textmaterial_corner_radius: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_padding: (a: number) => number;
  readonly __wbg_set_textmaterial_padding: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_id_property: (a: number) => [number, number];
  readonly __wbg_set_textmaterial_id_property: (a: number, b: number, c: number) => void;
  readonly __wbg_get_textmaterial_outline_color: (a: number) => number;
  readonly __wbg_set_textmaterial_outline_color: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_outline_offset: (a: number) => number;
  readonly __wbg_set_textmaterial_outline_offset: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_outline_opacity: (a: number) => number;
  readonly __wbg_set_textmaterial_outline_opacity: (a: number, b: number) => void;
  readonly __wbg_get_textmaterial_outline_width: (a: number) => number;
  readonly __wbg_set_textmaterial_outline_width: (a: number, b: number) => void;
  readonly __wbg_polylinematerial_free: (a: number, b: number) => void;
  readonly __wbg_get_polylinematerial___internal__: (a: number) => number;
  readonly __wbg_set_polylinematerial___internal__: (a: number, b: number) => void;
  readonly polylinematerial_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly __wbg_polylineinternalmaterial_free: (a: number, b: number) => void;
  readonly __wbg_polygonmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_show: (a: number) => number;
  readonly __wbg_set_polygonmaterial_show: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_cast_shadow: (a: number) => number;
  readonly __wbg_set_polygonmaterial_cast_shadow: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_receive_shadow: (a: number) => number;
  readonly __wbg_set_polygonmaterial_receive_shadow: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_color: (a: number) => number;
  readonly __wbg_set_polygonmaterial_color: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_clamp_to_ground: (a: number) => number;
  readonly __wbg_set_polygonmaterial_clamp_to_ground: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_use_ground_normals: (a: number) => number;
  readonly __wbg_set_polygonmaterial_use_ground_normals: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_wireframe: (a: number) => number;
  readonly __wbg_set_polygonmaterial_wireframe: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_reflectivity: (a: number) => number;
  readonly __wbg_set_polygonmaterial_reflectivity: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial___internal__: (a: number) => number;
  readonly __wbg_set_polygonmaterial___internal__: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_id_property: (a: number) => [number, number];
  readonly __wbg_set_polygonmaterial_id_property: (a: number, b: number, c: number) => void;
  readonly __wbg_get_polygonmaterial_surface_show: (a: number) => number;
  readonly __wbg_set_polygonmaterial_surface_show: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_outline_show: (a: number) => number;
  readonly __wbg_set_polygonmaterial_outline_show: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_outline_color: (a: number) => number;
  readonly __wbg_set_polygonmaterial_outline_color: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_water: (a: number) => number;
  readonly __wbg_set_polygonmaterial_water: (a: number, b: number) => void;
  readonly __wbg_get_polygonmaterial_water_normal_url: (a: number) => [number, number];
  readonly __wbg_set_polygonmaterial_water_normal_url: (a: number, b: number, c: number) => void;
  readonly __wbg_get_polygonmaterial_apply_water_normal: (a: number) => number;
  readonly __wbg_set_polygonmaterial_apply_water_normal: (a: number, b: number) => void;
  readonly polygonmaterial_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number) => number;
  readonly __wbg_polygoninternalmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_polygoninternalmaterial_min_max_heights: (a: number) => [number, number];
  readonly __wbg_set_polygoninternalmaterial_min_max_heights: (a: number, b: number, c: number) => void;
  readonly __wbg_modelmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_show: (a: number) => number;
  readonly __wbg_set_modelmaterial_show: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_cast_shadow: (a: number) => number;
  readonly __wbg_set_modelmaterial_cast_shadow: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_receive_shadow: (a: number) => number;
  readonly __wbg_set_modelmaterial_receive_shadow: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_url: (a: number) => [number, number];
  readonly __wbg_set_modelmaterial_url: (a: number, b: number, c: number) => void;
  readonly __wbg_get_modelmaterial_height: (a: number) => number;
  readonly __wbg_set_modelmaterial_height: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_max_sse: (a: number) => number;
  readonly __wbg_set_modelmaterial_max_sse: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_clamp_to_ground: (a: number) => number;
  readonly __wbg_set_modelmaterial_clamp_to_ground: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_should_rotate_in_default: (a: number) => number;
  readonly __wbg_set_modelmaterial_should_rotate_in_default: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_id_property: (a: number) => [number, number];
  readonly __wbg_set_modelmaterial_id_property: (a: number, b: number, c: number) => void;
  readonly __wbg_get_modelmaterial_color: (a: number) => number;
  readonly __wbg_set_modelmaterial_color: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_metalness: (a: number) => number;
  readonly __wbg_set_modelmaterial_metalness: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_roughness: (a: number) => number;
  readonly __wbg_set_modelmaterial_roughness: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_reflectivity: (a: number) => number;
  readonly __wbg_set_modelmaterial_reflectivity: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_water: (a: number) => number;
  readonly __wbg_set_modelmaterial_water: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_water_normal_url: (a: number) => [number, number];
  readonly __wbg_set_modelmaterial_water_normal_url: (a: number, b: number, c: number) => void;
  readonly __wbg_get_modelmaterial_water_scale_normal: (a: number) => number;
  readonly __wbg_set_modelmaterial_water_scale_normal: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_water_speed: (a: number) => number;
  readonly __wbg_set_modelmaterial_water_speed: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_shininess: (a: number) => number;
  readonly __wbg_set_modelmaterial_shininess: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_specular_strength: (a: number) => number;
  readonly __wbg_set_modelmaterial_specular_strength: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_apply_water_normal: (a: number) => number;
  readonly __wbg_set_modelmaterial_apply_water_normal: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_animation_enabled: (a: number) => number;
  readonly __wbg_set_modelmaterial_animation_enabled: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_animation_clips: (a: number) => [number, number];
  readonly __wbg_set_modelmaterial_animation_clips: (a: number, b: number, c: number) => void;
  readonly __wbg_get_modelmaterial_animation_active_clip: (a: number) => [number, number];
  readonly __wbg_set_modelmaterial_animation_active_clip: (a: number, b: number, c: number) => void;
  readonly __wbg_get_modelmaterial_animation_speed: (a: number) => number;
  readonly __wbg_set_modelmaterial_animation_speed: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_animation_loop: (a: number) => number;
  readonly __wbg_set_modelmaterial_animation_loop: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_animation_crossfade_duration: (a: number) => number;
  readonly __wbg_set_modelmaterial_animation_crossfade_duration: (a: number, b: number) => void;
  readonly __wbg_get_modelmaterial_animation_auto_play: (a: number) => number;
  readonly __wbg_set_modelmaterial_animation_auto_play: (a: number, b: number) => void;
  readonly __wbg_rastertilematerial_free: (a: number, b: number) => void;
  readonly __wbg_get_rastertilematerial_min_zoom: (a: number) => number;
  readonly __wbg_set_rastertilematerial_min_zoom: (a: number, b: number) => void;
  readonly __wbg_rastertileinternalmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_rastertileinternalmaterial_shows: (a: number) => [number, number];
  readonly __wbg_set_rastertileinternalmaterial_shows: (a: number, b: number, c: number) => void;
  readonly __wbg_get_rastertileinternalmaterial_colors: (a: number) => [number, number];
  readonly __wbg_set_rastertileinternalmaterial_colors: (a: number, b: number, c: number) => void;
  readonly __wbg_get_rastertileinternalmaterial_opacities: (a: number) => [number, number];
  readonly __wbg_set_rastertileinternalmaterial_opacities: (a: number, b: number, c: number) => void;
  readonly __wbg_get_rastertileinternalmaterial_wireframe: (a: number) => number;
  readonly __wbg_set_rastertileinternalmaterial_wireframe: (a: number, b: number) => void;
  readonly rastertileinternalmaterial_texture_fragments: (a: number) => [number, number];
  readonly __wbg_vectortilematerial_free: (a: number, b: number) => void;
  readonly __wbg_get_vectortilematerial_show: (a: number) => number;
  readonly __wbg_set_vectortilematerial_show: (a: number, b: number) => void;
  readonly __wbg_get_vectortilematerial_cast_shadow: (a: number) => number;
  readonly __wbg_set_vectortilematerial_cast_shadow: (a: number, b: number) => void;
  readonly __wbg_get_vectortilematerial_receive_shadow: (a: number) => number;
  readonly __wbg_set_vectortilematerial_receive_shadow: (a: number, b: number) => void;
  readonly __wbg_get_vectortilematerial_layers: (a: number) => [number, number];
  readonly __wbg_set_vectortilematerial_layers: (a: number, b: number, c: number) => void;
  readonly __wbg_rasterterrainmaterial_free: (a: number, b: number) => void;
  readonly __wbg_get_rasterterrainmaterial_min_zoom: (a: number) => number;
  readonly __wbg_set_rasterterrainmaterial_min_zoom: (a: number, b: number) => void;
  readonly __wbg_get_rasterterrainmaterial_elevation_decoder: (a: number) => number;
  readonly __wbg_set_rasterterrainmaterial_elevation_decoder: (a: number, b: number) => void;
  readonly __wbg_get_rasterterrainmaterial_tile_size: (a: number) => number;
  readonly __wbg_set_rasterterrainmaterial_tile_size: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_center: (a: number) => number;
  readonly __wbg_get_textmaterial_center: (a: number) => number;
  readonly __wbg_set_pointmaterial_center: (a: number, b: number) => void;
  readonly __wbg_set_textmaterial_center: (a: number, b: number) => void;
  readonly __wbg_set_pointmaterial_size: (a: number, b: number) => void;
  readonly __wbg_set_pointmaterial_height: (a: number, b: number) => void;
  readonly __wbg_set_textmaterial_size: (a: number, b: number) => void;
  readonly __wbg_set_textmaterial_height: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_width: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_height: (a: number, b: number) => void;
  readonly __wbg_set_textmaterial_outline_blur: (a: number, b: number) => void;
  readonly __wbg_set_modelmaterial_size: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_height: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_extruded_height: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_roughness: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_outline_width: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_water_scale_normal: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_water_speed: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_shininess: (a: number, b: number) => void;
  readonly __wbg_set_polygonmaterial_specular_strength: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_opacity: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_max_sse: (a: number, b: number) => void;
  readonly __wbg_set_vectortilematerial_max_sse: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_id_property: (a: number, b: number, c: number) => void;
  readonly __wbg_get_polylineinternalmaterial_min_max_heights: (a: number) => [number, number];
  readonly __wbg_set_polylineinternalmaterial_min_max_heights: (a: number, b: number, c: number) => void;
  readonly __wbg_get_polylinematerial_show: (a: number) => number;
  readonly __wbg_get_polylinematerial_cast_shadow: (a: number) => number;
  readonly __wbg_get_polylinematerial_receive_shadow: (a: number) => number;
  readonly __wbg_get_polylinematerial_clamp_to_ground: (a: number) => number;
  readonly __wbg_get_polylinematerial_use_ground_normals: (a: number) => number;
  readonly __wbg_get_rastertilematerial_show: (a: number) => number;
  readonly __wbg_get_rastertilematerial_wireframe: (a: number) => number;
  readonly __wbg_get_rastertilematerial_tms: (a: number) => number;
  readonly __wbg_get_rastertilematerial_should_compute_normal_from_vertex: (a: number) => number;
  readonly __wbg_get_rastertileinternalmaterial_cast_shadow: (a: number) => number;
  readonly __wbg_get_rastertileinternalmaterial_receive_shadow: (a: number) => number;
  readonly __wbg_get_rastertileinternalmaterial_should_compute_normal_from_vertex: (a: number) => number;
  readonly __wbg_get_rasterterrainmaterial_show: (a: number) => number;
  readonly __wbg_get_rasterterrainmaterial_cast_shadow: (a: number) => number;
  readonly __wbg_get_rasterterrainmaterial_receive_shadow: (a: number) => number;
  readonly __wbg_get_rasterterrainmaterial_wireframe: (a: number) => number;
  readonly __wbg_get_polylinematerial_id_property: (a: number) => [number, number];
  readonly __wbg_set_polylinematerial_show: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_cast_shadow: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_receive_shadow: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_clamp_to_ground: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_use_ground_normals: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_show: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_wireframe: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_tms: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_should_compute_normal_from_vertex: (a: number, b: number) => void;
  readonly __wbg_set_rastertileinternalmaterial_cast_shadow: (a: number, b: number) => void;
  readonly __wbg_set_rastertileinternalmaterial_receive_shadow: (a: number, b: number) => void;
  readonly __wbg_set_rastertileinternalmaterial_should_compute_normal_from_vertex: (a: number, b: number) => void;
  readonly __wbg_set_rasterterrainmaterial_show: (a: number, b: number) => void;
  readonly __wbg_set_rasterterrainmaterial_cast_shadow: (a: number, b: number) => void;
  readonly __wbg_set_rasterterrainmaterial_receive_shadow: (a: number, b: number) => void;
  readonly __wbg_set_rasterterrainmaterial_wireframe: (a: number, b: number) => void;
  readonly __wbg_set_pointmaterial_color: (a: number, b: number) => void;
  readonly __wbg_set_textmaterial_color: (a: number, b: number) => void;
  readonly __wbg_set_polylinematerial_color: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_segments: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_color: (a: number, b: number) => void;
  readonly __wbg_set_rastertilematerial_max_zoom: (a: number, b: number) => void;
  readonly __wbg_set_vectortilematerial_max_zoom: (a: number, b: number) => void;
  readonly __wbg_set_rasterterrainmaterial_segments: (a: number, b: number) => void;
  readonly __wbg_set_rasterterrainmaterial_max_zoom: (a: number, b: number) => void;
  readonly __wbg_set_vectortilematerial_overscaled_max_zoom: (a: number, b: number) => void;
  readonly __wbg_get_pointmaterial_color: (a: number) => number;
  readonly __wbg_get_textmaterial_color: (a: number) => number;
  readonly __wbg_get_polylinematerial_color: (a: number) => number;
  readonly __wbg_get_rastertilematerial_segments: (a: number) => number;
  readonly __wbg_get_rastertilematerial_color: (a: number) => number;
  readonly __wbg_get_rastertilematerial_max_zoom: (a: number) => number;
  readonly __wbg_get_vectortilematerial_max_zoom: (a: number) => number;
  readonly __wbg_get_rasterterrainmaterial_segments: (a: number) => number;
  readonly __wbg_get_rasterterrainmaterial_max_zoom: (a: number) => number;
  readonly __wbg_get_vectortilematerial_overscaled_max_zoom: (a: number) => number;
  readonly __wbg_get_pointmaterial_size: (a: number) => number;
  readonly __wbg_get_pointmaterial_height: (a: number) => number;
  readonly __wbg_get_textmaterial_size: (a: number) => number;
  readonly __wbg_get_textmaterial_height: (a: number) => number;
  readonly __wbg_get_polylinematerial_width: (a: number) => number;
  readonly __wbg_get_polylinematerial_height: (a: number) => number;
  readonly __wbg_get_textmaterial_outline_blur: (a: number) => number;
  readonly __wbg_get_modelmaterial_size: (a: number) => number;
  readonly __wbg_get_polygonmaterial_height: (a: number) => number;
  readonly __wbg_get_polygonmaterial_extruded_height: (a: number) => number;
  readonly __wbg_get_polygonmaterial_roughness: (a: number) => number;
  readonly __wbg_get_polygonmaterial_outline_width: (a: number) => number;
  readonly __wbg_get_polygonmaterial_water_scale_normal: (a: number) => number;
  readonly __wbg_get_polygonmaterial_water_speed: (a: number) => number;
  readonly __wbg_get_polygonmaterial_shininess: (a: number) => number;
  readonly __wbg_get_polygonmaterial_specular_strength: (a: number) => number;
  readonly __wbg_get_rastertilematerial_opacity: (a: number) => number;
  readonly __wbg_get_rastertilematerial_max_sse: (a: number) => number;
  readonly __wbg_get_vectortilematerial_max_sse: (a: number) => number;
  readonly __wbg_ellipsoidgeodesic_free: (a: number, b: number) => void;
  readonly __wbg_get_ellipsoidgeodesic_start: (a: number) => number;
  readonly __wbg_set_ellipsoidgeodesic_start: (a: number, b: number) => void;
  readonly __wbg_get_ellipsoidgeodesic_end: (a: number) => number;
  readonly __wbg_set_ellipsoidgeodesic_end: (a: number, b: number) => void;
  readonly __wbg_get_ellipsoidgeodesic_distance: (a: number) => number;
  readonly __wbg_set_ellipsoidgeodesic_distance: (a: number, b: number) => void;
  readonly __wbg_get_ellipsoidgeodesic_start_heading: (a: number) => number;
  readonly __wbg_set_ellipsoidgeodesic_start_heading: (a: number, b: number) => void;
  readonly __wbg_get_ellipsoidgeodesic_end_heading: (a: number) => number;
  readonly __wbg_set_ellipsoidgeodesic_end_heading: (a: number, b: number) => void;
  readonly ellipsoidgeodesic_new: (a: number, b: number) => number;
  readonly ellipsoidgeodesic_interpolateGeodeticPoints: (a: number, b: number) => [number, number];
  readonly ellipsoidgeodesic_interpolateDistance: (a: number, b: number) => number;
  readonly __wbg_constructedpolylinegeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_constructedpolylinegeometry_extent: (a: number) => number;
  readonly __wbg_set_constructedpolylinegeometry_extent: (a: number, b: number) => void;
  readonly constructedpolylinegeometry_position: (a: number) => any;
  readonly constructedpolylinegeometry_position_size: (a: number) => number;
  readonly constructedpolylinegeometry_start: (a: number) => any;
  readonly constructedpolylinegeometry_start_size: (a: number) => number;
  readonly constructedpolylinegeometry_forward_offset: (a: number) => any;
  readonly constructedpolylinegeometry_forward_offset_size: (a: number) => number;
  readonly constructedpolylinegeometry_start_normals: (a: number) => any;
  readonly constructedpolylinegeometry_start_normals_size: (a: number) => number;
  readonly constructedpolylinegeometry_end_normal_and_texture_coordinate_normalization_x: (a: number) => any;
  readonly constructedpolylinegeometry_end_normal_and_texture_coordinate_normalization_x_size: (a: number) => number;
  readonly constructedpolylinegeometry_right_normal_and_texture_coordinate_normalization_y: (a: number) => any;
  readonly constructedpolylinegeometry_right_normal_and_texture_coordinate_normalization_y_size: (a: number) => number;
  readonly constructedpolylinegeometry_batch_id: (a: number) => any;
  readonly constructedpolylinegeometry_batch_id_size: (a: number) => number;
  readonly constructedpolylinegeometry_batch_index: (a: number) => any;
  readonly constructedpolylinegeometry_batch_index_size: (a: number) => number;
  readonly constructedpolylinegeometry_indices: (a: number) => any;
  readonly __wbg_polylinegeometry_free: (a: number, b: number) => void;
  readonly polylinegeometry_position: (a: number) => any;
  readonly polylinegeometry_start: (a: number) => any;
  readonly polylinegeometry_forward_offset: (a: number) => any;
  readonly polylinegeometry_start_normals: (a: number) => any;
  readonly polylinegeometry_end_normal_and_texture_coordinate_normalization_x: (a: number) => any;
  readonly polylinegeometry_right_normal_and_texture_coordinate_normalization_y: (a: number) => any;
  readonly polylinegeometry_batch_id: (a: number) => any;
  readonly polylinegeometry_batch_index: (a: number) => any;
  readonly polylinegeometry_indices: (a: number) => any;
  readonly __wbg_polylinegeometryattributes_free: (a: number, b: number) => void;
  readonly polylinegeometryattributes_transfer_position: (a: number) => any;
  readonly polylinegeometryattributes_transfer_start: (a: number) => any;
  readonly polylinegeometryattributes_transfer_forward_offset: (a: number) => any;
  readonly polylinegeometryattributes_transfer_start_normals: (a: number) => any;
  readonly polylinegeometryattributes_transfer_end_normal_and_texture_coordinate_normalization_x: (a: number) => any;
  readonly polylinegeometryattributes_transfer_right_normal_and_texture_coordinate_normalization_y: (a: number) => any;
  readonly polylinegeometryattributes_transfer_batch_id: (a: number) => any;
  readonly polylinegeometryattributes_transfer_batch_index: (a: number) => any;
  readonly __wbg_cachedmeshhandle_free: (a: number, b: number) => void;
  readonly __wbg_get_cachedmeshhandle_vertices: (a: number) => number;
  readonly __wbg_set_cachedmeshhandle_vertices: (a: number, b: number) => void;
  readonly __wbg_get_cachedmeshhandle_indices: (a: number) => number;
  readonly __wbg_set_cachedmeshhandle_indices: (a: number, b: number) => void;
  readonly __wbg_get_cachedmeshhandle_uvs: (a: number) => number;
  readonly __wbg_set_cachedmeshhandle_uvs: (a: number, b: number) => void;
  readonly __wbg_get_cachedmeshhandle_heights: (a: number) => number;
  readonly __wbg_set_cachedmeshhandle_heights: (a: number, b: number) => void;
  readonly cachedmeshhandle_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_plane_free: (a: number, b: number) => void;
  readonly __wbg_get_plane_normal: (a: number) => number;
  readonly __wbg_set_plane_normal: (a: number, b: number) => void;
  readonly __wbg_get_plane_distance: (a: number) => number;
  readonly __wbg_set_plane_distance: (a: number, b: number) => void;
  readonly polylinegeometry_position_size: (a: number) => number;
  readonly polylinegeometry_start_size: (a: number) => number;
  readonly polylinegeometry_forward_offset_size: (a: number) => number;
  readonly polylinegeometry_start_normals_size: (a: number) => number;
  readonly polylinegeometry_end_normal_and_texture_coordinate_normalization_x_size: (a: number) => number;
  readonly polylinegeometry_right_normal_and_texture_coordinate_normalization_y_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_position_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_start_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_forward_offset_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_start_normals_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_end_normal_and_texture_coordinate_normalization_x_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_right_normal_and_texture_coordinate_normalization_y_size: (a: number) => number;
  readonly polylinegeometry_batch_id_size: (a: number) => number;
  readonly polylinegeometry_batch_index_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_batch_id_size: (a: number) => number;
  readonly polylinegeometryattributes_transfer_batch_index_size: (a: number) => number;
  readonly __wbg_lle_free: (a: number, b: number) => void;
  readonly __wbg_get_lle_lat: (a: number) => number;
  readonly __wbg_set_lle_lat: (a: number, b: number) => void;
  readonly __wbg_get_lle_lng: (a: number) => number;
  readonly __wbg_set_lle_lng: (a: number, b: number) => void;
  readonly __wbg_get_lle_height: (a: number) => number;
  readonly __wbg_set_lle_height: (a: number, b: number) => void;
  readonly lle_new: (a: number, b: number, c: number) => number;
  readonly __wbg_transferablepolygonbatchedfeature_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygonbatchedfeature_crs: (a: number) => number;
  readonly __wbg_set_transferablepolygonbatchedfeature_crs: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolygonbatchedfeature_length: (a: number) => number;
  readonly __wbg_set_transferablepolygonbatchedfeature_length: (a: number, b: number) => void;
  readonly transferablepolygonbatchedfeature_constructor: (a: number, b: number) => number;
  readonly transferablepolygonbatchedfeature_setOuterRing: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setOuterRingSizes: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setHoles: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setHolesSizes: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setHolesTotalSizes: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setHolesBoundaries: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setBatchIds: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setBatchIndices: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_setExpectedWindingOrders: (a: number, b: number, c: any) => void;
  readonly transferablepolygonbatchedfeature_transferBatchIds: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferBatchIndices: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferOuterRing: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferOuterRingSizes: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferHoles: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferHolesBoundaries: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferHolesSizes: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferHolesTotalSizes: (a: number) => any;
  readonly transferablepolygonbatchedfeature_transferExpectedWindingOrders: (a: number) => any;
  readonly __wbg_vec2_free: (a: number, b: number) => void;
  readonly vec2_new: (a: number, b: number) => number;
  readonly __wbg_vec3_free: (a: number, b: number) => void;
  readonly vec3_new: (a: number, b: number, c: number) => number;
  readonly __wbg_get_vec2_x: (a: number) => number;
  readonly __wbg_get_vec2_y: (a: number) => number;
  readonly __wbg_get_vec3_x: (a: number) => number;
  readonly __wbg_get_vec3_y: (a: number) => number;
  readonly __wbg_get_vec3_z: (a: number) => number;
  readonly __wbg_set_vec2_x: (a: number, b: number) => void;
  readonly __wbg_set_vec2_y: (a: number, b: number) => void;
  readonly __wbg_set_vec3_x: (a: number, b: number) => void;
  readonly __wbg_set_vec3_y: (a: number, b: number) => void;
  readonly __wbg_set_vec3_z: (a: number, b: number) => void;
  readonly __wbg_floatattribute_free: (a: number, b: number) => void;
  readonly __wbg_get_floatattribute_size: (a: number) => number;
  readonly __wbg_set_floatattribute_size: (a: number, b: number) => void;
  readonly floatattribute_new: (a: number, b: number, c: number) => number;
  readonly floatattribute_transferData: (a: number) => any;
  readonly __wbg_uintattribute_free: (a: number, b: number) => void;
  readonly uintattribute_transferData: (a: number) => any;
  readonly __wbg_geometry_free: (a: number, b: number) => void;
  readonly geometry_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly geometry_transferVertices: (a: number) => any;
  readonly geometry_transferUvs: (a: number) => any;
  readonly geometry_transferIndices: (a: number) => any;
  readonly __wbg_returnedconstructedterrainmesh_free: (a: number, b: number) => void;
  readonly __wbg_get_returnedconstructedterrainmesh_max_height: (a: number) => number;
  readonly __wbg_set_returnedconstructedterrainmesh_max_height: (a: number, b: number) => void;
  readonly __wbg_get_returnedconstructedterrainmesh_min_height: (a: number) => number;
  readonly __wbg_set_returnedconstructedterrainmesh_min_height: (a: number, b: number) => void;
  readonly returnedconstructedterrainmesh_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly returnedconstructedterrainmesh_transferVertices: (a: number) => any;
  readonly returnedconstructedterrainmesh_transferUvs: (a: number) => any;
  readonly returnedconstructedterrainmesh_transferIndices: (a: number) => any;
  readonly returnedconstructedterrainmesh_transferHeights: (a: number) => any;
  readonly __wbg_upsamplableterraingeometry_free: (a: number, b: number) => void;
  readonly __wbg_ray_free: (a: number, b: number) => void;
  readonly __wbg_get_ray_origin: (a: number) => number;
  readonly __wbg_set_ray_origin: (a: number, b: number) => void;
  readonly __wbg_get_ray_direction: (a: number) => number;
  readonly __wbg_set_ray_direction: (a: number, b: number) => void;
  readonly ray_new: (a: number, b: number) => number;
  readonly ray_getPoint: (a: number, b: number) => number;
  readonly __wbg_set_uintattribute_size: (a: number, b: number) => void;
  readonly upsamplableterraingeometry_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbg_get_uintattribute_size: (a: number) => number;
  readonly uintattribute_new: (a: number, b: number, c: number) => number;
  readonly __wbg_tilexyz_free: (a: number, b: number) => void;
  readonly __wbg_get_tilexyz_x: (a: number) => number;
  readonly __wbg_set_tilexyz_x: (a: number, b: number) => void;
  readonly __wbg_get_tilexyz_y: (a: number) => number;
  readonly __wbg_set_tilexyz_y: (a: number, b: number) => void;
  readonly __wbg_get_tilexyz_z: (a: number) => number;
  readonly __wbg_set_tilexyz_z: (a: number, b: number) => void;
  readonly tilexyz_new: (a: number, b: number, c: number) => number;
  readonly __wbg_overscaledtilehandle_free: (a: number, b: number) => void;
  readonly __wbg_get_overscaledtilehandle_handle: (a: number) => bigint;
  readonly __wbg_set_overscaledtilehandle_handle: (a: number, b: bigint) => void;
  readonly __wbg_extentradianf32_free: (a: number, b: number) => void;
  readonly __wbg_get_extentradianf32_west: (a: number) => number;
  readonly __wbg_set_extentradianf32_west: (a: number, b: number) => void;
  readonly __wbg_get_extentradianf32_south: (a: number) => number;
  readonly __wbg_set_extentradianf32_south: (a: number, b: number) => void;
  readonly __wbg_get_extentradianf32_east: (a: number) => number;
  readonly __wbg_set_extentradianf32_east: (a: number, b: number) => void;
  readonly __wbg_get_extentradianf32_north: (a: number) => number;
  readonly __wbg_set_extentradianf32_north: (a: number, b: number) => void;
  readonly extentradianf32_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_transferablehierarchy_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablehierarchy_expected_winding_order: (a: number) => number;
  readonly __wbg_set_transferablehierarchy_expected_winding_order: (a: number, b: number) => void;
  readonly __wbg_transferableholes_free: (a: number, b: number) => void;
  readonly __wbg_windingorder_free: (a: number, b: number) => void;
  readonly __wbg_get_windingorder_0: (a: number) => number;
  readonly __wbg_set_windingorder_0: (a: number, b: number) => void;
  readonly __wbg_transferablepolylinebatchedfeature_free: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinebatchedfeature_crs: (a: number) => number;
  readonly __wbg_set_transferablepolylinebatchedfeature_crs: (a: number, b: number) => void;
  readonly __wbg_get_transferablepolylinebatchedfeature_length: (a: number) => number;
  readonly __wbg_set_transferablepolylinebatchedfeature_length: (a: number, b: number) => void;
  readonly transferablepolylinebatchedfeature_constructor: (a: number, b: number) => number;
  readonly transferablepolylinebatchedfeature_setBatchIds: (a: number, b: number, c: any) => void;
  readonly transferablepolylinebatchedfeature_setBatchIndices: (a: number, b: number, c: any) => void;
  readonly transferablepolylinebatchedfeature_setPoints: (a: number, b: number, c: any) => void;
  readonly transferablepolylinebatchedfeature_setPointsSizes: (a: number, b: number, c: any) => void;
  readonly transferablepolylinebatchedfeature_transferBatchIds: (a: number) => any;
  readonly transferablepolylinebatchedfeature_transferBatchIndices: (a: number) => any;
  readonly transferablepolylinebatchedfeature_transferPoints: (a: number) => any;
  readonly transferablepolylinebatchedfeature_transferPointsSizes: (a: number) => any;
  readonly __wbg_texturefragment_free: (a: number, b: number) => void;
  readonly __wbg_get_texturefragment_ind: (a: number) => number;
  readonly __wbg_set_texturefragment_ind: (a: number, b: number) => void;
  readonly __wbg_get_texturefragment_gen: (a: number) => number;
  readonly __wbg_set_texturefragment_gen: (a: number, b: number) => void;
  readonly __wbg_constructedpolygongeometry_free: (a: number, b: number) => void;
  readonly __wbg_get_constructedpolygongeometry_extent: (a: number) => number;
  readonly __wbg_set_constructedpolygongeometry_extent: (a: number, b: number) => void;
  readonly constructedpolygongeometry_position: (a: number) => any;
  readonly constructedpolygongeometry_position_size: (a: number) => number;
  readonly constructedpolygongeometry_normal: (a: number) => any;
  readonly constructedpolygongeometry_normal_size: (a: number) => number;
  readonly constructedpolygongeometry_scale_normal_and_cap: (a: number) => any;
  readonly constructedpolygongeometry_scale_normal_and_cap_size: (a: number) => number;
  readonly constructedpolygongeometry_batch_id: (a: number) => any;
  readonly constructedpolygongeometry_batch_id_size: (a: number) => number;
  readonly constructedpolygongeometry_batch_index: (a: number) => any;
  readonly constructedpolygongeometry_batch_index_size: (a: number) => number;
  readonly constructedpolygongeometry_indices: (a: number) => any;
  readonly __wbg_polygongeometry_free: (a: number, b: number) => void;
  readonly polygongeometry_position: (a: number) => any;
  readonly polygongeometry_position_size: (a: number) => number;
  readonly polygongeometry_normal: (a: number) => any;
  readonly polygongeometry_normal_size: (a: number) => number;
  readonly polygongeometry_scale_normal_and_cap: (a: number) => any;
  readonly polygongeometry_scale_normal_and_cap_size: (a: number) => number;
  readonly polygongeometry_batch_id: (a: number) => any;
  readonly polygongeometry_batch_id_size: (a: number) => number;
  readonly polygongeometry_batch_index: (a: number) => any;
  readonly polygongeometry_batch_index_size: (a: number) => number;
  readonly polygongeometry_indices: (a: number) => any;
  readonly __wbg_polygongeometryattributes_free: (a: number, b: number) => void;
  readonly polygongeometryattributes_transfer_position: (a: number) => any;
  readonly polygongeometryattributes_transfer_normal: (a: number) => any;
  readonly polygongeometryattributes_transfer_scale_normal_and_cap: (a: number) => any;
  readonly polygongeometryattributes_transfer_batch_id: (a: number) => any;
  readonly polygongeometryattributes_transfer_batch_index: (a: number) => any;
  readonly __wbg_elevationdecoder_free: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_r_scaler: (a: number) => number;
  readonly __wbg_set_elevationdecoder_r_scaler: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_g_scaler: (a: number) => number;
  readonly __wbg_set_elevationdecoder_g_scaler: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_b_scaler: (a: number) => number;
  readonly __wbg_set_elevationdecoder_b_scaler: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_offset: (a: number) => number;
  readonly __wbg_set_elevationdecoder_offset: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_max_offset: (a: number) => number;
  readonly __wbg_set_elevationdecoder_max_offset: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_min_offset: (a: number) => number;
  readonly __wbg_set_elevationdecoder_min_offset: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_boundary: (a: number) => number;
  readonly __wbg_set_elevationdecoder_boundary: (a: number, b: number) => void;
  readonly __wbg_get_elevationdecoder_epsilon: (a: number) => number;
  readonly __wbg_set_elevationdecoder_epsilon: (a: number, b: number) => void;
  readonly elevationdecoder_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly elevationdecoder_japanGSI: () => number;
  readonly elevationdecoder_mapbox: () => number;
  readonly polygongeometryattributes_transfer_position_size: (a: number) => number;
  readonly polygongeometryattributes_transfer_normal_size: (a: number) => number;
  readonly polygongeometryattributes_transfer_scale_normal_and_cap_size: (a: number) => number;
  readonly polygongeometryattributes_transfer_batch_id_size: (a: number) => number;
  readonly polygongeometryattributes_transfer_batch_index_size: (a: number) => number;
  readonly __wbg_camerastatus_free: (a: number, b: number) => void;
  readonly __wbg_get_camerastatus_status: (a: number) => [number, number];
  readonly __wbg_set_camerastatus_status: (a: number, b: number, c: number) => void;
  readonly __wbg_cameraorientation_free: (a: number, b: number) => void;
  readonly __wbg_transform_free: (a: number, b: number) => void;
  readonly __wbg_get_transform_qy: (a: number) => number;
  readonly __wbg_set_transform_qy: (a: number, b: number) => void;
  readonly __wbg_get_transform_qz: (a: number) => number;
  readonly __wbg_set_transform_qz: (a: number, b: number) => void;
  readonly __wbg_get_transform_qw: (a: number) => number;
  readonly __wbg_set_transform_qw: (a: number, b: number) => void;
  readonly __wbg_get_transform_sx: (a: number) => number;
  readonly __wbg_set_transform_sx: (a: number, b: number) => void;
  readonly __wbg_get_transform_sy: (a: number) => number;
  readonly __wbg_set_transform_sy: (a: number, b: number) => void;
  readonly __wbg_get_transform_sz: (a: number) => number;
  readonly __wbg_set_transform_sz: (a: number, b: number) => void;
  readonly transform_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly __wbg_camerafrustum_free: (a: number, b: number) => void;
  readonly __wbg_get_camerafrustum_near: (a: number) => number;
  readonly __wbg_set_camerafrustum_near: (a: number, b: number) => void;
  readonly __wbg_get_camerafrustum_far: (a: number) => number;
  readonly __wbg_set_camerafrustum_far: (a: number, b: number) => void;
  readonly __wbg_get_camerafrustum_fov: (a: number) => number;
  readonly __wbg_set_camerafrustum_fov: (a: number, b: number) => void;
  readonly __wbg_get_camerafrustum_aspect_ratio: (a: number) => number;
  readonly __wbg_set_camerafrustum_aspect_ratio: (a: number, b: number) => void;
  readonly camerafrustum_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_window_free: (a: number, b: number) => void;
  readonly window_new: (a: number, b: number, c: number) => number;
  readonly __wbg_get_transform_tx: (a: number) => number;
  readonly __wbg_get_transform_ty: (a: number) => number;
  readonly __wbg_get_transform_tz: (a: number) => number;
  readonly __wbg_get_cameraorientation_heading: (a: number) => number;
  readonly __wbg_get_cameraorientation_pitch: (a: number) => number;
  readonly __wbg_get_cameraorientation_roll: (a: number) => number;
  readonly __wbg_get_transform_qx: (a: number) => number;
  readonly __wbg_get_window_width: (a: number) => number;
  readonly __wbg_get_window_height: (a: number) => number;
  readonly __wbg_get_window_pixel_ratio: (a: number) => number;
  readonly __wbg_set_transform_tx: (a: number, b: number) => void;
  readonly __wbg_set_transform_ty: (a: number, b: number) => void;
  readonly __wbg_set_transform_tz: (a: number, b: number) => void;
  readonly __wbg_set_cameraorientation_heading: (a: number, b: number) => void;
  readonly __wbg_set_cameraorientation_pitch: (a: number, b: number) => void;
  readonly __wbg_set_cameraorientation_roll: (a: number, b: number) => void;
  readonly __wbg_set_transform_qx: (a: number, b: number) => void;
  readonly __wbg_set_window_width: (a: number, b: number) => void;
  readonly __wbg_set_window_height: (a: number, b: number) => void;
  readonly __wbg_set_window_pixel_ratio: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
