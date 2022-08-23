import React from 'react';
import { CardContent, Grid } from "@material-ui/core";
import { ContentFulDate, ContentFulJSON, ContentFulMedia, ContentFulText } from "./contentful/Fields";

// Purpose is to pass content data into contenful components to display customizable components and pages
function PostType(props) {
    const post = props.post || false;
    if (!post) return;
    const { type } = props;

    // Condition to determine Post Types based on your content, content models and the fields used
    if (type === 1) { // Post
        if (!post?.image) {
            return (<PostWithNoMedia {...props} />);
        } else if (post?.image) {
            return (<PostWithOneImage {...props} />);
        } else if (post?.imageCollection) {
            return (<PostWithImages {...props} />);
        }
    } else if (type === 2) { // PostList PostListItem
        if (!post?.image) {
            return (<ListPostWithNoMedia {...props} />);
        } else if (post?.image) {
            return (<ListPostWithOneImage {...props} />);
        } else if (post?.imageCollection) {
            return (<ListPostWithImages {...props} />);
        }
    }
}

function PostWithNoMedia(props) {
    const { post, classes } = props;
    const {
        title,
        description,
        published } = post;

    return (
        <CardContent>
            <ContentFulText
                property="title"
                value={title}
                variant="h5"
                className={classes.title} />
            <ContentFulJSON
                property="description"
                value={description}
                className={classes.description} />
            <ContentFulDate
                property="date"
                value={published}
                className={classes.published} />
        </CardContent>
    );
}
function PostWithOneImage(props) {
    const { post, classes } = props;
    const {
        title,
        description,
        published,
        image } = post;

    return (<>
        <Grid item={true} xs={12} sm={4} md={4} lg={4}>
            <ContentFulMedia
                property="media"
                value={image}
                className={classes.image}
            />
        </Grid>
        <Grid item={true} xs={12} sm={8} md={8} lg={8}>
            <CardContent>
                <ContentFulText
                    property="title"
                    value={title} variant="h5"
                    className={classes.title} />
                <ContentFulJSON
                    property="description"
                    value={description}
                    className={classes.description} />
                <ContentFulDate
                    property="date"
                    value={published}
                    className={classes.published} />
            </CardContent>
        </Grid>
    </>);
}
function ListPostWithNoMedia(props) {
    const { post, classes } = props;
    const {
        title,
        description,
        published } = post;

    return (
        <CardContent>
            <ContentFulText
                property="title"
                value={title}
                variant="h5"
                className={classes.title} />
            <ContentFulJSON
                property="description"
                value={description}
                className={classes.description} />
            <ContentFulDate
                property="date"
                value={published}
                className={classes.published} />
        </CardContent>
    );
}
function ListPostWithOneImage(props) {
    const { post, classes } = props;
    const {
        title,
        description,
        published,
        image } = post;

    return (<>
        <Grid item={true} xs={12} sm={4} md={4} lg={4}>
            <ContentFulMedia
                property="media"
                value={image}
                className={classes.image}
            />
        </Grid>
        <Grid item={true} xs={12} sm={8} md={8} lg={8}>
            <CardContent>
                <ContentFulText
                    property="title"
                    value={title} variant="h5"
                    className={classes.title} />
                <ContentFulJSON
                    property="description"
                    value={description}
                    className={classes.description} />
                <ContentFulDate
                    property="date"
                    value={published}
                    className={classes.published} />
            </CardContent>
        </Grid>
    </>);
}
// Empty
function PostWithImages(props) {
    return (<></>);
}
function ListPostWithImages(props) {
    return (<></>);
}

export default PostType;

