export function findRoots(polyInput) {
  // Use nerdamer to solve for roots directly
  let roots = nerdamer(`solve(${polyInput}, x)`).evaluate().text();

  // Remove the square brackets at the beginning and end of the string
  roots = roots.replace(/^\[|\]$/g, "");

  // Split and filter out imaginary roots
  return roots.split(",").filter((root) => !root.includes("i"));
}
