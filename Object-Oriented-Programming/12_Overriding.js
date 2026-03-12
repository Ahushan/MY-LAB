class Parent {
  greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  // overrides Parent.greet()
  greet() {
    return "Hello from Child";
  }
}

const p = new Parent();
const c = new Child();
console.log(p.greet()); // Hello from Parent
console.log(c.greet()); // Hello from Child

// calling parent method from child via super
class ChildWithSuper extends Parent {
  greet() {
    return super.greet() + " & Child";
  }
}
console.log(new ChildWithSuper().greet()); // Hello from Parent & Child
