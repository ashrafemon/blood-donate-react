import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import SideNavbar from "./SideNavbar";

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: "#f6f7f9",
    },
    container: {
        width: "100%",
        height: "100%",
        padding: "30px 40px",
        boxSizing: "border-box",
    },
});

const UserLayout = ({ children }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Grid container alignItems="stretch">
                <Grid item md={3} sm={4} xs={12}>
                    <SideNavbar />
                </Grid>
                <Grid item md={9} sm={8} xs={12}>
                    <Box className={classes.container}>
                        <HeaderNavbar />
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserLayout;
