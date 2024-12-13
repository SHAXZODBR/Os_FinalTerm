import React from "react";
import { Link } from "react-router-dom";
import { Search, Star } from "lucide-react";
import Card from "../components/Card";

const HOTELS = [
  {
    id: "1",
    name: "Intercontinental",
    location: "Yunusabad, Shakhrisabz st. 2",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=300&h=200",
  },
  // Repeat for other hotels...
];

export default function Hotels() {
  return (
    <div className="min-h-screen bg-gray-100 mt-40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Hotels in Tashkent</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by stars</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 cursor-pointer"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOTELS.map((hotel) => (
            <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{hotel.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{hotel.location}</p>
                <div className="flex">
                  {Array.from({ length: hotel.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
