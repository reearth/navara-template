import { DepthCopyPass } from 'postprocessing';
import { DepthTexture, Material, Scene, WebGLRenderTarget, PerspectiveCamera, WebGLRenderer } from 'three';
import { RenderPass } from '../effects';
import { Scenes } from '../scene';
import { MeshCache } from '../type';
import { NormalCopyPass } from '.';
export declare class CustomRenderPass extends RenderPass {
    protected _camera: PerspectiveCamera;
    protected _scenes: Scenes;
    protected _drapedFeatureMaterials: Map<string, Material>;
    protected _meshes: MeshCache;
    gbufferRenderTarget: WebGLRenderTarget;
    private copyPass;
    globeDepthCopyPass: DepthCopyPass;
    globeNormalCopyPass: NormalCopyPass;
    disableShadow: boolean;
    private shadowScene;
    private dummyShadowRenderTarget;
    private debugNormalCopyPass?;
    constructor(scenes: Scenes, camera: PerspectiveCamera, meshes: MeshCache, drapedFeatureMaterials: Map<string, Material>, inputBuffer: WebGLRenderTarget, options?: {
        debugNormal?: boolean;
        disableShadow?: boolean;
    });
    protected _renderWithLight(renderer: WebGLRenderer, scene: Scene): void;
    render(renderer: WebGLRenderer, inputBuffer: WebGLRenderTarget | null, _outputBuffer: WebGLRenderTarget | null): void;
    setDepthTexture(depthTexture: DepthTexture): void;
    setSize(width: number, height: number): void;
    protected _renderDrapedMesh(renderer: WebGLRenderer): void;
}
