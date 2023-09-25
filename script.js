const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
let div = document.querySelector(".services-best-offer-desc"),
  btn = document.querySelector(".services-best-offer-btn"),
  text = div.innerHTML,
  isTextChange = false;
if (screenWidth < 879 && text.length > 300) {
  div.innerHTML = text.substring(0, 780) + "...";
  isTextChange = true;
}
btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (isTextChange) {
    btn.innerHTML = "Скрыть";
    div.innerHTML = text;
    isTextChange = false;
  } else {
    btn.innerHTML = "Читать всё";
    div.innerHTML = text.substring(0, 780) + "...";
    isTextChange = true;
  }
  div.classList.toggle("active-mobile");
});
