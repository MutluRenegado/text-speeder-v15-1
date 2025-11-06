// src/App.js
import React, { useState, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import ReadingSessionScreen from "./screens/ReadingSessionScreen";
import ResultsScreen from "./screens/ResultsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import { useAuth } from "./hooks/useAuth";
import "./AppLayout.css";

export default function App() {
  const [view, setView] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { currentUser, loading } = useAuth();

  // Apply dark/light theme to <body>
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 animate-pulse">
        Loading...
      </div>
    );

  if (!currentUser)
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">TextSpeeder</h1>
        <p className="text-gray-500">Please sign in to continue.</p>
      </div>
    );

  // --- Active Page Rendering ---
  let content;
  switch (view) {
    case "reading":
      content = <ReadingSessionScreen onExit={() => setView("home")} />;
      break;
    case "results":
      content = <ResultsScreen onHome={() => setView("home")} />;
      break;
    case "profile":
      content = <ProfileScreen />;
      break;
    case "leaderboard":
      content = <LeaderboardScreen onBack={() => setView("home")} />;
      break;
    default:
      content = (
        <HomeScreen
          onStartReading={() => setView("reading")}
          onProfile={() => setView("profile")}
          onLeaderboard={() => setView("leaderboard")}
        />
      );
  }

  return (
    <div className="app-root">
      {/* === HEADER === */}
      <header className="top-bar">
        <div className="logo">📘 TextSpeeder</div>

        <div className="top-controls">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            title="Toggle Dark/Light Mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <button
            id="sidebarToggle"
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰ Menu
          </button>
        </div>
      </header>

  /* -------------------------
   Sidebar open / close
------------------------- */
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarToggleHeader = document.getElementById('sidebarToggleHeader');
const closeSidebarBtn = document.getElementById('closeSidebar');

// open sidebar
function openSidebar() {
  sidebar.classList.remove('translate-x-full');
  sidebarOverlay.classList.remove('hidden');
}

// close sidebar
function closeSidebar() {
  sidebar.classList.add('translate-x-full');
  sidebarOverlay.classList.add('hidden');
}

// toggle via hamburger button
if (sidebarToggleHeader) {
  sidebarToggleHeader.addEventListener('click', () => {
    const isHidden = sidebar.classList.contains('translate-x-full');
    if (isHidden) openSidebar();
    else closeSidebar();
  });
}

// close button and overlay
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
