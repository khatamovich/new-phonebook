import { createContext, useReducer, useEffect } from "react";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
      };

    default:
      state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  const { auth } = useCheckAuth();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token || !auth) return;

    dispatch({
      type: "LOGIN",
      payload: { token },
    });
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, username: auth?.username, uid: auth?.uid }}
    >
      {children}
    </AuthContext.Provider>
  );
};
