class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(val){
    if(this.top === null){
      this.top = new _Node(val, null);
      return this.top;
    }
    const newNode = new _Node(val, this.top);
    this.top = newNode;
  }

  pop(){
    const node = this.top;
    if (this.top){
      this.top= this.top.next;
      return node.data;
    }    
    return;
  }
}

function peek(stack){
  console.log(stack.top.data);
}

function display(stack){
  if (stack.top === null){
    console.log('Empty stack');
    return;
  }
  let currNode = stack.top;
  while (currNode !== null){
    console.log(currNode.data);
    currNode = currNode.next;
  }
  return;
}

function main(){
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  console.log(starTrek.pop());
  // display(starTrek);
}

main();
