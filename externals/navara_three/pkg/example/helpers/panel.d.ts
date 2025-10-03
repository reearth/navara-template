import { LayerDescription, default as ThreeView } from '@navara/three';
import { FolderApi, Pane, TpChangeEvent, BindingParams, InputBindingApi } from 'tweakpane';
export type MaterialLayerDescription = Exclude<LayerDescription, {
    type: "terrain";
} | {
    type: "mesh";
} | {
    type: "light";
} | {
    type: "effect";
}>;
export declare const addCtrlPanel: (layers: MaterialLayerDescription[], view: ThreeView, paneInput?: Pane) => void;
export type FieldsApis<Params extends object> = Record<keyof Params, InputBindingApi>;
export type FolderField<Params extends object> = {
    [K in keyof Params]: {
        name: K;
        params?: BindingParams;
        onMount?: (apis: FieldsApis<Params>) => void;
        onChange: (v: TpChangeEvent<Params[K]>, apis: FieldsApis<Params>) => void;
    };
}[keyof Params];
export type FolderFields<Params extends object> = FolderField<Params>[];
export declare function addFieldsToFolder<Params extends object>(folder: FolderApi, params: Params, fields: FolderFields<Params>): void;
