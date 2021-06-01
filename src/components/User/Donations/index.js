import { Grid, Typography } from "@material-ui/core";
import React from "react";
import UserLayout from "../../../layouts/UserLayout";
import HeaderNav from "../shared/HeaderNav";
import Donates from "./shared/Donates";
import History from "./shared/History";
import Reviews from "./shared/Reviews";
import { useStyles } from "./styled";

const Donations = () => {
    const classes = useStyles();
    return (
        <UserLayout>
            <HeaderNav />

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
