const xM = 'hello';  // xM is truthy
const m = 15;

const xm = xM || isX(m);

console.log(xm);  // Output: 'hello', because xM is truthy
