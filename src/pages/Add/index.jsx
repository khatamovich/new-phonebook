import { Title, Form, Dropdown } from "./Add.styled";
import { useState } from "react";
import { useAddContact } from "../../hooks/useAddContact";

const Add = () => {
  const { error, isLoading, addContact } = useAddContact();
  const [contact, setContact] = useState({
    name: "",
    governance: "",
    separation: "",
    jobtitle: "",
    region: "Toshkent sh.",
    email: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    addContact(contact);
  };

  return (
    <>
      <Title>Yangi kontakt qo&apos;shish</Title>

      <Form onSubmit={handleSubmit}>
        <label>
          F.I.Sh
          <input
            type="text"
            required
            placeholder="Xodimning Familiyasi, Ismi, Sharifini kiriting"
            value={contact.name}
            onChange={(e) =>
              setContact((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>

        <label>
          Lavozim
          <input
            type="text"
            placeholder="Xodim egallab turgan lavozimini kiriting"
            value={contact.jobtitle}
            onChange={(e) =>
              setContact((prev) => ({ ...prev, jobtitle: e.target.value }))
            }
          />
        </label>

        <label>
          Bo&apos;lim
          <input
            type="text"
            placeholder="Xodimning bo'limini kiriting"
            value={contact.separation}
            onChange={(e) =>
              setContact((prev) => ({ ...prev, separation: e.target.value }))
            }
          />
        </label>

        <label>
          Boshqarma
          <input
            type="text"
            placeholder="Boshqarma nomini kiriting"
            value={contact.governance}
            onChange={(e) =>
              setContact((prev) => ({ ...prev, governance: e.target.value }))
            }
          />
        </label>

        <Dropdown>
          <p>Xudud</p>
          <select
            value={contact.region}
            onChange={(e) =>
              setContact((prev) => ({ ...prev, region: e.target.value }))
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
            value={contact.email}
            onChange={(e) =>
              setContact((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>

        <label>
          Ichki raqam
          <input
            required
            type="text"
            placeholder="Xodimning ichki telefon raqamini kiriting"
            value={contact.phone}
            onChange={(e) =>
              setContact((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </label>

        <button
          disabled={
            !contact.name || !contact.phone || !contact.region ? true : false
          }
          type="submit"
        >
          Ma'lumotni saqlash
        </button>
      </Form>
    </>
  );
};

export default Add;
