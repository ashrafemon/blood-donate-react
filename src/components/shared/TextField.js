import React, { useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormGroup = styled.div`
    width: 100%;
    margin-bottom: 30px;
    position: relative;
`;

const FormLabel = styled.label`
    width: 100%;
    display: block;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 10px;
    color: #4e4e4e;
`;

const FormControlText = styled.input`
    width: 100%;
    display: block;
    padding: 20px 25px;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    background-color: #edf0f5;
    color: #000000;
    font-size: 18px;
    border-radius: 20px;
    letter-spacing: 1px;
    box-shadow: 2px 2px 5px 1px #e7e7e7;

    &::placeholder {
        color: #9ea0a2;
        font-weight: 400;
    }
`;

const PasswordToggleButton = styled.button`
    border: 0;
    outline: 0;
    color: #c70100;
    background-color: transparent;
    font-size: 20px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
`;

const TextField = ({
    id,
    label,
    type,
    value,
    placeholder,
    changeHandler,
    secretEntry = false,
}) => {
    const inputRef = useRef(null);
    const [show, setShow] = useState(false);

    const passwordToggleHandler = () => {
        if (inputRef.current.type === "password") {
            inputRef.current.type = "text";
            setShow(true);
        } else {
            inputRef.current.type = "password";
            setShow(false);
        }
    };

    return (
        <FormGroup>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <FormControlText
                ref={inputRef}
                value={value}
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={changeHandler}
            />

            {secretEntry && (
                <PasswordToggleButton
                    type="button"
                    onClick={passwordToggleHandler}
                >
                    {show ? <FaEyeSlash /> : <FaEye />}
                </PasswordToggleButton>
            )}
        </FormGroup>
    );
};

TextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    secretEntry: PropTypes.bool,
    changeHandler: PropTypes.func.isRequired,
};

export default TextField;
