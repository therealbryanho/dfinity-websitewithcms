import React from 'react';
import PostType from './PostType';
import { Card, CardActionArea, CardContent, Grid } from "@material-ui/core";

// Component Types: Post type 1, PostList type 2

// What will the Post look like?
function Post(props) {
    const post = props.post || false;
    if (!post) return;

    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container={true} spacing={1} align="left">
                    <PostType type={1} {...props} />
                </Grid>
            </CardContent>
        </Card>
    );
}

// What will a list of posts look like?
function PostList(props) {
    const { posts, classes, view } = props;
    const postList = [];

    posts.length > 0 && posts.forEach((post, index) => {
        if (Object.keys(post).length > 0) {
            const postProps = {
                post: post,
                classes: classes,
                view: view
            };
            postList.push(<PostListItem key={index} {...postProps} />);
        }
    });

    return postList;
}
function PostListItem(props) {
    const post = props.post || false;
    if (!post) return;

    const { classes, view } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea
                onClick={() => view(post)}
            >
                <Grid container={true} spacing={1} align="left">
                    <PostType type={2} {...props} />
                </Grid>
            </CardActionArea>
        </Card>
    );
}

export { Post, PostList };