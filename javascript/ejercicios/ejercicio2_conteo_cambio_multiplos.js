let texto = "";

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    texto += "Fizz Buzz\n";
  } else if (i % 3 === 0) {
    texto += "Fizz\n";
  } else if (i % 5 === 0) {
    texto += "Buzz\n";
  } else {
    texto += i + "\n";
  }
}
console.log(texto);
