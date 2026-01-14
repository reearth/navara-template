import { PointMesh as NavaraPointMesh } from '../../../navara_wasm';
import { BufferLoader } from '..';
import { InstancedPointMesh } from '../../mesh';
import { CommonUniforms } from '../../uniforms';
export declare function renderPoint(m: NavaraPointMesh, buf: BufferLoader, uniforms: CommonUniforms): Promise<InstancedPointMesh>;
export declare function processPointChanged(obj: InstancedPointMesh, m: NavaraPointMesh, buf: BufferLoader, active: boolean): void;
