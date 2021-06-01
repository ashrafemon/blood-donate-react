import { Box, Grid } from "@material-ui/core";
import React from "react";
import {
    LayoutContentBox,
    LayoutFlexBox,
    LayoutSideBarBox,
} from "../components/GlobalStyled";
import SideNavbar from "../components/User/shared/SideNavbar";

const UserLayout = ({ children }) => {
    return (
        <>
            <LayoutFlexBox>
                <LayoutSideBarBox>
                    <SideNavbar />
                </LayoutSideBarBox>
                <LayoutContentBox>{children}</LayoutContentBox>
            </LayoutFlexBox>

            <Grid container>
                <Grid item md={3} sm={4} xs={12}>
                    <SideNavbar />
                </Grid>
                <Grid item md={9} sm={8} xs={12}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default UserLayout;
