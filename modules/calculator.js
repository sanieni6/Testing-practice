class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new CustomError('Division by zero');
      }
      if(a === 0 && b === 0) {
        throw new Error('zero / zero is equal to infinite');
      }
      else{
        return a / b;
    }
  }
}

  module.exports = Calculator;