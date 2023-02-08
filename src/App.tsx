import "./App.scss";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Users from "pages/Users";
import UserDetails from "pages/UserDetails";
import Layout from "layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout><Outlet/></Layout>}>
        <Route index element={<Home />} />
        <Route index path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
