import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import BookingRequests from "./components/BookingRequests";
import RoomForm from "./components/RoomForm";
import RoomsTable from "./components/RoomsTable";
import RoomCheck from "./components/RoomCheck";
import AddRoom from "./components/AddRoom";
import AssisstantMain from "./components/AssisstantMain";
import CheckInDetails from "./components/CheckInDetails";
import CheckInDetailsInfo from "./components/CheckInDetailsInfo";
import CheckOutDetailsInfo from "./components/CheckOutDetailsInfo";
import CheckOutDetails from "./components/CheckOutDetails";
import BookingRequestInfo from "./components/BookingRequestsInfo";
import BookingPortal from "./components/BookingPortal";
import { Book, HotelIcon } from "lucide-react";
import Homepage from "./pages/Homepage";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Reservation from "./pages/Reservation";
import HotelInfo from "./pages/HotelInfo";

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center bg-gray-100">
        <NavBar />
        <Routes>
          {/* Root route for the booking portal */}
          <Route path="/" index element={<Homepage />} />

          <Route path="/check-out-details" element={<CheckOutDetails />} />
          <Route path="/check-in-details" element={<CheckInDetails />} />
          <Route path="/booking-requests" element={<BookingRequests />} />
          <Route
            path="/booking-requests-info"
            element={<BookingRequestInfo />}
          />
          <Route
            path="/check-out-details-info"
            element={<CheckOutDetailsInfo />}
          />
          <Route
            path="/check-in-details-info"
            element={<CheckInDetailsInfo />}
          />

          {/* Other routes */}
          <Route path="/room-form" element={<RoomForm />} />
          <Route path="/rooms-table" element={<RoomsTable />} />
          <Route path="/room-check" element={<RoomCheck />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/assisstant-main" element={<AssisstantMain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
