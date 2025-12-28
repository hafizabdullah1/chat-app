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

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isInitialized: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isInitialized = true;
      state.loading = false;
      
      // Save to localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isInitialized = true;
      state.loading = false;
      
      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
    restoreAuth: (state) => {
      const token = localStorage.getItem("token");
      const userStr = localStorage.getItem("user");
      
      if (token && userStr) {
        state.token = token;
        state.user = JSON.parse(userStr);
        state.isAuthenticated = true;
      }
      state.isInitialized = true;
    },
  },
});

export const { setCredentials, setLoading, logout, updateUser, restoreAuth } =
  authSlice.actions;

export default authSlice.reducer;
