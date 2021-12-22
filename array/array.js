class Array {
  constructor(array) {
    this.array = array;
  }

  size() {
    let counter = 0;
    for (let _ in this.array) counter += 1;
    return counter;
  }

  isEmpty() {
    return this.size() === 0;
  }

  at(index) {
    return this.array[index];
  }
}

const newArray = new Array([1, 2, 3, 4, 5]);

console.log(newArray.isEmpty());
