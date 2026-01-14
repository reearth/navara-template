import { ConstructedPolylineGeometryLike, PolylineMaterialLike, TransferablePolylineBatchedFeatureLike } from '@navara/core';
import { Promise } from '@navara/worker';
export declare function constructPolylineBatchedFeature(transferableBatchedFeatureLike: TransferablePolylineBatchedFeatureLike, materialLike: PolylineMaterialLike): Promise<ConstructedPolylineGeometryLike | undefined>;
