// Question 1:
    // var num = prompt("Enter a number")
    // alert(num);

//Question 2:
    // var number = prompt("Enter a number")
    // if(number %3 == 0 && number %4 ==0){
    //     alert("Yes")

    // }
    // else{
    //     alert("No")
    // }

//Question 3:
    //     var number1 = Number(prompt("Enter a number"))
    //     var number2 = Number(prompt("Enter another number"))
    //     if (number1 > number2)
    //         alert("The max number is: "+ number1)
    //     else{
    //         alert("The max number is: "+ number2)
    //     }

//Question 4:
    // var number = Number(prompt ("Enter a number"))
    // if (number > 0){
    //     alert("It's a positive number")
    // }
    // else if(number<0){
    //     alert("It's a negative number")
    // }
    // else {
    //     alert("number is zero")
    // }

//Question 5:
    // var num1 = Number(prompt ("Enter a number"))
    // var num2 = Number(prompt ("Enter a number"))
    // var num3 = Number(prompt ("Enter a number"))
    // var max = -999999
    // var min = 999999

    // if (num1<min){
    //     min = num1
    // }
    // if (num1 > max){
    //     max = num1
    // }
    // if(num2<min){
    //     min = num2
    // }
    // if(num2>max){
    //     max = num2
    // }
    // if (num3 <min){
    //     min = num3
    // }    
    // if(num3 >max){
    //     max=num3
    // }
    //alert("Maximum number is: "+ max)
    //alert("Minimum number is: "+min)

//Question 6:
    // var num = Number(prompt ("Enter a number"))
    // if (num % 2 ==0){
    //     alert("Number is even")
    // }
    // else{
    //     alert("Number is odd")
    // }

//Question 7:
    // var char = prompt ("Enter a character")
    // if (char == 'a' || char == 'e'|| char== 'i'|| char =='o'||char == 'u'){
    //     alert("It's a vowel")
    // }
    // else{
    //     alert("it's a consonant")
    // }

//Question 8:
    // var num = Number(prompt ("Enter a number"))
    // for ( var i =1 ; i<num+1;i++){
    //     alert("numbers is: "+i)
    // }

//Question 9:
    // var number = Number(prompt("Enter an integer"));

    // var multiplicationTable = "Multiplication table for " + number + ":\n";

    // for (var i = 1; i <= 12; i++) {
    //     multiplicationTable += number + " x " + i + " = " + (number * i) + "\n";
    // }

    // alert(multiplicationTable);

//Question 10:
    // var num = Number(prompt ("Enter a number"))
    // for (var i =1 ;i<num;i++){
    //     if(i % 2 ==0)
    //         alert("numbers are: "+ i)
    // }

//Question 11:
    // var num1 = Number(prompt ("Enter a number"))
    // var num2 = Number(prompt ("Enter a number"))
    // var result = Math.pow(num1,num2)
    // alert("The result is: "+ result)

//Question 12
    // var num1 = Number(prompt ("Enter a number"))
    // var num2 = Number(prompt ("Enter a number"))
    // var num3 = Number(prompt ("Enter a number"))
    // var num4 = Number(prompt ("Enter a number"))
    // var num5 = Number(prompt ("Enter a number"))
    // var total = num1 + num2+num3+num4+num5
    // var avg = total/5
    // var percentage = (total / 500) * 100
    // alert("the total: " + total)
    // alert("the average is: "+ avg)
    // alert("the percentage is: "+ percentage)

//Question 13
    // var num = Number(prompt ("Enter a number"))
    // if(num >=1 && num <=12){
    //     if(num == 1 || num ==3||num==5||num==7||num==8||num==10||num==12)
    //         alert("This month has 31 days")
    //     else if(num == 2){
    //         alert("This month has 29 days")
    //     }
    //     else{
    //         alert("This month has 30 days")
    //     }

    // }
    // else{
    //     alert("That's not a valid month")
    // }

//Question 14:
    // var num1 = Number(prompt ("Enter a number"))
    // var num2 = Number(prompt ("Enter a number"))
    // var num3 = Number(prompt ("Enter a number"))
    // var num4 = Number(prompt ("Enter a number"))
    // var num5 = Number(prompt ("Enter a number"))
    // var total = num1 + num2+num3+num4+num5
    // var percentage = (total / 500) * 100
    // if(percentage>85){
    //     alert("the percentage is: "+ percentage)
    //     alert("Your grade is A")
    // }
    // else if (percentage> 70){
    //     alert("the percentage is: "+ percentage)
    //     alert("Your grade is B")
    // }
    // else if(percentage > 60){
    //     alert("the percentage is: "+ percentage)
    //     alert("Your grade is C")
    // }
    // else if(percentage> 50){
    //     alert("the percentage is: "+ percentage)
    //     alert("Your grade is D")
    // }
    // else {
    //     alert("the percentage is: "+ percentage)
    //     alert("You grade is F")
    // }
    
//Question 15:
    // var month = Number(prompt("Enter the month number (1-12):"));

    // var days;
    // switch(month) {
    //     case 1: 
    //     case 3: 
    //     case 5: 
    //     case 7: 
    //     case 8: 
    //     case 10:
    //     case 12:
    //         days = 31;
    //         break;
    //     case 4: 
    //     case 6: 
    //     case 9: 
    //     case 11:
    //         days = 30;
    //         break;
    //     case 2: 
    //         days = 28;
    //         break;
    //     default:
    //         days = "Invalid month number";
    // }

    // alert("Total number of days: " + days);

//Question 16:
    // var alphabet = prompt("Enter an alphabet:");

    // var result;
    // switch(alphabet) {
    //     case 'a':
    //     case 'e':
    //     case 'i':
    //     case 'o':
    //     case 'u':
    //         result = "Vowel";
    //         break;
    //     default:
    //         result = "Consonant";
    // }

    // alert("The alphabet is: " + result);

//Question 17:
    // var number1 = Number(prompt("Enter the first number:"));
    // var number2 = Number(prompt("Enter the second number:"));

    // var max;
    // switch(true) {
    //     case (number1 > number2):
    //         max = number1;
    //         break;
    //     case (number2 > number1):
    //         max = number2;
    //         break;
    //     default:
    //         max = "Both numbers are equal";
    // }

    // alert("The maximum number is: " + max);

//Question 18:
    // var number = Number(prompt("Enter a number:"));

    // var result;
    // switch(number % 2) {
    //     case 0:
    //         result = "Even";
    //         break;
    //     case 1:
    //         result = "Odd";
    //         break;
    // }

    // alert("The number is: " + result);

//Question 19:
    // var number = Number(prompt("Enter a number:"));

    // var result;
    // switch(true) {
    // case (number > 0):
    //     result = "Positive";
    //     break;
    // case (number < 0):
    //     result = "Negative";
    //     break;
    // case (number === 0):
    //     result = "Zero";
    //     break;
    // }

    // alert("The number is: " + result);

//Question 20:
    // var number1 = Number(prompt("Enter the first number:"));
    // var number2 = Number(prompt("Enter the second number:"));
    // var operator = prompt("Enter the operator (+, -, *, /):");

    // var result;
    // switch(operator) {
    //     case '+':
    //         result = number1 + number2;
    //         break;
    //     case '-':
    //         result = number1 - number2;
    //         break;
    //     case '*':
    //         result = number1 * number2;
    //         break;
    //     case '/':
    //         result = number1 / number2;
    //         break;
    //     default:
    //         result = "Invalid operator";
    // }

    // alert("The result is: " + result);

//Question 21
    // for (var i = 1; i <= 10; i++) {
    //     console.log(i);
    // }

//Question 22:
    // var sum = 0;
    // for (var i = 1; i <= 10; i++) {
    //     sum += i;
    // }
    // console.log("Sum of first 10 natural numbers:", sum);


//Question 23:
    // for (var i = 2; i <= 20; i += 2) {
    //     console.log(i);
    // }

//Question 24:
    // var number = Number(prompt("Enter a number:"));
    // var factorial = 1;
    // for (var i = 1; i <= number; i++) {
    //     factorial *= i;
    // }
    // console.log("Factorial of " + number + " is " + factorial);

//Question 25:
    // var str = prompt("Enter a string:");
    // var reversedStr = "";
    // for (var i = str.length - 1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }
    // console.log("Reversed string:", reversedStr);

//Question 26:
    // var array = [1, 2, 3, 4, 5];
    // for (var i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }

//Question 27:
    // var array = [3, 5, 7, 2, 8];
    // var max = array[0];
    // for (var i = 1; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i];
    //     }
    // }
    // console.log("Maximum number in the array is:", max);

//Question 28:
    // var number = Number(prompt("Enter a number:"));
    // for (var i = 1; i <= 10; i++) {
    //     console.log(number + " x " + i + " = " + (number * i));
    // }

//Question 29:
    // var str = prompt("Enter a string:");
    // var count = 0;
    // for (var i = 0; i < str.length; i++) {
    //     if ("aeiouAEIOU".indexOf(str[i]) !== -1) {
    //         count++;
    //     }
    // }
    // console.log("Number of vowels in the string:", count);

//Question 30:
    // var number = Number(prompt("Enter a number:"));
    // var isPrime = true;

    // if (number <= 1) {
    //     isPrime = false;
    // } else {
    //     for (var i = 2; i <= Math.sqrt(number); i++) {
    //         if (number % i === 0) {
    //             isPrime = false;
    //             break;
    //         }
    //     }
    // }

    // if (isPrime) {
    //     console.log(number + " is a prime number.");
    // } else {
    //     console.log(number + " is not a prime number.");
    // }

