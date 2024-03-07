import { WritableSignal } from "@angular/core";

export interface FilterConfig<T> {
  data: Array<T>;
  listLength: number;
  signalData: WritableSignal<Array<T>>;
  options: string[];
  resetValue: string;
}