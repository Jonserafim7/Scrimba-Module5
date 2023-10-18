the .map() method:

                The .map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
                In summary, map() is a powerful method that provides a concise way to process and transform all the elements of an array,
                returning a new array of transformed values.
                
                Use .map() method if you need to make use of the new array it returns.
                Use .foreach() if you don't need to create a new array.

                example:
                        const numbers = [1, 2, 3, 4, 5];
                        const squared = numbers.map(num => num * num);
                        console.log(squared);  // [1, 4, 9, 16, 25]




the .join() method:

                Concatenates elements of array into a string
                You choose how elements are separated
                Returns the new string




the dangers of innetHTML:

                Using innerHTML on input fields can be exploited by Cross-Site Scripting (XSS) attacks, 
                as it directly inserts the value of the input into the HTML without sanitizing it. 
                A malicious user could enter JavaScript code into the input, and it would be executed.




Beyond function declarations 1 - Function expressions:

                Hoisting: function declarations are moved to the top of their scope before code execution.
                Function expressions: 
                                    Are not hoisted;
                                    Are cleaner and easier to read (arguably)
                                    Are the chose style of some dev teams

                Hoisted function example:

                    function getSpendAlert(amount){
                        return `Warning! You just spent £${amount}!`
                    }

                Function expression example:

                const getSpendAlert = function(amount){
                    return `Warning! You just spent £${amount}!`
                }




Arrow Functions:
                1 parameter: brackets not needed
                0 or 2 or more parameters: brackets needed
                When to use {} + return: 
                                        return one line of code without curly braces or the return keyword.
                                        more complex logic requires the curly braces and return keyword.




the .reduce() method:

                The .reduce() method is a powerful array method in JavaScript that 
                allows you to "reduce" an array to a single value. Think of it like 
                a snowball rolling down a hill, gathering more snow (value) with every roll.

                Here's a simple breakdown:

                Purpose:
                You start with an array of values. You want to combine these values
                in some way to end up with a single result. This could be a sum, a product, 
                or any other kind of combination.

                How It Works:
                Accumulator: This is like the snowball. It's the current combined result as you 
                go through the array.
                Current Value: As you loop through the array, this represents the current item you're looking at.
                Initial Value: When you start rolling your snowball, how big is it? For .reduce(), 
                this is the starting value for the accumulator. If you don't provide one, 
                the first element of the array becomes the initial value.

                Example:
                Suppose you want to find the sum of all numbers in an array:

                const numbers = [1, 2, 3, 4, 5];

                const sum = numbers.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                }, 0);

                console.log(sum);  // Outputs: 15

                Step-by-Step Explanation:

                We provide an initial value of 0 for the accumulator.
                On the first loop:
                accumulator is 0 (our initial value)
                currentValue is 1 (the first item in the array)
                We add them together to get 1.
                On the second loop:
                accumulator is now 1
                currentValue is 2 (the second item in the array)
                We add them together to get 3.
                We continue this process for all items in the array.
                By the end, the accumulator holds the sum of all numbers, which is 15.

                In essence, .reduce() lets you loop through an array, and on each iteration,
                you transform an accumulating value based on the current item in the array. 
                The final accumulated value is your result.




Default parameters: 

                If a function has two parameters for example, but you don't specify one of them when calling the function, 
                you can set a default value to a parameter like so:

                example: function testParameter(para1=0, para2=1) {

                }
                in this example the first parameter has the default value of 0, and the second one the value of 1. 
                So if you can the function and don't pass any arguments, 
                you get those default values instead.




The ternary Operator: an alternative for if/else. 

                condition ? epression : expression

                so first you pass the condition, just like you would in an if statement, then you check if the
                first expression is truthy, if it is, it executes that expression, else, it goes to the second 
                expression and checks if it's falsy and executes that expression

                example:

                -traditional if/else solution:

                const exerciseTimeMins = 40

                let message = ''

                if (exerciseTimeMins < 30) {
                    message = 'You need to try harder!'
                }
                else {
                    message = 'Doing good!'
                }

                console.log(message)

                -Ternary operator solution:

                const exerciseTimeMins = 40

                const message = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good!'

                console.log(message)

                In this example the condition is this part "exerciseTimeMins < 30 ?", if it's truthy, then We
                run the first expression 'You need to try harder!', which is setting the value of our const
                to this string. If not, we run the second expression 'Doing good!' in case the value is falsy.



The rest parameter:

                The rest parameter in JavaScript allows you to represent an indefinite number of arguments as an array.

                example: 

                        function setPermissionLevel(permissionLevel, ...names) {
                            names.forEach((name)=> 
                                console.log(`${name} now has ${permissionLevel} level access.`))
                        }
                        setPermissionLevel('admin', 'Dave', 'Sally')

                        the console.log() output is:    Dave now has admin level access.
                                                        Sally now has admin level access.

                        if we console.log(names) inside the function, we would get an array with the rest of the
                        arguments, like so: ['Dave', 'Sally']. If we add more arguments when calling the function, 
                        they would also be added to that array.
                                            
                                                    