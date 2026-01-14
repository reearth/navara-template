import { FC } from 'react';
import { Interval } from './czml';
export type FloodDataset = {
    id: string;
    label: string;
    url: string;
};
export type FloodCzmlLayerProps = {
    dataset: FloodDataset;
    visible: boolean;
    intervalIndex: number;
    onIntervals?: (intervals: Interval[]) => void;
};
export declare const FloodCzmlLayer: FC<FloodCzmlLayerProps>;
