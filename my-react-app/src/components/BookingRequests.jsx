import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingRequests = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "John Doe",
      startDate: "Dec 26, 2024",
      endDate: "Dec 28, 2024",
      roomType: "Twin room",
      adults: 1,
      children: 0,
      phone: "+998 99 999-99-99",
      status: "pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      startDate: "Dec 27, 2024",
      endDate: "Dec 29, 2024",
      roomType: "Double room",
      adults: 2,
      children: 1,
      phone: "+998 99 888-88-88",
      status: "pending",
    },
    {
      id: 3,
      name: "Bob Brown",
      startDate: "Dec 29, 2024",
      endDate: "Dec 31, 2024",
      roomType: "Single room",
      adults: 1,
      children: 0,
      phone: "+998 99 777-77-77",
      status: "approved",
    },
    {
      id: 4,
      name: "Alice Johnson",
      startDate: "Dec 30, 2024",
      endDate: "Jan 1, 2025",
      roomType: "Penthouse",
      adults: 2,
      children: 2,
      phone: "+998 99 666-66-66",
      status: "pending",
    },
    {
      id: 5,
      name: "Charlie Davis",
      startDate: "Jan 2, 2025",
      endDate: "Jan 4, 2025",
      roomType: "Luxury suite",
      adults: 2,
      children: 1,
      phone: "+998 99 555-55-55",
      status: "pending",
    },
    {
      id: 6,
      name: "Eva Wilson",
      startDate: "Jan 3, 2025",
      endDate: "Jan 5, 2025",
      roomType: "Double room",
      adults: 2,
      children: 0,
      phone: "+998 99 444-44-44",
      status: "approved",
    },
  ]);

  const handleApprove = (id) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: "approved" } : booking
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-40">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Booking requests</h1>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to homepage
          </Link>
        </div>

        {/* Table container with scroll for small screens */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          {bookings.length === 0 ? (
            <p className="text-center py-4">No booking requests available.</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Date Range</th>
                  <th className="text-left py-3 px-4">Room Type</th>
                  <th className="text-left py-3 px-4">Adults</th>
                  <th className="text-left py-3 px-4">Children</th>
                  <th className="text-left py-3 px-4">Phone</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr
                    key={booking.id}
                    className={`border-t ${
                      index % 2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <td className="py-3 px-4">{booking.name}</td>
                    <td className="py-3 px-4">
                      {booking.startDate} - {booking.endDate}
                    </td>
                    <td className="py-3 px-4">{booking.roomType}</td>
                    <td className="py-3 px-4">{booking.adults}</td>
                    <td className="py-3 px-4">{booking.children}</td>
                    <td className="py-3 px-4">{booking.phone}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                          details
                        </button>
                        {booking.status === "pending" ? (
                          <button
                            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={() => handleApprove(booking.id)}
                          >
                            approve
                          </button>
                        ) : (
                          <span className="text-blue-600 font-medium px-4 py-1.5">
                            approved !
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default BookingRequests;
