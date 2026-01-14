import { ReturnedConstructedTerrainMeshLike, TransferableRasterDEMDataLike, TransferableTileLike } from '@navara/core';
import { Promise } from '@navara/worker';
export declare function constructTerrainMesh(bytes: Uint8Array, tileLike: TransferableTileLike, rasterDEMDataLike: TransferableRasterDEMDataLike, size: number): Promise<{
    result: ReturnedConstructedTerrainMeshLike;
}>;
