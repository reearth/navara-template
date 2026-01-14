import { EffectLayerDeclaration, EffectLayerConfig, EffectLayerUpdate } from '../../core/EffectLayerDeclaration';
import { ViewContext } from '../../core/ViewContext';
import { AerialPerspective, AerialPerspectiveOptions } from '../../effects';
type LayerDescription = {
    aerialPerspective?: Omit<AerialPerspectiveOptions, "enabled">;
};
export type AerialPerspectiveConfig = LayerDescription & EffectLayerConfig;
export type AerialPerspectiveUpdate = LayerDescription & EffectLayerUpdate;
export declare class AerialPerspectiveEffectLayer extends EffectLayerDeclaration<AerialPerspectiveConfig, AerialPerspectiveUpdate, AerialPerspective> {
    static key: string;
    static insertAfter: string[];
    private config;
    constructor(view: ViewContext, config: AerialPerspectiveConfig);
    createPass(): AerialPerspective;
    onUpdateConfig(updates: AerialPerspectiveUpdate): void;
    update(_time: number): void;
}
export {};
