// Dashboard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // State for each level of selection
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // State for sidebar toggle on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();


  // Dummy user profile
  const user = {
    name: "John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnWamWQaGg46q1S3u0uMMgK3SZDBh1nBk-Q&s"
  };

  // Mock data - In a real application, this would come from an API
  const projects = [
    {
      id: 1,
      name: "Mentorship & Career Counselling",
      icon: "👥",
      categories: [
        "Career Guidance",
        "Academic Counselling",
        "Mental Health Support",
      ],
    },
    {
      id: 2,
      name: "Residential Training Project for EMRS Teachers",
      icon: "👨‍🏫",
      categories: ["Training Modules", "Teaching Resources", "Assessment Tools"],
    },
    {
      id: 3,
      name: "Entrepreneurship Bootcamp for High School Students",
      icon: "💼",
      categories: ["Business Planning", "Market Research", "Financial Literacy"],
    },
    {
      id: 4,
      name: "Digital Device Procurement",
      icon: "💻",
      categories: ["Laptops", "Tablets", "Interactive Boards"],
    },
    {
      id: 5,
      name: "Sanitary Pad Devices Procurement",
      icon: "📦",
      categories: ["Dispensers", "Disposal Units", "Hygiene Products"],
    },
  ];

  const states = ["Maharashtra", "Gujarat", "Karnataka"];
  const districts = ["District 1", "District 2", "District 3"];
  const schools = ["School 1", "School 2", "School 3"];

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setSelectedState(null);
    setSelectedDistrict(null);
    setSelectedSchool(null);
    setSelectedCategory(null);
    // Close sidebar on mobile after selecting a project
    setIsSidebarOpen(false);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedDistrict(null);
    setSelectedSchool(null);
    setSelectedCategory(null);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleReturnHome = () => {
    setSelectedProject(null);
    setSelectedState(null);
    setSelectedDistrict(null);
    setSelectedSchool(null);
    setSelectedCategory(null);
    // Optionally close sidebar on mobile
    setIsSidebarOpen(false);
  };

  // Render select dropdown with label
  const renderSelect = ({ label, value, options, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1 font-outfit">
        {label}
      </label>
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-redhat"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={typeof option === "string" ? option : option.id}
          >
            {typeof option === "string" ? option : option.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform 
          transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-purple-600">NSTFDS</h1>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center p-4 border-b border-gray-200 space-x-4">
          <img
            src={user.image}
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-redhat text-gray-800 font-medium">{user.name}</span>
        </div>

        {/* Navigation with Projects */}
        <nav className="p-4">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectSelect(project)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 flex items-center ${
                selectedProject?.id === project.id
                  ? "bg-purple-50 text-purple-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="mr-3">{project.icon}</span>
              <span className="font-redhat text-sm">{project.name}</span>
            </button>
          ))}
        </nav>

        {/* Return to Home Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleReturnHome}
            className="w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg flex items-center"
          >
            <span className="mr-2">🏠</span>
            <span className="font-redhat">Return to Home</span>
          </button>
        </div>

        {/* Logout Section */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center"
          >
            <span className="mr-2">🚪</span>
            <span className="font-redhat">Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64 transition-all duration-300">
        {/* Mobile Header with Hamburger Menu */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <h2 className="text-lg font-outfit font-semibold text-gray-900">
            {selectedProject ? selectedProject.name : "Dashboard"}
          </h2>
        </div>

        <div className="p-8 flex-1">
          <div className="mb-8 hidden md:block">
            <h2 className="text-2xl font-outfit font-semibold text-gray-900">
              {selectedProject
                ? selectedProject.name
                : "Welcome to NSTFDS Dashboard"}
            </h2>
            <p className="font-redhat text-gray-600 mt-1">
              {selectedProject
                ? "Select the following details to view data"
                : "Select a project to get started"}
            </p>
          </div>

          {selectedProject && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              {renderSelect({
                label: "Select State",
                value: selectedState,
                options: states,
                onChange: handleStateSelect,
                placeholder: "Choose a state",
              })}

              {selectedState &&
                renderSelect({
                  label: "Select District",
                  value: selectedDistrict,
                  options: districts,
                  onChange: setSelectedDistrict,
                  placeholder: "Choose a district",
                })}

              {selectedDistrict &&
                renderSelect({
                  label: "Select School",
                  value: selectedSchool,
                  options: schools,
                  onChange: setSelectedSchool,
                  placeholder: "Choose a school",
                })}

              {selectedSchool &&
                renderSelect({
                  label: "Select Category",
                  value: selectedCategory,
                  options: selectedProject.categories,
                  onChange: setSelectedCategory,
                  placeholder: "Choose a category",
                })}

              {selectedCategory && (
                <div className="mt-6">
                  <h3 className="text-lg font-outfit font-medium mb-2">
                    Status Overview
                  </h3>
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
                      onClick={() => console.log("Export clicked")}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-redhat text-sm flex items-center"
                    >
                      <span className="mr-2">📊</span>
                      Export to CSV
                    </button>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-outfit font-medium text-sm text-gray-700">
                      <div>Month</div>
                      <div>Quantity Allocated</div>
                      <div>Quantity Used</div>
                      <div>Status</div>
                      <div>Efficiency Rate</div>
                    </div>

                    {/* Table Body - Using dummy data */}
                    {[
                      {
                        month: "January",
                        allocated: 1000,
                        used: 850,
                        status: "Active",
                        efficiency: "85%",
                      },
                      // ... more rows
                    ].map((row, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 font-redhat text-sm hover:bg-gray-50 transition-colors"
                      >
                        <div>{row.month}</div>
                        <div>{row.allocated.toLocaleString()}</div>
                        <div>{row.used.toLocaleString()}</div>
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
                        <div className="font-medium">{row.efficiency}</div>
                      </div>
                    ))}

                    {/* Table Footer with Summary */}
                    <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 font-outfit font-medium text-sm">
                      <div>Total</div>
                      <div>4,500</div>
                      <div>3,750</div>
                      <div></div>
                      <div>83% avg.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;