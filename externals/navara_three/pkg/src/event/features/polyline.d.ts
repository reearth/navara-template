import { EventHandler } from '@navara/core';
import { PolylineMesh as NavaraPolylineMesh } from '../../../navara_wasm';
import { BufferLoader } from '../';
import { ViewEvents } from '../..';
import { PolylineMesh } from '../../mesh';
import { CommonUniforms } from '../../uniforms';
export declare function renderPolyline(mesh: NavaraPolylineMesh, buf: BufferLoader, uniforms: CommonUniforms, viewEvents: EventHandler<ViewEvents>): Promise<PolylineMesh>;
export declare function processPolylineChanged(obj: PolylineMesh, m: NavaraPolylineMesh, active: boolean): void;
