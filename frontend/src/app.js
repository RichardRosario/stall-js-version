import HomePage from "./pages/Homepage.js";
// define router function
const router = () => {
  const main = document.getElementById("main-container");
  main.innerHTML = HomePage.render();
};

window.addEventListener("load", router);
