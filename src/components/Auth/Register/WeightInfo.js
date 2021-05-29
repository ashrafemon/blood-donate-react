import React from "react";
import {
    PortionTitle,
    SquareGroup,
    SquareRadio,
    SquareRadioImg,
} from "../styled";
import WeightImage from "./../../../assets/images/weight.png";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const WeightInfo = ({ formData, handler }) => {
    return (
        <>
            <PortionTitle style={{ textAlign: "left" }}>
                How Much Do <br /> Your Weight
            </PortionTitle>

            <SquareGroup>
                <SquareRadio
                    type="button"
                    onClick={() => handler("50+", "weight")}
                    isActive={formData.weight === "50+"}
                >
                    <FaArrowAltCircleUp />
                    <SquareRadioImg src={WeightImage} alt="Weight" />
                    <span>&gt; 50 KG</span>
                </SquareRadio>
                <SquareRadio
                    type="button"
                    onClick={() => handler("50-", "weight")}
                    isActive={formData.weight === "50-"}
                >
                    <FaArrowAltCircleDown />
                    <SquareRadioImg src={WeightImage} alt="Weight" />
                    <span>&lt; 50 KG</span>
                </SquareRadio>
            </SquareGroup>
        </>
    );
};

export default WeightInfo;
