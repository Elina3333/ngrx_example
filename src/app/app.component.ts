import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {countSelector, decrease, increase, reset, updatedAtSelector} from "./reducers/counter";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  updatedAt$ = this.store.select(updatedAtSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));

  constructor(private store: Store) {
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());

  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
