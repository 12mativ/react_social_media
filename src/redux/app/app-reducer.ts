import {getAuthUserData} from "../auth/auth-reducer"
import {Dispatch} from "redux";
import {InferActionsTypes} from "../redux-store";

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'project2/app/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }

}

//ACTION CREATOR
export const actions = {
    initializedSuccess: () => ({type: 'project2/app/INITIALIZED-SUCCESS'} as const)
}

//THUNK
// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<ActionsTypes>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer