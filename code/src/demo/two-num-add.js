const LinkedList = require("./../data-structures/linked-list");

const  linkedListA = new LinkedList();
// linkedListA.append(0);
linkedListA.append(2);
linkedListA.append(4);
linkedListA.append(3);
linkedListA.display();

const  linkedListB = new LinkedList();
// linkedListB.append(0);
linkedListB.append(5);
linkedListB.append(6);
linkedListB.append(4);
linkedListB.display();


const addTwoNumbers = (l1,l2)=>{
  const linkedSum = new LinkedList();
  const dummpy = linkedSum;
  let p1 = l1.head.next, p2 = l2.head.next;
  let shouldCarry = false;
  while(p1 || p2 || shouldCarry){
    const p1Value = p1 && p1.element || 0;
    const p2Value = p2 && p2.element || 0;
    const carryValue = shouldCarry?1:0;
    const sum = p1Value + p2Value + carryValue;
    
    if(sum < 10){
      shouldCarry = false;
      dummpy.append(sum);
    }else{
      shouldCarry = true;
      dummpy.append(sum%10);
    }

    p1 = p1?p1.next:null;
    p2 = p2?p2.next:null;
  }
  return linkedSum;
}

const linkedList = addTwoNumbers(linkedListA,linkedListB);

console.debug(linkedList.display());
