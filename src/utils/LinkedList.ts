export class LinkedListNode<T> {
  constructor(
    public value: T,
    public next: LinkedListNode<T> | null = null,
    public previous: LinkedListNode<T> | null = null,
  ) {}
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null
  private tail: LinkedListNode<T> | null = null

  push(value: T) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      this.tail!.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }
  }

  insertBeforeByCondition(
    value: T,
    condition: (next: T) => boolean,
  ) {
    let nextNode = this.head

    while (nextNode && !condition(nextNode.value))
      nextNode = nextNode.next

    if (nextNode) {
      const newNode = new LinkedListNode(value, nextNode, nextNode.previous)

      if (nextNode.previous)
        nextNode.previous.next = newNode
      else
        this.head = newNode

      nextNode.previous = newNode
    }
    else {
      this.push(value)
    }
  }

  toArray() {
    const arr: T[] = []

    let node = this.head

    while (node) {
      arr.push(node.value)
      node = node.next
    }

    return arr
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }
}
