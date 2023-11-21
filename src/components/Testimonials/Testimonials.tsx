import { Divider } from "@mui/material";
import * as imgComplement from "@assets/Testimonials.svg";
import * as av1 from "@assets/av1.jpeg";
import * as av2 from "@assets/av2.jpeg";

export default function Testimonials() {
  return (
    <>
      <div className="bg-blue-testimonials text-blue-text-testimonials flex justify-center items-center w-full h-72">
        <div className="grid grid-cols-3 gap-4 text-2xl text-bold -mt-24">
          <span className="text-center">-</span>
          <span className="text-center">
            Testimonios de <br />
            nuestros Clientes
          </span>
          <span className="text-center">-</span>
        </div>
      </div>
      <div className="bg-theme-gray w-full h-64 flex justify-center space-x-24 space">
        <div className="w-96 h-64 rounded-lg bg-white shadow-md -top-3 relative -mt-10">
          <div className="flex justify-center space-x-8 items-center h-28">
            <img
              src={av1.default}
              alt="Avatar"
              className="h-16 w-16 rounded-full"
            />
            <div className="flex flex-col justify-center items-center space-y-0.5">
              <p className="text-center font-bold text-xl">Andrea Ochoa</p>
              <p className="text-center gray-700">Compradora de coche</p>
            </div>
            <img
              src={imgComplement.default}
              alt="Complement"
              className="w-10 rounded-full"
            />
          </div>
          <Divider />
          <p className="p-5">
            Lorem Ipsum is simply dummy text of the printing and kjl typesetting
            industry. Many desktop publishing packages and web page nhklk
            editors now use Lorem Ipsum as hkl their
          </p>
        </div>
        <div className="w-96 h-64 rounded-lg bg-white shadow-md -top-3 relative -mt-10">
          <div className="flex justify-center space-x-8 items-center h-28">
            <img
              src={av2.default}
              alt="Avatar"
              className="h-16 w-16 rounded-full"
            />
            <div className="flex flex-col justify-center items-center space-y-0.5">
              <p className="text-center font-bold text-xl">Andrea Ochoa</p>
              <p className="text-center gray-700">Compradora de coche</p>
            </div>
            <img
              src={imgComplement.default}
              alt="Complement"
              className="w-10 rounded-full"
            />
          </div>
          <Divider />
          <p className="p-5">
            Lorem Ipsum is simply dummy text of the printing and kjl typesetting
            industry. Many desktop publishing packages and web page nhklk
            editors now use Lorem Ipsum as hkl their
          </p>
        </div>
      </div>
    </>
  );
}
