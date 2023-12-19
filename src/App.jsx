import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DataProvider from "./store/AppContext";
import contacts from "./store/contacts.json";

// Pages
import HomePage from "./pages";
import AdminPage from "./pages/AdminPage";
import New from "./pages/New";

const App = () => {
  return (
    <DataProvider value={{ contacts }}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Layout>
    </DataProvider>
  );
};

export default App;
