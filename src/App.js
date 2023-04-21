import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import { useEffect } from "react";
import { getProfileInfo } from "./services/authentification.service";
import { useDispatch } from "react-redux";
import { modifyName } from "./store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProfileInfo().then((user) => {
      if (user) {
        dispatch(modifyName({ firstName: user.firstName, lastName: user.lastName }));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<div>Error404</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
