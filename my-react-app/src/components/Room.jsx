import { useState } from "react";
// import { Button } from "./Button";

export function Room() {
  const [roomData, setRoomData] = useState({
    type: "",
    maxGuests: "",
    description: "",
    facilities: "",
    priceAdults: "",
    priceChildren: "",
    priceBabies: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room data:", roomData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-4">
      <div className="space-y-4 mt-4 ">
        <div>
          <label
            htmlFor="type"
            className="block px-2 text-sm font-medium text-gray-700"
          >
            Room type
          </label>
          <input
            placeholder="Room type"
            id="type"
            type="text"
            className="mt-2 px-2 bg-gray-100 w-80 h-12 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={roomData.type}
            onChange={(e) => setRoomData({ ...roomData, type: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="maxGuests"
            className="block px-2 text-sm font-medium text-gray-700"
          >
            Max number of guests
          </label>
          <input
            placeholder="1"
            id="maxGuests"
            type="number"
            className="mt-1 px-2  w-40 h-12 rounded-md bg-gray-100 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={roomData.maxGuests}
            onChange={(e) =>
              setRoomData({ ...roomData, maxGuests: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block px-2 text-sm font-medium text-gray-700"
          >
            Room Description
          </label>
          <textarea
            placeholder="Write a short description of the room..."
            id="description"
            rows={3}
            className="mt-1 p-2 block w-full rounded-md bg-gray-100 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={roomData.description}
            onChange={(e) =>
              setRoomData({ ...roomData, description: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="facilities"
            className="block px-2 text-sm font-medium text-gray-700"
          >
            Room facilities
          </label>
          <textarea
            placeholder="List all room facilities"
            id="facilities"
            rows={3}
            className="mt-1 p-2 block w-full rounded-md bg-gray-100 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={roomData.facilities}
            onChange={(e) =>
              setRoomData({ ...roomData, facilities: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="priceAdults"
              className="block text-sm font-medium text-gray-700"
            >
              Price for adults
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="priceAdults"
                type="number"
                className="pl-7 block w-80 h-12 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={roomData.priceAdults}
                onChange={(e) =>
                  setRoomData({ ...roomData, priceAdults: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="priceChildren"
              className="block text-sm font-medium text-gray-700"
            >
              Price for children (4-18 years old)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="priceChildren"
                type="number"
                className="pl-7 block w-80 h-12 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={roomData.priceChildren}
                onChange={(e) =>
                  setRoomData({ ...roomData, priceChildren: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="priceBabies"
              className="block text-sm font-medium text-gray-700"
            >
              Price for babies Price for babies (0-4 years)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="priceBabies"
                type="number"
                className="pl-7 block rounded-md w-80 h-12 bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={roomData.priceBabies}
                onChange={(e) =>
                  setRoomData({ ...roomData, priceBabies: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
