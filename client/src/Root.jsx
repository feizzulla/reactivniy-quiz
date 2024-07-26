import { Outlet } from "react-router-dom";
import Header from "./widgets/Header/Header";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
