// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

console.log('\n')

// 2. all even numbers from 1 to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i)
}

console.log('\n')

// 3. square of numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log('Square of %d is %d',i,i*i)
}

console.log('\n')

// 4. sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log('Sum from 1 to 100 is %d',sum)

console.log('\n')

// 5. Table of 7
for (let i = 1; i <= 10; i++) {
  console.log('7 x %d = %d',i,7*i)
}

console.log('\n')

// 6 number from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i)
}

// 7 odd number btw 15 to 30
for (let i = 15; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

console.log('\n')

// 8 factorial of a number 
let num = 5;
let facto = 1;
for (let i = 1; i <= num; i++) {
  facto *= i
}
console.log('Factorial of %d is %d',num,facto);

console.log('\n')

// 9 all numbers between 1 and 50 that are divisible by both 3 and 5
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

console.log('\n')

// 10. Count how many numbers between 1 and 100 are divisible by 9
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 9 === 0) {
    count++
  }
}
console.log('Count of numbers divisible by 9 between 1 and 100 is %d',count);
