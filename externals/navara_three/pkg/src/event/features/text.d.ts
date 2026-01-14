import { TextMesh as NavaraTextMesh } from '../../../navara_wasm';
import { BufferLoader } from '..';
import { InstancedTextMesh } from '../../mesh';
import { RenderFlag } from '../../type';
import { CommonUniforms } from '../../uniforms';
export declare function renderText(m: NavaraTextMesh, buf: BufferLoader, uniforms: CommonUniforms): Promise<InstancedTextMesh>;
export declare function processTextChanged(obj: InstancedTextMesh, m: NavaraTextMesh, buf: BufferLoader, active: boolean, renderFlag: RenderFlag): void;
