/////////////
//swap two variables
//this is the fifth programm on programmiz

/*
let swaper = function (first, two) {
  let c;
  c = first;
  first = two;
  two = c;

  console.log(first, two);
};
swaper(2, 8);
*/
//program number 6
//solve the quadratic equation
// const quadratic = function (a, b, c) {
//   let disc = b * b - 4 * a * c;
//   console.log(disc);
//   if (disc >= 0) {
//     console.log(
//       `first solution :${
//         (-b + Math.sqrt(disc)) / (2 * a)
//       } and the second solution :${(-b - Math.sqrt(disc)) / (2 * a)}`
//     );
//   } else {
//     console.log(
//       `first solution  is: ${-b} + ${Math.sqrt(Math.abs(disc))
//         .toFixed(2)
//         .toString()}i / ${
//         2 * a
//       }   and the second solution is ${-b} - ${Math.sqrt(Math.abs(disc))
//         .toFixed(2)
//         .toString()}i / ${2 * a} `
//     );
//   }
// };
// quadratic(1, 5, 6);
// quadratic(1, 1, 1);

//programm fully functional

//
//program no 11,to check even or odd number

/*
let evenOrodd = function (number) {
  if (number % 2 == 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
};

console.log(evenOrodd(10));
console.log(evenOrodd(1));
console.log(evenOrodd(0));
console.log(evenOrodd(15));
console.log(evenOrodd(23));

this function is fully functional

*/
//prgram no 11: check which number is largest among three
/*
const larGest = function (a, b, c) {
  if (a > b) {
    if (a > c) {
      console.log(`${a} is the largest among three`);
    } else {
      console.log(`${b} is the largest among three`);
    }
  } else {
    if (c) {
      console.log(`${b}is the largest among three`);
    }
    // } else {
    //   if (a < c) {
    //     console.log(`${b}is largest among three`);
    //   }
    // }
  }
};

console.log(larGest(4, 6, 8));
console.log(larGest(10, 7, 4));
console.log(larGest(10, 16, 4));

this programme is incomplete and non functional
*/
//program no 13 :program to check he number is prime

const primeChecker = function (number) {
  if (number === 1) {
    console.log("1 is neither prime no composite number");
  } else {
    let arr = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        arr.push(i);
      }
    }
    console.log(
      arr.length === 2 ? `${number} is prime` : `${number} is not prime`
    );
  }
};

primeChecker(18);
primeChecker(23);
primeChecker(71);
primeChecker(1);
