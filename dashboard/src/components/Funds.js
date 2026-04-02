import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <h2 className="section-title">Funds Management</h2>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <h3 className="col-title">Equity Funds</h3>

          <div className="table">
            <h4 className="table-section">Margin Details</h4>
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <h4 className="table-section">Balance Details</h4>
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <h4 className="table-section">Collateral</h4>
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <h3 className="col-title">Commodity Account</h3>
          <div className="commodity">
            <p className="fs-1" style={{fontSize:"0.9rem", color:"black"}}>Expand your trading portfolio with commodities like gold, silver, and more. Open a commodity account to start trading today!</p>
            <Link className="btn btn-blue" to="/signup">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;