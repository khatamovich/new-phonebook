import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useLogout } from "./useLogout";

export const useUpdate = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logout } = useLogout();

  const updateContact = (id, newDoc) => {
    if (!user) return navigate("/login");
    if (!newDoc.name.trim() || !newDoc.phone.trim()) {
      return alert("Ma'lumotlarni to'gri to'ldiring");
    }

    setIsLoading(true);

    axios
      .patch(`/api/contacts/${id}`, newDoc, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
        alert("Kontakt yangilandi");

        setTimeout(() => {
          navigate(0);
        }, 100);
      })
      .catch((exception) => {
        if (exception.response.status === 403) {
          logout();
          navigate("/login");
          return;
        }

        setError(exception.response.data.message);
        console.log(exception);
        alert("Kontaktni yangilashda xatolik yuz berdi");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { updateContact };
};
