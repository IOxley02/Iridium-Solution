import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
import BulkTodo1 from "./components/BulkTodo1";
import BulkTodo2 from "./components/BulkTodo2";

function App() {
  return (
    <Fragment>
      <div className="container">
        <div class= "search-bar">
          <InputTodo />
          <div class= "row">
            <div class="col">
              <BulkTodo1 />
            </div>
            <div class="col">
              <BulkTodo2 />
            </div>
          </div>
        </div>
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;