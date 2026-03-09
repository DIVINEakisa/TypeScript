// Update the function signature so that all tests pass
type Direction = "up" | "down" | "right" | "left";
function move(direction: Direction, distance: number) {
  console.log(`Moving from ${direction} with ${distance} distance`);
}

// TESTS

move("up", 10);
move("left", 5);

move("up-right", 10);

move("down-left", 20);

move("up", "20");
