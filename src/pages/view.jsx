import { Table } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
//import useRequest from "../../services/RequestContext";
import useRequest from "../services/RequestContext";

const View = () => {
  const { request } = useRequest();
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const getAllViews = async () => {
  //     try {
  //       const res = await request.get("view");
  //       if (res.status === 200) {
  //         console.log("views", res.view);
  //         setView(res.view);
  //       } else {
  //         message.error("failed!");
  //       }
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   };

  const getAllViews = async () => {
    setLoading(true);
    try {
      // const res = await axios.get("http://localhost:4000/api/view/");
      const res = await request.get("view");
      console.log("afa", res);
      if (res.status === 200) {
        setView(res.data);
      }
    } catch (e) {
      console.log("error fetching orders!", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllViews();
  }, []);

  const columns = [
    {
      title: "Voltage V1N",
      dataIndex: "voltageV1N",
      key: "voltageV1N",
    },
    {
      title: "Voltage V2N",
      dataIndex: "voltageV2N",
      key: "voltageV2N",
    },
    {
      title: "Voltage V3N",
      dataIndex: "voltageV3N",
      key: "voltageV3N",
    },
    {
      title: "Average Voltage LN",
      dataIndex: "averageVoltageLN",
      key: "averageVoltageLN",
    },
    {
      title: "Current I1",
      dataIndex: "currentI1",
      key: "currentI1",
    },
    {
      title: "Current I2",
      dataIndex: "currentI2",
      key: "currentI2",
    },
    {
      title: "Current I3",
      dataIndex: "currentI3",
      key: "currentI3",
    },
    {
      title: "Average Current",
      dataIndex: "averageCurrent",
      key: "averageCurrent",
    },
    {
      title: "KW1",
      dataIndex: "kW1",
      key: "kW1",
    },
    {
      title: "KW2",
      dataIndex: "kW2",
      key: "kW2",
    },
    {
      title: "KW3",
      dataIndex: "kW3",
      key: "kW3",
    },
    {
      title: "KVA1",
      dataIndex: "kVA1",
      key: "kVA1",
    },
    {
      title: "KVA2",
      dataIndex: "kVA2",
      key: "kVA2",
    },
    {
      title: "KVA3",
      dataIndex: "kVA3",
      key: "kVA3",
    },
    {
      title: "KVAr1",
      dataIndex: "kVAr1",
      key: "kVAr1",
    },
    {
      title: "KVAr2",
      dataIndex: "kVAr2",
      key: "kVAr2",
    },
    {
      title: "KVAr3",
      dataIndex: "kVAr3",
      key: "kVAr3",
    },
    {
      title: "TotalKW",
      dataIndex: "totalKW",
      key: "totalKW",
    },
    {
      title: "TotalKVA",
      dataIndex: "totalKVA",
      key: "totalKVA",
    },
    {
      title: "TotalKVAr",
      dataIndex: "totalKVAr",
      key: "totalKVAr",
    },
    {
      title: "PF1",
      dataIndex: "pF1",
      key: "pF1",
    },
    {
      title: "PF2",
      dataIndex: "pF2",
      key: "pF2",
    },
    {
      title: "PF3",
      dataIndex: "pF3",
      key: "pF3",
    },
    {
      title: "AveragePF",
      dataIndex: "averagePF",
      key: "averagePF",
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
    },
    {
      title: "TotalNetKVAh",
      dataIndex: "totalNetKVAh",
      key: "totalNetKVAh",
    },
    {
      title: "TotalNetKVArh",
      dataIndex: "totalNetKVArh",
      key: "totalNetKVArh",
    },
    {
      title: "KWMaxActivePower",
      dataIndex: "kWMaxActivePower",
      key: "kWMaxActivePower",
    },
    {
      title: "KWMinActivePower",
      dataIndex: "kwMinActivePower",
      key: "kwMinActivePower",
    },
    {
      title: "KVArMaxReactivePower",
      dataIndex: "kVArMaxReactivePower",
      key: "kVArMaxReactivePower",
    },
    {
      title: "KVArMinReactivePower",
      dataIndex: "kVArMinReactivePower",
      key: "kVArMinReactivePower",
    },
    {
      title: "KVAMaxApparentPower",
      dataIndex: "kVAMaxApparentPower",
      key: "kVAMaxApparentPower",
    },
    {
      title: "NeturalCurrent",
      dataIndex: "neturalCurrent",
      key: "neturalCurrent",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];

  return <Table columns={columns} dataSource={view} />;
};
export default View;
