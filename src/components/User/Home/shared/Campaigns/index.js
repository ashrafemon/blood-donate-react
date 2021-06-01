import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import CampaignImg from "./../../../../../assets/images/campaign.jpg";
import { useStyles } from "./styled";

const Campaigns = () => {
    const classes = useStyles();
    const [campaigns] = useState([
        {
            img: CampaignImg,
            title: "Blood Donation Campaign 2021",
            held: "Held on Today",
            createdBy: "by Admin",
            createdAt: "1 min ago",
        },
        {
            img: CampaignImg,
            title: "Blood Donation Campaign 2021",
            held: "Held on Today",
            createdBy: "by Admin",
            createdAt: "1 min ago",
        },
        {
            img: CampaignImg,
            title: "Blood Donation Campaign 2021",
            held: "Held on Today",
            createdBy: "by Admin",
            createdAt: "1 min ago",
        },
        {
            img: CampaignImg,
            title: "Blood Donation Campaign 2021",
            held: "Held on Today",
            createdBy: "by Admin",
            createdAt: "1 min ago",
        },
    ]);

    const settings = {
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        dots: false,
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

    return (
        <OwlCarousel className="owl-theme" {...settings}>
            {campaigns.map((item, index) => (
                <div className="item" key={index}>
                    <div className={classes.item}>
                        <div className={classes.content}>
                            <img
                                className={classes.image}
                                src={item.img}
                                alt="Campaign Img"
                            />
                        </div>
                        <div className={classes.overlayBox}>
                            <h5 className={classes.title}>{item.title}</h5>
                            <h5 className={classes.title}>{item.held}</h5>

                            <div className={classes.createBox}>
                                <h6 className={classes.text}>
                                    {item.createdBy}
                                </h6>
                                <h6 className={classes.text}>
                                    {item.createdAt}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </OwlCarousel>
        // <Slider {...settings} className={classes.container}>
        // {campaigns.map((item, index) => (
        //     <div className={classes.item} key={index}>
        //         <div className={classes.content}>
        //             <img
        //                 className={classes.image}
        //                 src={item.img}
        //                 alt="Campaign Img"
        //             />
        //         </div>
        //         <div className={classes.overlayBox}>
        //             <h5 className={classes.title}>{item.title}</h5>
        //             <h5 className={classes.title}>{item.held}</h5>

        //             <div className={classes.createBox}>
        //                 <h6 className={classes.text}>{item.createdBy}</h6>
        //                 <h6 className={classes.text}>{item.createdAt}</h6>
        //             </div>
        //         </div>
        //     </div>
        // ))}
        // </Slider>
    );
};

export default Campaigns;
