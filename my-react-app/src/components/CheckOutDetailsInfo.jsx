import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function CheckOutDetailsInfo() {
  const location = useLocation();
  const { id } = useParams();
  const bookingData = location.state || {
    name: "John Doe",
    phoneNumber: "+998 99 999-99-99",
    checkIn: "December 26, 2024, 14:00",
    checkOut: "December 28, 2024, 12:00",
    duration: "2 nights",
    adults: "1",
    children: "0",
    rooms: "1",
    roomType: "Twin room",
    roomNumber: "201",
    additionalFees: {
      restaurant: "$20",
      bar: "$12",
      roomServices: "None",
      otherFees: "None",
    },
    totalCosts: {
      roomCost: "$67",
      additionalFees: "$32",
      paid: "$67",
      hasToBePaid: "$32",
    },
  };

  const { additionalFees, totalCosts, ...guestDetails } = bookingData;

  return (
    <div className="container mx-auto p-6 mt-40 capitalize">
      <h1 className="text-2xl font-bold mb-6 px-24">Check out details: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {/* Guest Details Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Details of guest:</h2>
            <div className="space-y-4">
              {Object.entries(guestDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start">
                  <span className="font-medium">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Status Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Missing equipment</h2>
            <p>None</p>

            <h2 className="text-2xl font-bold mb-6 mt-8">Broken equipment</h2>
            <p>None</p>
          </div>
        </div>

        {/* Additional Fees Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Additional Fees:</h2>
            <div className="space-y-4">
              {Object.entries(additionalFees).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start">
                  <span className="font-medium">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-8">Total Cost:</h2>
            <div className="space-y-4">
              {Object.entries(totalCosts).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start">
                  <span className="font-medium">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Approve check out
        </button>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors ml-4"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
