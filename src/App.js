import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', desc: 'Description'},
        {id: 2, title: 'C#', desc: 'Description'},
    ]);

function createPost(newPost) {
    setPosts(...posts, newPost);
}

function removePost(post) {
    setPosts(posts.filter(x => x.id !== post.id));
}

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostList posts={posts} title={'Another title'}/>
    </div>
  );
}

export default App;
