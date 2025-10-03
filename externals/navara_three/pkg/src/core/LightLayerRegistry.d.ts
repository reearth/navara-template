import { LayerRegistry } from './LayerRegistry';
import { LightLayerConfig, LightLayerDeclaration } from './LightLayerDeclaration';
import { ViewContext } from './ViewContext';
export type LightLayerConstructor = new (view: ViewContext, config: LightLayerConfig) => LightLayerDeclaration;
export declare class LightLayerRegistry extends LayerRegistry<LightLayerConstructor, LightLayerDeclaration, LightLayerConfig> {
    create(name: string, config: LightLayerConfig): LightLayerDeclaration;
    /**
     * Find light type from config (alias for findTypeFromConfig for backward compatibility)
     */
    findLightType(config: Record<string, unknown>): string | null;
}
