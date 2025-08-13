import { Outlet } from "react-router";

import HeaderC from "../components/HeaderC";
import "./../css/DefaultLayout.css";
export default function DefaultLayout() {
  return (
    <>
      <HeaderC></HeaderC>
      <Outlet></Outlet>
      <footer></footer>
    </>
  );
}
