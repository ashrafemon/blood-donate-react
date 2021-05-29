import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;
export const JourneyButton = styled.button`
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
