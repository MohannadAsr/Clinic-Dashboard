export const create = (state, action) => {
  let checkDuplicate = state.find(
    (item) =>
      item.name.toLowerCase() == action.patient.name.toLowerCase() &&
      item.phone_Num == action.patient.phone_Num
  );

  if (checkDuplicate) {
    return state;
  } else {
    return [...state, action.patient];
  }
};

export const edit = (state, action) => {
  let patients = [...state];

  let selectpatient = patients.find((item) => item.id === action.id);
  const index = patients.findIndex((item) => item.id === action.id);

  if (selectpatient && index !== -1) {
    selectpatient = Object.assign({ ...selectpatient }, action.values);
    patients.splice(index, 1, selectpatient);
  }

  return patients;
};

export const del = (state, action) => {
  let patients = [...state];

  const index = patients.findIndex((item) => item.id === action.id);

  if (index !== -1) {
    patients.splice(index, 1);
  }

  return patients;
};

export const imports = (state) => {
  const data = localStorage.getItem("patients") || null;
  const patients = JSON.parse(data);

  if (patients) return patients;

  return state;
};
