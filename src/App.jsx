import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
// import contacts from "./store/contacts.json"; // Dummy data

// Pages
import HomePage from "./pages";
import AddPage from "./pages/Add";
import LoginPage from "./pages/LoginPage";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();

  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<HomePage />} />

        <Route path="/add" element={user ? <AddPage /> : <LoginPage />} exact />

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
