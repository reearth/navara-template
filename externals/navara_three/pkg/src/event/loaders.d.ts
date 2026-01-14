import { ImageLoader, TextureLoader } from 'three';
import { GLTFLoader } from 'three-stdlib';
import { AbortableImageLoader } from '../loaders';
import { AbortableTextureLoader } from '../loaders/AbortableTextureLoader';
export declare const TEXTURE_LOADER: TextureLoader;
export declare const ABORTABLE_TEXTURE_LOADER: AbortableTextureLoader;
export declare const IMAGE_LOADER: ImageLoader;
export declare const ABORTABLE_IMAGE_LOADER: AbortableImageLoader;
export declare const initializeGltfLoader: () => GLTFLoader;
