import * as imgTransfer from "@assets/ilustracion-transferencia-coche-tramicar.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function HowDoIt() {
  return (
    <div className="bg-blue-how-do-it w-full h-screen flex justify-center items-center">
      <div className="w-1/2 relative">
        <div className="bg-sky-400 items-center justify-center flex flex-col rounded-full w-48 h-48 absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-sm text-center font-semibold text-white">
            Cuando compras un coche, sólo tienes hasta 30 días para realizar el
            cambio de titularidad...
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imgTransfer.default}
            alt="Transferencia"
            className="h-96 w-96"
          />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 space-y-5">
          <h2 className="text-5xl font-semibold text-white">¿Cómo funciona?</h2>
          <p className="text-white text-2xl font-semibold">
            En Tramicar, sabemos que la burocracia es muy pesada ...
          </p>
          <p className="text-white text-lg">
            Y somos conscientes de los problemas que acarrea el cambio de nombre
            de coche: pérdida de tiempo, cargas que bloquean la transferencia
            del vehículo, dudas, incertidumbre…
          </p>

          <button className="bg-white h-14 w-3/5 rounded-lg text-lg">
            <span className="text-blue-600">
              Te ayudamos a transferir tu coche <ArrowForwardIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
