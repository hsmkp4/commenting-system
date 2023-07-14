import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import commentsReducer from "./commentsSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    user: userReducer,
  },
});

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default store;
