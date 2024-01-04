import { useState, useEffect } from "react";
import axios from "axios";

export const useCheckAuth = () => {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setAuth({
          success: response.data.success,
          username: response.data.uname,
          uid: response.data.uid,
        });
      })
      .catch((exception) => {
        setAuth(false);
        const message = exception.response.data.message;

        if (
          message.toLowerCase().includes("expired") ||
          message.toLowerCase().includes("malformed")
        ) {
          localStorage.removeItem("token");
        }
      });
  }, [token]);

  return { auth };
};
