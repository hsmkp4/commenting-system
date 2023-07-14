import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import commentsReducer from "./commentsSlice";

const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default store;
