import { default as ThreeView } from '@navara/three';
import { Pane } from 'tweakpane';
export declare const addDateControl: (view: ThreeView, pane: Pane, initialDate?: Date) => void;
export declare const addCameraControl: (view: ThreeView, pane: Pane, addButton?: () => void) => void;
export declare const addHidePaneKeyShortcut: (pane: Pane) => void;
