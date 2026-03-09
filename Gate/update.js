function move(direction, distance) {
    console.log("Moving from ".concat(direction, " with ").concat(distance, " distance"));
}
// TESTS
move("up", 10);
move("left", 5);
move("up-right", 10);
move("down-left", 20);
move("up", "20");
