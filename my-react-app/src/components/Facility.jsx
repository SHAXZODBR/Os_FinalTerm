import React from "react";

export default function Facility({ facilities, onToggle }) {
  return (
    <div className="mt-4 bg-white">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Hotel facilities
      </label>
      <div className="flex flex-wrap gap-4">
        {facilities.map((facility) => (
          <label key={facility.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={facility.checked}
              onChange={() => onToggle(facility.id)}
              className="rounded-full bg-gray-100 text-blue-600"
            />
            <span className="text-sm rounded-full text-gray-700">
              {facility.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
