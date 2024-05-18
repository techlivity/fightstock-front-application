"use client"
import React, { useState } from "react";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

const ReCaptchaV3Button = ({children}) => {
    const [token, setToken] = useState("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                }),
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            setRefreshReCaptcha(!refreshReCaptcha);
            console.log(err);
        }
    };

    const setTokenFunc = (getToken) => {
        setToken(getToken);
    };

    console.log(token)
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_REACT_APP_RECAPTCHA_KEY}>
            <GoogleReCaptcha
                className="google-recaptcha-custom-class"
                onVerify={setTokenFunc}
                refreshReCaptcha={refreshReCaptcha}
            />
            {children}
        </GoogleReCaptchaProvider>
    );
}

export default ReCaptchaV3Button