import React from "react";
import Section from "./Section";
import { Container, Grid } from "@material-ui/core";

function Footer(props) {
    return (
        <Section style={{ marginTop: "auto" }}>
            <Container>
                <Grid container={true} >
                    <Grid item={true} >
                        Footer
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}
export default Footer;