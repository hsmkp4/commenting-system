import { createSlice } from "@reduxjs/toolkit";
import { allUsers } from "../data";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: allUsers,
    currentUser: "",
  },
  reducers: {
    chooseUser: (s, a) => {
      const selectedUser = s.users.find((el) => el.id === a.payload);
      s.currentUser = selectedUser;
    },
  },
});
export const { chooseUser } = userSlice.actions;
export default userSlice.reducer;
