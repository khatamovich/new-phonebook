import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAddContact = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const addContact = (payload) => {
    setIsLoading(true);

    axios
      .post("/api/contacts", payload, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("Yangi kontakt qo'shildi!");

          const confirmation = confirm(
            "Yangi kontakt qo'shishda davom etasizmi ?"
          );

          if (!confirmation) {
            navigate("/");
            return;
          }

          navigate(0);
          return;
        }

        alert("Kontaktni qo'shishda muammo yuzaga keldi!");
        console.log(response);
      })
      .catch((exception) => {
        console.log(exception);
        setError(exception.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { error, isLoading, addContact };
};
