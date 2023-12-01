import {
  edit,
  hideAlert,
  imports,
  showAlert,
  switchImport,
  switchMode,
} from '../controllers/generalController';

export const initialGeneral = {
  dr_Name: 'User',
  alert: {
    show: false,
    msg: '',
    type: '',
  },
  theme: {
    name: 'dark',
    bg: 'dark',
    text: 'light',
  },
  treatment_Capacity: 2,
  auto_Import: false,
};

export const GeneralReducer = (state, action) => {
  switch (action.type) {
    case 'SHOWALERT': // ({type : "SHOWALERT" , msg : "alert massege" , alertType : "error | success"})
      return showAlert(state, action);
    case 'HIDEALERT': // ({type : "HIDEALERT"})
      return hideAlert(state, action);
    case 'IMPORT': // ({type : "IMPORT"})
      return imports(state, action);
    case 'EDIT': // ({type : "EDIT" , values : {...values} })
      return edit(state, action);
    case 'SWITCHMODE': // ({type : "SWITCHMODE" , mode : "dark | light"})
      return switchMode(state, action);
    case 'SWITCHIMPORT': // ({type : "SWITCHIMPORT" })
      return switchImport(state, action);
    default:
      return state;
  }
};
