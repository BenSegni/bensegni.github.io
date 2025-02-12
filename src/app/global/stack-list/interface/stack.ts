import { Observable } from "rxjs";

export interface Stack {
  name: string;
  purpose: string;
}

export interface StackConfig {
  title: string;
  data$: Observable<Stack[]>;
}