import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import UserLayout from "../../../layouts/UserLayout";
import HeaderNav from "../shared/HeaderNav";
import TextField from "./../../shared/TextField";
import MenuList from "./shared/MenuList";
import Request from "./shared/Request";
import { useStyles } from "./styled";

const Requests = () => {
    const classes = useStyles();
    const [requestList] = useState([
        {
            text: "Urgent Request",
            image: "https://cdn.pixabay.com/photo/2016/07/06/20/31/ambulance-1501264__340.png",
        },
        {
            text: "My Request",
            image: "https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-vector-illustration-order-documentation-processing-system-handling-customer-request-logistics-automated-logistics-operations-abstract-metaphor_335657-1789.jpg?size=338&ext=jpg",
        },
        {
            text: "Post Request",
            image: "https://media.istockphoto.com/vectors/donate-blood-concept-with-blood-bag-and-heart-character-blood-vector-vector-id1032496340?b=1&k=6&m=1032496340&s=612x612&w=0&h=2o4zOlKWkb3QLnqAgEArn1-h68sfoT8cIABdAJ_zZ3E=",
        },
    ]);

    return (
        <UserLayout>
            <HeaderNav />

            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <MenuList title="Requests" data={requestList} />

                    <Typography variant="h5" className={classes.portionTitle}>
                        Urgent Requests
                    </Typography>

                    <Request />
                    <Request />

                    <Typography variant="h5" className={classes.portionTitle}>
                        My Requests
                    </Typography>

                    <Request />
                    <Request />
                </Grid>
                <Grid item md={8} xs={12}>
                    <Typography variant="h5" className={classes.portionTitle}>
                        Blood Request
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item md={8} xs={12}>
                            <Card>
                                <CardContent>
                                    <TextField
                                        id="area"
                                        placeholder="New York"
                                        type="text"
                                        label="Area or City"
                                    />
                                    <Grid container spacing={2}>
                                        <Grid item md={6} xs={12}>
                                            <TextField
                                                id="area"
                                                placeholder="New York"
                                                type="text"
                                                label="Area or City"
                                            />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <TextField
                                                id="area"
                                                placeholder="New York"
                                                type="text"
                                                label="Area or City"
                                            />
                                        </Grid>
                                    </Grid>

                                    <Box textAlign="center">
                                        <Button
                                            variant="contained"
                                            className={classes.publishBtn}
                                        >
                                            Publish
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography
                                variant="h5"
                                className={classes.portionTitle}
                            >
                                Recent History
                            </Typography>

                            <Grid container spacing={1}>
                                <Grid item md={6} xs={6}>
                                    <Card className={classes.card}>
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <Avatar>A+</Avatar>
                                            <Typography
                                                variant="body2"
                                                className={classes.title}
                                            >
                                                Los Angles
                                            </Typography>
                                            <Typography variant="caption">
                                                Urgent
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={6} xs={6}>
                                    <Card className={classes.card}>
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <Avatar>A+</Avatar>
                                            <Typography
                                                variant="body2"
                                                className={classes.title}
                                            >
                                                Los Angles
                                            </Typography>
                                            <Typography variant="caption">
                                                Urgent
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Typography variant="h5" className={classes.portionTitle}>
                        Recent Requests
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Request />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Request />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Request />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Request />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </UserLayout>
    );
};

export default Requests;
