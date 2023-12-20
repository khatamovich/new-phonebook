import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DataProvider from "./store/AppContext";
// import contacts from "./store/contacts.json"; // Dummy data
import { useFetchContacts } from "./hooks/useFetchContacts";

// Pages
import HomePage from "./pages";
import AdminPage from "./pages/AdminPage";
import New from "./pages/New";

const App = () => {
  const { contacts } = useFetchContacts();

  return (
    <DataProvider value={{ contacts }}>
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/*" element={<HomePage />} />

          {/* Private routes */}
          <Route path="/admin" element={<AdminPage />} exact />
          <Route path="/new" element={<New />} exact />
        </Routes>
      </Layout>
    </DataProvider>
  );
};

export default App;
