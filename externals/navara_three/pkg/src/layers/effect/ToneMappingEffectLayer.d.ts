import { EffectLayerDeclaration, EffectLayerConfig, EffectLayerUpdate } from '../../core/EffectLayerDeclaration';
import { ViewContext } from '../../core/ViewContext';
import { ToneMapping, ToneMappingOptions } from '../../effects';
type LayerDescription = {
    toneMapping?: Omit<ToneMappingOptions, "enabled">;
};
export type ToneMappingConfig = LayerDescription & EffectLayerConfig;
export type ToneMappingUpdate = LayerDescription & EffectLayerUpdate;
export declare class ToneMappingEffectLayer extends EffectLayerDeclaration<ToneMappingConfig, ToneMappingUpdate, ToneMapping> {
    static key: string;
    static insertAfter: string[];
    private config;
    constructor(view: ViewContext, config: ToneMappingConfig);
    createPass(): ToneMapping;
    onUpdateConfig(updates: ToneMappingUpdate): void;
}
export {};
