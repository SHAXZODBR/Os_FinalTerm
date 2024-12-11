import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const BookingPortal = () => {
  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1,
      name: "John Doe",
      dateRange: "Dec 26, 2024 - Dec 28, 2024",
      status: "pending",
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
    },
    {
      id: 2,
      name: "Jane Smith",
      dateRange: "Dec 27, 2024 - Dec 29, 2024",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 27, 2024, 14:00",
      checkOut: "December 29, 2024, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "1",
      rooms: "1",
      roomType: "Double room",
      totalCost: "$134",
      paid: "$134",
    },
    {
      id: 3,
      name: "Alice Johnson",
      dateRange: "Dec 28, 2024 - Dec 30, 2024",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 28, 2024, 14:00",
      checkOut: "December 30, 2024, 12:00",
      duration: "2 nights",
      adults: "1",
      children: "0",
      rooms: "1",
      roomType: "Single room",
      totalCost: "$50",
      paid: "$50",
    },
    {
      id: 4,
      name: "Bob Brown",
      dateRange: "Dec 29, 2024 - Dec 31, 2024",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 29, 2024, 14:00",
      checkOut: "December 31, 2024, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "0",
      rooms: "1",
      roomType: "Double room",
      totalCost: "$100",
      paid: "$100",
    },
    {
      id: 5,
      name: "Charlie Davis",
      dateRange: "Dec 30, 2024 - Jan 1, 2025",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 30, 2024, 14:00",
      checkOut: "January 1, 2025, 12:00",
      duration: "2 nights",
      adults: "1",
      children: "0",
      rooms: "1",
      roomType: "Single room",
      totalCost: "$50",
      paid: "$50",
    },
    {
      id: 6,
      name: "Diana Evans",
      dateRange: "Dec 31, 2024 - Jan 2, 2025",
      status: "approved",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 31, 2024, 14:00",
      checkOut: "January 2, 2025, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "1",
      rooms: "1",
      roomType: "Family room",
      totalCost: "$150",
      paid: "$150",
    },
    {
      id: 7,
      name: "Ethan Foster",
      dateRange: "Jan 1, 2025 - Jan 3, 2025",
      status: "approved",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "January 1, 2025, 14:00",
      checkOut: "January 3, 2025, 12:00",
      duration: "2 nights",
      adults: "1",
      children: "0",
      rooms: "1",
      roomType: "Single room",
      totalCost: "$50",
      paid: "$50",
    },
    {
      id: 8,
      name: "Fiona Grant",
      dateRange: "Jan 2, 2025 - Jan 4, 2025",
      status: "approved",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "January 2, 2025, 14:00",
      checkOut: "January 4, 2025, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "0",
      rooms: "1",
      roomType: "Double room",
      totalCost: "$100",
      paid: "$100",
    },
    {
      id: 9,
      name: "George Harris",
      dateRange: "Jan 3, 2025 - Jan 5, 2025",
      status: "approved",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "January 3, 2025, 14:00",
      checkOut: "January 5, 2025, 12:00",
      duration: "2 nights",
      adults: "1",
      children: "0",
      rooms: "1",
      roomType: "Single room",
      totalCost: "$50",
      paid: "$50",
    },
  ]);

  const [checkInDetails, setCheckInDetails] = useState([
    {
      id: 10,
      name: "Hannah Irving",
      dateRange: "Dec 26, 2024 - Dec 28, 2024",
      status: "pending",
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
    },
    {
      id: 11,
      name: "Isla Jackson",
      dateRange: "Dec 27, 2024 - Dec 29, 2024",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 27, 2024, 14:00",
      checkOut: "December 29, 2024, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "1",
      rooms: "1",
      roomType: "Double room",
      totalCost: "$134",
      paid: "$70",
    },
    {
      id: 12,
      name: "Jack King",
      dateRange: "Dec 28, 2024 - Dec 30, 2024",
      status: "approved",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 28, 2024, 14:00",
      checkOut: "December 30, 2024, 12:00",
      duration: "2 nights",
      adults: "1",
      children: "0",
      rooms: "1",
      roomType: "Single room",
      totalCost: "$50",
      paid: "$50",
    },
    {
      id: 13,
      name: "Katie Lee",
      dateRange: "Dec 29, 2024 - Dec 31, 2024",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 29, 2024, 14:00",
      checkOut: "December 31, 2024, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "0",
      rooms: "1",
      roomType: "Double room",
      totalCost: "$100",
      paid: "$50",
    },
  ]);

  const [checkOutDetails, setCheckOutDetails] = useState([
    {
      id: 14,
      name: "Liam Moore",
      dateRange: "Dec 26, 2024 - Dec 28, 2024",
      status: "pending",
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
    },
    {
      id: 15,
      name: "Mia Nelson",
      dateRange: "Dec 27, 2024 - Dec 29, 2024",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 27, 2024, 14:00",
      checkOut: "December 29, 2024, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "1",
      rooms: "1",
      roomType: "Double room",
      roomNumber: "202",
      additionalFees: {
        restaurant: "$30",
        bar: "$15",
        roomServices: "None",
        otherFees: "None",
      },
      totalCosts: {
        roomCost: "$134",
        additionalFees: "$45",
        paid: "$134",
        hasToBePaid: "$45",
      },
    },
    {
      id: 16,
      name: "Noah Oliver",
      dateRange: "Dec 28, 2024 - Dec 30, 2024",
      status: "approved",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 28, 2024, 14:00",
      checkOut: "December 30, 2024, 12:00",
      duration: "2 nights",
      adults: "1",
      children: "0",
      rooms: "1",
      roomType: "Single room",
      roomNumber: "203",
      additionalFees: {
        restaurant: "$10",
        bar: "$5",
        roomServices: "None",
        otherFees: "None",
      },
      totalCosts: {
        roomCost: "$50",
        additionalFees: "$15",
        paid: "$50",
        hasToBePaid: "$15",
      },
    },
    {
      id: 17,
      name: "Olivia Parker",
      dateRange: "Dec 29, 2024 - Dec 31, 2024",
      status: "pending",
      phoneNumber: "+998 99 999-99-99",
      checkIn: "December 29, 2024, 14:00",
      checkOut: "December 31, 2024, 12:00",
      duration: "2 nights",
      adults: "2",
      children: "0",
      rooms: "1",
      roomType: "Double room",
      roomNumber: "204",
      additionalFees: {
        restaurant: "$20",
        bar: "$10",
        roomServices: "None",
        otherFees: "None",
      },
      totalCosts: {
        roomCost: "$100",
        additionalFees: "$30",
        paid: "$100",
        hasToBePaid: "$30",
      },
    },
  ]);

  const handleApprove = (id, section) => {
    const updateStatus = (items) =>
      items.map((item) =>
        item.id === id ? { ...item, status: "approved" } : item
      );

    switch (section) {
      case "booking-requests":
        setBookingRequests(updateStatus(bookingRequests));
        break;
      case "check-in-details":
        setCheckInDetails(updateStatus(checkInDetails));
        break;
      case "check-out-details":
        setCheckOutDetails(updateStatus(checkOutDetails));
        break;
      default:
        break;
    }
  };

  const BookingSection = ({ title, items, section, limit }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link
          to={`/${section}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Show more
        </Link>
      </div>
      <div className="space-y-4">
        {items.slice(0, limit).map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-2 rounded-lg px-4 gap-4 ${
              index % 2 === 0 ? "bg-gray-100" : ""
            }`}
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-gray-600">{item.dateRange}</span>
            <div className="flex gap-2">
              <Link
                to={`/${section}-info/${item.id}`}
                state={item}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                details
              </Link>
              {item.status === "pending" ? (
                <button
                  onClick={() => handleApprove(item.id, section)}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  approve
                </button>
              ) : (
                <span className="text-blue-600 px-4 py-1.5">approved !</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-xl">Booking Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">@mngJ</span>
            <span className="text-gray-600">#121</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-24 pb-8">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:row-span-2">
            <BookingSection
              title="Booking requests"
              items={bookingRequests}
              section="booking-requests"
              limit={8}
            />
          </div>
          <div>
            <BookingSection
              title="Check in details"
              items={checkInDetails}
              section="check-in-details"
              limit={3}
            />
          </div>
          <div>
            <BookingSection
              title="Check out details"
              items={checkOutDetails}
              section="check-out-details"
              limit={3}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPortal;
