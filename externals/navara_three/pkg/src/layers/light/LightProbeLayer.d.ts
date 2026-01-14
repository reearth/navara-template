import { LightProbe, SphericalHarmonics3 } from 'three';
import { LightLayerDeclaration, LightLayerConfig, LightLayerUpdate, ViewContext } from '../../core';
type LayerDescription = {
    lightProbe?: {
        intensity?: number;
        sh?: SphericalHarmonics3;
        coefficients?: number[][];
    };
};
export type LightProbeLayerConfig = LightLayerConfig & LayerDescription;
export type LightProbeLayerUpdate = LightLayerUpdate & LayerDescription;
export declare class LightProbeLayer extends LightLayerDeclaration<LightProbeLayerConfig, LightProbeLayerUpdate, LightProbe> {
    private config;
    constructor(view: ViewContext, config: LightProbeLayerConfig);
    createLight(): LightProbe;
    onUpdateConfig(updates: LightProbeLayerUpdate): void;
    protected disposeLight(): void;
}
export {};
