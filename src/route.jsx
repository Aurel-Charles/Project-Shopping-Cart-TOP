import App from "./App";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Rick from "./pages/rick";
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
        { path: "rick", element: <Rick /> },
        { path: "product/:id", element: <ProductPage /> }
      ]
    }];