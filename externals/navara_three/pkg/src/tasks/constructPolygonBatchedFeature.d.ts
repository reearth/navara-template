import { ConstructedPolygonGeometryLike, PolygonMaterialLike, TransferablePolygonBatchedFeatureLike } from '@navara/core';
import { Promise } from '@navara/worker';
export declare function constructPolygonBatchedFeature(transferableBatchedFeatureLike: TransferablePolygonBatchedFeatureLike, materialLike: PolygonMaterialLike, flat: boolean): Promise<ConstructedPolygonGeometryLike | undefined>;
