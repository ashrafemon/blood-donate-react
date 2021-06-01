import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import UserLayout from "../layouts/UserLayout";
import NotificationItem from "../components/notifications/NotificationItem";
import { useStyles } from "../components/notifications/styled";

const Notifications = () => {
    const classes = useStyles();

    const [notifications] = useState([
        {
            bloodGroup: "A+",
            text: "<strong>Musa Clinic</strong> Posted a blood request near you",
            time: "1 min ago",
        },
        {
            bloodGroup: "A+",
            text: "<strong>Musa Clinic</strong> Posted a blood request near you",
            time: "1 min ago",
        },
        {
            bloodGroup: "A+",
            text: "<strong>Musa Clinic</strong> Posted a blood request near you",
            time: "1 min ago",
        },
        {
            bloodGroup: "A+",
            text: "<strong>Musa Clinic</strong> Posted a blood request near you",
            time: "1 min ago",
        },
    ]);

    const [requests] = useState([
        {
            bloodGroup: "A+",
            text: "You accepted the request from <strong>John Adam</strong>",
            time: "1 min ago",
        },
        {
            bloodGroup: "A+",
            text: "You posted a blood request for your brother",
            time: "1 min ago",
        },
    ]);

    return (
        <UserLayout>
            <Grid container spacing={5}>
                <Grid item md={4} sm={6} xs={12} className={classes.grid}>
                    {notifications.map((item, index) => (
                        <NotificationItem
                            key={index}
                            avatar={item.bloodGroup}
                            text={item.text}
                            time={item.time}
                        />
                    ))}
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    {requests.map((item, index) => (
                        <NotificationItem
                            key={index}
                            avatar={item.bloodGroup}
                            text={item.text}
                            time={item.time}
                        />
                    ))}
                </Grid>
            </Grid>
        </UserLayout>
    );
};

export default Notifications;
