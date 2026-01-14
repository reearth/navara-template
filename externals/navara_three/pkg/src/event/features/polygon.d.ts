import { EventHandler, TileHandle } from '@navara/core';
import { PolygonMesh as NavaraPolygonMesh } from '../../../navara_wasm';
import { BufferLoader } from '../';
import { ViewEvents } from '../..';
import { PolygonMesh } from '../../mesh';
import { CommonUniforms } from '../../uniforms';
export declare function renderPolygon(mesh: NavaraPolygonMesh, buf: BufferLoader, uniforms: CommonUniforms, tileHandle: TileHandle | undefined, viewEvents: EventHandler<ViewEvents>): Promise<PolygonMesh>;
export declare function processPolygonChanged(obj: PolygonMesh, m: NavaraPolygonMesh, active: boolean, tileHandle: TileHandle | undefined): void;
