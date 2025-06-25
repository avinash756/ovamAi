import React from "react";
import SideFilter from "./SideFilter";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <SideFilter />

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button className="px-3 py-1 text-sm font-medium bg-gray-200 rounded">
            Adoption
          </button>
          <button className="px-3 py-1 text-sm font-medium bg-gray-100 rounded">
            Suggestion Breakdown
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center mb-6 text-sm">
          <label>Repository Name:</label>
          <select className="border rounded px-2 py-1 text-sm">
            <option>All</option>
          </select>
          <label>Usernames:</label>
          <select className="border rounded px-2 py-1 text-sm">
            <option>All</option>
          </select>
          <label>Team:</label>
          <select className="border rounded px-2 py-1 text-sm">
            <option>All</option>
          </select>
          <div className="ml-auto flex items-center gap-2">
            <span>Last 30 days</span>
            <span className="text-xs text-gray-500">UTC</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow-sm rounded p-4">
            <h2 className="text-sm font-semibold mb-2">PRs Reviewed</h2>
            <p className="text-sm text-gray-600">
              Total: <span className="text-orange-500">0</span>
            </p>
            <p className="text-sm text-gray-600">
              Incremental: <span className="text-orange-500">0</span>
            </p>
          </div>

          <div className="bg-white shadow-sm rounded p-4">
            <h2 className="text-sm font-semibold mb-2">
              CodeRabbit Suggestions
            </h2>
            <p className="text-sm text-gray-600">
              Review Comments: <span className="text-orange-500">0</span>
            </p>
            <p className="text-sm text-gray-600">
              Accepted: <span className="text-orange-500">0</span>
            </p>
          </div>

          <div className="bg-white shadow-sm rounded p-4">
            <h2 className="text-sm font-semibold mb-2">Learnings</h2>
            <p className="text-sm text-gray-600">
              Used: <span className="text-orange-500">0</span>
            </p>
            <p className="text-sm text-gray-600">
              Created: <span className="text-orange-500">0</span>
            </p>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white shadow-sm rounded p-6 h-64">
          <h2 className="text-sm font-semibold mb-2">
            Developer Adoption Leaderboard
          </h2>
          <p className="text-gray-400 text-sm">No data</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
