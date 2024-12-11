import React from "react";

export const FeeInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          $
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-[549px] h-[62px] p-2 pl-8 rounded-md"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};
