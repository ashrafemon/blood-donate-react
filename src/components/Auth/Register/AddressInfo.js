import React from "react";
import TextField from "../../shared/TextField";
import { PortionTitle } from "../styled";

const AddressInfo = ({ formData, handler }) => {
    return (
        <>
            <PortionTitle style={{ textAlign: "left" }}>
                Where Do <br /> You Live?
            </PortionTitle>

            <TextField
                id="street_address"
                label="Street Address*"
                type="text"
                placeholder="100 East Rampura, Dhaka"
                value={formData.street_address}
                changeHandler={(e) => handler(e.target.value, "street_address")}
            />

            <TextField
                id="city"
                label="City*"
                type="text"
                placeholder="Dhaka"
                value={formData.city}
                changeHandler={(e) => handler(e.target.value, "city")}
            />

            <TextField
                id="postal_code"
                label="Postal Code*"
                type="number"
                placeholder="x x x x"
                value={formData.post_code}
                changeHandler={(e) => handler(e.target.value, "post_code")}
            />
        </>
    );
};

export default AddressInfo;
