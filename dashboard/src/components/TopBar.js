import React from "react";

import Menu from "./Menu";
import { useAuth } from "./AuthContext";

const TopBar = () => {
  const { user } = useAuth();

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <div className="user-balance">
        <p className="balance-label">Available Balance</p>
        <p className="balance-amount">₹{user?.balance?.toLocaleString() || '0'}</p>
      </div>

      <button 
        onClick={() => window.location.href = 'https://stock-trading-platform-seven.vercel.app/'} 
        className="back-to-site-btn"
        style={{ margin: '10px', padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Back to Site
      </button>

      <Menu />
    </div>
  );
};

export default TopBar;