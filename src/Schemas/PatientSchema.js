import * as Yup from "yup";

// Validation Schema for The adding new Patients
export const PatientSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/([\u0621-\u064A ]|[a-z ])+$/i, "Not a Valid name")
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  phone_Num: Yup.string()
    .matches(
      /^(09)\d{8}$/,
      "Not valid , phone number must start with 09 and must be 10 digits"
    )
    .required("Required"),
  blood_Group: Yup.string()
    .matches(/^(A|B|AB|O)[+-]$/i, "Not a valid blood group")
    .required("Required"),
});
