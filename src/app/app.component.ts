import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddError } from './store/actions/errors.action';
import { AppState } from './store/app-store.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideas-app';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new AddError({ error: 'message' }))
  }

}
