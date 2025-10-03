import { EventHandler } from '@navara/core';
import { PolygonMesh as NavaraPolygonMesh } from '../../../navara_wasm';
import { BufferLoader } from '../';
import { ViewEvents } from '../..';
import { PolygonOutlineMesh } from '../../mesh';
export declare function renderPolygonOutline(mesh: NavaraPolygonMesh, buf: BufferLoader, viewEvents: EventHandler<ViewEvents>): Promise<PolygonOutlineMesh>;
export declare function processPolygonOutlineChanged(obj: PolygonOutlineMesh, m: NavaraPolygonMesh, active: boolean): void;
