// Example 1: Manual cleanup method
class FileHandler {
  constructor(filename) {
    this.filename = filename;
    console.log(`${this.filename} opened`);
  }

  // Custom cleanup method (acts like a destructor)
  close() {
    console.log(`${this.filename} closed`);
  }
}

const file = new FileHandler("data.txt");
file.close(); // Manually calling cleanup

// Example 2: Using FinalizationRegistry (automatic cleanup)
const registry = new FinalizationRegistry((name) => {
  console.log(`${name} object cleaned up`);
});

class TempObject {
  constructor(name) {
    this.name = name;
    registry.register(this, name);
  }
}

let obj = new TempObject("Temporary");
obj = null; // When garbage collected, cleanup message will be logged (timing not guaranteed)
