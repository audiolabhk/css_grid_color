function changeColor() {
  color = prompt("color?")
    .split(" ")
    .join("");

  $("body").css("background", color);
  $(".content").html("Color changed to " + color.toUpperCase());
}

function reset() {
  $("body").css("background", "white");
  $(".content").html("Reset Complete!");
}


