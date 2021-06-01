import styled from "styled-components";

export const LayoutFlexBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f6f7f9;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;
export const LayoutSideBarBox = styled.div`
    width: calc((100% / 12) * 2);
    height: 100%;
    box-sizing: border-box;

    @media (max-width: 1366px) {
        width: calc((100% / 12) * 3);
    }

    @media (max-width: 1020px) {
        width: calc((100% / 12) * 4);
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const LayoutContentBox = styled.div`
    width: calc((100% / 12) * 10);
    height: 100%;
    padding: 30px 40px;
    box-sizing: border-box;

    @media (max-width: 1366px) {
        width: calc((100% / 12) * 9);
    }

    @media (max-width: 1020px) {
        width: calc((100% / 12) * 8);
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;
