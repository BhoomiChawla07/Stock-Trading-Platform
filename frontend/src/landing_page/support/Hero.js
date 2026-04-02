import React, { useState, useEffect } from "react";

// Dummy data for categories and quick links
const categories = [
  {
    icon: "fa fa-plus-circle",
    title: "Account Opening",
    content: "All about opening your account, KYC, and onboarding process."
  },
  {
    icon: "fa fa-user-circle-o",
    title: "Your Zerodha Account",
    content: "Manage your profile, password, and account settings."
  },
  {
    icon: "fa fa-globe",
    title: "Kite",
    content: "Platform usage, features, and troubleshooting."
  },
  {
    icon: "fa fa-inr",
    title: "Funds",
    content: "Deposits, withdrawals, and fund management."
  },
  {
    icon: "fa fa-search-plus",
    title: "Console",
    content: "Reports, statements, and analytics."
  },

  {
    icon: "fa fa-circle-thin",
    title: "Coin",
    content: "Reports, statements, and analytics."
  }
];

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "How to reset password",
  "How to add funds"
];

const updates = [
  {
    text: "Latest Intraday leverages and Square-off timings",
    url: "#"
  },
  {
    text: "Current Takeovers and Delisting – April 2026",
    url: "#"
  }
];

function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = "Support Portal - Stock Trading Platform";
  }, []);

  return (
    <div style={{ background: "#fafbfc", minHeight: "100vh", paddingBottom: "3rem" }}>
      <div className="container py-5">
        {/* Header and My tickets button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-semibold" style={{fontSize: "2.5rem" }}>Support Portal</h1>
          <button className="btn btn-primary px-4 py-2 fs-5" style={{width:"10rem"}}>My tickets</button>
        </div>

        {/* Search bar */}
        <div className="mb-5">
          <input
            type="text"
            className="form-control form-control-lg"

            placeholder=" Eg: How do I open my account, How do i activate F&O..."
            style={{ background: "#fff", borderRadius: "8px", border: "1px solid #e3e7ed" }}
          />
        </div>

        {/* Main content */}
        <div className="row">
          {/* Left: Accordions */}
          <div className="col-lg-8 col-md-7">
            {categories.map((cat, idx) => (
              <div
                className="mb-3"
                key={cat.title}
                style={{
                  background: "#333",
                  border: "1px solid #e3e7ed",
                  borderRadius: "8px"
                }}
              >
                <button
                  className="d-flex align-items-center w-100 p-4 border-0 bg-transparent"
                  style={{ borderRadius: "8px" }}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <i className={`bi ${cat.icon} me-3 fs-4 text-primary`} />
                  <span className="fs-5 fw-semibold flex-grow-1 text-start">{cat.title}</span>
                  <i className={`bi ms-auto fs-4 ${openIndex === idx ? "bi-chevron-up" : "bi-chevron-down"}`} />
                </button>
                {openIndex === idx && (
                  <div className="px-5 pb-4 text-muted" style={{ fontSize: "1.1rem" }}>
                    {cat.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Updates and Quick Links */}
          <div className="col-lg-4 col-md-5">
            {/* Updates */}
            <div
              className="mb-4 p-4"
              style={{
                background: "#fff7ea",
                borderLeft: "6px solid #ffa726",
                borderRadius: "8px"
              }}
            >
              {updates.map((u, i) => (
                <div key={i}>
                  <a href={u.url} className="d-block mb-2 text-decoration-none" style={{ color: "#1976d2", fontWeight: 500 }}>
                    {u.text}
                  </a>
                </div>
              ))}
            </div>
            {/* Quick Links */}
            <div className="bg-white rounded" style={{ border: "1px solid #e3e7ed" }}>
              <div className="fw-semibold px-4 py-3 border-bottom" style={{ background: "#fafbfc" }}>
                Quick links
              </div>
              <ul className="list-group list-group-flush">
                {quickLinks.map((link, i) => (
                  <li key={i} className="list-group-item px-4 py-3" style={{ border: "none", borderBottom: "1px solid #f0f0f0" }}>
                    <span className="text-primary fw-semibold me-2">{i + 1}.</span>
                    <span style={{ color: "#1976d2", cursor: "pointer" }}>{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;