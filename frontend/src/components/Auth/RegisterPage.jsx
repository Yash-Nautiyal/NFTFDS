import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EyeSlashIcon,
  EyeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "agreeToTerms" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Here you would typically make an API call to register the user
    // For now, we'll just simulate success and redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 perspective-900">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 transform rotate-y-3 hover:rotate-y-0 transition-transform duration-500 relative">
        {/* Pseudo-elements for 3D edges */}
        <div className="absolute inset-0 rounded-3xl transform -rotate-y-6 -z-10 opacity-20" />
        <div className="absolute inset-0 rounded-3xl transform -rotate-y-3 -z-20 opacity-10" />

        {/* Header */}
        <div className="text-center mb-8 transform hover:translate-z-4 transition-transform">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg">
              <GlobeAltIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h2 className="text-3xl font-display font-semibold text-gray-900">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Please fill in your details to register
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="text-sm text-gray-500 font-medium">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Registration Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="transform hover:translate-z-2 transition-transform">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none shadow-sm hover:shadow-md transition-shadow"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="transform hover:translate-z-2 transition-transform">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none shadow-sm hover:shadow-md transition-shadow"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="transform hover:translate-z-2 transition-transform">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none shadow-sm hover:shadow-md transition-shadow"
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="transform hover:translate-z-2 transition-transform">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none shadow-sm hover:shadow-md transition-shadow"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              required
            />
            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button 
            onClick={() => navigate("/login")}
            className="text-purple-600 hover:text-purple-500 font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;