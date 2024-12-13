import React, { useState } from "react";
import { format } from "date-fns";
import Card from "../components/Card";
import Select from "../components/Select";
import Button from "../components/Button";

export default function Reservation() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [roomType, setRoomType] = useState("");

  const roomTypes = [
    { value: "twin", label: "Twin Room" },
    { value: "double", label: "Double Room" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 mt-40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <h1 className="text-2xl font-bold mb-6">Reservation</h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Dates</h2>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 31 }).map((_, i) => (
                      <button
                        key={i}
                        className={`p-2 text-center rounded-md ${
                          i + 1 === selectedDate.getDate()
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() =>
                          setSelectedDate(new Date(2024, 11, i + 1))
                        }
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Number of guests
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adults
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                        >
                          -
                        </button>
                        <span className="text-lg">{adults}</span>
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                          onClick={() => setAdults(adults + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Children
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                        >
                          -
                        </button>
                        <span className="text-lg">{children}</span>
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <Select
                  label="Type of room"
                  options={roomTypes}
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                />
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold">Total cost</h2>
                <div className="text-right">
                  <p className="text-2xl font-bold">$67</p>
                  <p className="text-sm text-gray-600">Per 1 night rates</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p>
                  Your check-in time is 14:00 on{" "}
                  {format(selectedDate, "MMMM d")}
                </p>
                <p>
                  Your check-out time is 12:00 on{" "}
                  {format(
                    new Date(selectedDate.getTime() + 86400000),
                    "MMMM d"
                  )}
                </p>
              </div>

              <Button className="w-full">Reserve</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
