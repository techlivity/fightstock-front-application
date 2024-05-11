import React from "react";

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleSignInButton = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

    return (
        <>
            <div className="text-center">
                <GoogleOAuthProvider clientId={CLIENT_ID}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                            // precisamos tratar aqui e enviar o token para o backend
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        theme="filled_blue"
                        size="large"
                        logo_alignment="left"
                        width="60vh"
                        context="signup"
                    />
                </GoogleOAuthProvider>
            </div>
        </>
    );
};

export default GoogleSignInButton;
