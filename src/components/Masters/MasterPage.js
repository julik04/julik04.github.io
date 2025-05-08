import { useParams } from "react-router-dom";
import { mastersPageInfo } from "../Constants/Masters";
import { useState, useEffect } from "react";
import { SERVER_LOCATION } from "../Constants/Server";

export function MasterPage() {
  const { artistIndex } = useParams();
  // const MASTER_INFO = mastersPageInfo[artistIndex];
  const [masterInfo, setMasterInfo] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_LOCATION}/masters`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setMasterInfo(data.data.MasterInfo[artistIndex]);
      });
  }, []);

  //   console.log("mastersPageInfo", mastersPageInfo[artistIndex]);

  return (
    <>
      <div>Resume: {masterInfo.resume}</div>
      <div>
        {masterInfo.gallery?.map((src) => (
          <img src={src} alt="" />
        ))}
      </div>
    </>
  );
}
