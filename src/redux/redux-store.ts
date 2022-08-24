import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import profileReducer from "./profile/profile-reducer"
import dialogsReducer from "./dialogs/dialogs-reducer"
import sidebarReducer from "./sidebar/sidebar-reducer"
import usersReducer from "./users/users-reducer"
import authReducer from "./auth/auth-reducer"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import appReducer from "./app/app-reducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// //typing action creators
// type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
// export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never

//typing thunks
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store
export default store