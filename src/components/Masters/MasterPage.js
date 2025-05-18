import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { mastersPageInfo } from "../Constants/Masters";
import { SERVER_LOCATION } from "../Constants/Server";

export function MasterPage() {
  const { artistIndex } = useParams();
  // const MASTER_INFO = mastersPageInfo[artistIndex];
  const [masterInfo, setMasterInfo] = useState({});

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

  // console.log("masterInfo", masterInfo[artistIndex]);

  return (
    <>
      <div>{masterInfo.resume}</div>
      <div>
        {masterInfo.gallery?.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Gallery image ${index}`} />
        ))}
      </div>
    </>
  );
}
