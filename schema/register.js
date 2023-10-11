import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string().required("Email is required."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase,"
    ),
    confirmPassword: Yup.string()
    .required("Password is required.")
    .oneOf([Yup.ref("password"),null],"Passwords must match.")
});
