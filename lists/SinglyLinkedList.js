class SLLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  last() {
    return this.next == null ? this.value : this.next.last();
  }
  append(value) {
    !this.next ? (this.next = new SLLNode(value)) : this.next.append(value);
    return this;
  }
  setNext(node) {
    this.next = node;
    return this;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new SLLNode(value);
  }
  size() {
    let len = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      len++;
    }
    return len;
  }
  clear() {
    this.head = null;
    return this;
  }
  getLast() {
    return this.head.last();
  }
  getFirst() {
    return this.head.value;
  }
  push(value) {
    this.head.append(value);
    return this;
  }
  unshift(value) {
    const tail = this.head;
    this.head = new SLLNode(value);
    this.head.setNext(tail);
    return this;
  }
}

module.exports = SinglyLinkedList;
