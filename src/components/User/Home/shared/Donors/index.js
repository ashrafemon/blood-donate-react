import React, { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import AvatarImg from "./../../../../../assets/images/male.png";
import { useStyles } from "./styled";

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

    return (
        <div className={classes.container}>
            {donors.map((item, index) => (
                <div className={classes.item} key={index}>
                    <img
                        className={classes.itemBlood}
                        src="https://www.nzblood.co.nz/assets/Column/Blood-Type-Blood-Drops-A+__ScaleMaxWidthWzcwMF0.png"
                        alt="Blood Group"
                    />
                    <div className={classes.avatarBox}>
                        <img
                            src={AvatarImg}
                            alt="Avatar"
                            className={classes.avatar}
                        />
                    </div>
                    <div className={classes.detailBox}>
                        <h5 className={classes.name}>
                            {item.name}{" "}
                            {item.gender === "male" ? <FaMale /> : <FaFemale />}
                        </h5>
                        <p className={classes.address}>{item.address}</p>
                        <ul className={classes.infoList}>
                            <li className={classes.infoListItem}>
                                {item.mobile}
                            </li>
                            <li className={classes.infoListItem}>
                                {item.status}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Donors;
