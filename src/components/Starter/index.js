import React from "react";
import { Container, JourneyButton } from "./styled";
import Logo from "../shared/Logo";
import { useHistory } from "react-router-dom";

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
