import { BillboardMesh as NavaraBillboardMesh } from '../../../navara_wasm';
import { BufferLoader } from '..';
import { InstancedBillboardMesh } from '../../mesh';
import { CommonUniforms } from '../../uniforms';
export declare function renderBillboard(m: NavaraBillboardMesh, buf: BufferLoader, uniforms: CommonUniforms): Promise<InstancedBillboardMesh | undefined>;
export declare function processBillboardChanged(obj: InstancedBillboardMesh, m: NavaraBillboardMesh, buf: BufferLoader, active: boolean): Promise<void>;
