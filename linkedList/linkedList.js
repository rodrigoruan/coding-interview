function linkedList() {
  let length = 0;
  let head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length += 1;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previosNode;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previosNode = currentNode;
        currentNode = currentNode.next;
      }

      previosNode.next = currentNode.next;
    }
    length -= 1;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index += 1;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return index;
  };

  this.elementAt = function (index) {
    let curretNode = head;
    let i = 0;
    while (i < index) {
      i += 1;
      curretNode = curretNode.next;
    }

    return curretNode.element;
  };

  this.pop = function () {
    let currentNode = head;
    let previousNode;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    length -= 1;
    previousNode.next = null;
  };

  this.shift = function () {
    head = head.next;
    length -= 1;
  };
}

const list = new linkedList();

list.add('JOAO');
list.add('CARLAO DA MASSA');
list.add('JOAOZIN');
list.add('NAQUELE PIQUE');

console.log(list.size());
console.log(list.elementAt(0));
list.shift();
console.log(list.size());
console.log(list.elementAt(0));
