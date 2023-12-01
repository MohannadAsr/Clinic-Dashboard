import { create, del, edit, imports } from "../controllers/patientsController";

export const initialPatients = [
  // {
  //   id: "ABsdfr3ghjssfjd",
  //   name: "mohannad Alassar",
  //   phone_Num: "0934544173",
  //   blood_Group: "O+",
  // },
];

export const patientsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": // CREATING NEW PATIENT  { type: "CREATE" , patient : {new patient} }
      return create(state, action);
    case "EDIT": // UPDATING NEW PATIENT  { type: "UPDATE" , id: patient id , values : {new values} }
      return edit(state, action);
    case "DELETE": // DELETING PATIENT IF EXIST  { type: "DELETE" , id: patient id }
      return del(state, action);
    case "IMPORT": // IMPORTING PATIENTS IF THERE IS A COPY OF THEM IN THE LOCAL STORAGE  { type: "IMPORT" }
      return imports(state, action);
    default:
      return state;
  }
};
