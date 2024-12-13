import React from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Wifi, Car, Coffee } from "lucide-react";
import Header from "../components/Header";
import Button from "../components/Button";

export default function HotelInfo() {
  const { id } = useParams();

  const hotel = {
    name: "Intercontinental",
    location: "Yunusabad district, Shakhrisabz street, 2",
    phone: "+998 90 500 30 30",
    rating: 5,
    description:
      "Intercontinental Hotel in Tashkent features 3-star accommodations with a shared lounge, a terrace and a restaurant. The property provides a 24-hour front desk, room service and currency exchange for guests.",
    facilities: ["Free Wifi", "Free Parking", "Breakfast"],
    rooms: [
      {
        type: "Twin room",
        description:
          "2 Twin Bed, TV, Soundproof Walls, Air Conditioner, Private Bathroom, Fridge, Safe, Mini Bar",
        priceAdult: 67,
        priceChild: 42,
        childrenUnder: 5,
      },
      {
        type: "Double room",
        description:
          "1 King Bed, TV, Soundproof Walls, Air Conditioner, Private Bathroom, Safe, Fridge, Mini Bar",
        priceAdult: 112,
        priceChild: 87,
        childrenUnder: 5,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="text-blue-600">{hotel.phone}</p>
          </div>
          <Link to={`/hotels/${id}/reserve`}>
            <Button>Book</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
              alt={hotel.name}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />

            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600">{hotel.description}</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Facilities</h2>
              <div className="grid grid-cols-2 gap-4">
                {hotel.facilities.map((facility) => (
                  <div key={facility} className="flex items-center gap-2">
                    {facility.includes("Wifi") && (
                      <Wifi className="text-blue-600" />
                    )}
                    {facility.includes("Parking") && (
                      <Car className="text-blue-600" />
                    )}
                    {facility.includes("Breakfast") && (
                      <Coffee className="text-blue-600" />
                    )}
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Rating</h2>
              <div className="flex">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Room types</h2>
              {hotel.rooms.map((room) => (
                <div key={room.type} className="mb-6 last:mb-0">
                  <h3 className="font-semibold mb-2">{room.type}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {room.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold">${room.priceAdult}</p>
                      <p className="text-sm text-gray-600">Adults</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">${room.priceChild}</p>
                      <p className="text-sm text-gray-600">Children under 10</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">Free</p>
                      <p className="text-sm text-gray-600">
                        Children under {room.childrenUnder}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
