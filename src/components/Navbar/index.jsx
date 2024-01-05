import {
  StyledNavbar,
  Links,
  DynamicLinks,
  Login,
  Logout,
  Add,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import { FaUserLock, FaHome } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
// import { FaFileCircleQuestion } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const { user, username } = useAuthContext();
  const { logout } = useLogout();

  return (
    <StyledNavbar>
      <Links>
        <li>
          <Link to="/" title="Bosh sahifa">
            <FaHome />
          </Link>
        </li>
        {/* <li>
          <Link to="/manuals" title="Qo'llanmalar">
            <FaFileCircleQuestion />
          </Link>
        </li> */}
      </Links>

      <DynamicLinks>
        {user && <p>{username}</p>}

        {!user && (
          <Login>
            <Link to="/login" title="Admin tizimga kirish">
              <FaUserLock />
            </Link>
          </Login>
        )}

        {user && (
          <Add>
            <Link to="/add" title="Yangi kontakt qo'shish">
              <IoPersonAdd />
            </Link>
          </Add>
        )}

        {user && (
          <Logout onClick={logout}>
            <Link>
              <RiLogoutBoxLine />
            </Link>
          </Logout>
        )}
      </DynamicLinks>
    </StyledNavbar>
  );
};

export default Navbar;
