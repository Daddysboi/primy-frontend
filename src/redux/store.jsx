import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import loginReducer from "./features/loginSlice";
import registerReducer from "./features/registerSlice";
import utilityReducer from "./features/utilitySlice";
import forgotPasswordReducer from "./features/forgotPasswordSlice";
import themeReducer from "./features/themeSlice";
import transactionReducer from "./features/transactionSlice";
import queryReducer from "./features/querySlice";
import courseReducer from "./features/courseSlice";
import modalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
    utility: utilityReducer,
    forgotPassword: forgotPasswordReducer,
    transaction: transactionReducer,
    course: courseReducer,
    theme: themeReducer,
    query: queryReducer,
    modal: modalReducer,
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
