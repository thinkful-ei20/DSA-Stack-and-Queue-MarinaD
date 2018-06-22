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

function palindrome(s){
  const origStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
  const stack = new Stack;
  for (let i = 0; i < origStr.length; i++){
    stack.push(origStr[i]);
  }
  let reverseStr = '';
  for (let i = 0; i < origStr.length; i++){
    reverseStr  += stack.pop();
  }
  if (reverseStr === origStr){
    return true;
  }
  return false;
}

function main(){
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(palindrome('1001'));
}

main();

