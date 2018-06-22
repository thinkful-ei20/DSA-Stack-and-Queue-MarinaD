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

function matchingParen(s){
  //create
  //loop through string - 
  //if push all open parenthesis into stack, if close, pop out one of the opens
  //)) count would be -2
  const stack = new Stack;
  let count = 0;
  for ( let i = 0; i < s.length; i++){
    if (s[i] === '('){
      count++;
      stack.push(s[i]);
    }
    if (s[i] === ')'){
      count --;
      stack.pop();
    }
  }
  if (count === 0) {
    return true;
  }
  if (count > 0){
    throw new Error(`Expected close parethesis after the open parenthesis at position: ${count}`);
  }
  if (count < 0){
    throw new Error(`Expected open parethesis before the closed parenthesis at position: ${s.length+count}`);
  }
  console.log(count);
}

function sortStack(stack){
  const sorted = new Stack;
  while(stack.top){
    let saved = stack.pop();
    while (sorted.top && sorted.top.data > saved){
      stack.push(sorted.pop());
    }
    sorted.push(saved);    
  }

  while (sorted.top){
    stack.push(sorted.pop());
  }
  return stack;
}

function main(){
  const starTrek = new Stack;
  starTrek.push(3);
  starTrek.push(1);
  starTrek.push(10);
  starTrek.push(2);
  // console.log(palindrome('1001'));
  // matchingParen('((()))))');
  // display(sortStack(starTrek));

}

main();

module.exports = Stack;