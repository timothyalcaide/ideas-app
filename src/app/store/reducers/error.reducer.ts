import * as fromErrors from "@app/store/actions/errors.action";

export interface ErrorState {
    error: any
}

const initialState: ErrorState = {
    error: null
}

export function reducer(state = initialState, action: fromErrors.ErrorsAction): ErrorState {
    switch (action.type) {
        case fromErrors.ADD_ERROR:
            return { ...state, error: action.payload }
        case fromErrors.REMOVE_ERROR:
            return { ...state, error: null }
        default: return state
    }
}
