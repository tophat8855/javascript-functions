function maxOfTwo(firstNumber, secondNumber){
  if(firstNumber > secondNumber){
    return firstNumber;
  }
  else {
    return secondNumber;
  };
};

function maxOfThree(firstNumber, secondNumber, thirdNumber){
  if(firstNumber > secondNumber){
    if(firstNumber > thirdNumber){
      return firstNumber;
    }
    else {
      return thirdNumber;
    }
  }
  else if(secondNumber > thirdNumber){
    return secondNumber;
  }
  else if(thirdNumber > secondNumber){
    return thirdNumber;
  }
  else {
    return secondNumber;
  }
};
