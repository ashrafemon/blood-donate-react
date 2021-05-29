import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const LoadingPage = () => {
    return (
        <Container>
            <ReactLoading
                type="spin"
                color="#C70100"
                height="80px"
                width="80px"
            />
        </Container>
    );
};

export default LoadingPage;
