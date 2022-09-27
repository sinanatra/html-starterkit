(() => {
  // src/js/_modules/website.js
  var Website = {
    signature: () => {
      console.log("Website coded by Giacomo Nanni");
      console.log("https://giacomonanni.info");
      console.log("hello@giacomonanni.info");
    }
  };
  var website_default = Website;

  // src/js/_modules/home.js
  var Home = {
    init: () => {
    }
  };
  var home_default = Home;

  // src/js/index.js
  window.addEventListener("load", function() {
    website_default.signature();
    home_default.init();
  });
})();
//# sourceMappingURL=main.js.map
