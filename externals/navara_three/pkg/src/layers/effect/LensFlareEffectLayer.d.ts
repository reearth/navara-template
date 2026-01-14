import { EffectLayerDeclaration, EffectLayerConfig, EffectLayerUpdate } from '../../core/EffectLayerDeclaration';
import { ViewContext } from '../../core/ViewContext';
import { LensFlare, LensFlareOptions } from '../../effects';
type LayerDescription = {
    lensFlare?: Omit<LensFlareOptions, "enabled">;
};
export type LensFlareConfig = LayerDescription & EffectLayerConfig;
export type LensFlareUpdate = LayerDescription & EffectLayerUpdate;
export declare class LensFlareEffectLayer extends EffectLayerDeclaration<LensFlareConfig, LensFlareUpdate, LensFlare> {
    static key: string;
    static insertAfter: string[];
    static insertBefore: string[];
    private config;
    constructor(view: ViewContext, config: LensFlareConfig);
    createPass(): LensFlare;
    onUpdateConfig(updates: LensFlareUpdate): void;
}
export {};
