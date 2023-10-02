function sumOfOddNumbers(num) {
  let sum = 0;

  for (let i = 1; num > 0; i += 2) {
    console.log(i);
    sum += i;
    num--;
  }

  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);


