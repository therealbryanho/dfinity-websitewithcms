import React from "react";
import { Box } from "@material-ui/core";

function Section(props) {

    const size = "normal";
    const verticalPadding = {
        normal: { xs: 6 },
        medium: { xs: 6, sm: 10 },
        large: { xs: 6, sm: 20 },
        auto: 0,
    }[size];

    return (
        <Box
            component="section"
            py={verticalPadding}
        >
            {props.children}
        </Box>
    );
}
export default Section;