import "../style.css";
import jquery from "jquery";

window.$ = window.jQuery = jquery;

import Website from "./_modules/website";
import Home from "./_modules/home";

$(function () {
  Website.signature();
  Home.init();
});
