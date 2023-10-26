// Function to find factors of a number
function findFactors(number) {
    const factors = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }
  
  // Input number
  const number = 12;
  
  // Call the function to find factors
  const result = findFactors(number);
  
  // Display the factors
  console.log(`Factors of ${number} are: ${result.join(', ')}`);
  