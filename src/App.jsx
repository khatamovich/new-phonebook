import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
// import contacts from "./store/contacts.json"; // Dummy data

// Pages
import HomePage from "./pages";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import ChangelogPage from "./pages/Changelog";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<LoginPage />} />

        <Route
          path="*"
          element={
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "30px",
                textTransform: "uppercase",
              }}
            >
              404
            </p>
          }
        />

        <Route element={<ProtectedRoutes />}>
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
