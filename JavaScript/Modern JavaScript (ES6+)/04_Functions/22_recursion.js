// RECURSION in JavaScript

// Basic recursion: factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial(5):", factorial(5));

// Advanced: Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(6):", fibonacci(6));

// Advanced: recursive directory traversal (simulation)
const fileSystem = {
  name: "root",
  files: ["file1.txt", "file2.txt"],
  folders: [
    { name: "sub1", files: ["file3.txt"], folders: [] },
    {
      name: "sub2",
      files: [],
      folders: [{ name: "deep", files: ["file4.txt"], folders: [] }],
    },
  ],
};

function listFiles(folder) {
  console.log("Folder:", folder.name);
  folder.files.forEach((f) => console.log("File:", f));
  folder.folders.forEach((sub) => listFiles(sub));
}

listFiles(fileSystem);
// This will print all files and folders in the simulated file system