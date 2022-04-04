const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 15},
        {id: 2, message: 'This is React...', likesCount: 20},
        {id: 3, message: 'My post!!!', likesCount: 100},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText,
            };

        default:
            return state;
    }

}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        postText: text
    }
}

export default profileReducer;