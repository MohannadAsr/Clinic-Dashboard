import {
  create,
  del,
  edit,
  imports,
} from "../controllers/reservationsController";

export const initialreservations = [
  // {
  //   id: "9ZMR0P9baBrAr0LTCTlxr",
  //   name: "anas",
  //   phone_Num: "0963343434",
  //   blood_Group: "ab-",
  //   type: "pre",
  //   date: "2023-06-14",
  //   time: "08:52",
  //   patient_Id: "MjJvveTPqXNUImW2dIiGA",
  // },
];

export const reservationsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": // CREATING NEW RESERVATION  { type: "ADD" , reservation : {new patient} }
      return create(state, action);
    case "DELETE": // DELETING RESERVATION {type : "DELETE" , id : reservation id }
      return del(state, action);
    case "EDIT": // UPDATING NEW RESRVATIONS  { type: "UPDATE" , id: reservation id , values : {...new values} }
      return edit(state, action);
    case "IMPORT": // IMPORTING RESERVATIONS IF THERE IS A COPY OF THEM IN THE LOCAL STORAGE  { type: "IMPORT" }
      return imports(state, action);
    default:
      return state;
  }
};
