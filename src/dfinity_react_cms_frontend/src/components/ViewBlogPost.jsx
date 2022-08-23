import React from 'react';
import { Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { Post } from './Post';
import Section from './Section';

const useViewPostStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor:"black"
    },
    title: {
        textTransform: "uppercase"
    },
}))
const usePostStyles = makeStyles((theme) => ({
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
}))

function ViewBlogPost(props) {
    const component_classes = useViewPostStyles();
    const post_classes = usePostStyles();

    const post = props.post || false;
    if (!post) return;
    const { back } = props; // Set viewPost to false to go back to Latest Blog Posts

    return (
        <Section>
            <Container className={component_classes.container}>
                <Grid container={true} >
                    <Grid item={true} align="left" xs={12} sm={12} md={6} lg={6}>
                        <Typography className={component_classes.title} >
                            View Blog Post
                        </Typography>
                    </Grid>
                    <Grid item={true} align="right" xs={12} sm={12} md={6} lg={6}>
                        <Typography component={Link} className={component_classes.title} onClick={() => back(false)}>
                            Latest Blog Posts
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container={true} align="left">
                    <Post post={post} classes={post_classes} />
                </Grid>
            </Container>
        </Section>
    );
}

export default ViewBlogPost;