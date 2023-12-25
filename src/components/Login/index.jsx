import { StyledLogin, Head, Form, Field, Submit } from "./Login.styled";
import { MdLockPerson } from "react-icons/md";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, error, isLoading } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const captureUsername = ({ currentTarget }) =>
    setUsername(currentTarget.value);

  const capturePassword = ({ currentTarget }) =>
    setPassword(currentTarget.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    login(username, password);
  };

  return (
    <StyledLogin>
      <Form onSubmit={handleSubmit}>
        <Head>
          <MdLockPerson />
          <span>Admin paneliga kirish</span>
        </Head>

        <Field>
          <label>Foydalanuvchi nomi</label>
          <input type="text" onChange={captureUsername} value={username} />
        </Field>

        <Field>
          <label>Parol</label>
          <input type="password" onChange={capturePassword} value={password} />
        </Field>

        <Submit disabled={isLoading} type="submit">
          {isLoading ? "..." : "Kirish"}
        </Submit>
        {error && <div className="error">{error}</div>}
      </Form>
    </StyledLogin>
  );
};

export default Login;
