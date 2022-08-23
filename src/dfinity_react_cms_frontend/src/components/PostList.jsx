import React from 'react';
import Post from './Post';

function PostList(props) {
    const { posts, classes } = props;
    const postList = [];

    posts.length > 0 && posts.forEach((post, index) => {
        if (Object.keys(post).length > 0) {
            postList.push(<Post key={index} post={post} classes={classes} />);
        }
    });

    return postList;
}

export default PostList;