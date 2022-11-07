import React, {useState,useEffect} from "react";
import useRequest from "../services/RequestContext";
import {Table} from "antd";
//import {useNavigate} from "react-router";

const energyuse = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {request} = useRequest();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [view, setView] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);

    const getAllViews = async () => {
        setLoading(true);
        try{
            const res = await request.get("view");
            console.log("afa", res);
            if (res.status === 200) {
                setView(res.data);
            }
        } catch (e){
            console.log("error fetching data", e);
        } finally {
            setLoading(false);
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        getAllViews();
    },[]);

    const columns =[
        {
            title: "Serial Number",
            dataIndex: "serialNumber",
            key: "serialNumber",
        },
        {
            title: "kWh",
            dataIndex: "kwh",
            key: "kwh",
        },
        {
            title: "Date Range",
            dataIndex: "dateRange",
            key:"dateRange"
        }
    ]

    return(
        <>
        <Table loading={loading} columns={columns} dataSource={view} size="small" style={{width:400}} />

        </>
    );
}

export default energyuse;
