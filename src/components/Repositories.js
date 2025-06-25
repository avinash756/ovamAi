import React from "react";
import { Settings } from "lucide-react";
import SideFilter from "./SideFilter";

const repositories = [
  { name: "pintaki-product", visibility: "Public" },
  { name: "vishalraina340", visibility: "Public" },
  { name: "qrcode-", visibility: "Public" },
  { name: "learn-hire-grow" },
  { name: "same-page-echo" },
  { name: "simple-imagine-things", visibility: "Public" },
];

const Repositories = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <SideFilter />
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold">Repositories</h1>
            <p className="text-sm text-gray-500">
              List of repositories accessible to CodeRabbit.
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
            + Add Repositories
          </button>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Repo not found? Search here..."
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
          />
        </div>

        {/* Repo List Header */}
        <div className="flex justify-between text-sm font-medium text-gray-500 border-b py-2 px-2">
          <span>REPOSITORY</span>
          <span>ACTIONS</span>
        </div>

        {/* Repo Rows */}
        <ul className="divide-y">
          {repositories.map((repo, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3 px-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {repo.name}
                </span>
                {repo.visibility === "Public" && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                    Public
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-3">
                {index === 0 && (
                  <button className="text-blue-600 text-xs underline">
                    Generate Badge
                  </button>
                )}
                <Settings className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>Rows per page</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>12</option>
              <option>24</option>
              <option>48</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span>Page 1 of 12</span>
            <button className="px-2 py-1 text-gray-400 hover:text-gray-600">
              &laquo;
            </button>
            <button className="px-2 py-1 text-gray-600">‹</button>
            <button className="px-2 py-1 text-gray-600">›</button>
            <button className="px-2 py-1 text-gray-400 hover:text-gray-600">
              &raquo;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Repositories;
