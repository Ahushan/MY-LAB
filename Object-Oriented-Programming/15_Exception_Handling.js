class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (typeof age !== "number") {
    throw new ValidationError("Age must be a number");
  }
  if (age < 0 || age > 150) {
    throw new ValidationError("Age out of range");
  }
  return true;
}

// Usage
try {
  validateAge("twenty");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation failed:", err.message);
  } else {
    console.log("Other error:", err.message);
  }
} finally {
  console.log("Validation attempt finished");
}
