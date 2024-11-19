class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add to the front of the list
    addFront(value) {
      const newNode = new Node(value);
      if (!this.head) {
        newNode.next = newNode; // Point to itself
        this.head = newNode;
      } else {
        let temp = this.head;
        while (temp.next !== this.head) {
          temp = temp.next;
        }
        newNode.next = this.head;
        temp.next = newNode;
        this.head = newNode;
      }
    }
  
    // Add to the back of the list
    addBack(value) {
      const newNode = new Node(value);
      if (!this.head) {
        newNode.next = newNode; // Point to itself
        this.head = newNode;
      } else {
        let temp = this.head;
        while (temp.next !== this.head) {
          temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = this.head;
      }
    }
  
    // Delete a specific node by value
    delete(value) {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
  
      let temp = this.head;
      let prev = null;
  
      // Check if the node to delete is the only node in the list
      if (this.head.value === value && this.head.next === this.head) {
        this.head = null; // List becomes empty
        return;
      }
  
      // If the node to delete is at the head
      if (this.head.value === value) {
        while (temp.next !== this.head) {
          temp = temp.next;
        }
        temp.next = this.head.next; // Point last node to the next of head
        this.head = this.head.next; // Update head
        return;
      }
  
      // Traverse the list to find the node to delete
      do {
        prev = temp;
        temp = temp.next;
        if (temp.value === value) {
          prev.next = temp.next; // Skip the node to delete
          return;
        }
      } while (temp !== this.head);
  
      console.log("Value not found in the list");
    }
  
    // Update a node's value
    updateNode(oldValue, newValue) {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
      let temp = this.head;
      do {
        if (temp.value === oldValue) {
          temp.value = newValue;
          return;
        }
        temp = temp.next;
      } while (temp !== this.head);
      console.log("Value not found in the list");
    }
  
    // Display the list
    display() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
      let result = [];
      let temp = this.head;
      do {
        result.push(temp.value);
        temp = temp.next;
      } while (temp !== this.head);
      console.log(result.join(" -> "));
    }
  }
  
  // Example usage:
  const list = new CircularLinkedList();
  list.addFront(90);
  list.addBack(80);
  list.addFront(70);
  list.addBack(60);
  list.addFront(50);
  
  // Perform operations
//   list.delete(60); // Delete 60 from the list
//   list.delete(90); // Delete 90 from the list
  list.updateNode(80, 70); // Update 80 to 70
  list.updateNode(50, 60); // Update 50 to 60
  
  // Display list once after all operations
  list.display(); // 70 -> 70
  