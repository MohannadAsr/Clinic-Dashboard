export const showAlert = (state, action) => {
  return {
    ...state,
    alert: { show: true, msg: action.msg, type: action.alertType },
  };
};

export const hideAlert = (state) => {
  return { ...state, alert: { show: false, msg: "", type: "" } };
};

export const imports = (state) => {
  const data = localStorage.getItem("general") || null;
  const general = JSON.parse(data);

  if (general) return general;
  return state;
};

export const edit = (state, action) => {
  let general = { ...state };

  general = Object.assign(general, action.values);

  return general;
};

export const switchMode = (state, action) => {
  const general = { ...state };

  general.theme.name = action.mode;

  if (general.theme.name === "dark") {
    general.theme.bg = "dark";
    general.theme.text = "light";
  } else {
    general.theme.bg = "light";
    general.theme.text = "dark";
  }

  return general;
};

export const switchImport = (state) => {
  return { ...state, auto_Import: !state.auto_Import };
};
