import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

import UserLayout from "../../../layouts/UserLayout";
import HeaderNav from "../shared/HeaderNav";
import Campaigns from "./shared/Campaigns";
import Donors from "./shared/Donors";
import MenuList from "./shared/MenuList";
import { Line } from "react-chartjs-2";
import { useStyles } from "./styled";

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

    return (
        <UserLayout>
            <HeaderNav />

            <Campaigns />

            <div className={classes.flexBox}>
                <div className={classes.menuCol}>
                    <MenuList title="Menu" data={menuList} />
                    <MenuList title="Requests" data={requestList} />

                    <div className={classes.statisticBox}>
                        <h5 className={classes.statisticTitle}>Statistics</h5>
                        <h5 className={classes.statisticText}>New Patient</h5>
                        <Line data={data} options={options} />
                    </div>
                </div>
                <div className={classes.mapCol}>
                    <h3 className={classes.colTitle}>Map</h3>
                    <div className={classes.mapBox}>
                        <div className={classes.mapHeaderBox}>
                            <div className={classes.searchBox}>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className={classes.searchField}
                                />
                                <div className={classes.searchFieldPrepend}>
                                    <FaSearch />
                                </div>
                            </div>
                        </div>

                        <div className={classes.mapSearchResult}>
                            <Donors />
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Home;
