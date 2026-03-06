/* JavaScript does NOT support true compile-time method overloading.
You can *simulate* overloading by inspecting arguments, using default params, or different function names.
*/

class Printer {
  // single method handling different argument shapes
  print(...args) {
    if (args.length === 1 && typeof args[0] === "string") {
      // one string argument
      return `String: ${args[0]}`;
    } else if (args.length === 2 && typeof args[0] === "number" && typeof args[1] === "number") {
      // two number arguments
      return `Sum: ${args[0] + args[1]}`;
    } else {
      // fallback
      return `Args: ${args.join(", ")}`;
    }
  }
}

const p = new Printer();
console.log(p.print("hello"));     // String: hello
console.log(p.print(3, 4));        // Sum: 7
console.log(p.print("a", "b", 1)); // Args: a, b, 1
