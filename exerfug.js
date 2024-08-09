// Define param function
function param(value) {
  // Just returning the value as a string for demonstration
  return String(value);
}

// Sample clip object
let clip = {
  path: 'M10 10 H 90 V 90 H 10 Z' // Example SVG path data
};

// Construct the expression
let expr = 'pathShape(' + param(clip.path) + ')';

console.log(expr); 
// Output: "pathShape(M10 10 H 90 V 90 H 10 Z)"
