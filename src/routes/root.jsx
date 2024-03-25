import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import ErrorPage from "../pages/errorPage";
import Home from "../pages/home";
import Utility from "../pages/utility";
import Nft from "../pages/nft";
import Hiring from "../pages/hiring";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
               { index: true, element: <Home /> },
               {
                    path: '/utility',
                    element: <Utility />
               },
               {
                    path: '/nft',
                    element: <Nft />
               },
               {
                    path: '/hiring',
                    element: <Hiring />
               },
          ]
     }
])

export default routes;