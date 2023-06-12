// Writing test cases in react.
// Make your test case name descriptive.
import { render } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering Header Component", () => {
  // Load header
  // Don't load my full ap just render my app
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  //   Cannot read png extention
  console.log(header); //---->will give virtualDom object
  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});
