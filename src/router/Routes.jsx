import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Editor from "../components/editor/Editor";
import Form from './../components/form/Form';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/editor",
        element: <Editor></Editor>,
      },
      {
        path: "/form",
        element: <Form></Form>,
      },
    ],
  },
]);

export default routes;
