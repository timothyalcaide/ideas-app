import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromError from './reducers/error.reducer';



export interface AppState {
    error: fromError.ErrorState
}

export const reducers: ActionReducerMap<AppState> = {
    error: fromError.reducer
}


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
    ],
    exports: [],
    providers: [],
})
export class AppStoreModule { }