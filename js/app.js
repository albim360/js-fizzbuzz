for (let i = 0; i < 100; i++) {
    let number = i + 1;
  
    if ((number % 3 === 0) && (number % 5 === 0)) {
      number = "FizzBuzz";
    } else if (number % 3 === 0) {
      number = "Fizz";
    } else if (number % 5 === 0) {
      number = "Buzz";
    }
  
    console.log(i + 1, number);
  }
  