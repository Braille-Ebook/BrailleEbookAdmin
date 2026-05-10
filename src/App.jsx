import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AddBooks from "./pages/AddBooks";
import ManageBooks from "./pages/ManageBooks";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="/manage" element={<ManageBooks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
