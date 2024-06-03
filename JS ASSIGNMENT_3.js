/*Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.*/
// Array of states in India
let states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal"
];
function startsWithVowel(state) {
    return /^[AEIOUaeiou]/.test(state);
}
let filteredStates = states.filter(state => !startsWithVowel(state));

console.log(filteredStates);

/*Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.*/
let str = 'I love my India';
let words = str.split(' ');
let reversedWords = words.reverse();
let reversedStr = reversedWords.join(' ');

console.log(reversedStr); 

/*Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/
let string = 'INDIA';
let charArray = string.split('');
charArray.splice(4, 1, 'O', 'N', 'E', 'S', 'I', 'A');
let newString = charArray.join('');

console.log(newString);

//Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let string = 'This is an example string with more than twenty characters.';

// Function to count vowels and consonants
function countVowelsAndConsonants(str) {
    // Define vowels
    const vowels = 'AEIOUaeiou';
    // Initialize counters
    let vowelCount = 0;
    let consonantCount = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a letter
        if (char.match(/[a-zA-Z]/)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowelCount, consonantCount };
}

// Get the counts
let counts = countVowelsAndConsonants(string);

console.log(`Number of vowels: ${counts.vowelCount}`);  
console.log(`Number of consonants: ${counts.consonantCount}`); 

/*Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/
function correctWord(sentence, wrong, correct) {
    // Create a regular expression to match the wrong word with global and case-insensitive flags
    let regex = new RegExp('\\b' + wrong + '\\b', 'gi');
  // Replace all occurrences of the wrong word with the correct word
    let correctedSentence = sentence.replace(regex, correct);

    return correctedSentence;
}

/*Q6) inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5.*/
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let answer = inputArr.filter(number => number > 5);

console.log(answer); 

/*Q7)
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce.*/
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    const totalScore = student.scores.reduce((acc, curr) => acc + curr, 0);
    const averageScore = totalScore / student.scores.length;
    return { name: student.name, average: averageScore };
});

console.log(output);

//Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
//Example - 456 - 4+5+6 = 15 - 1+5 = 6.
function repeatedSumOfDigits(number) {
    while (number >= 10) {
        let sum = 0;
        // Convert the number to a string to iterate over its digits
        let digits = number.toString();
        // Calculate the sum of digits
        for (let digit of digits) {
            sum += parseInt(digit);
        }
        // Update the number with the sum
        number = sum;
    }
    // Return the final single-digit number
    return number;
}

console.log(repeatedSumOfDigits(456)); 

//Q9) Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
    // Remove leading and trailing whitespaces
    paragraph = paragraph.trim();
    // Split the paragraph into words based on whitespaces
    let words = paragraph.split(/\s+/);
    return words.length;
}

let paragraph = "This is a sample paragraph.";
console.log(countWords(paragraph));

//Q10) Write a function to reverse a string.
//Input - Hello
//Outpur - olleH
function reverseString(input) {
    return input.split('').reverse().join('');
}
let input = "Hello";
let output = reverseString(input);
console.log(output); 

/*Q11)
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.*/
let students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

let output = students.map(student => {
    let marks = Object.values(student)[0];
    let sum = Object.values(marks).reduce((acc, curr) => acc + curr, 0);
    let average = sum / Object.keys(marks).length;
    return { average };
});

console.log(output);
