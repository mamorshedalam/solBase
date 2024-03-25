import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import ErrorPage from "../pages/errorPage";
import Home from "../pages/home";
import Utility from "../pages/utility";
import Nft from "../pages/nft";
import Hiring from "../pages/hiring";
import TradingPool from "../pages/tradingPool";
import SolBase from "../pages/solbase";
import TradingBot from "../pages/tradingBot";
import CopyTrading from "../pages/copyTrading";

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
               {
                    path: '/trading-pool',
                    element: <TradingPool />
               },
               {
                    path: '/solbase',
                    element: <SolBase />
               },
               {
                    path: '/trading-bot',
                    element: <TradingBot />
               },
               {
                    path: '/copy-trading',
                    element: <CopyTrading />
               },
          ]
     }
])

export default routes;