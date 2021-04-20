// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

//onst reverseVal = (term) => term = term + "".split("").reverse().join(""); 

console.log("-------------- Reverse The term-----------------------");
function reverseVal(term){
    term = term + "";
    return term.split("").reverse().join("")
}
console.log(reverseVal(12345));

console.log("-------------- Palindrome-----------------------");

function palindromeChecker(palin) {

    var palinWord = palin.split("");
    var reverseWord = palinWord.reverse().join("");

    if(palin == reverseWord)
        return reverseWord;
    else 
        return "Not a palindrome";
    
}
console.log(palindromeChecker("DaD"));

console.log("-------------- Generate comnbination of string-----------------------");

//Not My Orignal Work:
function substrings(str1)
{
var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++) 
    {
        array1[x]=str1.substring(x, y);
    }
    
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){ 
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("i");

console.log("-------------- Reverse the word -----------------------");

const reverseWord = (str) => term = str.split("").reverse().join("");
console.log(reverseWord("Hi"));

console.log("-------------- Capitalize each letter -----------------------");

function capTerm(str){
    var sentence;
    sentence = str;
    var sin = sentence.split(" ");

    for(var i = 0; i < sin.length; i++){
        sin[i] = sin[i][0].toUpperCase() + sin[i].substr(1);
    }
    return sin.join(" ");
}
console.log(capTerm("the sentence."));

console.log("-------------- Count longest word -----------------------");
function longestWord(str) {
    var sentence;
    sentence = str;
    var splitSence = sentence.split(" ");
    var longestWordLength = 0;
    var newLongest = 0;
    var longestWord = '';

    for(var i = 0; i < splitSence.length; i++){
        longestWordLength = splitSence[i].length;

        if(longestWordLength > newLongest){
            newLongest = splitSence[i].length
            longestWord = splitSence[i];
        }
    }
    return longestWord;
}
console.log(longestWord("The Web Development Program"));

console.log("-------------- array destructiring -----------------------");
let x= 3, y = 4;
[x,y] = [y, x];

console.log(x); 
console.log(y);

console.log("-------------- Double asterisk -----------------------");
const answer = (a,b) => a**b;
console.log(answer(2,3));

console.log("-------------- If statement -----------------------");
function foo(n) {
    if (n < 0) {
        n = Math.abs(n); 
    }
    if(n===0){
        return true;
    }
    if (n===1){
        return false;
    } 
    else {
        n = n - 2; 
        return foo(n);
    }
}
console.log(foo(-12));

console.log("-------------- product of array -----------------------");

var product = 1;
[2,3,5].forEach(elem => (product *= elem));
console.log(product);

console.log("-------------- regex -----------------------");
function bar(s) {
    regexp = /^[A-Z]/;

    if(regexp.test(s)){
        return true;
    }else {
        return false; 
    }
}
console.log(bar("Aphiwe"));

console.log("-------------- sort array -----------------------");

numbersArray = [24,8,23,32,5,62];
numbersArray.sort((a,b) => a-b);

console.log(numbersArray);
