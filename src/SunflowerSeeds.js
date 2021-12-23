/** @format */

import { Link } from "react-router-dom";
import sunflowerseeds from "./sunflower-seeds.jpg";

const SunflowerSeeds = () => {
  return (
    <div>
      <div>
        <h1>Sunflower Seeds!</h1>
      </div>
      <img
        style={{ width: "1000px", height: "600px" }}
        src={sunflowerseeds}
      ></img>
      <div>
        {" "}
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default SunflowerSeeds;
