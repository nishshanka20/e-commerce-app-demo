import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import User from "../Pages/User/User";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <UserProtected />,
        children: [{ path: "user", element: <User /> }],
      },
    ],
  },
  { path: "login", element: <Login /> },
]);
const AppRouter = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainLayout />}>
    //       <Route index element={<Home />} />
    //       <Route element={<UserProtected />}>
    //         <Route path="user/" element={<User />} />
    //       </Route>
    //     </Route>
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
/* route there is a 'index' keyword. it means if go to / location what should show */
export default AppRouter;
