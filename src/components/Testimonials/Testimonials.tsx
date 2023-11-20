import { Divider } from "@mui/material";
import * as imgComplement from "@assets/Testimonials.svg";
import * as av1 from "@assets/av1.jpeg";
import * as av2 from "@assets/av2.jpeg";

export default function Testimonials() {
  return (
    <>
      <div className="bg-blue-testimonials text-blue-text-testimonials flex justify-center items-center w-full h-36">
        <div className="grid grid-cols-3 gap-4">
          <span className="text-center">-</span>
          <span className="text-center">
            Testimonios de <br />
            nuestros Clientes
          </span>
          <span className="text-center">-</span>
        </div>
      </div>
      <div className="bg-theme-gray w-full h-36 flex justify-center space-x-24 space">
        <div
          className="w-72 rounded-lg bg-white shadow-md -top-3 relative"
          style={{ height: "fit-content" }}
        >
          <div className="flex justify-center items-center">
            <img
              src={av1.default}
              alt="Avatar"
              className="h-16 w-16 rounded-full"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-center">Andrea Ochoa</p>
              <p className="text-center">Compradora de coche</p>
            </div>
            <img
              src={imgComplement.default}
              alt="Complement"
              className="h-16 w-16 rounded-full"
            />
          </div>
          <Divider />
          <p>
            Lorem Ipsum is simply dummy text of the printing and kjl typesetting
            industry. Many desktop publishing packages and web page nhklk
            editors now use Lorem Ipsum as hkl their
          </p>
        </div>
        <div
          className="w-72 rounded-lg bg-white shadow-md -top-3 relative"
          style={{ height: "fit-content" }}
        >
          <div className="flex justify-center items-center">
            <img
              src={av2.default}
              alt="Avatar"
              className="h-16 w-16 rounded-full"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-center">Andrea Ochoa</p>
              <p className="text-center">Compradora de coche</p>
            </div>
            <img
              src={imgComplement.default}
              alt="Complement"
              className="h-16 w-16 rounded-full"
            />
          </div>
          <Divider />
          <p>
            Lorem Ipsum is simply dummy text of the printing and kjl typesetting
            industry. Many desktop publishing packages and web page nhklk
            editors now use Lorem Ipsum as hkl their
          </p>
        </div>
      </div>
    </>
  );
}
