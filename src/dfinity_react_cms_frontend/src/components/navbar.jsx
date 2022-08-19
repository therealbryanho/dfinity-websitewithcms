import React from "react";
import { AppBar, Box, Container, Toolbar, Button } from "../../../../node_modules/@material-ui/core/index";
function Navbar(props) {
    const { pages, setPage } = props
    const switchPage = (path) => {
        setPage(path)
    }
    return (
        <Box component="section">
            <AppBar position="static" color="transparent" elevation={0}>
                <Container>
                    <Toolbar>
                        {pages.map((page, index) => {
                            return (
                                <Button key={index} variant="contained" onClick={() => switchPage(page.path)} >
                                    {page.name}
                                </Button>
                            );
                        })}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default Navbar;