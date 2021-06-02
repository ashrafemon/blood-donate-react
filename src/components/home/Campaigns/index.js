import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from "../../../store/actions/profileActions";
import { useStyles } from "./styled";
import moment from "moment";

const Campaigns = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const campaigns = useSelector((state) => state.profile.campaigns);

    useEffect(() => {
        dispatch(fetchCampaigns());
    }, [dispatch]);

    const settings = {
        margin: 20,
        autoplay: true,
        smartSpeed: 500,
        // loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    if (campaigns.length > 0) {
        return (
            <OwlCarousel
                className={`owl-theme ${classes.container}`}
                {...settings}
            >
                {campaigns.map((item, index) => (
                    <div className="item" key={index}>
                        <div className={classes.item}>
                            <div className={classes.content}>
                                <img
                                    className={classes.image}
                                    src={item.image}
                                    alt="Campaign Img"
                                />
                            </div>
                            <div className={classes.overlayBox}>
                                <h5 className={classes.title}>{item.title}</h5>
                                <h5 className={classes.title}>
                                    Held on {item.held_on}
                                </h5>

                                <div className={classes.createBox}>
                                    <h6 className={classes.text}>
                                        By {item.user.name}
                                    </h6>
                                    <h6 className={classes.text}>
                                        {moment(item.created_at).fromNow()}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        );
    } else {
        return <Typography variant="h6">No campaigns available...</Typography>;
    }
};

export default Campaigns;
