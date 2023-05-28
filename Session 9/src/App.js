import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// Default IMPORT
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
// import { Instamart } from "./components/Instamart";

// Named IMPORT-->Not object Destructing
// import {Title} from "./components/Title";
// import * as XYZ from "./components/Title";

// const head = <h1>Hello World</h1>;

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// const newParadiseBakers = {
//   name: "New Paradise Bakers",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/473ad54c71b416ae36fd0f62a2519e51",
//   cusine: ["Bakery", "Deserts", "Snacks"],
//   rating: "4.6",
// };
// RestaurantList is JSON Data for displaying cards

// Props-Properties-Passing properties to functional component
// Body is Parent Component
// RestaurantCard is a child component

// Jsx -- one parent

const Instamart = lazy(() => {
  import("./components/Instamart");
});
const AppLayout = () => {
  return (
    <>
      <React.Fragment>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </React.Fragment>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Putting heading inside root//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
