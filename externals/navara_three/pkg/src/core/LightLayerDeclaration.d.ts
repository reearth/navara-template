import { XYZ } from '@navara/core';
import { Light } from 'three';
import { LayerDeclaration, BaseInstance, LayerDeclarationConfig, LayerDeclarationConfigUpdate } from './LayerDeclaration';
import { ViewContext } from './ViewContext';
export type LightLayerConfig = {
    type: "light";
    position?: XYZ;
} & LayerDeclarationConfig;
export type LightLayerUpdate = Pick<LightLayerConfig, "position"> & LayerDeclarationConfigUpdate;
export type LightBaseInstance<Instance extends object = object> = Instance extends Light ? Instance : Instance extends {
    raw: infer Raw extends Light;
} ? Instance & {
    raw: Raw;
} & BaseInstance : BaseInstance;
export declare abstract class LightLayerDeclaration<Config extends LightLayerConfig = LightLayerConfig, UpdateConfig extends LightLayerUpdate = LightLayerUpdate, InstanceObj extends Light | {
    raw: Light;
} = Light | {
    raw: Light;
}, Instance extends LightBaseInstance<InstanceObj> = LightBaseInstance<InstanceObj>> extends LayerDeclaration<Config, UpdateConfig, Instance> {
    position?: XYZ;
    constructor(view: ViewContext, config?: Config);
    abstract createLight(): Instance;
    get raw(): (Instance extends Light<import('three').LightShadow<import('three').Camera> | undefined> ? Instance : never) | (Instance extends {
        raw: infer Raw extends Light;
    } ? Raw : never) | undefined;
    onCreate(): void;
    onUpdateConfig(updates: UpdateConfig): void;
    onDestroy(): void;
    update?(time: number): void;
}
