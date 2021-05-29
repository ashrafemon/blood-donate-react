import React from "react";
import TextField from "../../shared/TextField";
import { PortionTitle } from "../styled";

const BasicInfo = ({ formData, handler }) => {
    return (
        <>
            <PortionTitle style={{ textAlign: "left" }}>
                Let Us Know <br /> About Your
            </PortionTitle>

            <TextField
                id="name"
                label="Name*"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                changeHandler={(e) => handler(e.target.value, "name")}
            />

            <TextField
                id="email"
                label="Email*"
                type="email"
                placeholder="johndoe@email.com"
                value={formData.email}
                changeHandler={(e) => handler(e.target.value, "email")}
            />

            <TextField
                id="password"
                label="Password* (minimum 6 characters)"
                type="password"
                placeholder="******"
                value={formData.password}
                secretEntry={true}
                changeHandler={(e) => handler(e.target.value, "password")}
            />
        </>
    );
};

export default BasicInfo;
