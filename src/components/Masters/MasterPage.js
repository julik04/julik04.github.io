import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SERVER_LOCATION } from "../Constants/Server";

export function MasterPage() {
  const { artistIndex } = useParams();
  // const MASTER_INFO = mastersPageInfo[artistIndex];
  const [masterInfo, setMasterInfo] = useState({});

  useEffect(() => {
    fetch(`${SERVER_LOCATION}/masters/${artistIndex}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const parsedData = {
          ...data,
          gallery: data.gallery ? JSON.parse(data.gallery) : [],
        };
        console.log({ data });
        setMasterInfo(parsedData);
      });
  }, [artistIndex]);

  //   console.log("mastersPageInfo", mastersPageInfo[artistIndex]);

  return (
    <>
      <div>Resume: {masterInfo.resume}</div>
      <div>
        {masterInfo.gallery?.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Gallery image ${index}`} />
        ))}
      </div>
    </>
  );
}
