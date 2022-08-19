import React from 'react';
import { DateTime, JSON, Media, Text } from "./field";

class Post {

    constructor(post) {
        if (post) {
            this.title = <Text property="title" value={post.title} />;
            this.description = <JSON property="description" value={post.description} />;
            this.published = <DateTime property="published" value={post.published} />;
            this.images = <Media value={post.imageCollection} />;
        }
    }

    getPosts(data) {
        const posts = [];
        data.postCollection.items.forEach(post => {
            posts.push(new Post(post))
        });
        console.log(posts);
        return posts;
    }
}

export default Post;