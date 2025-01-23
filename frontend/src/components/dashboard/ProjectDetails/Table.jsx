// src/components/ProjectDetails/DeviceProcurementTable.js
import React, { useState } from "react";

const DeviceProcurementTable = ({
  selectedState,
  selectedDistrict,
  selectedSchool,
  selectedCategory,
}) => {
  // Device procurement data
  const deviceData = [
    {
      month: "January",
      allocated: 1000,
      used: 850,
      status: "Active",
      efficiency: "85%",
    },
    {
      month: "February",
      allocated: 1200,
      used: 950,
      status: "Completed",
      efficiency: "79%",
    },
    {
      month: "March",
      allocated: 800,
      used: 720,
      status: "Active",
      efficiency: "90%",
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-outfit font-medium mb-2">Status Overview</h3>
      {/* Date filters + Export button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            <label className="text-sm font-medium text-gray-700 font-outfit block mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 font-outfit block mb-1">
              End Date
            </label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        <button
          onClick={() => {
            const csvContent =
              "data:text/csv;charset=utf-8," +
              "Month,Allocated,Used,Status,Efficiency\n" +
              deviceData
                .map(
                  (row) =>
                    `${row.month},${row.allocated},${row.used},${row.status},${row.efficiency}`
                )
                .join("\n");

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "procurement_data.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-redhat text-sm flex items-center"
        >
          <span className="mr-2">📊</span>
          Export to CSV
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-outfit font-medium text-sm text-gray-700">
          <div>Month</div>
          <div>Quantity Allocated</div>
          <div>Quantity Used</div>
          <div>Status</div>
          <div>Efficiency Rate</div>
        </div>

        {/* Table Body */}
        {deviceData.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border-b border-gray-200 font-redhat text-sm hover:bg-gray-50 transition-colors"
          >
            {/* Mobile View */}
            <div className="md:hidden space-y-2">
              <div className="font-medium">{row.month}</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Allocated:</div>
                <div>{row.allocated.toLocaleString()}</div>
                <div className="text-gray-500">Used:</div>
                <div>{row.used.toLocaleString()}</div>
                <div className="text-gray-500">Status:</div>
                <div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      row.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : row.status === "Active"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
                <div className="text-gray-500">Efficiency:</div>
                <div>{row.efficiency}</div>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">{row.month}</div>
            <div className="hidden md:block">
              {row.allocated.toLocaleString()}
            </div>
            <div className="hidden md:block">{row.used.toLocaleString()}</div>
            <div className="hidden md:block">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  row.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : row.status === "Active"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {row.status}
              </span>
            </div>
            <div className="hidden md:block">{row.efficiency}</div>
          </div>
        ))}

        {/* Table Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 font-outfit font-medium text-sm">
          <div>Total</div>
          <div>
            {deviceData
              .reduce((sum, row) => sum + row.allocated, 0)
              .toLocaleString()}
          </div>
          <div>
            {deviceData
              .reduce((sum, row) => sum + row.used, 0)
              .toLocaleString()}
          </div>
          <div></div>
          <div>85% avg.</div>
        </div>
      </div>
    </div>
  );
};

export default DeviceProcurementTable;
