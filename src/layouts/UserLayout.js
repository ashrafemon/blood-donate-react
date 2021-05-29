import React from "react";
import {
    LayoutContentBox,
    LayoutFlexBox,
    LayoutSideBarBox,
} from "../components/GlobalStyled";
import SideNavbar from "../components/User/shared/SideNavbar";

const UserLayout = ({ children }) => {
    return (
        <LayoutFlexBox>
            <LayoutSideBarBox>
                <SideNavbar />
            </LayoutSideBarBox>
            <LayoutContentBox>{children}</LayoutContentBox>
        </LayoutFlexBox>
    );
};

export default UserLayout;
