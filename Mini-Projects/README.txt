the .map() method:

    In summary, map() is a powerful method that provides a concise way to process and transform all the elements of an array, returning a new array of transformed values.
    Use .map() method if you need to make use of the new array it returns.
    Use .foreach() if you don't need to create a new array.

the .join() method:

    Concatenates elements of array into a string
    You choose how elements are separated
    Returns the new string

the dangers of innetHTML:

    Using innerHTML on input fields can be exploited by Cross-Site Scripting (XSS) attacks, as it directly inserts the value of the input into the HTML without sanitizing it. 
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

the .reduce() method

Default parameters: If a function has two parameters for example, but you don't specify one of them when calling the function, you can set a default value to a parameter like so:

                    example: function testParameter(para1=0, para2=1) {

                    }
                    in this example the first parameter has the default value of 0, and the second one the value of 1. So if you can the function and don't pass any arguments, 
                    you get those default values instead.

                    