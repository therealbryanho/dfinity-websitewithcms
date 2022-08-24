import React, { useEffect, useState } from "react";
import { PostList } from "./Post";
import Section from "./Section";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Pagination } from "@mui/material";
import Contentful_Query from "../util/contentful/queries";
import Contentful_Service from "../util/contentful/service";
import ViewBlogPost from "./ViewBlogPost";

// Define component styles, this can be done in the later parts of development
const useLatestBlogPostsStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor:"black"
    },
    title: {
        textTransform: "uppercase"
    }
}));
const usePostListStyles = makeStyles((theme) => ({
    card: {
        width: "100%",
        padding: "0rem",
        margin: "0.5rem",
        boxShadow: "2px 2px 2px 2px #888888"
    },
    title: {
        fontWeight: "bold",
        paddingBottom: "1rem"
    },
    description: {},
    image: {},
    published: {
        fontWeight: "lighter",
        fontStyle: "italic"
    }
}));
const usePostStyles = makeStyles((theme) => ({}));

// Define the component
function LatestBlogPosts() {
    const component_name = "LatestBlogPosts";

    const component_classes = useLatestBlogPostsStyles(); // used in this class
    const postlist_classes = usePostListStyles(); // pass to post list
    const post_classes = usePostStyles(); // pass to view post

    const postLimit = 2; // Post limit on each page

    const [totalPost, setTotalPost] = useState(false);
    const [posts, setPosts] = useState([]);
    const [viewPost, setViewPost] = useState(false);

    const selectedPost = (post) => {
        setViewPost(post);
    }
    const changePage = (event, value) => {
        fetchPosts(value);
    }

    const fetchPosts = async (value) => { // Fetch when page changes, called on change page
        const query_service = new Contentful_Query();
        const content_service = new Contentful_Service();

        const limit = postLimit, skip = (value - 1) * postLimit;
        const content_query = query_service.getContentQuery(component_name, limit, skip);
        const content_data = await content_service.getDeliveryContent(content_query);
        if (content_data) {
            setPosts(content_data.postCollection.items);
        }
    }

    useEffect(() => { // Will only run once
        const load = async () => {
            const limit = postLimit, skip = 0;
            const query_service = new Contentful_Query();
            const content_service = new Contentful_Service();

            const pagination_query = query_service.getPaginationQuery(component_name);
            const pagination_data = await content_service.getDeliveryContent(pagination_query);
            if (pagination_data) {
                setTotalPost(pagination_data.postCollection.total);
            }

            const content_query = query_service.getContentQuery(component_name, limit, skip);
            const content_data = await content_service.getDeliveryContent(content_query);
            if (content_data) {
                setPosts(content_data.postCollection.items);
            }
        }

        load();

        return () => {
            setPosts([]);
            setTotalPost(false);
            setViewPost(false);
        }
    }, []);

    return (<>
        {!viewPost && <Section>
            <Container className={component_classes.container}>
                <Grid container={true} align="left">
                    <Grid item={true}>
                        <Typography className={component_classes.title}>
                            Latest Blog Posts
                        </Typography>
                    </Grid>
                </Grid>
                <PostList
                    posts={posts}
                    classes={postlist_classes}
                    view={selectedPost}
                />
                {totalPost > 0 &&
                    <Pagination
                        count={Math.ceil(totalPost / postLimit)}
                        onChange={changePage}
                    />}
            </Container>
        </Section>}
        {viewPost && <ViewBlogPost post={viewPost} back={setViewPost} classes={post_classes} />}
    </>
    );
}

export default LatestBlogPosts;