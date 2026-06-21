import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomeLayout } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
