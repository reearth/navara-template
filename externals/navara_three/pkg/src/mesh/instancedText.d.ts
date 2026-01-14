import { TextMesh as NavaraTextMesh } from '../../navara_wasm';
import { BufferLoader } from '../event';
import { CommonUniforms } from '../uniforms';
import { InstancedMesh, InstancedMeshOptions } from './instanced';
import { TextMesh } from './text';
export declare class InstancedTextMesh extends InstancedMesh<TextMesh> {
    constructor(m: NavaraTextMesh, buf: BufferLoader, uniforms: CommonUniforms, options?: InstancedMeshOptions);
    private initMeshes;
    _update(m: NavaraTextMesh, buf: BufferLoader, active: boolean, needRender?: () => void): void;
    setTextByNatchIndex(batchIndex: number, text: string): void;
}
