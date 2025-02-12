import { WritableSignal } from "@angular/core";

export interface FilterConfig<T> {
  data: T[];
  listLength: number;
  signalData: WritableSignal<T[]>;
  options: string[];
  resetValue: string;
}