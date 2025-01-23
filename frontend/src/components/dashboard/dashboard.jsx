import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar_components";
import SummaryCards from "./Dashboard_components/Summary";
import ChartSection from "./Dashboard_components/ChartSection";
import SelectionForm from "./ProjectDetails/SelectionForm";

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  // Dummy user profile
  const user = {
    name: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnWamWQaGg46q1S3u0uMMgK3SZDBh1nBk-Q&s",
  };
  const summaryStats = {
    totalStates: 28,
    totalDistricts: 156,
    totalSchools: 892,
    activeProjects: 5,
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

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex theme-transition">
      <Sidebar
        user={user}
        projects={projects}
        selectedProject={selectedProject}
        onProjectSelect={handleProjectSelect}
        onReturnHome={handleReturnHome}
        onLogout={handleLogout}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content area - Updated padding/margin for mobile */}
      <div className="flex-1 flex flex-col px-4 md:px-0 md:ml-10  md:mr-10 mt-24 md:mt-10 transition-all duration-300">
        {/* Mobile Header */}

        {/* Desktop Header */}
        <div className="mb-6 md:mb-8 hidden md:block">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-outfit font-semibold text-[var(--color-text)]">
                {selectedProject
                  ? selectedProject.name
                  : "Welcome to NSTFDS Dashboard"}
              </h2>
              <p className="font-redhat text-[var(--color-text-secondary)] mt-1">
                {selectedProject
                  ? "Select the following details to view data"
                  : "Select a project to get started"}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Added spacing for mobile */}
        <div className="theme-transition space-y-4 md:space-y-6">
          {!selectedProject ? (
            <>
              <div className="mb-4 md:mb-6">
                <SummaryCards stats={summaryStats} />
              </div>
              <div className="mb-4 md:mb-6">
                <ChartSection />
              </div>
            </>
          ) : (
            <div className="mt-4 md:mt-0">
              <SelectionForm
                selectedProject={selectedProject} // Make sure this is passed
                selectedState={selectedState}
                selectedDistrict={selectedDistrict}
                selectedSchool={selectedSchool}
                selectedCategory={selectedCategory}
                states={states}
                districts={districts}
                schools={schools}
                categories={selectedProject.categories}
                onStateSelect={setSelectedState}
                onDistrictSelect={setSelectedDistrict}
                onSchoolSelect={setSelectedSchool}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
