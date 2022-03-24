let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 15},
            {id: 2, message: 'This is React...', likesCount: 20},
            {id: 3, message: 'My post!!!', likesCount: 100},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Fedor'},
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
        ],
    },

}

export default state;