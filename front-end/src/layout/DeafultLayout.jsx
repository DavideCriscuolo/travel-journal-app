import { Outlet } from "react-router";

import HeaderC from "../components/HeaderC";
import FooterC from "../components/FooterC";
import "./../css/DefaultLayout.css";
export default function DefaultLayout() {
  return (
    <>
      <HeaderC></HeaderC>
      <Outlet></Outlet>
      <FooterC></FooterC>
    </>
  );
}
