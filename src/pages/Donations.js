import { Grid, Typography } from "@material-ui/core";
import React from "react";
import UserLayout from "../layouts/UserLayout";
import Donates from "../components/donations/Donates";
import History from "../components/donations/History";
import Reviews from "../components/donations/Reviews";
import { useStyles } from "../components/donations/styled";

const Donations = () => {
    const classes = useStyles();
    return (
        <UserLayout>
            <Donates />

            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <Typography variant="h6" className={classes.portionTitle}>
                        History
                    </Typography>
                    <History />
                </Grid>

                <Grid item md={6} xs={12}>
                    <Typography variant="h6" className={classes.portionTitle}>
                        Reviews
                    </Typography>

                    <Reviews />
                </Grid>
            </Grid>
        </UserLayout>
    );
};

export default Donations;
