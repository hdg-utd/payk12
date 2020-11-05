/*
 * If you have Node JS installed, type 'node Payk12_test' to 
 * see live results of the test cases.
 * 
 * Please make sure you are in the same directory as the file.
 * 
*/

// First Question
// 121 = ((25 - 1) * 5 + 1)


// Second Question

const printFizzBuzz = input => {
    // Assuming input is a number
    if(input % 5 === 0 && input % 3 === 0)
        console.log('FizzBuzz')
    else if(input % 3 === 0)
        console.log('Fizz')
    else if(input % 5 === 0)
        console.log('Buzz')

    
}

/*
    * Test scenario 1 - input = 0, prints 'FizzBuzz'
    * Test scenario 2 - input = -5, prints 'Buzz'
*/

printFizzBuzz(0)
printFizzBuzz(-5)


// Third Question
const reverseString = input => {
    let inputArr = input.split('')
    for(let i = 0; i < inputArr.length / 2; i++) {
        console.log('Before swap step:')
        console.log(inputArr)
        const temp = inputArr[i]
        inputArr[i] = inputArr[inputArr.length - 1 - i]
        inputArr[inputArr.length - 1 - i] = temp
        console.log('After swap step')
        console.log(inputArr)
    }

    return inputArr.join('')
}

/*
    * Test scenario 1 - input = 'apple', returns 'ellpa'
    * Test scenario 2 - input = 'deed', returns 'deed' (Palindrome)
    * Test scenario 3 - input = '', returns ''
    * Test scenario 4 - input = '-23', returns '32=' (string not a number)
*/

console.log(reverseString('apple'))
console.log(reverseString('deed'))
console.log(reverseString(''))
console.log(reverseString('-23'))



// Fourth Question
/*
 * I would store such information in an environment configuration file.
 * It is very common for enterprise software to run in multiple environments
 * not limited to just dev, test and production. There could be environments for 
 * performance testing as well.
 * 
 * Storing properties like database connection strings, external API urls, timeout etc
 * in an environment file allows you to change their values based on the environment
 * you are in. For example if someone is consuming Payk12's API in their dev environment
 * the endpoint could be dev.api.payk12.com and if in prod prd.api.payk12.com . This is important
 * as the resources and configuration changes by the environment.
 * 
 * Also by storing a value like timeout
 * setting in an evnironment (config) file, you can update it's value without having to do the 
 * costly task of redeploying the entire project. Based on the time and number of developers involved, this
 * can save a company tens of thousands of dollars for simpler changes.
 *
 * Lastly hard coding such strings in project is an overall bad idea. If you are resuing the connection string somewhere
 * now you have to copy paste it a dozen places. Updating it and ensuring the integrity of the property will
 * be a nightmare and opens door for errors.
*/


// Fifth Question Part A - vanilla JS
document.getElementById("Country").setAttribute('value', 'USA')
document.getElementById("Country").setAttribute('style', 'background-color: blue') // The attricbute is the actual CSS

// Fifth Question Part B - jQuery
const parentCheck = $('input[name="parent"]').checked
/* No reason to check if the child box is already checked since that doesn't
 * affect the end outcome.
*/

/*
 * 
 * I had to update the html. The type has to be 'checkbox' for the input 
 * to behave like one.
 *  
    <div id="parent">
        <input type ="checkbox" name="parent" >
        <div id=”child”>
            <input type ="checkbox" name="child1">
            <input type ="checkbox" name="child2">
            <input type ="checkbox" name="child3">
        </div>
    <div>
 * 
*/

$('input[name="child1"]').checked = parentCheck
$('input[name="child2"]').checked = parentCheck
$('input[name="child3"]').checked = parentCheck


// Sixth Question - JQuery
/*
 * Great document on such attribute selectors - https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
 *
 * a) $('a[href^="http:"]')
 * 
 * b) $('a[href$=".pdf"]')
 * 
 * c) $('a[href*="css"]')
*/


// Seventh Question
/*
 * Use the following to center it horizontally
 * margin: 0 auto;
 * width: (some appropriate value);
 * 
 * The margin auto with automatically calculate equal margin on
 * left & right sides of the div to center it.
 * 
 * 
 * Vertical centering is lot more challenging. There are many ways to do it.
 * For this example lets assume that we know the height of the orange div as 100 px.
 * 
 * First we would need to give the parent div (blue div) poistion: relative.
 * We need a reference to center the orange div.
 * 
 * Then we will mark the orange div's position as position: absolute. Since it's an 
 * absolute element now, we will set it's top at 50%, height as 100 px (as we know)
 * and th margin-top as -50px.
 * 
 * The values mentioned here change with changes in the blue div, padding, margin etc.
 * Vertical centering has been one of the pet peeves of CSS and continues to be one
 * with no one-fit-all standard solution.
*/


// Eight Question Part A
SELECT SUM(OrderAmount), OrderDate
FROM Order
GROUP BY OrderDate;

// Eight Question Part B
SELECT SUM(OrderAmount), OrderDate 
FROM Order
GROUP BY OrderDate
HAVING SUM(OrderAmount) > 1000;