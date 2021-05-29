import React from "react";
import {
    LogoBox,
    LogoImg,
    LogoName,
    Nav,
    NavAds,
    NavbarBox,
    NavItem,
} from "./styled";
import BloodDrop from "../../../../assets/images/blood-drop.png";
import AdsImg from "../../../../assets/images/ads.png";
import { FaBell, FaCog, FaHome, FaMap, FaUserAlt } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const SideNavbar = () => {
    const history = useHistory();

    return (
        <NavbarBox>
            <LogoBox>
                <LogoImg src={BloodDrop} alt="Blood Drop" />
                <LogoName>
                    <span>Blood</span> Donation
                </LogoName>
            </LogoBox>

            <Nav>
                <NavItem isActive={history.location.pathname.includes("home")}>
                    <Link to="/home">
                        <FaHome /> Home
                    </Link>
                </NavItem>
                <NavItem
                    isActive={history.location.pathname.includes("profile")}
                >
                    <Link to="/profile">
                        <FaUserAlt /> Profile
                    </Link>
                </NavItem>
                <NavItem
                    isActive={history.location.pathname.includes(
                        "notifications"
                    )}
                >
                    <Link to="/home">
                        <FaBell /> Notifications
                    </Link>
                </NavItem>
                <NavItem
                    isActive={history.location.pathname.includes("donors")}
                >
                    <Link to="/home">
                        <FaMap /> Donors
                    </Link>
                </NavItem>
                <NavItem
                    isActive={history.location.pathname.includes("customize")}
                >
                    <Link to="/home">
                        <FaCog /> Customize
                    </Link>
                </NavItem>
            </Nav>

            <NavAds src={AdsImg} />
        </NavbarBox>
    );
};

export default SideNavbar;
