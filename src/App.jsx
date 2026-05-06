import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";;
import Watch from "./components/Watch";
import Content from "./components/Content";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Content/>,
      },
      { path: "/watch", element: <Watch /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
