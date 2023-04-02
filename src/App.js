import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import { AuthContext } from "./utils/context";
import { useEffect, useState } from "react";
import { getProfileInfo, signOut } from "./services/authentification.service";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (user) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
    signOut();
  };

  useEffect(() => {
    getProfileInfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
