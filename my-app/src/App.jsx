import React from "react";
import { Main } from "./pages/main/Main";
function App() {

  const onClickHandler = () => {
    console.log("Hello World!");
  };
  const changeValue = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
