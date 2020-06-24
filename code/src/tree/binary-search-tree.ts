class Node {
    key: any;
    left: Node;
    right: Node;

    constructor(key: any) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// import Node from '../models/node';

class BinarySearchTree {
    root: Node;

    constructor() {
        this.root = null
    }

    insert(key: any) {
        if (this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    private insertNode(node: Node, key: any): void {
        if (key < node.key) {
            if (node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    inOrderTraverse(callback: Function) {
        this.inOrderTraverseNode(this.root, callback);
    }

    private inOrderTraverseNode(node: Node, callback: Function): void {

        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback: Function) {
        this.preOrderTraverseNode(this.root, callback);
    }

    private preOrderTraverseNode(node: Node, callback: Function): void {
        if (node !== null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    postOrderTraverse(callback: Function) {
        this.postOrderTraverseNode(this.root, callback);
    }

    private postOrderTraverseNode(node: Node, callback: Function): void {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    search() { }

    min() { }

    max() { }

    remove() { }
}

export default BinarySearchTree;
