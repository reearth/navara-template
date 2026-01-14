import { PointMesh as NavaraPointMesh } from '../../navara_wasm';
import { BufferLoader } from '../event';
import { CommonUniforms } from '../uniforms';
import { InstancedMesh, InstancedMeshOptions } from './instanced';
import { PointMesh } from './point';
export declare class InstancedPointMesh extends InstancedMesh<PointMesh> {
    constructor(m: NavaraPointMesh, buf: BufferLoader, uniforms: CommonUniforms, options?: InstancedMeshOptions);
    private initMeshes;
    _update(m: NavaraPointMesh, buf: BufferLoader, active: boolean): void;
}
