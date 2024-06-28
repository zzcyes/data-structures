class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }


    // 添加节点
    append(item) {
        let newNode = new Node(item);
        let currNode = this.head;
        while (currNode.next !== null) {
            // console.log(currNode.next.element);
            currNode = currNode.next;
        }
        currNode.next = newNode;

    }

    //插入节点
    insert(newElem, item) {
        let newNode = new Node(newElem);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    //查找节点
    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            let currElement = currNode.next;
            currNode = currElement;
        }
        return currNode;
    }

    //查找前一个节点
    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    //删除节点
    remove(item) {
        let nextElem = pervNode.next.next;
        let pervNode = this.findPrevious(item);
        if (pervNode.next !== null) {
            pervNode.next = nextElem;
        }
    }

    //显示链表
    display() {
        const logArray = [];
        let currNode = this.head;
        while (currNode.next !== null) {
            // console.log(currNode.next.element);
            logArray.push(currNode.next.element)
            currNode = currNode.next;
        }
        console.debug(logArray.join("->"));
        return logArray;
    }
}

exports = module.exports = LinkedList;
