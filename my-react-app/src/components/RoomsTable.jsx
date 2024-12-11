import React, { useState } from "react";

const initialRoomsData = [
  { id: 1, roomNumber: "101", roomType: "Single" },
  { id: 2, roomNumber: "102", roomType: "Double" },
  { id: 3, roomNumber: "103", roomType: "Suite" },
  { id: 4, roomNumber: "104", roomType: "Single" },
  { id: 5, roomNumber: "105", roomType: "Double" },
];

const RoomsTable = () => {
  const [roomsData, setRoomsData] = useState(
    initialRoomsData.map((room) => ({ ...room, checked: false }))
  );

  const toggleCheck = (id) => {
    setRoomsData((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, checked: !room.checked } : room
      )
    );
  };

  return (
    <div className="container h-screen mx-auto px-28 py-8 mt-40">
      <h2 className="text-2xl font-bold mb-4 text-start">Rooms</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4  text-left">Room Number</th>
              <th className="py-2 px-4  text-left">Room Type</th>
              <th className="py-2 px-4  text-left"></th>
            </tr>
          </thead>
          <tbody>
            {roomsData.map((room, index) => (
              <tr
                key={room.id}
                className={index % 2 === 0 ? "" : "bg-gray-100"}
              >
                <td className="py-2 px-4 ">{room.roomNumber}</td>
                <td className="py-2 px-4 ">{room.roomType}</td>
                <td className="py-2 px-4 ">
                  <button
                    className={`${
                      room.checked
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-200 "
                        : "bg-blue-500 hover:bg-blue-700 text-white"
                    }  font-bold py-2 px-8 rounded w-28 flex justify-center`}
                    onClick={() => toggleCheck(room.id)}
                  >
                    {room.checked ? "Checked!" : "Check"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomsTable;
