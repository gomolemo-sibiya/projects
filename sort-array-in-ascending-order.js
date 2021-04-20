numbersArray = [24,8,23,32,5,62];

numbersArray.sort(evaluateElem())
function evaluateElem(a,b){
    return a - b;
}

//You can simplify it further: ->
numbersArray.sort((a,b) => a-b);

console.log(numbersArray);
