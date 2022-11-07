import React from "react";
//import useRequest from "../services/RequestContext";
import img from "../images/home.png"
import {Button} from "antd";
import {Link} from 'react-router-dom';
import './home.css';
import Nav from "../compornent/navbar";

const home = () => {
    return(
        <>
            <Nav/>
        <div>
        <h1 style={{marginLeft:450, marginTop:100}}>Welcome to SEnergy</h1>
            <img src={img} alt="home.png" style={{ marginLeft: 300, marginTop: 120 }} />
        </div>

        {/*<div>*/}
        {/*    <h1 style={{marginLeft:1000, marginTop: -400}}>Details History</h1>*/}
        {/*    <Button style={{color:"blueviolet" ,marginLeft:1000, marginTop: -500}}><Link to="/view">Go</Link></Button>*/}
        {/*</div>*/}
        {/*    <br/><br/><br/><br/><br/><br/><br/><br/>*/}

        {/*    <h1 style={{marginLeft:1000}} > Go To</h1>*/}
        {/*    <div>*/}
        {/*        <Button className="btn1" style={{marginLeft:1000, marginTop: -500}}><Link to="/energyuse">Energy Usage</Link></Button>*/}
        {/*    </div>*/}
        {/*<br/>*/}
        {/*    <div>*/}
        {/*        <Button className="btn1" style={{marginLeft:1000, marginTop: -500}}><Link to="/reading">History</Link></Button>*/}
        {/*    </div>*/}
        {/*<br/>*/}
        {/*    <div>*/}
        {/*        <Button className="btn1" style={{marginLeft:1000, marginTop: -500}}><Link to="/analytics">Analytics</Link></Button>*/}
        {/*    </div>*/}
        </>
    );
}
export default home;
