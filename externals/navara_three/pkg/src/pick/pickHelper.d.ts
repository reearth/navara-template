import { WebGLRenderer, WebGLRenderTarget, PerspectiveCamera, Material, Scene, Color } from 'three';
import { CustomRenderPass } from '../passes';
import { Scenes } from '../scene';
import { MeshCache } from '../type';
export type PickHelperOptions = {
    debug: boolean;
};
export declare class PickHelper extends CustomRenderPass {
    private element;
    private pickingTexture;
    private pixelBuffer;
    private _renderer;
    private highlightColor;
    private onPickCallback;
    private debugBufferView?;
    private debugRenderTarget?;
    private mouseMoved;
    private mouseDownHandler;
    private mouseMoveHandler;
    private mouseUpHandler;
    constructor(element: HTMLElement, renderer: WebGLRenderer, camera: PerspectiveCamera, scenes: Scenes, meshes: MeshCache, drapedFeatureMaterials: Map<string, Material>, highlightColor: Color, onPickCallback: (pickArr: number[]) => number[], inputBuffer: WebGLRenderTarget, options?: PickHelperOptions);
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    enablePick(bPick: boolean): void;
    private traverseModel;
    private togglePickable;
    private pickSprite;
    private pickModel;
    private pickMesh;
    private toggleHighlight;
    processRender(target: WebGLRenderTarget): void;
    protected _renderWithWorld(renderer: WebGLRenderer, scene: Scene): void;
    renderDebugCanvas(): void;
    private onMouseClick;
    dispose(): void;
}
