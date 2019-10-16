function mineColor(line, number) {
  var black = [
    "black",
    "white",
    "black",
    "white",
    "black",
    "white",
    "black",
    "white"
  ];

  var white = [
    "white",
    "black",
    "white",
    "black",
    "white",
    "black",
    "white",
    "black"
  ];

  var letters1 = ["a", "c", "e", "g"];
  var letters2 = ["b", "d", "f", "h"];

  var color = []

  letters1.forEach(let => {
    if (let === line) {
      color.push(black[number - 1]);
    }
  })

  letters2.forEach(let => {
    if (let === line) {
      color.push(white[number - 1]);
    }
  })

  return color[0]
}
