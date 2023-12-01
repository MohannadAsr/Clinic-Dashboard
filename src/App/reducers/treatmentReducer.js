import { add, del, imports } from "../controllers/treatmentController";

export const initialTreatment = [
  // {
  //   id: "9ZMR0P9baBrAr0LTCTexr",
  //   name: "anas",
  //   phone_Num: "0963343434",
  //   blood_Group: "ab-",
  //   type: "waiting",
  //   date: "2023-06-14",
  //   time: "08:52",
  //   patient_Id: "MjJvveTPqXNUImW2dIiGA",
  // },
];

export const treatmentReducer = (state, action) => {
  switch (action.type) {
    case "ADD": // ADD Reservation to the treatment  { type: "ADD" , treatment : {new patient} }
      return add(state, action);
    case "DELETE":
      return del(state, action); // Delete Treatment {type: "DELETE" , id : Treatment or reservation id}
    case "IMPORT": // DELETING PATIENT IF EXIST  { type: "DELETE" , id: patient id }
      return imports(state, action);
    default:
      return state;
  }
};
