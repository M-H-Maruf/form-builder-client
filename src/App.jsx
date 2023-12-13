import { Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-[1250px] h-full navbar mx-auto px-0 py-10">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
