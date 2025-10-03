import { BillboardMesh as NavaraBillboardMesh } from '../../navara_wasm';
import { BufferLoader } from '../event';
import { CommonUniforms } from '../uniforms';
import { BillboardMesh } from './billboard';
import { InstancedMesh } from './instanced';
export declare class InstancedBillboardMesh extends InstancedMesh<BillboardMesh> {
    _init(m: NavaraBillboardMesh, buf: BufferLoader, uniforms: CommonUniforms): Promise<void>;
    private initMeshes;
    _update(m: NavaraBillboardMesh, buf: BufferLoader, active: boolean): Promise<void>;
}
