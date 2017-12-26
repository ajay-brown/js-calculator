/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function () {
    let memory = 0;
    let total = 0;
    
    
  /**
   * Validation
   */
    let validation = function(x) {
        if (isNaN(x) === true) {
            console.log("Error" + x + " is not a number!");
        } 
    }
      /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

let load = function(x) {
  
    validation(x);
        total = x;
        return total;
        };

  /**
   * Return the value of `total`
   * @return { Number }
   */
let getTotal = function(){
    return total;

}

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   let add = function(x) {
       validation(x);
       return total += x
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  let subtract = function(x) {
      validation(x);
      return total -= x
  }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   let multiply = function(x) {
       validation(x);
       return total *= x
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
let divide = function(x) {
    validation(x);
    return x /= total

}

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
let recallMemory = function() {
    return memory;
}

  /**
   * Stores the value of `total` to `memory`
   */
let saveMemory = function () {
    total = memory;
    
}

  /**
   * Clear the value stored at `memory`
   */

   let clearMemory = function(){
       memory = 0;
   }

  return calculator = { //modules go here
    load: load,
    getTotal: getTotal,
    add: add, 
    subract: subract,
    multiply: multiply,
    divide: divide
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory;
    };

});


