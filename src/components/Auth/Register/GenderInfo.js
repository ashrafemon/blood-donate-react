import React from "react";
import {PortionTitle, SquareGroup, SquareRadio, SquareRadioImg} from "../styled";
import MaleImage from './../../../assets/images/male.png'
import FeMaleImage from './../../../assets/images/female.png'

const GenderInfo = ({formData, handler}) => {
    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>How Much Do <br/> Your Weight</PortionTitle>

            <SquareGroup>
                <SquareRadio
                    type="button"
                    isActive={formData.gender === 'male'}
                    onClick={() => handler('male', 'gender')}
                >
                    <SquareRadioImg src={MaleImage} alt="Male"/>
                    <span>Male</span>
                </SquareRadio>
                <SquareRadio
                    type="button"
                    isActive={formData.gender === 'female'}
                    onClick={() => handler('female', 'gender')}
                >
                    <SquareRadioImg src={FeMaleImage} alt="Female"/>
                    <span>Female</span>
                </SquareRadio>
            </SquareGroup>

        </>
    )
}

export default GenderInfo