import { FC } from 'react';
import { Interval } from '../czml';
export type FloodUIItem = {
    id: string;
    label: string;
    visible: boolean;
    intervalIndex: number;
    intervals: Interval[] | null;
    onToggle: () => void;
    onIntervalIndex: (i: number) => void;
};
export type ControlPanelProps = {
    buildingsVisible: boolean;
    cloudsVisible: boolean;
    onToggleBuildings: () => void;
    onToggleClouds: () => void;
    floods: FloodUIItem[];
};
export declare const ControlPanel: FC<ControlPanelProps>;
