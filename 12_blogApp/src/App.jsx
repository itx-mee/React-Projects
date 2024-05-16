import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch(e)(console.log(e))
      .finally((setLoading = false));
  });

  return !loading ? (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
