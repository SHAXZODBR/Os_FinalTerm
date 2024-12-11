import React from "react";

export const TextArea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-[549px] h-24 p-2 border rounded-md"
      />
    </div>
  );
};

TextArea.defaultProps = {
  placeholder: "",
};
