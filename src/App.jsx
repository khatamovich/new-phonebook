import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
// import contacts from "./store/contacts.json"; // Dummy data

// Pages
import HomePage from "./pages";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit" element={<EditPage />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
