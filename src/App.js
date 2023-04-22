import { Route, redirect, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import { useEffect } from "react";
import { getProfileInfo, isLoggedIn } from "./services/authentification.service";
import { useDispatch } from "react-redux";
import { modifyName } from "./store";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const dispatch = useDispatch();

  const mustBeLoggedIn = () => {
    if (!isLoggedIn()) {
      throw redirect("/");
    }

    return null;
  };

  const mustNotBeLoggedIn = () => {
    if (isLoggedIn()) {
      throw redirect("/");
    }

    return null;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<SignIn />} loader={mustNotBeLoggedIn} />
        <Route path="profile" element={<User />} loader={mustBeLoggedIn} />
        <Route path="*" element={<div>Error404</div>} />
      </Route>
    )
  );

  useEffect(() => {
    getProfileInfo().then((user) => {
      if (user) {
        dispatch(modifyName({ firstName: user.firstName, lastName: user.lastName }));
      }
    });
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
