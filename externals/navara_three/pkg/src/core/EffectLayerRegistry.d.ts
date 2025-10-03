import { EffectLayerDeclaration, EffectLayerConfig } from './EffectLayerDeclaration';
import { LayerRegistry } from './LayerRegistry';
import { ViewContext } from './ViewContext';
export type EffectLayerConstructor = new (view: ViewContext, config: EffectLayerConfig) => EffectLayerDeclaration;
export declare class EffectLayerRegistry extends LayerRegistry<EffectLayerConstructor, EffectLayerDeclaration> {
    create(effectType: string, config: EffectLayerConfig): EffectLayerDeclaration;
    /**
     * Find mesh type from config (alias for findTypeFromConfig for backward compatibility)
     */
    findEffectType(config: Record<string, unknown>): string | null;
}
