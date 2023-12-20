import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:7777/contacts")
      .then((response) => {
        setLoading(true);
        setContacts(response.data.documents);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { contacts, loading, error };
};
