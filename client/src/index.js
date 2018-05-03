import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "../src/Components/AppRouter";
import { BrowserRouter } from "react-router-dom";

// require("dotenv").config();
// const dotenv = require('dotenv')
// const result = dotenv.config()
 
// if (result.error) {
//   throw result.error
// }
 
// console.log(result.parsed)

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById("root")
);
