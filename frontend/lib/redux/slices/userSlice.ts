import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  profilePic: string;
  bio: string;
  phone?: string;
  isOnline: boolean;
  lastSeen: string;
}

interface UserState {
  allUsers: User[];
  selectedUser: User | null;
  loading: boolean;
}

const initialState: UserState = {
  allUsers: [],
  selectedUser: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllUsers: (state, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
    updateUserInList: (state, action: PayloadAction<User>) => {
      const index = state.allUsers.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.allUsers[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setAllUsers, setSelectedUser, updateUserInList, setLoading } =
  userSlice.actions;

export default userSlice.reducer;
