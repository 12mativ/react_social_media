let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 15},
            {id: 2, message: 'This is React...', likesCount: 20},
            {id: 3, message: 'My post!!!', likesCount: 100},
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Fedor '},
            {id: 3, name: 'Peter'},
            {id: 4, name: 'Oleg'},
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {
                id: 2,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda ducimus explicabo illum, modi repellat.'
            },
            {
                id: 3,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
            },
            {
                id: 4,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
            },
            {
                id: 5,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
            },
        ],
        newMessageText: '',
    },
    sidebar: {
        friends:[
            {name: 'Ivan'},
            {name: 'Oleg'},
            {name: 'Dmitry'},
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updatePostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newPost = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    }

    state.dialogsPage.messages.push(newPost);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateMessageText = (messageText) => {
    state.dialogsPage.newMessageText = messageText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;