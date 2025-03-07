import { useParams } from "react-router-dom";
import { mastersPageInfo } from "../Constants/Masters";

export function MasterPage() {
  const { artistIndex } = useParams();
  const MASTER_INFO = mastersPageInfo[artistIndex];

  //   console.log("mastersPageInfo", mastersPageInfo[artistIndex]);

  return (
    <>
      <div>Resume: {MASTER_INFO.resume}</div>
      <div>
        {MASTER_INFO.gallery.map((src) => (
          <img src={src} alt="" />
        ))}
      </div>
    </>
  );
}
