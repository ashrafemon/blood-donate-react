import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/shared/Logo";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;
const JourneyButton = styled.button`
    min-width: 200px;
    padding: 20px;
    background-color: #c70100;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    border: 0;
    outline: 0;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        background-color: rgba(199, 1, 0, 0.8);
    }
`;

const Starter = () => {
    const history = useHistory();
    return (
        <Container>
            <Logo />
            <JourneyButton onClick={() => history.push("login")}>
                Start Journey
            </JourneyButton>
        </Container>
    );
};

export default Starter;
