function linkedList() {
  let length = 0;
  let head = null;
  let tail = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  this.Enqueue = (element) => {
    const newNode = new Node(element);

    if (head == null) {
      head = newNode;
      tail = newNode;
    } else {
      const prev = tail;
      tail = newNode;
      prev.next = newNode;
    }

    length++;
  };

  this.Dequeue = () => {
    head = head.next;
    length--;
  };

  this.getLength = () => length;

  this.getHead = () => head;
}

const list = new linkedList();

list.Enqueue('João');
list.Enqueue('Carlos');

console.log(list.getHead());

list.Dequeue();

console.log(list.getHead());
