import React from "react";
import TextField from "../../shared/TextField";
import { PortionTitle } from "../styled";

const ContactInfo = ({ formData, handler }) => {
    return (
        <>
            <PortionTitle style={{ textAlign: "left" }}>
                Contact <br /> Information
            </PortionTitle>

            <TextField
                id="phone"
                label="Phone No*"
                type="text"
                placeholder="018"
                value={formData.phone}
                changeHandler={(e) => handler(e.target.value, "phone")}
            />

            <TextField
                id="alter_phone"
                label="Alternative Phone No*"
                type="text"
                placeholder="018"
                value={formData.alternate_phone}
                changeHandler={(e) =>
                    handler(e.target.value, "alternate_phone")
                }
            />

            <TextField
                id="social_link"
                label="Social (Optional)"
                type="text"
                placeholder="https://"
                value={formData.social_link}
                changeHandler={(e) => handler(e.target.value, "social_link")}
            />
        </>
    );
};

export default ContactInfo;
