/** @format */

import { Link } from "react-router-dom";
import "./VendingMachine.css";
// import vending

const VendingMachine = () => {
  return (
    <div className="Vending-Machine">
      <h1>Christmas Vending Machine!</h1>
      <div>
        <Link to="/skittles">Skittles</Link>
      </div>
      <div>
        <Link to="/sunflower-seeds">Sunflower Seeds</Link>
      </div>
      <div>
        <Link to="/purple-fanta">Purple Fanta</Link>
      </div>
    </div>
  );
};

export default VendingMachine;
