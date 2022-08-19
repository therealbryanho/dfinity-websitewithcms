import React from 'react';
import { Container, Grid, Typography } from '../../../../node_modules/@material-ui/core/index';
import Section from '../components/section';

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