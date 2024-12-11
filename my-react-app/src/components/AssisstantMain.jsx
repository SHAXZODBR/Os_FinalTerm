import React, { useState } from "react";

const HotelDashboard = () => {
  const [rooms] = useState([
    201, 202, 203, 204, 205, 206, 207, 201, 202, 203, 204, 205, 206, 207,
  ]);

  return (
    <div className=" min-h-screen mt-40 bg-gray-100 m-28">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">
          Intercontinental Hotel Information
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Back to Homepage
        </button>
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Basic Information</h2>
          <button className="text-blue-600 hover:text-blue-800">
            Edit Information
          </button>
        </div>

        <div className="p-4">
          <div>
            <h3 className="font-medium mb-2">Hotel Description</h3>
            <p className="text-gray-600 text-sm">
              Intercontinental Hotel in Tashkent features 5-star accommodations
              with a shared lounge, a terrace and a restaurant. The property
              provides a 24-hour front desk, airport transportation, room
              service and free WiFi throughout the property.Intercontinental
              Hotel in Tashkent features 3-star accommodations with a shared
              lounge, a terrace and a restaurant. The property provides a
              24-hour front desk, airport transportation, room service and free
              WiFi throughout the property. At the hotel, every room comes with
              a desk, a flat-screen TV, a private bathroom, bed linen and
              towels. Each room has a coffee machine, while some rooms here will
              provide you with a balcony and others also provide guests with
              garden views. All guest rooms will provide guests with a fridge.
              Guests at Silk Road Premium Hotel will be able to enjoy activities
              in and around Tashkent, like cycling. Islam Karimov Tashkent
              International Airport is 5.6 miles away.
            </p>
          </div>

          <div className="space-y-4 grid grid-cols-3 py-4">
            <div>
              <h3 className="font-medium mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Yunusabad district, Shakhrisabz st. 2
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Phone number</h3>
              <p className="text-gray-600 text-sm">+998 90 300 20 50</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Star rating</h3>
              <p className="text-gray-600 text-sm">4 stars</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Photo</h3>
              <img className="w-40 h-40" src="/"></img>
            </div>

            <div>
              <h3 className="font-medium mb-2">Hotel facilities</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Free Wifi</li>
                <li>Breakfast</li>
                <li>Free parking</li>
              </ul>
            </div>
            <div>
              <div className="py-2">
                <h3 className="font-medium mb-2">Check in time:</h3>
                <p className="text-gray-600 text-sm">14:00</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Check out time:</h3>
                <p className="text-gray-600 text-sm">12:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Types */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Room types</h2>
        </div>
        <button className="my-4 text-blue-600 border border-dashed border-blue-600 px-4 py-2 rounded hover:bg-blue-50">
          + Add new room type
        </button>
        <div className="border rounded-lg p-4 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-xl">Single room</h3>
            <button className="text-blue-600 hover:text-blue-800">
              Edit Information
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            <span className="text-base text-black">Description:</span> A single
            room is a cozy and private space designed for one guest, featuring a
            comfortable single bed, essential furniture like a bedside table,
            chair, and wardrobe, and basic amenities such as free Wi-Fi, a TV,
            and air conditioning. The room includes an en-suite or shared
            bathroom with toiletries and fresh towels, providing a simple yet
            functional setup for a relaxing stay.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="text-base text-black">Facilities:</span> Single bed
            (twin or standard size), Mattress, pillows, and linens, Bedside
            table, Chair or armchair, Desk or workstation (optional), Wardrobe
            or closet, Hangers, Luggage rack, En-suite bathroom or shared
            bathroom (optional), Shower or bathtub, Toiletries (soap, shampoo,
            conditioner), Towels (bath and hand towels), Mirror, TV (cable or
            streaming options), Lighting (bedside lamp and main room light),
            Charging ports/power outlets, Telephone, Air conditioning or heating
            system, Complimentary water bottles, Tea/coffee maker (optional),
            Mini refrigerator (optional), Free Wi-Fi access, Keycard or lockable
            door, Trash bin
          </p>
          <h3>Price:</h3>
          <div className="grid grid-cols-4 gap-4 text-sm py-4">
            <div>
              <span className="font-medium">Adult: </span>
              <span className="text-gray-600">$25</span>
            </div>
            <div>
              <span className="font-medium">Child: </span>
              <span className="text-gray-600">$18</span>
            </div>
            <div>
              <span className="font-medium">Baby: </span>
              <span className="text-gray-600">Free</span>
            </div>
            <div>
              <span className="font-medium">Max number of guests: </span>
              <span className="text-gray-600">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Rooms</h2>

        <div className="flex gap-12 mb-8 ">
          <div>
            <label className="block py-2">Room number</label>
            <input
              type="text"
              placeholder="Room number"
              className="border rounded px-3 py-2 w-48 bg-gray-100"
            />
          </div>
          <div>
            <label className="block py-2">Room type</label>

            <select className="border rounded px-3 py-2 w-80 appearance-none bg-gray-100">
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Twin Room</option>
              <option>Tripple Room</option>
            </select>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 mt-10 h-10 w-40 rounded hover:bg-blue-700">
            Add new room
          </button>
        </div>

        <div className="space-y-2">
          {rooms.map((room, index) => (
            <div
              key={room}
              className={`flex justify-between items-center p-3 rounded ${
                index % 2 === 0 ? "bg-gray-100" : ""
              }`}
            >
              <div>
                <span className="font-medium mr-4">Room number: {room}</span>
                <span className="text-gray-600">Room type: Single room</span>
              </div>
              <div className="flex gap-2">
                <button className="text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700">
                  Edit
                </button>
                <button className="text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDashboard;
