import App from "./App";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export const routes = [
    {
      path: "/",
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "Shop", element: <Shop /> },
        { path: "Cart", element: <Cart /> },
      ]
    }];