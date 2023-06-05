for (let row = 1; row <= 8; row++) {
  for (let column = 1; column <= 8; column++) {
    if ((row + column) % 2 === 0) {
      process.stdout.write(" ");
    } else {
      process.stdout.write("#");
    }
  }
  console.log();
}
