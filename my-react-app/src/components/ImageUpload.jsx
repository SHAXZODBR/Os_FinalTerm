import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Handle drag-and-drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Prevent default drag events
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Photos
      </label>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-100"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-4xl text-gray-400 mb-2">+</span>
            <span className="text-gray-500">Choose or drop file here</span>
          </label>
        </div>
      </div>

      {image && (
        <div className="mt-4">
          <img src={image} alt="Preview" className="w-40 h-40 object-cover" />
        </div>
      )}
    </div>
  );
}
