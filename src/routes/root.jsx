import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import ErrorPage from "../pages/errorPage";
import Home from "../pages/home";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
               { index: true, element: <Home /> }
          ]
     }
])

export default routes;