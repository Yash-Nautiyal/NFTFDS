import React, { useState } from 'react';
import { EyeSlashIcon, EyeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm p-8">
        {/* Header - Using Playfair Display */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <GlobeAltIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h2 className="text-2xl font-display font-semibold text-gray-900">Welcome back</h2>
          <p className="text-sm text-gray-600 mt-1">Please enter your details to sign in</p>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Login Form - Using Inter */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                Remember for 30 days
              </label>
            </div>
            <button type="button" className="text-sm text-purple-600 hover:text-purple-500">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Sign in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button className="text-purple-600 hover:text-purple-500 font-medium">
            Create account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;