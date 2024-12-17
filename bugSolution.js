function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values by returning 0 or using a default value
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10

//Alternative solution using optional chaining and nullish coalescing
function foo2(a, b) {
  return (a ?? 0) + (b ?? 0);
}
console.log(foo2(null, 5)); // Output: 5
console.log(foo2(5, null)); // Output: 5
console.log(foo2(5, 5)); // Output: 10