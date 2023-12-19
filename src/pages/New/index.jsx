import { Title, Form, Dropdown } from "./New.styled";
import { IoIosArrowForward } from "react-icons/io";

const New = () => {
  return (
    <>
      <Title>Yangi kontakt qo&apos;shish</Title>

      <Form>
        <label>
          F.I.Sh
          <input
            type="text"
            placeholder="Xodimning Familiyasi, Ismi, Sharifini kiriting"
          />
        </label>

        <label>
          Lavozim
          <input
            type="text"
            placeholder="Xodim egallab turgan lavozimini kiriting"
          />
        </label>

        <label>
          Bo&apos;lim
          <input type="text" placeholder="Xodimning bo'limini kiriting" />
        </label>

        <Dropdown>
          <p>Boshqarma</p>
          <select>
            <option value="">Yangi texnologiyalar</option>
          </select>
        </Dropdown>

        <Dropdown>
          <p>Xudud</p>
          <select>
            <option value="">Toshkent sh.</option>
          </select>
        </Dropdown>

        <label>
          Elektron pochta manzili
          <input
            type="email"
            placeholder="Xodimning elektron pochta manzilini kiriting"
          />
        </label>

        <label>
          Ichki raqam
          <input
            type="number"
            placeholder="Xodimning ichki telefon raqamini kiriting"
          />
        </label>

        <button type="submit">Ma'lumotni saqlash</button>
      </Form>
    </>
  );
};

export default New;
