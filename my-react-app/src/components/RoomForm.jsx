import Button from "./Button";
import { Room } from "./Room"; // Import RoomForm

const RoomForm = () => {
  return (
    <div className="h-screen mt-40 bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Intercontinental Hotel Information
          </h1>

          <Button onClick={() => (window.location.href = "/")}>
            Back to Homepage
          </Button>
        </div>

        <div className=" bg-white shadow-sm rounded-lg p-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Add room type
            </h2>
            <Button type="submit">Save</Button>
          </div>

          <Room />
        </div>
      </main>
    </div>
  );
};

export default RoomForm;
