import React from "react";
import {
    AccessText,
    CircleGroup,
    CircleRadio,
    FormGroup,
    PortionTitle,
} from "../styled";
import { useSelector } from "react-redux";

const BloodGroupInfo = ({ formData, handler }) => {
    const bloodGroups = useSelector((state) => state.auth.blood_groups);

    return (
        <>
            <PortionTitle style={{ textAlign: "left" }}>
                What is Your <br /> Blood Group
            </PortionTitle>

            {bloodGroups && bloodGroups.length > 0 ? (
                <CircleGroup>
                    {bloodGroups.map((item) => (
                        <CircleRadio
                            key={item.id}
                            onClick={() => handler(item.name, "blood_group")}
                            isActive={formData.blood_group === item.name}
                            type="button"
                        >
                            {item.name}
                        </CircleRadio>
                    ))}
                </CircleGroup>
            ) : (
                <FormGroup>
                    <AccessText>No Blood Groups Found...</AccessText>
                </FormGroup>
            )}
        </>
    );
};

export default BloodGroupInfo;
