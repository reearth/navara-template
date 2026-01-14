import { EntityEvent, WorkerTaskDelegatedEvent } from '../../navara_wasm';
import { WorkerPoolPromises } from '../type';
import { BufferLoader, FeatureHandler, TileHandler, WorkerTaskHandler } from '.';
export declare function processWorkerTaskDelegatedEvent(event: WorkerTaskDelegatedEvent, bufHandler: BufferLoader, tileHandler: TileHandler, featureHandler: FeatureHandler, workerTaskHandler: WorkerTaskHandler, workerPoolPromises: WorkerPoolPromises): Promise<void>;
export declare function processWorkerTaskRemovedEvent(event: EntityEvent, workerPoolPromises: WorkerPoolPromises): Promise<void>;
