import React, { useState } from "react";

const Dashboard = ({ onLogout }) => {
  // State for each level of selection
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

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
      categories: [
        "Training Modules",
        "Teaching Resources",
        "Assessment Tools",
      ],
    },
    {
      id: 3,
      name: "Entrepreneurship Bootcamp for High School Students",
      icon: "💼",
      categories: [
        "Business Planning",
        "Market Research",
        "Financial Literacy",
      ],
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

  // Mock data for selections
  const states = ["Maharashtra", "Gujarat", "Karnataka"];
  const districts = ["District 1", "District 2", "District 3"];
  const schools = ["School 1", "School 2", "School 3"];

  // Handle selection changes with cascading resets
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setSelectedState(null);
    setSelectedDistrict(null);
    setSelectedSchool(null);
    setSelectedCategory(null);
    setSelectedQuantity(null);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedDistrict(null);
    setSelectedSchool(null);
    setSelectedCategory(null);
    setSelectedQuantity(null);
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
      {/* Sidebar with projects */}
      <div className="w-64 bg-white shadow-lg h-screen fixed font-outfit">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-purple-600">NSTFDS</h1>
        </div>

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

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center"
          >
            <span className="mr-2">🚪</span>
            <span className="font-redhat">Logout</span>
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="ml-64 flex-1 p-8">
        <div className="mb-8">
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
            {/* Hierarchical selection process */}
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
                <h3 className="text-lg font-outfit font-medium mb-4">
                  Status Overview
                </h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-redhat">
                    {/* Here you would add the pie chart and quantity data */}
                    Quantity and status visualization will be displayed here
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
