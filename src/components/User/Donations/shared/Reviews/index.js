import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styled";
import { FaThumbsUp, FaShare } from "react-icons/fa";

const Reviews = () => {
    const classes = useStyles();
    const [reviews] = useState([
        {
            name: "Asrhaf Emon",
            date: "Dec 27",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero error magnam voluptates illum assumenda! Minima iusto labore magni voluptates reiciendis! Libero distinctio eaque non dignissimos inventore perferendis voluptate provident consectetur!",
        },
        {
            name: "Asrhaf Emon",
            date: "Dec 27",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero error magnam voluptates illum assumenda! Minima iusto labore magni voluptates reiciendis! Libero distinctio eaque non dignissimos inventore perferendis voluptate provident consectetur!",
        },
    ]);

    return (
        <Box>
            {reviews.map((item, index) => (
                <Card key={index} className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Grid
                            container
                            alignItems="center"
                            spacing={2}
                            className={classes.infoBox}
                        >
                            <Grid item>
                                <Avatar>A+</Avatar>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    className={classes.name}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className={classes.date}
                                >
                                    {item.date}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography variant="body2" className={classes.text}>
                            {item.text}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actionBox}>
                        <Button
                            startIcon={<FaThumbsUp />}
                            className={classes.actionButton}
                            size="small"
                        >
                            Like
                        </Button>
                        <Button
                            startIcon={<FaShare />}
                            className={classes.actionButton}
                            size="small"
                        >
                            Reply
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};

export default Reviews;
