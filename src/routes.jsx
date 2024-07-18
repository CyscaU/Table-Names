import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import Contact from "./pages/contact";
import Student from "./pages/student";

export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>,
      },
    {
        path: "/student",
        element: <Student/>,
      },
    {
        path: "/contact",
        element: <Contact/>,
      },
])