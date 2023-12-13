import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Editor from "../components/editor/Editor";
import Form from './../components/form/Form';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
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
