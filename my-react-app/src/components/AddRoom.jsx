import React, { useState } from "react";
import BasicInformation from "./BasicInformation";
import ImageUpload from "./ImageUpload"; // Correct path
import Facility from "./Facility";

const AddRoom = () => {
  const initialFacilities = [
    { id: 1, name: "Free Wifi", checked: true },
    { id: 2, name: "Gym/Fitness center", checked: false },
    { id: 3, name: "Swimming pool", checked: false },
    { id: 4, name: "Free Parking", checked: false },
    { id: 5, name: "Breakfast", checked: true },
    { id: 6, name: "Laundry", checked: true },
  ];

  // Use state for facilities
  const [facilities, setFacilities] = useState(initialFacilities);

  const handleSave = () => {
    console.log("Saving hotel information...");
  };

  const handleFacilityToggle = (id) => {
    // Toggle the checked status of the facility
    setFacilities((prevFacilities) =>
      prevFacilities.map((facility) =>
        facility.id === id
          ? { ...facility, checked: !facility.checked }
          : facility
      )
    );
  };

  return (
    <div className="flex mt-[200px] bg-white mb-24">
      <main className="max-w-5xl mx-auto p-4 ">
        <div className="flex justify-between items-center mb-6 pt-4">
          <h1 className="text-2xl font-bold ">
            Intercontinental Hotel Information
          </h1>
          <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Back to Homepage
          </button>
        </div>

        <div className="space-y-6">
          <BasicInformation onSave={handleSave} />
          <ImageUpload />
          <Facility facilities={facilities} onToggle={handleFacilityToggle} />
        </div>
      </main>
    </div>
  );
};

export default AddRoom;
