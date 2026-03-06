# Object-Oriented Programming (OOP) Concepts in JavaScript

## Table of Contents
1. Class and Object  
2. Encapsulation  
3. Inheritance  
4. Polymorphism  
5. Abstraction  
6. Interfaces  
7. Constructor  
8. Destructor  
9. Static Members  
10. Friend Functions  
11. Overloading  
12. Overriding  
13. this Keyword  
14. Upcasting and Downcasting  
15. Exception Handling  
16. Object Cloning  


1. CLASS AND OBJECT
Definition:
A Class is a blueprint or template used to create objects.
An Object is an instance of a class containing actual data.

Syntax:
class ClassName {
    constructor(parameters) {
        // initialization
    }
    methodName() {
        // method body
    }
}
const obj = new ClassName(arguments);


2. ENCAPSULATION
Definition:
Encapsulation means binding data (properties) and methods into a single unit
and restricting access to internal data from outside code.

Types:
- Public: Accessible everywhere (default in JavaScript)
- Private: Accessible only within class (denoted using #)
- Protected: Simulated using naming conventions or closures

Purpose:
Improves data security, integrity, and control over class internals.

Syntax:
class Example {
    #privateProperty;
    constructor(value) {
        this.#privateProperty = value;
    }
    getProperty() {
        return this.#privateProperty;
    }
}


3. INHERITANCE
Definition:
Inheritance allows one class to acquire properties and methods of another class.

Types:
- Single Inheritance: Child inherits from one parent.
- Multilevel Inheritance: Chain of inheritance.
- Multiple Inheritance: Not directly supported; can be simulated using mixins.
- Hierarchical Inheritance: Multiple child classes inherit from one parent.

Syntax:
class Parent {
    constructor() {}
}
class Child extends Parent {
    constructor() {
        super();
    }
}


4. POLYMORPHISM
Definition:
Polymorphism allows the same function or method to behave differently
based on the context (form of object or arguments).

Types:
- Compile-time (Method Overloading): Simulated via parameter checks.
- Runtime (Method Overriding): Subclass redefines a parent class method.

Syntax:
class ParentPoly {
    method() {}
}
class ChildPoly extends ParentPoly {
    method() {} // overrides parent
}


5. ABSTRACTION
Definition:
Abstraction hides internal implementation details and exposes only necessary
functionality to the user.

Types:
- Abstract Classes: Base classes not meant for direct instantiation.
- Interfaces: Contracts requiring methods to be implemented.

Syntax:
class AbstractClass {
    method() {
        throw new Error("Must be implemented by subclass");
    }
}


6. INTERFACES
Definition:
Interfaces define a contract that classes must follow.
JavaScript doesn't support interfaces natively, but they can be simulated
through abstract classes or enforced in TypeScript.

Syntax:
class Interface {
    method() {
        throw new Error("Implement this method");
    }
}
class Implementation extends Interface {
    method() {
        // implemented
    }
}


7. CONSTRUCTOR
Definition:
A constructor is a special method automatically called when an object is created.
It initializes object properties.

Types:
- Default constructor
- Parameterized constructor
- Overloaded constructor (simulated)

Syntax:
class ExampleConstructor {
    constructor(param) {
        this.property = param;
    }
}


8. DESTRUCTOR
Definition:
A destructor cleans up resources or performs teardown logic when an object
is no longer needed.
JavaScript doesn't have destructors; cleanup is handled by garbage collection.

Syntax:
class ExampleDestructor {
    destroy() {
        // custom cleanup
    }
}


9. STATIC MEMBERS
Definition:
Static properties and methods belong to the class, not to any instance.

Syntax:
class ExampleStatic {
    static staticProperty = 0;
    static staticMethod() {}
}
ExampleStatic.staticMethod();


10. FRIEND FUNCTIONS
Definition:
Friend functions can access private data of a class.
JavaScript doesn't support this feature directly but can simulate using closures.


11. OVERLOADING
Definition:
Overloading allows multiple methods with the same name but different parameters.
JavaScript doesn’t natively support overloading; it's simulated by argument checking.

Syntax:
class ExampleOverload {
    method(param) {
        if (typeof param === 'string') {
            // string logic
        } else {
            // other logic
        }
    }
}


12. OVERRIDING
Definition:
Overriding means redefining a method in a child class that already exists in
the parent class.

Syntax:
class ParentOverride {
    method() {}
}
class ChildOverride extends ParentOverride {
    method() {} // overrides parent method
}


13. THIS KEYWORD
Definition:
The 'this' keyword refers to the current instance of a class.
It’s used to access instance variables and methods.

Syntax:
class ExampleThis {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(this.name);
    }
}


14. UPCASTING AND DOWNCASTING
Definition:
- Upcasting: Treating a child object as a parent reference.
- Downcasting: Accessing child class properties from a parent reference.
JavaScript handles this dynamically.

Syntax:
let parentObj = new ChildOverride();  // upcasting
let childObj = parentObj;             // downcasting (implicit)


15. EXCEPTION HANDLING
Definition:
Exception handling ensures runtime errors are caught and handled gracefully.

Syntax:
try {
    // code that might throw error
} catch (error) {
    // handle error
} finally {
    // optional cleanup
}


16. OBJECT CLONING
Definition:
Creating an exact copy of an object.

Types:
- Shallow Cloning: Copies top-level properties only.
- Deep Cloning: Recursively copies all nested properties.

Syntax:
const original = { a: 1 };
const shallowClone = { ...original };
const deepClone = JSON.parse(JSON.stringify(original));
