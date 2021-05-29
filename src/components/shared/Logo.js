import React from "react";
import BloodDrop from "../../assets/images/blood-drop.png";
import styled from "styled-components";

const AppIconName = styled.div`
  width: 100%;
  text-align: center;
`
const AppIcon = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  user-select: none;
  margin-bottom: 5px;
`
const AppName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  span {
    color: #C70100;
  }
`

const Logo = () => {
    return (
        <AppIconName>
            <AppIcon src={BloodDrop} alt="Blood Drop"/>
            <AppName><span>Blood</span> Donation</AppName>
        </AppIconName>
    )
}

export default Logo