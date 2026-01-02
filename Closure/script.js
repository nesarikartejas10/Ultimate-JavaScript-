//example 1

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fun = outer();

fun(); //1
fun(); //2

//Example 2

function CartCounter() {
  let _count = 0;

  function _updateCount(value) {
    _count = _count + value;
  }

  return {
    increment() {
      _updateCount(1);
    },

    decrement() {
      _updateCount(-1);
    },

    value() {
      return _count;
    },
  };
}

const cartCounter = CartCounter();

cartCounter.increment();
cartCounter.increment();
cartCounter.decrement();

console.log(cartCounter.value());

//Example 3 (Realtime example)

function useState(initialValue) {
  let _state = initialValue;

  function setState(value) {
    _state = value;
  }

  function getState() {
    return _state;
  }

  return [getState, setState];
}

//functional component
function Counter() {
  const [count, setCount] = useState(0);

  return {
    click() {
      setCount(count() + 1);
    },

    render() {
      console.log("value:", count());
    },
  };
}

const counter = Counter();
counter.click();
counter.render(); //value: 1

counter.click();
counter.render(); //value: 2

counter.click();
counter.render(); //value: 3
