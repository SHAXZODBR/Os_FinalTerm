import { FaHome } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full h-[116px] shadow-lg bg-white fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center">
          <FaHome className="text-[#2563EB] w-[30px] h-[35px] m-2" />
          <h1 className="font-inter text-[32px] font-semibold text-gray-900">
            Booking Portal
          </h1>
        </div>
        <div className="flex gap-4 text-xl">
          <p>@rmbyA</p>
          <p>#141</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
