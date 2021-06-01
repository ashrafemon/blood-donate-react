import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import AvatarImg from "../../../assets/images/male.png";
import { useStyles } from "./styled";
import OwlCarousel from "react-owl-carousel";

const Donors = () => {
    const classes = useStyles();

    const [donors] = useState([
        {
            name: "John Doe",
            address: "28 North Camelia, LA, 4569",
            gender: "male",
            mobile: "+8801931819311",
            status: "Available",
        },
        {
            name: "John Doe",
            address: "28 North Camelia, LA, 4569",
            gender: "male",
            mobile: "+8801931819311",
            status: "Available",
        },
        {
            name: "John Doe",
            address: "28 North Camelia, LA, 4569",
            gender: "male",
            mobile: "+8801931819311",
            status: "Available",
        },
    ]);

    const settings = {
        margin: 10,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
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

    return (
        <OwlCarousel className={`owl-theme ${classes.container}`} {...settings}>
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
                                        src={AvatarImg}
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
                                        {item.gender === "male" ? (
                                            <FaMale />
                                        ) : (
                                            <FaFemale />
                                        )}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        className={classes.address}
                                    >
                                        {item.address}
                                    </Typography>
                                    <ul className={classes.infoList}>
                                        <li className={classes.infoListItem}>
                                            {item.mobile}
                                        </li>
                                        <li className={classes.infoListItem}>
                                            {item.status}
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
};

export default Donors;
