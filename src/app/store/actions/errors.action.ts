import { Action } from "@ngrx/store";

export const ADD_ERROR = '[ERROR] Add Error'
export const REMOVE_ERROR = '[ERROR] Remove Error'


export class AddError implements Action {
    readonly type = ADD_ERROR
    constructor(public payload: any) { }
}

export class RemoveError implements Action {
    readonly type = REMOVE_ERROR
}

export type ErrorsAction =
    | AddError
    | RemoveError