import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/";
function App() {
  // Create a router
  const router = createBrowserRouter([
    // Define routes
    { path: "/", element: <Root /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
