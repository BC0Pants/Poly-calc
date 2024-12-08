export function findRoots(polyInput) {
  // Use nerdamer to solve for roots directly
  let roots = nerdamer(`solve(${polyInput}, x)`).evaluate().text();

  // Remove the square brackets at the beginning and end of the string
  roots = roots.replace(/^\[|\]$/g, "");

  // Split and process each root
  let rootArray = roots.split(",").map((root) => {
    root = root.trim();

    // If the root is a decimal (irrational), format it as √<number>
    if (!root.includes("i") && !root.includes("sqrt")) {
      const rootValue = parseFloat(root);

      // Find if the root is negative
      const isNegative = rootValue < 0;

      // Take the absolute value of the root and square it to find the number inside the square root
      const roundedValue = Math.round(
        Math.abs(rootValue) * Math.abs(rootValue)
      ); // square and round
      return isNegative ? `-√${roundedValue}` : `√${roundedValue}`;
    }

    return root;
  });

  // Filter out imaginary roots and return the result
  return rootArray.filter((root) => !root.includes("i"));
}
