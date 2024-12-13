import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Header({ title = "Booking Portal" }) {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Back Button */}
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => window.history.back()}
        >
          <IoMdArrowRoundBack className="w-8 h-8" />
          <span className="text-lg font-medium">Back</span>
        </div>

        <div className="flex items-center gap-3 text-center">
          <FaHome className="w-8 h-8 animate-bounce" />
          <h1 className="text-xl lg:text-2xl font-bold tracking-wide">
            UZBEKISTAN HOTEL RESERVATION & MANAGEMENT PORTAL
          </h1>
        </div>

        <Link
          to="/"
          className="text-lg font-semibold hover:text-gray-200 transition-colors duration-300"
        >
          {title}
        </Link>
      </div>
    </header>
  );
}
