import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function BookingRequestInfo() {
  const location = useLocation();
  const { id } = useParams();
  const bookingDetails = location.state || {
    name: "John Doe",
    phoneNumber: "+998 99 999-99-99",
    checkIn: "December 26, 2024, 14:00",
    checkOut: "December 28, 2024, 12:00",
    duration: "2 nights",
    adults: "1",
    children: "0",
    rooms: "1",
    roomType: "Twin room",
    totalCost: "$67",
    paid: "$67",
  };

  return (
    <div className="container mx-auto p-6 mt-40 capitalize">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">
            Details of booking request: {id}
          </h1>

          <div className="space-y-4">
            {Object.entries(bookingDetails).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start">
                <span className="font-medium">
                  {key.replace(/([A-Z])/g, " $1").trim()}:
                </span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Approve
            </button>
            <Link
              to="/"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
