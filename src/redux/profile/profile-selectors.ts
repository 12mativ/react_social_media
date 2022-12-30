import {AppStateType} from "../redux-store";

export const getProfileSelector = (state: AppStateType) => {
  return state.profilePage.profile
}

export const getStatusSelector = (state: AppStateType) => {
  return state.profilePage.status
}

export const getUserIdSelector = (state: AppStateType) => {
  return state.auth.userId
}

export const getIsAuthSelector = (state: AppStateType) => {
  return state.auth.isAuth
}