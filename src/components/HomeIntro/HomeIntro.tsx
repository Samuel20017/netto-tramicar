import { Breadcrumbs, Button, Link, Typography } from "@mui/material";
import * as imageCalculator from "@assets/ilustracion-calculadora-presupuesto-tramicar.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const HomeIntro = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <div className="bg-theme-gray">
      <div
        className={
          isLargeScreen || isMediumScreen
            ? "w-4/5 mx-auto flex h-screen"
            : "w-full flex bg-theme-gray h-screen"
        }
      >
        <div
          className={
            isLargeScreen || isMediumScreen ? "w-1/2 p-8" : "w-full p-8"
          }
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="blue" href="/">
              Inicio
            </Link>
            <Typography color="text.primary">Transferencia De Coche</Typography>
          </Breadcrumbs>
          <div className="w-full mt-40">
            <span className="text-black text-4xl font-semibold leading-tight break-words">
              ¡Transfiere tu&nbsp;
            </span>
            <span className="text-blue-500 text-4xl font-semibold leading-tight break-words">
              coche&nbsp;
            </span>
            <span className="text-black text-4xl font-semibold leading-tight break-words">
              desde tu teléfono!
            </span>
          </div>
          <div className="w-full">
            <span className="text-gray-700 text-xl font-semibold leading-tight break-words">
              En Tramicar contamos con un equipo de expertos que te ayudarán a
              cambiar de nombre tu vehículo online, desde cualquier parte, los
              365 días del año.
            </span>
          </div>
          <br />
          <Button
            variant="contained"
            className="bg-violet-800 text-white text-lg font-semibold rounded-md py-2 px-4"
          >
            Calcula tu presupuesto
          </Button>
        </div>

        {(isLargeScreen || isMediumScreen) && (
          <div className={isLargeScreen ? "w-1/2" : "hidden"}>
            <img
              src={imageCalculator.default}
              alt="Imagen"
              className={isLargeScreen ? "w-full h-auto" : "w-full"}
            />
          </div>
        )}
      </div>
    </div>
  );
};
