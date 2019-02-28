let arrayOfNumbers = [2,7,11,15];
let targetNumber = 9;

function findIndexes(numbers, target){
  numbers.forEach((firstNumber, firstIndex) => {
    numbers.forEach((secondNumber, secondIndex) => {
      if(firstNumber !== secondNumber){
        return [firstIndex, secondIndex];
      }
    });
  });
}

console.log(findIndices(arrayOfNumbers, targetNumber));
