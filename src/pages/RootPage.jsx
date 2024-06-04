import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "../index.css"
import "../App.css"

const RootPage = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootPage;
