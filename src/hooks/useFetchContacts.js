import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/api/contacts")
      .then((response) => {
        setLoading(true);
        setContacts(response.data.documents);
        setDate(
          new Date(
            response.data.documents[
              response.data.documents.length - 1
            ].updatedAt
          )
        );
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { contacts, loading, error, date };
};
