import React, { createContext, useContext, useState } from 'react';


const DatosContext = createContext();


export function useDatos() {
  return useContext(DatosContext);
}

export function DatosProvider({ children }) {
  const [datos, setDatos] = useState({ monto: '', duracion: '', intervalo: '', categorias: [], indispensables: [], dispensables: [] });

  const guardarDatos = (nuevosDatos) => {
    setDatos(nuevosDatos);
  };

  const guardarDatosPrimerVista = (nuevosDatos) => {
    setDatos((prevDatos) => ({
      ...prevDatos,
      monto: nuevosDatos.monto,
      duracion: nuevosDatos.duracion,
      intervalo: nuevosDatos.intervalo,
    }));
  };

  const guardarDatosSegundaVista = (nuevosDatos) => {
    setDatos((prevDatos) => ({
      ...prevDatos,
      categorias: nuevosDatos.categorias,
    }));
  };

  const guardarDatosTerceraVista = (nuevosDatos) => {
    setDatos((prevDatos) => ({
      ...prevDatos,
      indispensables: nuevosDatos.indispensables,
    }));
  };

  const guardarDatosCuartaVista = (nuevosDatos) => {
    setDatos((prevDatos) => ({
      ...prevDatos,
      dispensables: nuevosDatos.dispensables,
    }));
  };

  return (
    <DatosContext.Provider
      value={{
        datos,
        guardarDatos,
        guardarDatosPrimerVista,
        guardarDatosSegundaVista,
        guardarDatosTerceraVista,
        guardarDatosCuartaVista,
      }}
    >
      {children}
    </DatosContext.Provider>
  );
}
