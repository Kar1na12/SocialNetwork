import React from 'react';

import Posts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
 
  return (
    <div >
      <ProfileInfo/>
      <Posts postData={props.profilePage.postData}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
     </div>
      
  )};
export default Profile;
