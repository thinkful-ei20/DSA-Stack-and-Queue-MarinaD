const Stack = require('./stack');


class _Node {
  constructor(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(val){
    if (!this.first){
      const node = new _Node(val, null, null);
      this.first = node;
      this.last = node;
      return;
    }
    const node = new _Node(val, null, this.last);
    this.last.next = node;
    this.last = node;
  }

  dequeue(){
    if (!this.first){
      return null;
    }
    const result = this.first;
    if (result === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    return result.value;
  }
}

class StackQueue {
  constructor(){
    this.firstStack = new Stack;
    this.lastStack = new Stack;
  }
  enqueue(val){
    this.firstStack.push(val);
  }

  dequeue(){
    if (!this.firstStack.top) {
      return null;
    }
    while(this.firstStack.top){
      this.lastStack.push(this.firstStack.pop());
    }
    const result = this.lastStack.pop();
    while(this.lastStack.top){
      this.firstStack.push(this.lastStack.pop());
    }
    return result;
  }
}

function peek(queue){
  console.log(queue.first.value);
}

function display(queue){
  let current = queue.first;
  while(current){
    console.log(current.value);
    current = current.next;
  }
}

function squareDance(q){
  
}

function main(){
  // const starTrekQ = new Queue;
  // starTrekQ.enqueue('Kirk');
  // starTrekQ.enqueue('Spok');
  // starTrekQ.enqueue('Uhura');
  // starTrekQ.enqueue('Sulu');
  // starTrekQ.enqueue('Checkov');
  // peek(starTrekQ);
  // display(starTrekQ);
  // starTrekQ.dequeue();
  // starTrekQ.dequeue();
  // display(starTrekQ);
  const sq = new StackQueue;
  sq.enqueue(1);
  sq.enqueue(2);
  sq.enqueue(3);
  console.log(sq);
  console.log(JSON.stringify(sq.dequeue()));
  console.log(sq.dequeue());
  console.log(JSON.stringify(sq.dequeue()));
}

main();