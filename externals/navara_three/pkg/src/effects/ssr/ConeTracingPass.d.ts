import { ShaderPass, CopyPass, GaussianBlurPass } from 'postprocessing';
import { Texture, WebGLRenderTarget, WebGLRenderer, TextureDataType, DepthPackingStrategies } from 'three';
import { ConeTracingMaterial, ConeTracingMaterialParameters } from './ConeTracingMaterial';
export type ConeTracingPassOptions = {
    width?: number;
    height?: number;
    kernelSize?: number;
    coneTracingFadeStart?: number;
    coneTracingFadeEnd?: number;
    coneTracingMaxDistance?: number;
    coneTracingIteration?: number;
    coneTracingIor?: number;
    rayTracingBuffer?: Texture | null;
    normalBuffer?: Texture | null;
} & ConeTracingMaterialParameters;
export declare const coneTracingPassOptionsDefaults: {
    coneTracingFadeStart: number;
    coneTracingFadeEnd: number;
    coneTracingMaxDistance: number;
    coneTracingIteration: number;
    coneTracingIor: number;
    rayTracingBuffer: null;
    normalBuffer: null;
};
export declare class ConeTracingPass extends ShaderPass {
    readonly coneTracingMaterial: ConeTracingMaterial;
    readonly blurPass: GaussianBlurPass;
    readonly copyPass: CopyPass;
    readonly mippedRenderTarget: WebGLRenderTarget;
    readonly blurredRenderTarget: WebGLRenderTarget;
    constructor(options?: ConeTracingPassOptions);
    update(renderer: WebGLRenderer, inputBuffer: WebGLRenderTarget, _deltaTime?: number): void;
    initialize(renderer: WebGLRenderer, alpha: boolean, frameBufferType: TextureDataType): void;
    setDepthTexture(depthTexture: Texture, depthPacking?: DepthPackingStrategies): void;
    setSize(width: number, height: number): void;
    dispose(): void;
}
