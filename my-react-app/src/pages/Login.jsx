import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Login() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-40">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Welcome to Booking Portal!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="@johnd"
                className={`w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className={`w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">
                Wrong Password or Username!
              </p>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
