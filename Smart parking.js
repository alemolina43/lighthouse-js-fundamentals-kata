const whereCanIPark = function (spots, vehicle) {
  let coordinates = [];
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (vehicle === "regular" && spots[i][j] === "R") {
        coordinates.push(j);
        coordinates.push(i);
        return coordinates;
      } else if (
        vehicle === "small" &&
        (spots[i][j] === "R" || spots[i][j] === "S")
      ) {
        coordinates.push(j);
        coordinates.push(i);
        return coordinates;
      } else if (
        vehicle === "motorcycle" &&
        (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M")
      ) {
        coordinates.push(j);
        coordinates.push(i);
        return coordinates;
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
