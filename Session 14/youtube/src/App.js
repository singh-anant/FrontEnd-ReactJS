import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "../src/components/MainContainer";
import WatchPage from "../src/components/WatchPage";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};
/*
 *Head
 *Body
 *SideBar
 *MenuItems
 *MainContainer
 *ButtonList
 *VideoContainer
 *VideoContainer
 */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default App;
