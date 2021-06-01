import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../store/actions/authActions";
import LoadingPage from "../components/shared/LoadingPage";
import Logo from "../components/shared/Logo";
import TextField from "../components/shared/TextField";
import {
    AccessText,
    AuthButton,
    AuthWrapper,
    DividerBox,
    FormGroup,
    LinkText,
    LogoSideBox,
    PortionTitle,
} from "../components/auth/styled";

const Login = () => {
    const dispatch = useDispatch();
    const busyBox = useSelector((state) => state.auth.busyBox);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const fieldChangeHandler = (value, item) => {
        setFormData({
            ...formData,
            [item]: value,
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();

        if (formData.email === "" && !formData.email.includes("@")) {
            toast.warning("Email should be a valid address");
        } else if (formData.password === "" && formData.password.length < 6) {
            toast.warning("Password should be minimum 6 characters");
        } else {
            dispatch(login(formData));
        }
    };

    return (
        <AuthWrapper>
            {busyBox && <LoadingPage />}
            <LogoSideBox>
                <Logo />
            </LogoSideBox>
            <DividerBox>
                <PortionTitle>Sign In</PortionTitle>

                <form onSubmit={submitHandler}>
                    <TextField
                        id="email"
                        label="Email or Username"
                        type="email"
                        placeholder="johndoe@gmail.com"
                        value={formData.email}
                        changeHandler={(e) =>
                            fieldChangeHandler(e.target.value, "email")
                        }
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="******"
                        value={formData.password}
                        secretEntry={true}
                        changeHandler={(e) =>
                            fieldChangeHandler(e.target.value, "password")
                        }
                    />

                    <FormGroup>
                        <AuthButton type="submit">Login</AuthButton>
                    </FormGroup>
                </form>

                <FormGroup>
                    <Link to="/">
                        <LinkText>Forget Password?</LinkText>
                    </Link>
                    <AccessText>
                        Don't have an account?{" "}
                        <Link to="/register">Sign Up</Link>
                    </AccessText>
                </FormGroup>
            </DividerBox>
        </AuthWrapper>
    );
};

export default Login;
