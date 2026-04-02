import React, { useState } from "react";

const tabs = ["Equity", "Currency", "Commodity"];

const tableData = {
  Equity: [
    ["", "Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    ["Brokerage", "Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"],
    ["STT/CTT", "0.1% on buy & sell", "0.025% on the sell side", "0.05% on the sell side", 
      <>
        <ul className="mb-0 ps-3" style={{listStyleType:"circle"}}>
          <li>0.15% of the intrinsic value on options that are bought and exercised</li>
          <li>0.15% on sell side (on premium)</li>
        </ul>
      </>
    ],
    ["Transaction charges", 
      <>
        NSE: 0.00307%<br/>BSE: 0.00375%
      </>,
      <>
        NSE: 0.00307%<br/>BSE: 0.00375%
      </>,
      <>
        NSE: 0.00183%<br/>BSE: 0
      </>,
      <>
        NSE: 0.03553% (on premium)<br/>BSE: 0.0325% (on premium)
      </>
    ],
    ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
    ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
    ["Stamp charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"],
  ],
  Currency: [
    ["", "Futures", "Options"],
    ["Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"],
    ["STT/CTT", "0.0001% on sell side", "0.05% on sell side (on premium)"],
    ["Transaction charges", "NSE: 0.00113%", "NSE: 0.0402% (on premium)"],
    ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
    ["SEBI charges", "₹10 / crore", "₹10 / crore"],
    ["Stamp charges", "0.0001% or ₹10 / crore on buy side", "0.0001% or ₹10 / crore on buy side"],
  ],
  Commodity: [
    ["", "Futures", "Options"],
    ["Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"],
    ["CTT", "0.01% on sell side (non-agri)", "0.05% on sell side (on premium)"],
    ["Transaction charges", "0.0026% (non-agri)", "0.05% (on premium)"],
    ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
    ["SEBI charges", "₹10 / crore", "₹10 / crore"],
    ["Stamp charges", "0.002% or ₹200 / crore on buy side", "0.002% or ₹200 / crore on buy side"],
  ],
};

function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");
  const data = tableData[activeTab];

  return (
    <div className="mt-5 p-4 ">
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: "pointer" }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className="table-responsive border rounded-bottom p-3">
        <table className="table mb-0">
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) =>
                  i === 0 ? (
                    <th key={j} className={`p-3 ${j === 0 ? "" : "text-center"}`}>{cell}</th>
                  ) : (
                    <td key={j} className={`p-3 ${j === 0 ? "fw-bold" : "text-center"}`}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="p-5 text-muted mt-5" style={{marginLeft:"2rem"}}>Charges for account opening</h2>

          <div className="container" style={{border:"none"}}>
            <div className="table-container border mb-5 p-4 rounded">
              <table className="table">
                <thead>
                    <tr>
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Online Account</td>
                        <td>
                            <span className="text-success fw-bold">Free</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Offline Account</td>
                        <td>
                         <span className="text-success fw-bold">Free</span>
                        </td>
                    </tr>
                    <tr>
                        <td>NRI account (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td> ₹ 500</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>



          <h2 className="p-5 text-muted mt-5" style={{marginLeft:"2rem"}}>Demat AMC (Annual Maintenance Charge)</h2>

          <div className="container" style={{border:"none"}}>
            <div className="table-container border mb-5 p-4 rounded">
              <table className="table">
                <thead>
                    <tr>
                        <th>Value of holdings</th>
                        <th>AMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Up to ₹4 lakh</td>
                        <td>
                            <span className="text-success fw-bold">Free</span>
                        </td>
                    </tr>
                    <tr>
                        <td>₹4 lakh - ₹10 lakh</td>
                        <td>
                         <span> c₹ 100 per year, charged quarterly*</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Above ₹10 lakh</td>
                        <td>₹ 300 per year, charged quarterly</td>
                    </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted small">
              Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, click here.
            </p>
          </div>


        </div>
        
         <div className="container p-5">
            <div className="row text-center  mt-5 mb-5">
               
               <h2 className='mt-5 mb-4'>Open a Zerodha account</h2>
               <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
               <button className='btn btn-primary p-2 mt-3 fs-5' style={{width:"18%", margin:"0 auto"}}>Sign up for free</button>
            </div>
         </div>

      </div>

      
  );
}

export default Brokerage;