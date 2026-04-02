import React from "react";
import {Link} from "react-router-dom";

const Apps = () => {
  const apps = [
    {
      name: "Trading Calculator",
      description: "Calculate profit/loss and margin requirements",
      icon: "🧮",
      link: "#", // Placeholder link
    },
    {
      name: "Market News",
      description: "Latest financial news and market updates",
      icon: "📰",
      link: "#",
    },
    {
      name: "IPO Calendar",
      description: "Upcoming IPOs and subscription details",
      icon: "📅",
      link: "#",
    },
    {
      name: "Mutual Funds",
      description: "Explore and invest in mutual funds",
      icon: "💰",
      link: "#",
    },
    {
      name: "Research Reports",
      description: "Expert analysis and stock recommendations",
      icon: "📊",
      link: "#",
    },
    {
      name: "Portfolio Analyzer",
      description: "Analyze your portfolio performance",
      icon: "📈",
      link: "#",
    },
  ];

  return (
    <div className="apps-container">
      <h2>Apps & Tools</h2>
      <div className="apps-grid">
        {apps.map((app, index) => (
          <div key={index} className="app-card">
            <div className="app-icon">{app.icon}</div>
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <Link to={app.link} className="btn btn-blue" target="_blank" rel="noopener noreferrer">
           
              Open App
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;