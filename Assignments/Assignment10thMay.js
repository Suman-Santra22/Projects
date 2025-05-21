// 1. Even or Odd Checker
let num1 = 41;
console.log("1. Even or Odd:")
if (num1 % 2 === 0) {
  console.log("%d is Even",num1)
} else {
  console.log("%d is Odd",num1)
}

// 2. Positive, Negative, or Zero
let num2 = -7;
console.log("\n2. Positive, Negative, or Zero:")
if (num2 > 0) {
  console.log('%d is Positive',num2)
} else if (num2 < 0) {
  console.log('%d is Negative',num2)
} else {
  console.log("Number is Zero")
}

// 3. Age-based Eligibility
let age = 20
console.log("\n3. Age-based Eligibility:")
if (age >= 18) {
  console.log('Age %d: Eligible to vote',age)
} else {
  console.log('Age %d: Not eligible to vote',age)
}

// 4. Number Range Validator
let num3 = 15
console.log("\n4. Number Range Validator:")
if (num3 >= 10 && num3 <= 20) {
  console.log('%d is In range',num3)
} else {
  console.log('%d is Out of range',num3)
}

// 5. Check Number Equality
let a = 8, b = 12
console.log("\n5. Check Number Equality:")
if (a === b) {
  console.log("Both numbers are equal")
} else if (a > b) {
  console.log('%d is greater than %d',a,b)
} else {
  console.log('%d is greater than %d',b,a)
}

// 6. Simple Grading System
let score = 78
console.log("\n6. Grading System:")
if (score >= 90) {
  console.log("Grade A")
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 7. Divisibility Checker (5 and 11)
let num4 = 55;
console.log("\n7. Divisibility Checker:");
if (num4 % 5 === 0 && num4 % 11 === 0) {
  console.log('%d is divisible by both 5 and 11',num4);
} else {
  console.log('%d is NOT divisible by both 5 and 11',num4);
}

// 8. Find the Largest of Three Numbers
let x = 45, y = 67, z = 23;
console.log("\n8. Largest of Three:");
let largest = x;
if (y > largest) largest = y;
if (z > largest) largest = z;
console.log('Largest among %d, %d, %d is %d',x,y,z,largest);

// 9. Leap Year Validator
let year = 2024;
console.log("\n9. Leap Year Check:");
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log('%d is a Leap Year',year);
} else {
  console.log('%d is NOT a Leap Year',year);
}

// 10. Vowel or Consonant
let char = 'E';
let lC = char.toLowerCase();
console.log("\n10. Vowel or Consonant:");
if ("aeiou".includes(lC)) {
  console.log('%s is a Vowel',char)
} else if (/[a-z]/i.test(char)) {
  console.log('%s is a Consonant',char)
} else {
  console.log('%s is not a valid alphabet character',char)
}
