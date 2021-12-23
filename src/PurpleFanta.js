/** @format */

import { Link } from "react-router-dom";
import purplefanta from "./purple-fanta.jpg";

const PurpleFanta = () => {
  return (
    <div>
      <div>
        <h1>Purple Fanta!</h1>
      </div>
      <img style={{ width: "500px", height: "700px" }} src={purplefanta}></img>
      <div>
        {" "}
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default PurpleFanta;
