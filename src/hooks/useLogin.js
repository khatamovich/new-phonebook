import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = (username, password) => {
    axios
      .post("/api/auth", { username, password })
      .then((response) => {
        setLoading(true);
        dispatch({ type: "LOGIN", payload: response.data });

        const token = response.data.token;

        if (!token) throw Error("No token returned");

        localStorage.setItem("token", JSON.stringify(token));
      })
      .catch((exception) => {
        setError(exception.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { login, error, isLoading };
};
