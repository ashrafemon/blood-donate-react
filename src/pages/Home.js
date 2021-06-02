import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Campaigns from "../components/home/Campaigns";
import Donors from "../components/home/Donors";
import MenuList from "../components/home/MenuList";
import { useStyles } from "../components/home/styled";
import { menuList, requestList } from "../constants/homeStates";
import UserLayout from "../layouts/UserLayout";
import { fetchDonors } from "../store/actions/profileActions";

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const data = {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const containerStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px 15px",
        boxSizing: "border-box",
    };

    const center = {
        lat: 23.761226,
        lng: 90.420766,
    };

    useEffect(() => {
        dispatch(fetchDonors());
    }, [dispatch]);

    return (
        <UserLayout>
            <Campaigns />

            <Box mt={3}>
                <Grid container spacing={3} alignItems="stretch">
                    <Grid item md={4} xs={12}>
                        <MenuList title="Menu" data={menuList} />
                        <MenuList title="Requests" data={requestList} />

                        <Card className={classes.statistic}>
                            <CardContent className={classes.statisticContent}>
                                <Typography
                                    variant="body1"
                                    className={classes.statisticTitle}
                                >
                                    Statistics
                                </Typography>
                                <Typography
                                    variant="caption"
                                    className={classes.statisticText}
                                >
                                    New Patient
                                </Typography>
                                <Line data={data} options={options} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Typography className={classes.colTitle}>
                            Map
                        </Typography>

                        <Box className={classes.mapBox}>
                            <LoadScript googleMapsApiKey="AIzaSyD8-ejwKybfth4uiaWz6QcjebKEU0Kw66E">
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                >
                                    <Box className={classes.mapHeaderBox}>
                                        <Box className={classes.searchBox}>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className={classes.searchField}
                                            />
                                            <Box
                                                className={
                                                    classes.searchFieldPrepend
                                                }
                                            >
                                                <FaSearch />
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Donors />
                                </GoogleMap>
                            </LoadScript>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </UserLayout>
    );
};

export default Home;
