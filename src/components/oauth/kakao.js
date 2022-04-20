import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Kakao(){
    const REST_API_KEY = "76a7a126963125b9cf9cfebbeb8b3370"
    const REDIRECT_URI = "http://localhost:3000/kakao"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return(
        <div>
             <a href={KAKAO_AUTH_URL} style={{color:"white", textDecorationLine:'none'}}>Kakao Login</a>
        </div>
    )
}

export default Kakao;