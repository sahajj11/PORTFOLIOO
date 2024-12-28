import React, { useState, useEffect } from "react";
import "./ThemeToggle.css"; // Import the new CSS file

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Get initial theme from localStorage or default to light
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme ? "dark" : "light";
      document.documentElement.className = newTheme; // Apply to <html>
      localStorage.setItem("theme", newTheme); // Save preference
      return !prevTheme;
    });
  };

  // Apply saved theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.className = savedTheme;
  }, []);

  return (
    <>
      <h2 className="text-center mt-4 pt-3">Wanna Switch Mode?<img width="50" height="50" src="https://img.icons8.com/scribby/50/long-arrow-down.png" alt="long-arrow-down"/></h2>
      <div className="theme-toggle-section">
        <div className="theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            <span className="theme-icon">{isDarkTheme ? "☀️" : "🌙"}</span>
            <span className="theme-label">
              {isDarkTheme ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ThemeToggle;
