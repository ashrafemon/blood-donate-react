import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AddressInfo from "../components/auth/register/AddressInfo";
import AgeInfo from "../components/auth/register/AgeInfo";
import BasicInfo from "../components/auth/register/BasicInfo";
import BloodGroupInfo from "../components/auth/register/BloodGroupInfo";
import ContactInfo from "../components/auth/register/ContactInfo";
import GenderInfo from "../components/auth/register/GenderInfo";
import PhotoInfo from "../components/auth/register/PhotoInfo";
import WeightInfo from "../components/auth/register/WeightInfo";
import {
    AccessText,
    AuthButton,
    AuthWrapper,
    DividerBox,
    FormGroup,
    LogoSideBox,
    SuggestText,
} from "../components/auth/styled";
import LoadingPage from "../components/shared/LoadingPage";
import Logo from "../components/shared/Logo";
import { fetchBloodGroups, register } from "../store/actions/authActions";
import * as types from "../store/types";

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const suggestedText = useSelector((state) => state.auth.suggestedText);
    const registered = useSelector((state) => state.auth.registered);
    const busyBox = useSelector((state) => state.auth.busyBox);

    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        alternate_phone: "",
        social_link: "",
        blood_group: "",
        weight: "",
        gender: "",
        street_address: "",
        city: "",
        post_code: "",
        dob: "",
        age: "",
        avatar: null,
    });

    useEffect(() => {
        dispatch(fetchBloodGroups());
    }, [dispatch]);

    useEffect(() => {
        if (registered === true) {
            history.replace("/login");
            dispatch({ type: types.RESET_REGISTER, payload: false });
        }
        // eslint-disable-next-line
    }, [registered]);

    const validateMessage = () => {
        toast.warning("Please fill up the required field *");
    };

    const nextTabHandler = () => {
        if (activeStep === 1) {
            if (
                formData.name === "" ||
                formData.email === "" ||
                formData.password === "" ||
                formData.password.length < 6
            ) {
                return validateMessage();
            }
        } else if (activeStep === 2) {
            if (formData.phone === "" || formData.alternate_phone === "") {
                return validateMessage();
            }
        } else if (activeStep === 3) {
            if (formData.blood_group === "") {
                return validateMessage();
            }
        } else if (activeStep === 4) {
            if (formData.weight === "") {
                return validateMessage();
            }
        } else if (activeStep === 5) {
            if (formData.gender === "") {
                return validateMessage();
            }
        } else if (activeStep === 6) {
            if (
                formData.street_address === "" ||
                formData.city === "" ||
                formData.post_code === ""
            ) {
                return validateMessage();
            }
        } else if (activeStep === 7) {
            if (formData.age === "" || formData.dob === "") {
                return validateMessage();
            }
        }

        activeStep <= 8 ? setActiveStep(activeStep + 1) : console.log("Sorry");
    };
    const fieldChangeHandler = (value, item) => {
        setFormData({
            ...formData,
            [item]: value,
        });
    };
    const submitHandler = () => {
        if (activeStep === 8) {
            if (formData.avatar === null) {
                return toast.error("Please upload your photo");
            }
        }

        dispatch(register(formData));
    };

    return (
        <AuthWrapper>
            {busyBox && <LoadingPage />}
            <LogoSideBox>
                <Logo />
                <SuggestText>
                    {activeStep === 1 && suggestedText.basic}
                    {activeStep === 2 && suggestedText.contact}
                    {activeStep === 3 && suggestedText.blood}
                    {activeStep === 4 && suggestedText.weight}
                    {activeStep === 5 && suggestedText.gender}
                    {activeStep === 6 && suggestedText.address}
                    {activeStep === 7 && suggestedText.age}
                    {activeStep === 8 && suggestedText.photo}
                </SuggestText>
                <AccessText>
                    Already have an account? <Link to="/login">Sign In</Link>
                </AccessText>
            </LogoSideBox>
            <DividerBox>
                {activeStep === 1 && (
                    <BasicInfo
                        formData={formData}
                        handler={fieldChangeHandler}
                    />
                )}
                {activeStep === 2 && (
                    <ContactInfo
                        formData={formData}
                        handler={fieldChangeHandler}
                    />
                )}
                {activeStep === 3 && (
                    <BloodGroupInfo
                        formData={formData}
                        handler={fieldChangeHandler}
                    />
                )}
                {activeStep === 4 && (
                    <WeightInfo
                        formData={formData}
                        handler={fieldChangeHandler}
                    />
                )}
                {activeStep === 5 && (
                    <GenderInfo
                        formData={formData}
                        handler={fieldChangeHandler}
                    />
                )}
                {activeStep === 6 && (
                    <AddressInfo
                        formData={formData}
                        handler={fieldChangeHandler}
                    />
                )}
                {activeStep === 7 && (
                    <AgeInfo formData={formData} handler={fieldChangeHandler} />
                )}
                {activeStep === 8 && (
                    <PhotoInfo
                        formData={formData}
                        handler={fieldChangeHandler}
                    />
                )}

                <FormGroup>
                    {activeStep < 8 ? (
                        <AuthButton type="button" onClick={nextTabHandler}>
                            Next
                        </AuthButton>
                    ) : (
                        <AuthButton type="button" onClick={submitHandler}>
                            Start Journey
                        </AuthButton>
                    )}
                </FormGroup>
            </DividerBox>
        </AuthWrapper>
    );
};

export default Register;
