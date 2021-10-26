import React from 'react';
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number} {props.post.title}</strong>
                <div>
                    {props.post.desc}
                </div>
            </div>
            <div className="post__btns">
                <MyButton>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;