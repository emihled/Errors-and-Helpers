function validateInput(input, options = {}) {
  const {
    required = true,
    minLength = 0,
    maxLength = Infinity,
    pattern
  } = options;

  const value = input.trim();

  if (required && value === "") {
    return { valid: false, message: "Input is required." };
  }

  if (value.length < minLength) {
    return { valid: false, message: "Input must be at least ${minLength} characters."};
  }

  if (value.length > maxLength) {
    return { valid: false, message: "Input must be no more than ${maxLength} characters." };
  }

   if (pattern && !pattern.test(value)) {
    return { valid: false, message: "Input format is invalid." };
  }

  return { valid: true, message: "Input is valid." };
}


function demonstrateErrors() {
  try {
    console.log(undefinedVariable);

  } catch (error) {
    console.error("Caught a ReferenceError:", error.message);
  }

  try {
    const num = 42;
    num();
  } catch (error) {
    console.error("Caught a TypeError:", error.message);
  }

  try {
    eval("function () {}"); 
  } catch (error) {
    console.error("Caught a SyntaxError:", error.message);
  }

  try {
    const arr = new Array(-1);
  } catch (error) {
    console.error("Caught a RangeError:", error.message);
  }

}



const ArrayHelpers = {
  removeDuplicates(arr) {
    return [...new Set(arr)];
  },

  getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  },

  max(arr) {
    return Math.max(...arr);
  },

  min(arr) {
    return Math.min(...arr);
  },

  sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  },

  average(arr) {
    return this.sum(arr) / arr.length;
  },

  count(arr, value) {
    return arr.filter(item => item === value).length;
  }
};