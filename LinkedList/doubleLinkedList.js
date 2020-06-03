class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node('head');
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

    // 添加节点
    append(item) {
        let newNode = new Node(item);
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;
        newNode.previous = currNode;

    }

    // 插入节点
    insert(newElem, item) {
        let newNode = new Node(newElem);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next.previous = newNode;
        current.next = newNode;
    }

    //查找前一个节点
    findPrevious(item) {
        let current = this.find(item);
        return current.previous;
    }

    // 查找最后一个节点
    findLast() {
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    //删除节点
    remove(item) {
        let currNode = this.find(item);
        if (currNode.next !== null) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;

            currNode.next = null;
            currNode.previous = null;
        }
    }

    //显示链表
    display() {
        let currNode = this.head;
        let retStr = this.head.element;
        while (currNode.next !== null) {
            retStr += `->${currNode.next.element}`;
            currNode = currNode.next;
        }
        console.table(retStr);
    }

    // 反向遍历
    displayReverse() {
        let currNode = this.findLast();
        let retStr = currNode.element;
        while (currNode.previous !== null) {
            retStr += `<-${currNode.previous.element}`;
            currNode = currNode.previous;
        }
        console.table(retStr);
    }

}

exports = module.exports = DoubleLinkedList;
