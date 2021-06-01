import styled from "styled-components";

export const FlexRow = styled.div`
    width: 100%;
    display: flex;
    gap: 50px;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const FlexMyInfoCol = styled.div`
    width: 45%;
    padding: 10px 0;

    @media (max-width: 1020px) {
        width: 100%;
    }
`;

export const FlexContentCol = styled.div`
    width: 55%;
    padding: 10px 0;

    @media (max-width: 1020px) {
        width: 100%;
    }
`;

export const Card = styled.div`
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 5px 2px #e7e7e7;
    background-color: #fff;
    box-sizing: border-box;
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const CardContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

export const CardContentImage = styled.div`
    background: ${(props) =>
        props.image ? `url(${props.image}) no-repeat top center` : "#fff"};
    background-size: cover;
    width: 100%;
    height: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 30px;
`;

export const CardContentImageHeading = styled.h3`
    font-size: 28px;
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const CardContentImageSubHeading = styled.h4`
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: 400;
`;

export const BloodGroup = styled.div`
    position: absolute;
    bottom: -10px;
    right: 15px;
`;
export const BloodGroupText = styled.p`
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0;
    position: relative;
    z-index: 999;
`;
export const BloodGroupImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const CardContentTitle = styled.h5`
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: #000;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        color: #c70100;
    }
`;

export const CardContentText = styled.p`
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    color: #000;
    line-height: 1.6;
    margin-bottom: 10px;
    font-weight: 400;
`;

export const BadgeList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ededed;
    margin-bottom: 20px;
`;

export const BadgeListItem = styled.div`
    width: calc(100% / 4);
    margin-bottom: 5px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    @media (max-width: 500px) {
        width: calc(100% / 2);
    }
`;

export const BadgeListItemAvatar = styled.img`
    width: 80%;
    max-width: 80px;
    height: 80px;
    object-fit: contain;
`;
export const BadgeListItemText = styled.p`
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    color: #000;
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: 0;
`;

export const NextDonateProgressBar = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background-color: #9e9e9e;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;

    &::after {
        content: "";
        width: ${(props) => (props.value ? props.value : "0%")};
        height: 100%;
        display: block;
        background-color: #c70100;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
    }
`;

export const NextDonateText = styled.p`
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    color: #000;
    font-weight: 400;
    margin-bottom: 0;

    span {
        color: #c70100;
    }
`;

export const DonateRequestTab = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const DonateRequestTabItem = styled.li`
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: ${(props) => (props.isActive ? "#C70100" : "#000")};
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 5px;
    border-bottom: ${(props) => (props.isActive ? "1px solid #C70100" : "0")};

    &:hover {
        color: #c70100;
        border-bottom: 1px solid #c70100;
    }
`;

export const DonateList = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 15px 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const DonateListItem = styled.li`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`;

export const DonateListItemDate = styled.div`
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    color: #000;
    font-weight: 400;
    text-align: center;

    span {
        display: block;
        font-size: 25px;
        font-weight: bold;
    }
`;

export const DonateListItemHospital = styled.div`
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: #000;
    font-weight: bold;
    text-transform: capitalize;

    span {
        display: block;
        font-size: 12px;
        font-weight: 400;
        margin-top: 5px;
    }
`;

export const DonateListItemDuration = styled.div`
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    color: #000;
    font-weight: 400;
`;

export const Badges = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const BadgeItem = styled.div`
    width: calc(100% / 5);
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        p {
            color: #c70100;
            font-weight: 600;
        }
    }

    @media (max-width: 600px) {
        width: calc(100% / 3);
    }

    @media (max-width: 400px) {
        width: calc(100% / 2);
    }
`;

export const BadgeItemAvatar = styled.img`
    width: 100%;
    max-width: 80px;
    height: 60px;
    object-fit: contain;
`;
export const BadgeItemText = styled.p`
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    color: #000;
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: 0;
`;
