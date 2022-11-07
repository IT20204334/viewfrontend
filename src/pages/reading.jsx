import React from "react";
import Nav from "../compornent/navbar";
//import useRequest from "../services/RequestContext";
import {Button} from "antd";
import {Link} from "react-router-dom";
import "./home.css"

const Reading = () => {



    return(
        <>
        <Nav/>
        {/*<div>*/}

        {/*    <h1>Reading History</h1>*/}
        {/*</div>*/}
<br/>
            <div>
                {/*<h1 style={{marginLeft: 500}}>Get All Data</h1>*/}
                <Button className="btn1" style={{color:"black" ,marginLeft:150, marginTop: -500}}><Link to="/view">Get All Data</Link></Button>
            </div>
 <br/><br/>
            <div>
                {/*<h1 style={{marginLeft: 500}}>Energy Usage</h1>*/}
                <Button className="btn1" style={{color:"black" ,marginLeft:150, marginTop: -500}}><Link to="/energyuse">Energy Usage</Link></Button>
            </div>

            {/*<div>*/}
            {/*    <h1 style={{marginLeft: 500}}>Status</h1>*/}
            {/*    <Button className="btn1" style={{color:"blueviolet" ,marginLeft:500, marginTop: -500}}><Link to="/currentuse">Go</Link></Button>*/}
            {/*</div>*/}
        </>
    );
}
export default Reading;
