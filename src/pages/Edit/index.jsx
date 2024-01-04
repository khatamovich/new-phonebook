import { Title, Form, Dropdown } from "./Edit.styled";
import { useEffect, useState } from "react";
import { useFetchContact } from "../../hooks/useFetchContact";
import { useSearchParams } from "react-router-dom";
import { useUpdate } from "../../hooks/useUpdate";
import _ from "lodash";
import { useAuthContext } from "../../hooks/useAuthContext";
import { AuthContext } from "../../store/AuthContext";

const initialState = {
  name: "",
  governance: "",
  separation: "",
  jobtitle: "",
  region: "Toshkent sh.",
  email: "",
  phone: "",
};
const Edit = () => {
  const [searchParams] = useSearchParams();
  const docid = searchParams.get("docid");
  const { currentDoc } = useFetchContact(docid);
  const { updateContact } = useUpdate();
  const [newDoc, setNewDoc] = useState(initialState);
  const { uid } = useAuthContext(AuthContext);

  useEffect(() => {
    const { _id, ...current } = currentDoc;

    setNewDoc({ ...current });

    return () => setNewDoc(initialState);
  }, [docid, currentDoc]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const current = currentDoc;
    delete current._id;

    const isEqual = _.isEqual(current, newDoc);
    console.log(isEqual, current, newDoc);

    if (isEqual) {
      alert("O'zgarishlar aniqlanmadi");
      return;
    }

    updateContact(docid, { ...newDoc, lastUpdatedBy: uid });
  };

  return (
    <>
      <Title>Kontaktni yangilash</Title>

      <Form onSubmit={handleSubmit}>
        <label>
          F.I.Sh
          <input
            type="text"
            required
            maxLength={75}
            placeholder="Xodimning Familiyasi, Ismi, Sharifini kiriting"
            value={newDoc.name}
            onChange={(e) =>
              setNewDoc((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>

        <label>
          Lavozim
          <input
            type="text"
            placeholder="Xodim egallab turgan lavozimini kiriting"
            value={newDoc.jobtitle}
            onChange={(e) =>
              setNewDoc((prev) => ({ ...prev, jobtitle: e.target.value }))
            }
          />
        </label>

        <label>
          Bo&apos;lim
          <input
            type="text"
            placeholder="Xodimning bo'limini kiriting"
            value={newDoc.separation}
            onChange={(e) =>
              setNewDoc((prev) => ({ ...prev, separation: e.target.value }))
            }
          />
        </label>

        <label>
          Boshqarma
          <input
            type="text"
            placeholder="Boshqarma nomini kiriting"
            value={newDoc.governance}
            onChange={(e) =>
              setNewDoc((prev) => ({ ...prev, governance: e.target.value }))
            }
          />
        </label>

        <Dropdown>
          <p>Xudud</p>
          <select
            value={newDoc.region}
            onChange={(e) =>
              setNewDoc((prev) => ({ ...prev, region: e.target.value }))
            }
          >
            <option value={"Toshkent sh."}>Toshkent sh.</option>
            <option value="Samarqand v.">Samarqand v.</option>
          </select>
        </Dropdown>

        <label>
          Elektron pochta manzili
          <input
            type="email"
            placeholder="Xodimning elektron pochta manzilini kiriting"
            value={newDoc.email}
            onChange={(e) =>
              setNewDoc((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>

        <label>
          Ichki raqam
          <input
            required
            minLength={5}
            maxLength={5}
            pattern="^[0-9]*$"
            type="text"
            placeholder="Xodimning ichki telefon raqamini kiriting"
            value={newDoc.phone}
            onChange={(e) =>
              setNewDoc((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </label>

        <button
          disabled={
            !newDoc.name?.trim() || !newDoc.phone?.trim() ? true : false
          }
          type="submit"
        >
          Ma'lumotni saqlash
        </button>
      </Form>
    </>
  );
};

export default Edit;
