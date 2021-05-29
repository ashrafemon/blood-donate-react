import React from "react";
import UserLayout from "../../../layouts/UserLayout";
import HeaderNav from "../shared/HeaderNav";
import { useStyles } from "./styled";

const Home = () => {
    const classes = useStyles();
    return (
        <UserLayout>
            <HeaderNav />

            <div className={classes.campaignBox}>
                <div className={classes.campaignItem}>
                    <div className={classes.campaignItemContent}></div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Home;
