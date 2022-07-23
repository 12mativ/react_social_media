import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 15},
        {id: 2, message: 'This is React...', likesCount: 20},
        {id: 3, message: 'My post!!!', likesCount: 100},
    ],
}

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('Hello world!!!')

    //2. actions
    let newState = profileReducer(state, action)

    //3. expectations
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator('Hello world!!!')

    //2. actions
    let newState = profileReducer(state, action)

    //3. expectations
    expect(newState.posts[3].message).toBe('Hello world!!!')
});

test('after deleting the length of posts should be decremented', () => {
    //1. test data
    let action = deletePost(1)

    //2. actions
    let newState = profileReducer(state, action)

    //3. expectations
    expect(newState.posts.length).toBe(2)
});

test('after deleting the length of posts should not be decremented if id is incorrect', () => {
    //1. test data
    let action = deletePost(1000)

    //2. actions
    let newState = profileReducer(state, action)

    //3. expectations
    expect(newState.posts.length).toBe(3)
});