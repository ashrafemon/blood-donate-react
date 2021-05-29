import styled from "styled-components";

export const NavbarBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 30px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const LogoBox = styled.div`
    width: 40%;
    text-align: center;
    margin: 0 auto 30px;

    @media (max-width: 767px) {
        width: 100px;
    }
`;
export const LogoImg = styled.img`
    width: 60%;
    height: 60%;
    object-fit: cover;
    user-select: none;

    @media (max-width: 767px) {
        width: 80%;
        height: 80%;
    }
`;
export const LogoName = styled.p`
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;

    span {
        color: #c70100;
    }
`;

export const Nav = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0 0 30px;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

export const NavItem = styled.li`
    width: 100%;

    a {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        background-color: ${(props) =>
            props.isActive ? "#EDF0F5" : "#ffffff"};
        color: ${(props) => (props.isActive ? "#C70100" : "#000000")};
        text-decoration: none;
        position: relative;

        svg {
            font-size: 30px;
        }

        &:hover {
            background-color: #edf0f5;
            color: #c70100;

            &:after {
                content: "";
                width: 8px;
                height: 100%;
                background-color: #c70100;
                position: absolute;
                top: 0;
                right: 0;
            }
        }
    }
`;

export const NavAds = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;

    @media (max-width: 767px) {
        display: none;
    }
`;
