// src/screens/ProfileScreen.js

import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useUserData } from "../hooks/useUserData";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import ProgressBar from "../components/UI/ProgressBar";
import { THEMES, DIFFICULTY_LEVELS } from "../utils/constants";

/**
 * ProfileScreen
 * Displays user info, reading stats, and preferences
 */
export default function ProfileScreen() {
  const { currentUser, signOut } = useAuth();
  const { userData, loading, updateUserData } = useUserData();
  const [updating, setUpdating] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 animate-pulse">Loading profile...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-gray-600">No user data found.</p>
        <Button variant="secondary" onClick={signOut} className="mt-4">
          Sign Out
        </Button>
      </div>
    );
  }

  const handleSettingChange = async (field, value) => {
    try {
      setUpdating(true);
      await updateUserData({ [`settings.${field}`]: value });
    } catch (e) {
      console.error("❌ Error updating setting:", e);
    } finally {
      setUpdating(false);
    }
  };

  const stats = userData.stats || {
    totalSessions: 0,
    avgSpeedWPM: 0,
    avgComprehension: 0,
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {userData.name || "Reader"}
          </h2>
          <p className="text-gray-600">{currentUser?.email}</p>
          <p className="text-sm text-gray-400 mt-1">
            Joined: {new Date(userData.createdAt?.seconds * 1000).toLocaleDateString()}
          </p>
        </div>

        <Button variant="danger" onClick={signOut}>
          Sign Out
        </Button>
      </Card>

      {/* Reading Stats */}
      <Card title="Your Reading Stats">
        <div className="space-y-3">
          <div>
            <p className="text-gray-700">Total Sessions: {stats.totalSessions}</p>
          </div>
          <div>
            <p className="text-gray-700 mb-1">
              Average Speed: {Math.round(stats.avgSpeedWPM)} WPM
            </p>
            <ProgressBar progress={Math.min((stats.avgSpeedWPM / 600) * 100, 100)} />
          </div>
          <div>
            <p className="text-gray-700 mb-1">
              Comprehension: {stats.avgComprehension}%
            </p>
            <ProgressBar progress={stats.avgComprehension} color="bg-green-500" />
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <Card title="Preferences">
        <div className="space-y-4">
          {/* Theme selector */}
          <div className="flex justify-between items-center">
            <label className="text-gray-700">Theme</label>
            <select
              value={userData.settings?.theme || THEMES.LIGHT}
              onChange={(e) => handleSettingChange("theme", e.target.value)}
              disabled={updating}
              className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {Object.values(THEMES).map((theme) => (
                <option key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty selector */}
          <div className="flex justify-between items-center">
            <label className="text-gray-700">Default Difficulty</label>
            <select
              value={userData.settings?.difficultyLevel || DIFFICULTY_LEVELS.MEDIUM}
              onChange={(e) =>
                handleSettingChange("difficultyLevel", e.target.value)
              }
              disabled={updating}
              className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {Object.values(DIFFICULTY_LEVELS).map((diff) => (
                <option key={diff} value={diff}>
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Achievements / Placeholder */}
      <Card title="Achievements">
        <p className="text-gray-500 text-sm">
          🏆 Achievements coming soon! Keep improving your reading speed.
        </p>
      </Card>
    </div>
  );
}

