  
import classes from "./PostOne.module.css";

const PostOne = (props) => {
    return (
 
         
        <div className={classes.item}>
            <img className={classes.item} src="https://www.purina.ru/sites/default/files/2020-09/prichini.jpg" alt="Петя Васильков" />
        {props.message};
            <div>
                <span>like</span>{props.likesCount}
                </div>
        </div>
     
    
    )
      
};
export default PostOne;