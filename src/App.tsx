import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/base/Layout";
import { Provider } from "react-redux";
import { store } from "./store/RTKQuery/store";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Login } from "./components/pages/login/Login";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { ConfigProvider } from "antd";
import HorseDetails from "./components/horseDetails/HorseDetails";
import { ToastContainer } from "react-toastify";
import { Home } from "./components/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/horses",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/horses/:id",
        element: (
          <PrivateRoute>
            <HorseDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <PrivateRoute>
          <NotFound />
        </PrivateRoute>
        ,
      },
    ],
  }
]);

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
