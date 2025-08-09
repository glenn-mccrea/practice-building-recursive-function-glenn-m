/* Tasks
1. Write a function named reverseString that takes a string as input.

2. The function should:
    ○ Return the string itself if it contains only one character (base case).
    ○ Use recursion to reverse the string by concatenating the last character
        of the string with the result of the recursive call on the remaining part
        of the string (recursive case).
3. Test the function with various string inputs to verify its correctness.

Example Inputs and Outputs:
reverseString("hello"); // Outputs: "olleh"
reverseString("recursion"); // Outputs: "noisrucer"
reverseString("a"); // Outputs: "a"
reverseString(""); // Outputs: ""
 */


function reverseString(string) {
    if
        //base case to stop
        (string.length <= 1) {
        return string;
    }
    else {
        //return console.log(`"${string.split("").reverse().join("")}"`); -- does it non recursicvely... linear i guess?
        
        //recursing...
        // first we return the character at the end of the string. the number is "-1" because the length and the index difference.
        return (string.charAt(string.length - 1) // results in "o" (last letter in 'hello')
            //then we call the functiion again but this time with the "o" missing
            + reverseString(string.slice(0, -1))); // results with 'hell' on this first recursion. then each time we take off a letter and put it "into" the function.
        
        //LEARNING NOTE/ reminder: -- the "-1" in .slice tells it to go to the end but to not include the last index.
     }
}
console.log(reverseString("hello"));
console.log(reverseString("recursion"));
console.log(reverseString("a"));
console.log(reverseString("")); 

 

