import { computeVertexNormals } from "./tasks/computeVertexNormals";
import { toCreasedNormals } from "./tasks/toCreasedNormals";
declare const tasks: {
    toCreasedNormals: typeof toCreasedNormals;
    computeVertexNormals: typeof computeVertexNormals;
};
export type Tasks = typeof tasks;
export {};
