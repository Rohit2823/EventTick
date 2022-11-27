import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerEvent = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly time?: string | null;
  readonly extension?: string | null;
  readonly organizer: string;
  readonly guests?: string | null;
  readonly location?: string | null;
  readonly radius?: number | null;
  readonly attendees?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly time?: string | null;
  readonly extension?: string | null;
  readonly organizer: string;
  readonly guests?: string | null;
  readonly location?: string | null;
  readonly radius?: number | null;
  readonly attendees?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event, EventMetaData>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}