import React from "react";
import "./navbar.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className="navBarContainer">
            <div>
                <Button

                    className="btn2"
                    style={{marginLeft:-10,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/")}
                >Home
                </Button>
            </div>


            <div>
                <Button
                    className="btn2"
                    style={{marginLeft:0,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/reading")}
                >
                    Reading
                </Button>

            </div>

            <div>
                <Button
                    className="btn2"
                    style={{marginLeft:5,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/")}
                >
                    Configuration
                </Button>

            </div>

            <div>
                <Button
                    className="btn2"
                    style={{marginLeft:10,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/")}
                >
                    Transaction
                </Button>

            </div>

            <div>
                <Button
                    className="btn2"
                    style={{marginLeft:15,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/")}
                >
                   Reset
                </Button>

            </div>

            <div>
                <Button
                    className="btn2"
                    style={{marginLeft:20,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/")}
                >
                    Security
                </Button>

            </div>

            <div>
                <Button
                    className="btn2"
                    style={{marginLeft:25,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/")}
                >
                    Utilities
                </Button>

            </div>

            <div>
                <Button
                    className="btn2"
                    style={{marginLeft:30,color:"black"}}
                    type="primary"
                    onClick={() => navigate("/")}
                >
                    Support
                </Button>

            </div>
        </div>
    );
};

export default Nav;
