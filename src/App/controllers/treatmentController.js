// add
export const add = (state, action) => {
  return [...state, action.treatment];
};

// delete
export const del = (state, action) => {
  const treatments = [...state];
  const index = state.findIndex((item) => item.id === action.id);

  if (index !== -1) {
    treatments.splice(index, 1);
  }
  return treatments;
};

export const imports = (state) => {
  const data = localStorage.getItem("treatment") || null;
  const treatment = JSON.parse(data);

  if (treatment) return treatment;

  return state;
};
