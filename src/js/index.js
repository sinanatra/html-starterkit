import "../style.css";

import Website from "./_modules/website";
import Home from "./_modules/home";

window.addEventListener('load', function () {
  Website.signature();
  Home.init();
});
