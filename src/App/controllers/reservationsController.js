export const create = (state, action) => {
  let reservations = [...state];

  let find = reservations.find((item) => {
    return (
      item.patient_Id === action.reservation.patient_Id &&
      item.name.toLowerCase() === action.reservation.name.toLowerCase() &&
      (item.type === "urgent" || item.type == "direct") &&
      (item.type === "urgent" || action.reservation.type === "direct")
    );
  });
  if (find) return state;
  return [...state, action.reservation];
};

export const edit = (state, action) => {
  let reservations = [...state];

  let selectRes = reservations.find((item) => item.id === action.id);
  const index = reservations.findIndex((item) => item.id === action.id);

  if (selectRes && index !== -1) {
    selectRes = Object.assign({ ...selectRes }, action.values);
    reservations.splice(index, 1, selectRes);
  }

  return reservations;
};

export const del = (state, action) => {
  let reservations = [...state];

  const index = reservations.findIndex((item) => item.id === action.id);

  if (index !== -1) {
    reservations.splice(index, 1);
  }

  return reservations;
};

export const imports = (state) => {
  const data = localStorage.getItem("reservations") || null;
  const reservations = JSON.parse(data);

  if (reservations) return reservations;

  return state;
};
