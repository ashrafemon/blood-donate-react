import React from "react";
import { useStyles } from "./styled";
import {
    Card,
    CardContent,
    Grid,
    Avatar,
    Typography,
    Box,
} from "@material-ui/core";

const NotificationItem = ({ avatar, text, time }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} elevation={0}>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <Avatar className={classes.avatar}>{avatar}</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography
                            variant="body2"
                            className={classes.text}
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        />
                    </Grid>
                </Grid>
                <Box textAlign="right">
                    <Typography variant="caption">{time}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NotificationItem;
