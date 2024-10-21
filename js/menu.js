const burger = document.getElementById("burger");
const menuPanel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("btnClose");

burger.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});
