import { Observable } from "rxjs";

export interface Stack {
  name: string;
  purpose: string;
}

export interface StackConfig<T> {
  title: string;
  data$: Observable<Stack[]>;
}