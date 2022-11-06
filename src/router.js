import { createBrowserRouter } from "react-router-dom";
import ErrorScreen from "./components/errorScreen/errorScreen";
import HomeScreen from "./components/homeScreen/homeScreen";
import SplashScreen from "./components/splashScreen/splashScreen";

export function generateRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
      errorElement: <ErrorScreen />,
    },
    {
      path: "splash",
      element: <SplashScreen />,
    },
  ]);
  return router;
}
