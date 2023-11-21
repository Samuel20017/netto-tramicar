import { Divider, Stepper, Step, StepLabel } from "@mui/material";
import * as logo from "@assets/logo.png";

export const Requirements = () => {
  return (
    <div className="h-screen bg-blue-advantages">
      <div className="flex items-center justify-center py-16">
        <span className="text-blue-500 text-4xl font-semibold leading-tight break-words">
          Requisitos&nbsp;
        </span>
        <span className="text-black text-4xl font-semibold leading-tight break-words">
          para hacer la transferencia&nbsp;
        </span>
        <span className="text-black text-4xl font-semibold leading-tight break-words">
          transferencia de un coche:
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-1/2 rounded-lg bg-white shadow-md p-4 space-y-5 items-center justify-center">
          <div className="flex">
            <div className="w-1/2">
              <div className="w-full text-center">
                Requisitos
                <br />
                <img
                  src={logo.default}
                  alt="Logo"
                  className="w-32 mx-auto my-4"
                />
              </div>
              <Stepper activeStep={1} orientation="vertical">
                <Step key="1">
                  <StepLabel>DNI o NIE del comprador y del vendedor.</StepLabel>
                </Step>
                <Step key="2">
                  <StepLabel>Datos del vehículo.</StepLabel>
                </Step>
                <Step key="3">
                  <StepLabel>Acceso a un correo electrónico.</StepLabel>
                </Step>
              </Stepper>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="w-1/2 color-gray-700 text-sm">
              <div className="w-full text-center">
                Requisitos
                <br />
                GESTORIA
              </div>
              <Stepper
                className="p-2"
                activeStep={undefined}
                orientation="vertical"
              >
                <Step key={1}>
                  <StepLabel>
                    Cumplimentar el impreso de solicitud del cambio de nombre.
                  </StepLabel>
                </Step>
                <Step key={2}>
                  <StepLabel>
                    Abonar la tasa de la DGT y aportar el justificante.
                  </StepLabel>
                </Step>
                <Step key={3}>
                  <StepLabel>
                    Incluir el contrato de compraventa del coche.
                  </StepLabel>
                </Step>
                <Step key={4}>
                  <StepLabel>
                    Identificar al vendedor con una copia del DNI o NIE.
                  </StepLabel>
                </Step>
                <Step key={5}>
                  <StepLabel>
                    Justificante de pago del ITP (modelo 620).
                  </StepLabel>
                </Step>
                <Step key={6}>
                  <StepLabel>
                    Identificar al comprador con su documento oficial original
                    (DNI, NIE, carnet de conducir, pasaporte…) o una copia
                    compulsada del mismo que acredite su identidad y domicilio.
                  </StepLabel>
                </Step>
              </Stepper>
            </div>
          </div>

          <div className="flex justify-center items-center relative -bottom-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-2/5">
              ¡Quiero que tramicar me ayude!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
