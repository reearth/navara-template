/* tslint:disable */
/* eslint-disable */
export function getWGS84SemiMajorAxis(): number;
export function getWGS84SemiMinorAxis(): number;
export function getWGS84EccentricitySquared(): number;
export function getWGS84Flattening(): number;
export function getWGS84Eccentricity(): number;
export function getPlaneFromPointNormal(point: Vec3, normal: Vec3): Plane;
export function getPickRay(window: Window, transform: Transform, frustum: CameraFrustum, screen_pos: Vec2): Ray;
export function getRayPlaneIntersection(ray: Ray, plane: Plane): Vec3 | undefined;
export function getHeightFromEllipsoid(point: Vec3): number;
export function geodeticToXyz(lle: LLE): Vec3;
export function xyzToGeodetic(vec3: Vec3): LLE;
export function angleToRadian(degree: number): number;
export function angleToDegree(radian: number): number;
export function screenToWorld(window: Window, transform: Transform, frustum: CameraFrustum, screen_pos: Vec2): Vec3 | undefined;
export function geodeticSurfaceNormal(lle: LLE): Vec3;
export function eastNorthUpToFixedFrame(origin: Vec3): Float32Array;
export function northEastDownToFixedFrame(origin: Vec3): Float32Array;
export function northUpEastToFixedFrame(origin: Vec3): Float32Array;
export function northWestUpToFixedFrame(origin: Vec3): Float32Array;
export function worldToScreen(window: Window, transform: Transform, frustum: CameraFrustum, world_pos: Vec3): Vec2 | undefined;
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
export class NearFar {
  private constructor();
  free(): void;
  near: number;
  far: number;
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
export class TextureFragment {
  private constructor();
  free(): void;
  ind: number;
  gen: number;
}
export class TileXYZ {
  free(): void;
  constructor(x: number, y: number, z: number);
  x: number;
  y: number;
  z: number;
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

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly getWGS84SemiMajorAxis: () => number;
  readonly getWGS84SemiMinorAxis: () => number;
  readonly getWGS84EccentricitySquared: () => number;
  readonly getWGS84Flattening: () => number;
  readonly getWGS84Eccentricity: () => number;
  readonly getPlaneFromPointNormal: (a: number, b: number) => number;
  readonly getPickRay: (a: number, b: number, c: number, d: number) => number;
  readonly getRayPlaneIntersection: (a: number, b: number) => number;
  readonly getHeightFromEllipsoid: (a: number) => number;
  readonly geodeticToXyz: (a: number) => number;
  readonly xyzToGeodetic: (a: number) => number;
  readonly angleToRadian: (a: number) => number;
  readonly angleToDegree: (a: number) => number;
  readonly screenToWorld: (a: number, b: number, c: number, d: number) => number;
  readonly geodeticSurfaceNormal: (a: number) => number;
  readonly eastNorthUpToFixedFrame: (a: number) => [number, number];
  readonly northEastDownToFixedFrame: (a: number) => [number, number];
  readonly northUpEastToFixedFrame: (a: number) => [number, number];
  readonly northWestUpToFixedFrame: (a: number) => [number, number];
  readonly worldToScreen: (a: number, b: number, c: number, d: number) => number;
  readonly start: () => void;
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
