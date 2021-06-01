import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import DonateItem from "./DonateItem";

const Donates = () => {
    const [donates] = useState([
        {
            avatar: "A+",
            hospital: "Musa Clinic",
            address: "21/3 Los Angles, CA",
            time: "Monday, 2 Jan, 11:08 PM",
        },
        {
            avatar: "A+",
            hospital: "Sesa Clinic",
            address: "21/3 Los Angles, CA",
            time: "Monday, 2 Jan, 11:08 PM",
        },
    ]);

    return (
        <Grid container spacing={3}>
            {donates.map((item, index) => (
                <Grid item md={4} xs={12} key={index}>
                    <DonateItem {...item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Donates;
