import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
     <div className={classes.myContent}>
 
    <div>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e9ebf112ac69319dfc66e6b_5e9ec244c8c4f56528e7e7ff/scale_1200" alt="Pigeon" /></div>

          <div className={classes.description}>
      avatar + discription
      </div>
     </div>
  )
};
export default ProfileInfo ;