import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function CheckInDetailsInfo() {
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
    paid: "$30",
  };

  return (
    <div className="container mx-auto p-6 mt-40">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Check in details: {id}</h1>

          <div className="space-y-4">
            {Object.entries(bookingDetails).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start">
                <span className="font-medium">
                  {key.replace(/([A-Z])/g, " $1").trim()}:
                </span>
                <span
                  className={key === "paid" ? "flex items-center gap-2" : ""}
                >
                  {value}
                  {key === "paid" &&
                    bookingDetails.paid !== bookingDetails.totalCost && (
                      <span className="text-red-500 text-sm">
                        Guest didn&apos;t pay the full price !
                      </span>
                    )}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Approve
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
              Discard
            </button>
            <Link
              to="/"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors ml-auto"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
