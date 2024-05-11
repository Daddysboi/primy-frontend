import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import loginReducer from "./features/loginSlice";
import registerReducer from "./features/registerSlice";
import utilityReducer from "./features/utilitySlice";
import forgotPasswordReducer from "./features/forgotPasswordSlice";
import themeReducer from "./features/themeSlice";
import transactionReducer from "./features/transactionSlice";
import queryReducer from "./features/querySlice";
import gradeReducer from "./features/gradeSlice";
import modalReducer from "./features/modalSlice";
import assessmentReducer from "./features/assessmentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
    utility: utilityReducer,
    forgotPassword: forgotPasswordReducer,
    transaction: transactionReducer,
    grade: gradeReducer,
    theme: themeReducer,
    query: queryReducer,
    modal: modalReducer,
    assessment: assessmentReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.subtitle.$$typeof"],
      },
    }),
});
