//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    //Your code goes here
        dog_names.forEach(dog_name => {
            if(dog_string.toLowerCase().includes(dog_name.toLowerCase())){
                console.log(`Matched ${dog_name}`);
            } else {
                console.log("No Match");
            }
        });
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))
//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
var arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    //code goes here
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}

console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// 2 code wars peoblem that are being solved in javascript

/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined. */

function countSheep(sheepArray) {
    return sheepArray.filter(Boolean).length;
}

/* 2nd code wars peoblem that are being solved in javascript */

/* We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples

"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */
function stringToNumber(str) {
    return Number(str);
}
