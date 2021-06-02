import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import OwlCarousel from "react-owl-carousel";
import { useSelector } from "react-redux";
import { useStyles } from "./styled";

const Donors = () => {
    const classes = useStyles();
    const donors = useSelector((state) => state.profile.donors);

    const settings = {
        margin: 10,
        autoplay: false,
        smartSpeed: 500,
        // loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1400: {
                items: 3,
            },
        },
    };

    if (donors.length > 0) {
        return (
            <OwlCarousel
                className={`owl-theme ${classes.container}`}
                {...settings}
            >
                {donors.map((item, index) => (
                    <Box pt={2} className="item" key={index}>
                        <Card className={classes.item}>
                            <CardContent className={classes.itemContent}>
                                <Avatar
                                    className={classes.itemBlood}
                                    src="https://www.nzblood.co.nz/assets/Column/Blood-Type-Blood-Drops-A+__ScaleMaxWidthWzcwMF0.png"
                                    alt="Blood Group"
                                />
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="space-between"
                                >
                                    <Grid item md={3}>
                                        <Avatar
                                            src={item.profile.avatar}
                                            alt="Avatar"
                                            className={classes.avatar}
                                        />
                                    </Grid>
                                    <Grid item md={9}>
                                        <Typography
                                            variant="body2"
                                            className={classes.name}
                                        >
                                            {item.name}{" "}
                                            {item.profile.gender === "male" ? (
                                                <FaMale />
                                            ) : (
                                                <FaFemale />
                                            )}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            className={classes.address}
                                        >
                                            {item.profile.street_address}
                                        </Typography>
                                        <ul className={classes.infoList}>
                                            <li
                                                className={classes.infoListItem}
                                            >
                                                {item.profile.phone}
                                            </li>
                                            <li
                                                className={classes.infoListItem}
                                            >
                                                {item.status === "active" &&
                                                    "Available"}
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </OwlCarousel>
        );
    } else {
        return <Typography variant="body2">No donor found....</Typography>;
    }
};

export default Donors;
