let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 15},
            {id: 1, message: 'Hi, how are you', likesCount: 15},
            {id: 2, message: "It\'s my first post", likesCount: 2}
        ],
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: 'Dymych'},
            {id: 2, name: 'Nikita'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Valera'},
            {id: 6, name: 'Viktor'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your react'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar:{
        friends:[
            {id: 1, name: 'Andrew', avatarLink: 'http://i.mirozor.ru/u/ae/01d4824ddb11e79af1936604affaeb/-/sanandreas_vinewood_256x256.jpg'},
            {id: 2, name: 'Sasha', avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3Nvkc9B6nQJrDSv1zDXZ1uviPTxtDawy8NU1CvrABvbcw6W6Yw'},
            {id: 2, name: 'Sasha', avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3Nvkc9B6nQJrDSv1zDXZ1uviPTxtDawy8NU1CvrABvbcw6W6Yw'},
            {id: 2, name: 'Sasha', avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3Nvkc9B6nQJrDSv1zDXZ1uviPTxtDawy8NU1CvrABvbcw6W6Yw'},
            {id: 3, name: 'Sveta', avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3h4aYp12eYkaKaO_86zbLE9x__WtvTb8mRP67DrHAhkQtsN3'}
            ]}
};

export let addPost = (postMessage) =>{
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
};


export default state;