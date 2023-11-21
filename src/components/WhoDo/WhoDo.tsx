export function WhoDo() {
  return (
    <div className="justify-center items-center bg-blue-sky w-full h-96 py-5 px-48">
      <div className="container p-14">
        <span className="block text-center text-white text-4xl font-bold mb-5">
          ¿Quién debe realizar el cambio de titularidad del vehículo?
        </span>
        <span className="block text-white text-xl font-semibold mb-5 text-center">
          El comprador salvo que el vendedor sea un compraventa profesional, en
          ese caso el vehículo suele entregarse con estos trámites completados.
        </span>
        <span className="block text-white text-lg font-medium text-center">
          Además, entre particulares el vendedor debe asegurarse que el cambio
          de titularidad se haya completado con éxito en la DGT. Si el comprador
          no remite una copia del nuevo permiso de circulación en un plazo de 15
          días, el vendedor deberá presentar en la Jefatura Provincial de
          Tráfico la notificación de venta junto con el DNI del comprador y una
          copia del contrato de compraventa.
        </span>
      </div>
    </div>
  );
}
