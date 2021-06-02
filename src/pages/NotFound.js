import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    NotFound: {
        fontWeight: 600,
        color: "#C70100",
    },
});

const NotFound = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Typography variant="h2" className={classes.NotFound}>
                404
            </Typography>
            <Typography variant="h3" className={classes.NotFound}>
                Not Found
            </Typography>
        </Box>
    );
};

export default NotFound;
