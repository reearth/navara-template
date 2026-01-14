export type Interval = {
    startISO: string;
    endISO: string;
    label: string;
};
export type GeoFeature = GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.Point>;
export type FloodData = {
    intervals: Interval[];
    polygonsByInterval: GeoFeature[][];
    pointsByInterval: GeoFeature[][];
};
export declare function parseIntervalsFromCzml(czml: any[]): Interval[];
export declare function buildFloodData(czml: any[]): FloodData;
