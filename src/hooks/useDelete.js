import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useLogout } from "./useLogout";

export const useDelete = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleDelete = (id) => {
    if (!user) return navigate("/admin");

    setIsLoading(true);

    const confirmation = confirm(
      "Kontakt o'chiriladi va uni qayta tiklash imkoniyati bo'lmaydi."
    );

    if (!confirmation) {
      setIsLoading(false);
      return;
    }

    axios
      .delete(`/api/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        localStorage.removeItem("search-term");
        alert("Kontakt o'chirildi");

        setTimeout(() => {
          navigate(0);
        }, 100);
      })
      .catch((exception) => {
        if (exception.response.status === 403) {
          logout();
          navigate("/admin");
          return;
        }

        setError(exception.response.data.message);
        console.log(exception);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { handleDelete };
};
