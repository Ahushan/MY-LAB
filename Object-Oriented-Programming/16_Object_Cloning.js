const original = {
  name: "A",
  meta: { score: 10 },
  date: new Date(),
  fn: () => "hello"
};

// Shallow clone (top-level only)
const shallow = { ...original };
shallow.meta.score = 99;
console.log(original.meta.score); // 99 (mutated because meta is shared)

// Deep clone methods:

// 1) structuredClone (modern browsers / Node 17+)
let deepStructured;
try {
  deepStructured = structuredClone(original); // preserves nested objects and Dates
} catch (e) {
  deepStructured = null; // fallback if not available
}

// 2) JSON method (simple but lossy)
const deepJson = JSON.parse(JSON.stringify(original)); // functions and Dates lost/converted

// 3) simple recursive deep clone (handles objects/arrays/primitives, not functions/Maps/Sets)
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  if (obj instanceof Date) return new Date(obj.getTime());

  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

const deepCustom = deepClone(original);
deepCustom.meta.score = 5;
console.log(original.meta.score); // remains 99 or original value depending on earlier mutations

// outputs to show differences
console.log("original.fn:", typeof original.fn);         // function
console.log("deepJson.fn:", typeof deepJson.fn);         // undefined
console.log("deepCustom.meta.score:", deepCustom.meta.score); // 5
