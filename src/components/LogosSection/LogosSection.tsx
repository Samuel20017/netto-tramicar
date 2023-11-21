import * as logo1 from "@assets/logo-partner-1.png";
import * as logo2 from "@assets/logo-partner-2.png";
import * as logo3 from "@assets/logo-partner-3.png";
import * as logo4 from "@assets/logo-partner-4.png";

export function LogosSection() {
  return (
    <div className="bg-theme-gray min-h-screen flex flex-col justify-center items-center">
      <span className="text-center text-black text-2xl font-bold mt-2 mb-20">
        ¿Quién debe realizar el cambio de titularidad del vehículo?
      </span>
      <div className="flex flex-wrap justify-between space-x-12 w-4/5">
        <img
          src={logo4.default}
          alt="Logo"
          className="w-full sm:w-1/4 mb-4 sm:mb-0"
        />
        <img
          src={logo3.default}
          alt="Logo"
          className="w-full sm:w-1/4 mb-4 sm:mb-0"
        />
        <img
          src={logo2.default}
          alt="Logo"
          className="w-full sm:w-1/4 mb-4 sm:mb-0"
        />
      </div>
      <div className="flex justify-center w-4/5">
        <img src={logo1.default} alt="Logo" className="w-1/3 mx-auto" />
      </div>
    </div>
  );
}
