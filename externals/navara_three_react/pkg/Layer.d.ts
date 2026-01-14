import { LayerDeclaration, LayerHandle, Layer as NavaraLayer, type LayerDescription } from "@navara/three";
import { type PropsWithChildren } from "react";
type LH<L> = L extends LayerDeclaration ? LayerHandle<L> : NavaraLayer;
type Props<L> = {
    config: LayerDescription;
    onReady?: (handle: LH<L>) => (() => void) | void;
};
export declare function Layer<L = NavaraLayer>({ config, onReady, }: PropsWithChildren<Props<L>>): null;
export {};
