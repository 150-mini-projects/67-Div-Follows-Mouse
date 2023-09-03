let divxy = document.getElementById("divxy");

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  divxy.style.left = x - 35 + "px";
  divxy.style.top = y - 35 + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

document.addEventListener("touchmove", (e) => {
  move(e);
});