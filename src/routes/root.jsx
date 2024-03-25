import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import ErrorPage from "../pages/errorPage";
import Home from "../pages/home";
import Utility from "../pages/utility";
import Nft from "../pages/nft";

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
          ]
     }
])

export default routes;