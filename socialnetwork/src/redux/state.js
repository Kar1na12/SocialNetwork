
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT='UPDATE_NEW_POST_TEXT' ;

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Sveta" },
                { id: 3, name: "Sacha" }
            ],

            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Good morning" },
                { id: 3, message: "No" }
            ]
        },
        profilePage: {
            postData: [
                { id: 1, message: "Hi", likesCount: "20" },
                { id: 2, message: "Привет", likesCount: "30" },
                { id: 3, message: "Привет", likesCount: "25" }],
        
            newPostText: "Привет!"
  
        
        }
  
    },
    getState() {
        return this._state;
    },
    callSubscriber: () => {
        console.log("Privet!")
    },
   
    subscribe(observer) {
        this.callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST){
            let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this.callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
        this.callSubscriber(this._state);
        }
        
    }
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST 
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text }
    
}
window.store = store;







export default store;


 // addPost() {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this.callSubscriber();
    // },
    // updateNewPostText(newText) {
    
    //     this._state.profilePage.newPostText = newText;
    //     this.callSubscriber(this._state);
    // },