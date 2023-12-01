import React from 'react';
import { initialPatients, patientsReducer } from './reducers/patientsReducer';
import {
  initialreservations,
  reservationsReducer,
} from './reducers/reservationsReducer';
import {
  initialTreatment,
  treatmentReducer,
} from './reducers/treatmentReducer';
import { GeneralReducer, initialGeneral } from './reducers/generalReducer';

// Manager Context
export const Manager = React.createContext();

export default function AppProvider({ children }) {
  // Patients Reducer
  const [patients, patientsDispatch] = React.useReducer(
    patientsReducer,
    initialPatients
  );

  // Reservations reducer
  const [reservations, reservationsDispatch] = React.useReducer(
    reservationsReducer,
    initialreservations
  );
  // Treatment reducer
  const [treatment, treatmentDispatch] = React.useReducer(
    treatmentReducer,
    initialTreatment
  );
  // general settings reducer
  const [general, generalDispatch] = React.useReducer(
    GeneralReducer,
    initialGeneral
  );

  // importing general settings on startup
  React.useEffect(() => {
    generalDispatch({ type: 'IMPORT' });
  }, []);

  // importing data only if auto import is enabled
  React.useEffect(() => {
    if (general.auto_Import) {
      patientsDispatch({ type: 'IMPORT' });
      reservationsDispatch({ type: 'IMPORT' });
      treatmentDispatch({ type: 'IMPORT' });

      generalDispatch({
        type: 'SHOWALERT',
        msg: 'Data imported successfully disable auto-import if want to change this feature !',
        alertType: 'success',
      });
    }
  }, [general.auto_Import]);

  // Checking Theme mode on startup
  React.useEffect(() => {
    let root = document.documentElement;
    root.dataset.bsTheme = general.theme.name;
    root?.style.setProperty(
      '--dark',
      general.theme.name === 'dark' ? '#262626' : '#eaeaea'
    );

    root?.style.setProperty(
      '--light',
      general.theme.name === 'dark' ? '#eaeaea' : '#262626'
    );

    root?.style.setProperty(
      '--extra',
      general.theme.name === 'dark' ? '#1f1f1e' : '#f8f9fa'
    );
  }, [general]);

  return (
    <div>
      <Manager.Provider
        value={{
          patients,
          patientsDispatch,
          reservations,
          reservationsDispatch,
          treatment,
          treatmentDispatch,
          general,
          generalDispatch,
        }}
      >
        {children}
      </Manager.Provider>
    </div>
  );
}
