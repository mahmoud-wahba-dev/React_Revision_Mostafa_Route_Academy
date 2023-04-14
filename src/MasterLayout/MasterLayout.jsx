import { Outlet } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

export default function MasterLayout() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}