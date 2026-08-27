import App from "./App";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ]
    }];