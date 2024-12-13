import { useState } from "react";
import Button from "./Button";
import { FeeInput } from "./FeeInput";
import { TextArea } from "./TextArea";

const MyComponent = () => {
  // State for FeeInput values
  const [restaurantFees, setRestaurantFees] = useState("");
  const [barFees, setBarFees] = useState("");
  const [roomServiceFees, setRoomServiceFees] = useState("");

  // State for TextArea values
  const [missingEquipment, setMissingEquipment] = useState("");
  const [brokenEquipment, setBrokenEquipment] = useState("");

  // Handle submit function
  const handleSubmit = () => {
    console.log("Form Submitted");
  };

  return (
    <div className="flex w-screen h-screen pt-28 mt-28 ">
      <main className="mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Room 101</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-xl font-semibold mb-4">Additional fees</h3>
            <FeeInput
              label="Restaurant fees"
              value={restaurantFees}
              onChange={(e) => setRestaurantFees(e)}
            />
            <FeeInput
              label="Bar fees"
              value={barFees}
              onChange={(e) => setBarFees(e)}
            />
            <FeeInput
              label="Room services fees"
              value={roomServiceFees}
              onChange={(e) => setRoomServiceFees(e)}
            />
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Missing equipment</h3>
            <TextArea
              label="If something is missing please note them"
              value={missingEquipment}
              onChange={(e) => setMissingEquipment(e)}
            />
            <br />
            <h3 className="text-xl font-semibold mb-4">Broken Equipment</h3>
            <TextArea
              label="If something is broken please note them"
              value={brokenEquipment}
              onChange={(e) => setBrokenEquipment(e)}
            />
          </section>
        </div>

        <div className="mt-8 flex justify-start">
          <Button onClick={handleSubmit}>Done</Button>
        </div>
      </main>
    </div>
  );
};

export default MyComponent;
