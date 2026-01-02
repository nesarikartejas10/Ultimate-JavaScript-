# This Keyword Problem Sets For Javascript

1. **Object Method Context**
   Create an object with a method that logs the object itself using the `this` keyword. Call this method.
2. **Event Handler**
   Create an HTML button. When clicked, it should display an alert with the text of the button using the `this` keyword in the event handler.
3. **Constructor Functions**
   Create a constructor function that sets multiple properties on its instances using the `this` keyword. Instantiate a few objects and verify the properties.
4. **Prototypal Inheritance**
   Create a constructor function. Add a method to its prototype that logs a property from the constructed object using `this`. Instantiate an object from the constructor and call the prototype method.
5. **Arrow Functions**
   Within an object method, define an arrow function and log the value of `this` inside that arrow function. Notice how it differs from a regular function in the same context.
6. **Timeouts and Intervals**
   Inside an object, create a method that sets a `setTimeout` where the callback logs the object using the `this` keyword. Notice the behavior and think about why it happens.
7. **Nested Functions**
   In an object method, create a nested function and try to log the `this` keyword from within that nested function. Observe the context and determine what `this` is pointing to.
8. **Array Methods**
   Create an object with a property that's an array of numbers. Add a method to the object that uses the `map` function on the array to double each number, but the doubling operation should be done by another method in the same object using the `this` keyword.
9. **Dynamic Context Challenge**
   Create two different objects with a property called `name`. Define a standalone function that logs the `name` using `this`. Now, invoke this function in the context of both objects and see the dynamic nature of `this`.
10. **Global Context Challenge**
    Write a standalone function (not inside any object or another function) that logs the `this` keyword. Call this function from the global scope and see what `this` refers to.
