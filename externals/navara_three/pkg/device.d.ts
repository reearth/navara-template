/**
 * Device detection and adaptive quality utilities for mobile optimization.
 */
/**
 * Detects if the current device is a mobile device.
 * Uses user agent and touch capability heuristics.
 * Result is memoized since it doesn't change during runtime.
 */
export declare function isMobileDevice(): boolean;
export type DevicePixelRatioOptions = {
    /** User-specified pixel ratio override (takes precedence over all other settings) */
    override?: number;
    /** Enable mobile optimization to cap pixel ratio on mobile devices */
    mobileOptimization?: boolean;
};
/**
 * Gets an appropriate pixel ratio for the current device.
 * Caps the ratio on mobile devices only when mobileOptimization is enabled.
 *
 * @param options - Configuration options for pixel ratio
 * @returns Pixel ratio appropriate for the device
 */
export declare function getDevicePixelRatio(options?: DevicePixelRatioOptions): number;
