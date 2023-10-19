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



The spread operator:

                The spread operator (...) is used to expand elements of an array or the properties of an object. 
                In the context of an array, it takes each item out of the array and spreads them out 
                into the surrounding context.

                example: 
                        const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
                        const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
                        const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

                        const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]

                        console.log(eventMenu)

                        ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip', 'Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry', 'Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

                        This would output the combined array, demonstrating how the spread operator
                        has been used to merge the three arrays into one.
                        
                Summary
                        The spread operator is a powerful feature in JavaScript, allowing for succinct
                        and expressive ways to work with arrays and objects. In the context of arrays,
                        as shown in the example, it can be used for purposes like concatenating multiple 
                        arrays or passing array elements as individual arguments to functions.



Short-circuiting with OR (||):

                const jobHunter = {
                    name: 'Tom Chant',
                    jobSearchArea: 'Europe',
                }

                const workLocation = jobHunter.jobSearchArea ? jobHunter.jobSearchArea : 'Worldwide'
                console.log(`${jobHunter.name}'s work location is ${workLocation}`)

                in this first iteration, we are using the ternary format, previously covered in this module, to check if jobHunter.jobSearchArea is truthy, if it's not,
                then we execute the second part and return the string 'Worldwide'.

                const workLocation = jobHunter.jobSearchArea || 'Worldwide'

                The same is being done in this second iteration, where we are using the logical operator OR, represented by ||.
                It evaluates the expression from left to right and returns the first truthy value it encounters, or the last value if none are truthy. 
                In your specific case, if jobHunter.jobSearchArea is truthy, it will be returned; otherwise, 'Worldwide' will be returned.



Short-circuiting with AND (&&):

                The && (AND) operator evaluates expressions from left to right. It will return the first falsy value it encounters. 
                If it doesn't find any falsy values, it will return the last value.

                example:
                        const user = {
                            userName: 'Tom',
                            // role: 'admin',
                        }

                        user.role === 'admin' && console.log('Dashboard Displayed')

                        The expression user.role === 'admin' evaluates to false since the role property is commented out and doesn't exist
                        in the user object. As the first part of the && expression is falsy, the second part (console.log('Dashboard Displayed'))
                        doesn't get executed at all, ensuring efficient short-circuiting behavior. In other words, if the first condition
                        in a sequence of && operations is false, the entire expression will immediately return false without evaluating
                        the subsequent conditions.

Constructors: 

            A constructor is a special type of method used in object-oriented programming for creating and initializing an object.
            It has the same name as the class it's in, and it doesn't have any return type. 
            In many programming languages, including JavaScript, constructors allow us to set up properties of an object
            and any other initial setup the object may need.

            In JavaScript, we usually use the new keyword followed by a function (which serves as the constructor) 
            to create an instance of an object.

            For example, Date in JavaScript is a built-in object that represents dates. new Date() is a constructor that 
            creates a new date object. By default, without any arguments, it will create a date object representing the current date and time.

            example:
                    const dateSnapshot = new Date();
                    console.log(`Copyright ${dateSnapshot.toString()}`);

                    -const dateSnapshot = new Date();

                    Here, new Date() is calling the Date constructor. It creates a new date object that represents the current date and time, 
                    and this object is assigned to the dateSnapshot constant.

                    -console.log(Copyright ${dateSnapshot.toString()});

                    This is a template literal. Inside the ${}, you're calling the toString() method on the dateSnapshot object.
                    dateSnapshot.toString() converts the date object into a human-readable string format 
                    (e.g., "Thu Oct 19 2023 10:20:45 GMT+0000 (Coordinated Universal Time)").
                    The console.log then outputs this string with the word "Copyright" in front.

                    To sum it up: Your code is creating a new date object that represents the current date and time. 
                    It then converts this date object into a string and prints it with the word "Copyright" in front.

            Error constructor:

            example:

                    function checkUsername(userName) {
                        if (userName) {
                            console.log(userName)
                        }
                        else {
                            console.log('I execute')
                            throw new Error('No username provided')
                            console.log('I do not execute')
                        }
                    }

                    checkUsername()

                    In this example, the function checkUsername is designed to check if a userName is provided. 
                    If a userName is present, it simply logs the username to the console. 
                    However, if no userName is provided (or if it's an empty string, null, undefined, or any other falsy value), 
                    the function logs 'I execute' and then throws a custom error with the help of the Error constructor. 
                    This custom error has the message 'No username provided'. The line of code after the throw statement 
                    (console.log('I do not execute');) will never be executed because the function's execution is halted once an error is thrown. 
                    The main purpose of using the Error constructor here is to create a meaningful error message, making debugging easier.



Objects to Constructor functions:

                Example:

                        // const gamer = {
                        //     name: 'Dave',
                        //     score: 0,
                        //     incrementScore: function(){
                        //         this.score++   
                        //     }
                        // }

                        This is a simple object literal that defines a gamer. 
                        However, it's commented out and hence doesn't participate in the execution of the code. 
                        This seems to be a reference or a simpler representation before moving on to a constructor function approach.

                        function Gamer(name){
                            this.name = name
                            this.score = 0
                            this.incrementScore = function(){
                                this.score++  
                            }
                        }

                        Here's what's happening:

                        function Gamer(name){...}: This is a constructor function named Gamer. 
                        When you want to create multiple objects with similar properties and methods, 
                        you use a constructor function. This is a pattern in JavaScript that allows for more organized and scalable code, 
                        especially before the ES6 class syntax.

                        this.name = name;: This sets the name property of the object being created to the value passed in as an argument.

                        this.score = 0;: This initializes a score property for the object being created and sets it to 0.

                        this.incrementScore = function(){...}: This adds a method named incrementScore to the object. 
                        This method, when called, will increase the score property by 1.

                        const dave = new Gamer('Dave')
                        const sarah = new Gamer('Sarah')
                        const kerry = new Gamer('Kerry')

                        These lines create three new gamer objects (dave, sarah, and kerry) using the Gamer constructor. 
                        The new keyword is used to instantiate a new object using a constructor.

                        dave.incrementScore()
                        sarah.incrementScore()
                        sarah.incrementScore()
                        kerry.incrementScore()
                        kerry.incrementScore()
                        kerry.incrementScore()

                        Here, the incrementScore method is called on each gamer object a certain number of times,
                        increasing their scores accordingly.

                        console.log(dave)
                        console.log(sarah)
                        console.log(kerry)

                        These lines output the final state of each gamer object to the console. 
                        You can see each gamer's name and their respective score.

                        To summarize:

                        The commented-out section provides a basic structure of a gamer using an object literal.
                        The Gamer function is a constructor that allows the creation of multiple gamer objects with similar properties and methods.
                        The created gamer objects have their scores incremented, and finally, their states are logged to the console.
