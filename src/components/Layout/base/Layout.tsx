import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/header/Footer";

const Layout: FC = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
