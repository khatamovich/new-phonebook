import { StyledLogin, Head, Form, Field, Submit } from "./Login.styled";
import { MdLockPerson } from "react-icons/md";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledLogin>
      <Form
        onSubmit={(e) =>
          handleLogin(e, {
            username,
            password,
          })
        }
      >
        <Head>
          <MdLockPerson />
          <span>Admin paneliga kirish</span>
        </Head>

        <Field>
          <label>Foydalanuvchi nomi</label>
          <input onChange={(e) => setUserName(e.target.value)} type="text" />
        </Field>

        <Field>
          <label>Parol</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Submit type="submit">Kirish</Submit>
      </Form>
    </StyledLogin>
  );
};

export default Login;
