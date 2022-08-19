import React from "react";
import { Box, Container, Grid } from "../../../../node_modules/@material-ui/core/index";

function Footer(props) {
    return (
        <Box component="section" style={{ marginTop: "auto" }}>
            <Container>
                <Grid container={true} >
                    <Grid item={true} >
                        Footer
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default Footer;