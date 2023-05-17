import React from "react";
import { Main } from "./pages/main/Main";
import { router } from "./router";
import {RouterProvider} from "react-router-dom";
function App() {

  // const onClickHandler = () => {
  //   console.log("Hello World!");
  // };
  // const changeValue = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <div className="App">

<RouterProvider router={router} />
      
    </div>
  );
}

export default App;
