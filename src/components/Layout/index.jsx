import { Container } from "./Layout.styled";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
