import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import MVCPage from "../Pages/MVCPage";

type Props = {};

function MainRoute({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index path="Login" element={<LoginPage />} />
        <Route index path="MVC" element={<MVCPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default MainRoute;
