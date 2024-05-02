import * as Yup from "yup";

const name = Yup.string()
  .min(3, "Must be 3 characters or more")
  .max(20, "Must be 20 characters or less")
  .required("Required");

const email = Yup.string()
  .email("Invalid email address")
  .required("Email ir required");

const password = Yup.string()
  .min(8, "Password must be at least 8 characters")
  .max(15, "Password must not exceed 15 characters")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one special character"
  )
  .required("Password is required");

export const loginSchema = Yup.object({
  email: email,
  password: Yup.string().required("Password is required"),
});

export const signUpSchema = Yup.object({
  firstName: name,
  lastName: name,
  email: email,
  password: password,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const contactFormSchema = Yup.object().shape({
  fullName: name,
  email: email,
  message: Yup.string().required("Message is required"),
});
