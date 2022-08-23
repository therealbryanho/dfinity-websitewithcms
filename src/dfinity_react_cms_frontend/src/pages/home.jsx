import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Section from '../components/Section';

function Home(props) {

    
    return (
        <Section>
            <Container>
                <Grid container={true}>
                    <Grid item={true}>
                        <Typography>
                            Home
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}

export default Home;