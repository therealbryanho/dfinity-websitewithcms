import React from "react";
import { AppBar, Button, Container, Toolbar } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Section from "./Section";

function Navbar({ pages }, props) { // Navbar will populate the links for the pages defined in the App, you can customize it in this component or add into App pages
    const { pathname } = useLocation();

    return (
        <Section>
            <AppBar position="static" color="transparent" elevation={0}>
                <Container>
                    <Toolbar>
                        {pages.map((page, index) => {
                            return (
                                <Button
                                    key={index}
                                    component={Link}
                                    to={page.path}
                                    variant={pathname === page.path ? "contained" : "text"}
                                >
                                    {page.name}
                                </Button>
                            );
                        })}
                    </Toolbar>
                </Container>
            </AppBar>
        </Section>
    );
}
export default Navbar;