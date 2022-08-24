type FriendsType = {
    id: number
    name: string
}

let initialState = {
    friends:[
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Dmitry'},
    ] as Array<FriendsType>
}

export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: InitialStateType): InitialStateType => {
    return state
}

export default sidebarReducer