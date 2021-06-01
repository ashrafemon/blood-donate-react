import {
    Box,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@material-ui/core";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { FaSearch } from "react-icons/fa";
import Campaigns from "../components/home/Campaigns";
import Donors from "../components/home/Donors";
import MenuList from "../components/home/MenuList";
import { useStyles } from "../components/home/styled";
import UserLayout from "../layouts/UserLayout";

const Home = () => {
    const classes = useStyles();

    const [menuList] = useState([
        {
            text: "Book",
            image: "https://banner2.cleanpng.com/20180526/wty/kisspng-shooting-target-firearm-weapon-5b0a11382cd163.8192411315273864241836.jpg",
        },
        {
            text: "Donation",
            image: "https://st2.depositphotos.com/1518767/8189/i/950/depositphotos_81897186-stock-photo-blood-donation-calendar.jpg",
        },
        {
            text: "Donors",
            image: "http://iserotope.com/wp-content/uploads/2010/08/donors.jpg",
        },
        {
            text: "My List",
            image: "https://www.how-to-draw-funny-cartoons.com/images/cartoon-list-007.jpg",
        },
    ]);

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
