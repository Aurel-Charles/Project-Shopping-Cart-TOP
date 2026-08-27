import App from "./App";
import Home from "./pages/Home";

export const routes = [
    {
      path: "/",
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        // { path: "Shop", element: <Shop /> },
        // { path: "Cart", element: <Cart /> },
      ]
    }];