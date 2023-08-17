import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, Maps, Sensors, Model } from "./routes/";
function App() {
  // Create a router
  const router = createBrowserRouter([
    // Define routes
    { path: "/", element: <Root /> },
    { path: "home", element: <Home /> },
    { path: "maps", element: <Maps /> },
    { path: "sensors", element: <Sensors /> },
    { path: "model", element: <Model /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
