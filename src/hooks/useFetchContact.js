import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchContact = (docid) => {
  const [currentDoc, setCurrentDoc] = useState({});

  useEffect(() => {
    axios
      .get(`/api/contacts/${docid}`)
      .then((response) => {
        setCurrentDoc(response.data.document);
      })
      .catch((exception) => {
        console.log(exception);
      });
  }, [docid]);

  return {
    currentDoc,
  };
};
