import React, { useState, useEffect } from "react";
import useRequest from "../services/RequestContext";
import img from "../images/home.png"
import {Button} from "antd";
import { useNavigate } from 'react-router';




const home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();
    function handleClick() {
        navigate('/view')
    }
    // const navigate = useNavigate();

    return(
        <>
        <div>
        <h1 style={{marginLeft:500}}>Welcome to SEnergy</h1>
            <img src={img} alt="home.png" style={{ marginLeft: 200, marginTop: 100 }} />
        </div>

        <div>
            <h1 style={{marginLeft:1000, marginTop: -400}}>Details History</h1>
            <Button style={{color:"blueviolet" ,marginLeft:1000, marginTop: -500}} onClick={handleClick}>Go</Button>

        </div>
        </>
    );
}
export default home;
