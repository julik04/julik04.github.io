import "../../App.css";
import { useParams, useNavigate } from "react-router-dom";
import { mastersArray } from "../Constants/Masters";

function TableMast() {
  const navigate = useNavigate();

  return (
    <div className="masters_about">
      <div className="container">
        <h1 className="masters_heading">Мастера студии</h1>
        <p className="subheading_masters">
          Опытные мастера. Креативное мышление.
        </p>
        <div className="table_panels">
          {mastersArray.map((master, index) => (
            <div
              className="table_panel"
              onClick={() => navigate(`/artist/${index}`)}
            >
              <img
                src={master.image}
                alt="table_images2"
                className="table_images"
              />
              <p className="table_names">
                <h3 className="name_name">{master.name}</h3>
                Стаж более {master.experience} лет
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableMast;
