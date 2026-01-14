import { AerialPerspectiveEffect, AtmosphereParameters, AerialPerspectiveEffectOptions } from '@takram/three-atmosphere';
import { Camera, DepthPackingStrategies, Texture, WebGLRenderer, WebGLRenderTarget } from 'three';
/**
 * Custom AerialPerspectiveEffect that allows overriding the depth texture.
 * This is useful when you want to use a custom merged depth buffer instead of
 * the default depth texture from the postprocessing pipeline.
 */
export declare class CustomAerialPerspectiveEffect extends AerialPerspectiveEffect {
    private customDepthTexture;
    private customDepthPacking;
    constructor(camera?: Camera | undefined, options?: AerialPerspectiveEffectOptions, atmosphere?: AtmosphereParameters);
    /**
     * Get the fullscreen material (accessing protected property)
     */
    private getMaterial;
    /**
     * Override update to swap in our custom depth texture every frame.
     * This is called by the postprocessing pipeline before render.
     */
    update(renderer: WebGLRenderer, inputBuffer: WebGLRenderTarget, deltaTime?: number): void;
    /**
     * Override setDepthTexture to store but not actually set the default texture.
     * We ignore the default depth texture from the postprocessing pipeline.
     */
    setDepthTexture(depthTexture: Texture, depthPacking?: DepthPackingStrategies): void;
    /**
     * Set a custom depth texture to use instead of the default.
     * @param texture - The custom depth texture, or null to use the default
     * @param depthPacking - Optional depth packing strategy
     */
    setCustomDepthTexture(texture: Texture | null, depthPacking?: DepthPackingStrategies): void;
    /**
     * Get the current custom depth texture.
     */
    getCustomDepthTexture(): Texture | null;
}
