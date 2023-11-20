import { Button, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as logo from "@assets/logo.png";

export const Advantages = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-advantages">
      <div className="w-90 md:w-1/2 rounded-lg bg-white shadow-md p-4 space-y-5 items-center justify-center">
        <div className="flex">
          <div className="w-1/2">
            <p className="text-left"></p>
          </div>
          <div className="w-1/4 flex justify-center">
            <img src={logo.default} alt="Logo" className="h-auto w-3/4" />
          </div>
          <div className="w-1/4 flex justify-center">
            <p>GESTORIA</p>
          </div>
        </div>
        {AdvantagesList.map((item, index) => (
          <div className="flex" key={index}>
            <div className="w-1/2">
              <p className="text-left">{item}</p>
            </div>
            <div className="w-1/4 flex justify-center">
              <CheckCircleIcon className="text-blue-600" />
            </div>
            <div className="w-1/4 flex justify-center">
              <HighlightOffIcon className="text-blue-600" />
            </div>
            <Divider />
          </div>
        ))}
        <div className="flex justify-center items-center relative -bottom-8">
          <Button
            variant="contained"
            className="bg-violet-800 text-white text-lg font-semibold rounded-md py-2 px-4"
          >
            Transfiere tu coche
          </Button>
        </div>
      </div>
    </div>
  );
};

const AdvantagesList = [
  "Comprador y vendedor pueden estar en lugares diferentes, pueden tramitar por separado, cuando y desde donde quieran.",
  "Identificamos a las partes y al coche online, al instante.",
  "Firma telemática de los documentos. No tienes que enviarlos a ningun sitio.",
  "Envío a tu domicilio de tu nuevo Permiso de Circulación.",
];
