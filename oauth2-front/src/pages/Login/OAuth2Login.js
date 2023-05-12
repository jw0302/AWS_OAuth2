
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';



const OAuth2Login = () => {
    
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    const accessToken = searchParams.get("accessToken");

    if(!!accessToken) {
        localStorage.setItem("accessToken", accessToken);
        window.location.replace("/");
    }

    return (
        <div>
            
        </div>
    );
};

export default OAuth2Login;