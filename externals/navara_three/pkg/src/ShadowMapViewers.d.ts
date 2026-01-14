import { WebGLRenderer } from 'three';
import { ShadowMapViewer } from 'three-stdlib';
import { Scenes } from './scene';
export declare class ShadowMapViewers {
    viewers: ShadowMapViewer[];
    lights: Scenes["light"];
    enabled: boolean;
    constructor(lights: Scenes["light"]);
    render(renderer: WebGLRenderer): void;
}
