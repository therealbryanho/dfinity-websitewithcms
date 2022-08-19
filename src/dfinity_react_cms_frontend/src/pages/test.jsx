import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from '../../../../node_modules/@material-ui/core/index';
import Section from "../components/section";
import Contentful_Service from "../utils/contentful/services";

function Test(props) {
    const [pageProps, setPageProps] = useState(null);
    useEffect(() => {
        const load = async () => {
            await new Contentful_Service().getContentful("HOME").then(data => {
                console.log(data);
                setPageProps(data);
            })


        }

        load();
    }, []);

    return (
        <Section>
            <Container>
                <Grid container={true}>
                    <Grid item={true}>
                        <Typography>
                            Test
                        </Typography>
                    </Grid>
                    <Grid item={true}>
                        {pageProps && pageProps.map((item, key) => {
                            return (
                                <Grid item={true}>
                                    {item.title}
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}
export default Test;