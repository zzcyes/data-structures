const { identity } = require("lodash");
const LinkedList = require("./../data-structures/linked-list");

const display = (node)=>{
  if(!node){
    return null;
  }
  const collects = [];
  while(node){
    collects.push(node.element);
    node = node.next;
  }
  return collects.join("->");
}

const linkedListA = new LinkedList();
// linkedListA.append(0);
linkedListA.append(1);
linkedListA.append(2);
linkedListA.append(3);
linkedListA.append(4);
linkedListA.append(5);
// linkedListA.display();

// 1->2->3->4->5 p=1 next=2 
// [2-解法1: 暴力解法>1]->3->4->5 p=2 next=3
// [3->2->1]->4->5 p=3 next=4
// [4->3->2->1]->5 p=4  next=5
// [5->4->3->2->1] p=5 next=null

// 
// 找到 l - n + 1
const removeNthFromEnd = (l1, n) => {
  let dummpy = l1.head;
  let p1 = dummpy,p2 = dummpy;
  let l = 0;
  while(p1){
    if(p1.element!=='head'){
      l++;
    }
    p1 = p1.next;
  }
  // 当n长度为链表长度时，直接去掉头节点
  // if(l===n){
  //   return dummpy.next;
  // }
  for(let i=1; i< l - n + 1 ; ++i){
    p2 = p2.next;
  }
  p2.next= p2.next.next;
  return dummpy;
}

const fastList = removeNthFromEnd(linkedListA, 2);
console.debug("解法1: 暴力解法->",display(fastList));


const linkedListB = new LinkedList();
// linkedListA.append(0);
linkedListB.append(1);
linkedListB.append(2);
linkedListB.append(3);
linkedListB.append(4);
linkedListB.append(5);

// 解法2: 快慢指针
const removeNthNode = (l1,n)=>{
  let dummpy = l1.head;
  let first = dummpy,second = dummpy;
  for(let i = 0;i<=n;i++){
    first = first.next;
  }
  while(first!==null){
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummpy;
}

const linkedList2 = removeNthNode(linkedListB, 3);
console.debug("解法2: 快慢指针->",display(linkedList2));



const linkedListC = new LinkedList();
// linkedListA.append(0);
linkedListC.append(1);
linkedListC.append(2);
linkedListC.append(3);
linkedListC.append(4);
linkedListC.append(5);

// 解法3: 栈
const removeNthNodeByStack = (l1,n)=>{
  const stack = [];
  let dummpy = l1.head;
  let pointer = dummpy;
  while(pointer){
    stack.push(pointer);
    pointer = pointer.next;
  }
  let prevNode = null;
  let prevCount = n + 1;
  while(prevCount){ // prevNode.next = prevNode.next.next;
     prevCount--;
     prevNode = stack.pop();
  }
  console.debug(prevNode);
  prevNode.next = prevNode.next.next;
  return dummpy;
}

const stackList = removeNthNodeByStack(linkedListC, 5);
console.debug("解法3: 栈->",display(stackList));