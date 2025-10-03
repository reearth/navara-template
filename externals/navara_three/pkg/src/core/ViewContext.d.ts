import { EventHandler } from '@navara/core';
import { Material, PerspectiveCamera } from 'three';
import { Atmosphere } from '../atmosphere';
import { LayersManager } from '../layersManager';
import { RenderPassOrchestrator } from '../orchestrators';
import { Scenes } from '../scene';
import { DrapedMaterialCache, MeshCache } from '../type';
type Private = {
    meshes: MeshCache;
    drapedMaterials: DrapedMaterialCache;
};
export declare class ViewContext {
    scenes: Scenes;
    camera: PerspectiveCamera;
    atmosphere: Atmosphere;
    layersManager: LayersManager;
    renderPassOrchestrator: RenderPassOrchestrator;
    _privates: Private;
    private eventHandler?;
    constructor(scenes: Scenes, camera: PerspectiveCamera, atmosphere: Atmosphere, layersManager: LayersManager, renderPassOrchestrator: RenderPassOrchestrator, _privates: Private, eventHandler?: EventHandler<any>);
    setCamera(camera: PerspectiveCamera): void;
    emit(event: "_csmMounted", material: Material): void;
}
export {};
