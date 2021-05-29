import styled from "styled-components";

export const AuthWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        padding: 30px 0;
        height: initial;
    }
`;
export const LogoSideBox = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const SuggestText = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    text-align: center;
    width: 40%;
    margin: 30px 0 0;
    line-height: 1.8;
    user-select: none;

    @media (max-width: 767px) {
        width: 80%;
    }
`;

export const DividerBox = styled.div`
    width: 25%;
    height: 100%;
    padding: 50px 0;
    box-sizing: border-box;

    @media (max-width: 767px) {
        width: 90%;
        margin: auto;
    }
`;

export const PortionTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 34px;
    font-weight: bold;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 30px;
    text-align: center;
`;

export const FormGroup = styled.div`
    width: 100%;
    margin-bottom: 30px;
    position: relative;
`;

export const AuthButton = styled.button`
    width: 100%;
    display: block;
    padding: 20px;
    background-color: #c70100;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    border: 0;
    outline: 0;
    border-radius: 30px;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: rgba(199, 1, 0, 0.8);
    }
`;

export const LinkText = styled.span`
    width: 100%;
    display: block;
    text-align: center;
    color: #505050;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
`;

export const AccessText = styled.p`
    text-align: center;
    color: #505050;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    margin-top: 10px;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #505050;
    }
`;

export const CircleGroup = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 50px;
`;

export const CircleRadio = styled.button`
    width: 60px;
    height: 60px;
    background-color: ${(props) => (props.isActive ? "#C70100" : "#ffffff")};
    color: ${(props) => (props.isActive ? "#ffffff" : "#C70100")};
    outline: 0;
    border: 1px solid #c70100;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    transition-duration: 0.5s;
    letter-spacing: 1px;
    overflow: hidden;

    &:hover {
        background-color: #c70100;
        color: #ffffff;
    }
`;

export const SquareGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
`;

export const SquareRadio = styled.button`
    width: 120px;
    height: 180px;
    background-color: ${(props) => (props.isActive ? "#5cb85c" : "#F6F7F9")};
    color: ${(props) => (props.isActive ? "#ffffff" : "#515252")};
    outline: 0;
    border: 0;
    box-shadow: 2px 2px 5px 1px
        ${(props) => (props.isActive ? "#5cb85c" : "#E7E7E7")};
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;

    svg {
        width: 30px;
        height: 30px;
        fill: #c70100;
        position: absolute;
        top: -10px;
        left: -10px;
    }

    &:hover {
        background-color: #5cb85c;
        color: #ffffff;
        box-shadow: 2px 2px 5px 1px #5cb85c;
    }
`;
export const SquareRadioImg = styled.img`
    width: 100%;
    border-radius: 50%;
`;

export const UploadPhotoInput = styled.input`
    display: none;
`;

export const UploadPhotoBtn = styled.button`
    width: 150px;
    height: 150px;
    display: block;
    border: 0;
    outline: 0;
    box-shadow: 0 0 10px 5px #e7e7e7;
    background-color: #f6f7f9;
    border-radius: 50%;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    text-align: center;

    svg {
        display: block;
        margin: 0 auto 5px;
        font-size: 50px;
        fill: #c70100;
    }
`;
