/** @format */

import { Link } from "react-router-dom";
import skittles from "./skittles.jpg";

const Skittles = () => {
  return (
    <div>
      <div>
        <h1>Skittles!!</h1>
      </div>
      <h3>MERRY CHRISTMAS</h3>
      <img style={{ width: "1000px", height: "600px" }} src={skittles}></img>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Skittles;
