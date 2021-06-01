import React from "react";
import { useStyles } from "./styled";
import { Grid, Card, CardContent, Avatar, Typography } from "@material-ui/core";

const DonateItem = ({ avatar, hospital, address, time }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} elevation={0}>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <Avatar className={classes.avatar}>{avatar}</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">{hospital}</Typography>
                        <Typography className={classes.block} variant="caption">
                            {address}
                            {/* 21/3 Los Angles, CA */}
                        </Typography>
                        <Typography className={classes.block} variant="caption">
                            {time}
                            {/* Monday, 2 Jan, 11:08PM */}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default DonateItem;
