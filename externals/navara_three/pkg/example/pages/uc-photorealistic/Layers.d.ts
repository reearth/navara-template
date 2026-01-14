import { FC } from 'react';
import { FloodDataset } from './FloodCzmlLayer';
export type LayersProps = {
    showBuildings: boolean;
    showClouds: boolean;
    floods: Array<{
        dataset: FloodDataset;
        visible: boolean;
        intervalIndex: number;
        onIntervals?: (iv: {
            startISO: string;
            endISO: string;
            label: string;
        }[]) => void;
    }>;
};
export declare const Layers: FC<LayersProps>;
