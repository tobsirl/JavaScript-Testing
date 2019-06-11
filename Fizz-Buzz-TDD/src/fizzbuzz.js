// * basic version
// function FizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// * using output
// function FizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     let output = '';

//     if (i % 3 === 0 && i % 5 === 0) {
//       output += 'FizzBuzz';
//     } else if (i % 3 === 0) {
//       output += 'Fizz';
//     } else if (i % 5 === 0) {
//       output += 'Buzz';
//     } else {
//       output = i;
//     }
//     console.log(output);
//   }
// }

// * using switch
// function FizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     let output = '';

//     switch (true) {
//       case i % 3 === 0 && i % 5 === 0:
//         output += 'FizzBuzz';
//         break;
//       case i % 3 === 0:
//         output += 'Fizz';
//         break;
//       case i % 5 === 0:
//         output += 'Buzz';
//         break;
//       default:
//         output = i;
//         break;
//     }
//     console.log(i, output);
//   }
// }
