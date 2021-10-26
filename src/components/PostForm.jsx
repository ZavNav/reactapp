import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', desc: ''});
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({title: '', desc: ''});
    }
    return (
            <form>
                <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder={'Post name'}/>
                <MyInput value={post.desc} onChange={e => setPost({...post, desc: e.target.value})} type="text" placeholder={'Post description'}/>
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
    );
};

export default PostForm;