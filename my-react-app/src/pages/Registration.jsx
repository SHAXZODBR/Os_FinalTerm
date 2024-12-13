import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Select from "../components/Select";

export default function Registration() {
  const [step, setStep] = useState(1);
  const [registrationType, setRegistrationType] = useState("guest");
  const [staffPosition, setStaffPosition] = useState("");
  const positions = [
    { value: "hotel-manager", label: "Hotel Manager" },
    { value: "manager-assistant", label: "Manager Assistant" },
    { value: "roomboy", label: "Roomboy" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 mt-40">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center">
                Please select how you want to register?
              </h2>
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setRegistrationType("staff");
                    setStep(2);
                  }}
                  className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Register as a hotel staff
                </button>
                <button
                  onClick={() => {
                    setRegistrationType("guest");
                    setStep(2);
                  }}
                  className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Register as a guest
                </button>
              </div>
              <p className="text-center text-sm text-gray-600">
                Already registered?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Log in here
                </Link>
              </p>
            </div>
          )}

          {step === 2 && registrationType === "staff" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center">
                Select your position
              </h2>
              <Select
                options={positions}
                value={staffPosition}
                onChange={(e) => setStaffPosition(e.target.value)}
              />
              <Button onClick={() => setStep(3)} className="w-full">
                Next
              </Button>
            </div>
          )}

          {step === 3 || (step === 2 && registrationType === "guest") ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center">
                {registrationType === "staff"
                  ? "Staff Registration"
                  : "Guest Registration"}
              </h2>
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Date of Birth */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="day"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Day
                    </label>
                    <input
                      id="day"
                      type="number"
                      placeholder="01"
                      min="1"
                      max="31"
                      className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="month"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Month
                    </label>
                    <input
                      id="month"
                      type="number"
                      placeholder="01"
                      min="1"
                      max="12"
                      className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Year
                    </label>
                    <input
                      id="year"
                      type="number"
                      placeholder="1990"
                      min="1900"
                      max="2024"
                      className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1234567890"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Passport Series */}
                <div>
                  <label
                    htmlFor="passport-series"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Passport series
                  </label>
                  <input
                    id="passport-series"
                    type="text"
                    placeholder="AC1001010"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="123 Main St"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Username */}
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
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Password */}
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
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Verify Password */}
                <div>
                  <label
                    htmlFor="verify-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Verify the password
                  </label>
                  <input
                    id="verify-password"
                    type="password"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
            </div>
          ) : null}
        </Card>
      </div>
    </div>
  );
}
