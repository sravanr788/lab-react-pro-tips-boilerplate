import React, { useContext, useEffect, useLayoutEffect } from 'react'
// import { UserContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {

    const {isSubmit} = useContext(AppContext);
    const navigate = useNavigate();

    console.log(isSubmit ,"Private");
    useLayoutEffect(()=>{
        if(!isSubmit){
            navigate("/form")
        }
    },[])
    return (
        <div>{children}</div>
    )
}

export default PrivateRoute