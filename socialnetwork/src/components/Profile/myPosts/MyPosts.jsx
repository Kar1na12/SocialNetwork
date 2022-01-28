
import React, { createRef } from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import classes from "./MyPosts.module.css";
import PostOne from "./PostOne/PostOne";



const Posts = (props) => {
   
      let PostsElements = props.postData
        .map(posts => <PostOne message={posts.message} likesCount={posts.likesCount} />);
    
    let newPostElement = React.createRef();
    
    let addPost = () => {
        
        props.dispatch(addPostActionCreator());
       
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
        
    };
    return (
 <div className={classes.item}>
            <div >
                <div> <h3> new post </h3></div>
              
                <div> <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
               <div> <button onClick={addPost}>Add Post</button></div>
            </div>
            <div className={classes.post}>
               {PostsElements}
               </div>
    </div>
    )
      
};
export default Posts;