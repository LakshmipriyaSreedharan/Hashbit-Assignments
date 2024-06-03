 //1. Write code to display from 1 to 100 but just even numbers.
 for (let number = 1; number <= 100; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
 }
//2.Write a function to calculate which can add, subtract, multiply 
//and divide two numbers. Use switch inside function.

function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero';
            }
            break;
        default:
            return 'Error: Invalid operation';
    }
    return result;
}

/*3.You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person.
 You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.*/
function findTax(salary) {
    let tax;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = salary * 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            tax = 'Invalid salary input';
    }
    return tax;
}

//4.Write a function to perform this. You are given two numbers n1 and n2. 
//You need to find the sum of the products of their corresponding digits. 
//So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    let len1 = str1.length;
    let len2 = str2.length;
    let sum = 0;
    for (let i = 0; i < Math.max(len1, len2); i++) {
        let digit1 = len1 - 1 - i >= 0 ? parseInt(str1[len1 - 1 - i]) : 0;
        let digit2 = len2 - 1 - i >= 0 ? parseInt(str2[len2 - 1 - i]) : 0;
        sum += digit1 * digit2;
    }

    return sum;
}



