import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js'

import useStyles from './styles.js';

const Posts = () =>{
    const posts = useSelector((state)=>{return state.post;})
    const classes = useStyles();

    return(
        <>
            <h1 class>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;