function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const genLinkedList = (nodes)=>{
  let dummpy = new ListNode(0);
  let pointer = dummpy;
  for(let i=0;i<nodes.length;i++){
    pointer.next = new ListNode(nodes[i]);
    pointer = pointer.next;
  }
  return dummpy.next;
}

const display = (linkedList)=>{
  let pointer = linkedList;
  let collects = [];
  while(pointer){
    collects.push(pointer.val);
    pointer = pointer.next;
  } 
  return collects.join("->")
}



const linkedList1 = genLinkedList([1,4,5])
const linkedList2 = genLinkedList([1,3,4])
const linkedList3 = genLinkedList([2,6])

const linkedListDemo1 = [linkedList1, linkedList2, linkedList3];

const linkedListA = genLinkedList([1]);
const linkedListB = genLinkedList([0]);

const linkedListDemo2 =  [linkedListA,linkedListB];


const needMergeKLists = linkedListDemo2;

needMergeKLists.forEach(lists=>console.debug(display(lists)));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let dummpys = lists;
  let mergedLists = new ListNode(0);
  let pointer = mergedLists;
  while(dummpys.some(item=>item)){
    let values = dummpys.map(i=> i=== null ? Infinity : i.val);
    const minValue = Math.min(...values);
    const minValueIndex = values.indexOf(minValue);
    pointer.next = dummpys[minValueIndex];
    dummpys[minValueIndex] = dummpys[minValueIndex].next;
    pointer = pointer.next;
  };
  return mergedLists.next;
};


const mergedKLists = mergeKLists(needMergeKLists);

console.debug("mergedKLists:",display(mergedKLists));

// lists = [[1,4,5],[1,3,4],[2,6]]