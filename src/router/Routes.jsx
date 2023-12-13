import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Editor from "../components/editor/Editor";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },{
        path: "/editor",
        element: <Editor></Editor>,
      },
      
    ],
  },
]);

export default routes;
