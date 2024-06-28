const { identity } = require("lodash");
const LinkedList = require("../data-structures/linked-list");
const { display } = require("./../data-structures/utils");

const linkedListA = new LinkedList();
linkedListA.append(1);
linkedListA.append(2);
linkedListA.append(4);
linkedListA.append(6);
console.debug("linkedListA:");
linkedListA.display();

const linkedListB = new LinkedList();
linkedListB.append(1);
linkedListB.append(3);
linkedListB.append(4);
linkedListB.append(5);
console.debug("linkedListB:");
linkedListB.display();



// 合并两个有序链表
// 思路：遍历节点，对比大小
// 注意：需要注意两个链表长度
const mergeTwoLists = (l1, l2) => {
 let dummy1 = l1.head.next;
 let dummy2 = l2.head.next;
 let dummpy3 = new LinkedList();
 let p1 = dummy1, p2 =  dummy2;
 let p3 = dummpy3;
 while(p1 || p2){ 
    const p1Value = p1 && p1.element || null;
    const p2Value = p2 && p2.element || null;
    if(p1Value === null && p2Value !== null){
      p3.next = p2;
      if(p2) p2 = p2 ? p2.next : null;
    }else if(p1Value !== null && p2Value === null){
      p3.next = p1;
      if(p1) p1 = p1 ? p1.next : null;
    }else{
      if(p1Value <= p2Value){
        p3.next = p1;
        if(p1) p1 = p1 ? p1.next : null;
      } else{
        p3.next = p2;
        if(p2) p2 = p2 ? p2.next : null;
      }
    }
    // 指针前进；
    p3 = p3.next;
 }
 console.debug("dummpy3", display(dummpy3));
 return dummpy3.next;
}

const mergeList = mergeTwoLists(linkedListA, linkedListB);
// console.debug(mergeList);
// console.debug("解法1: 合并两个有序链表",display(mergeList));
