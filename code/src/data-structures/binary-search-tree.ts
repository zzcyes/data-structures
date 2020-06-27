import { Compare, defaultCompare, ICompareFunction } from '@/utils';
import { Node } from './models/node';

export default class BinarySearchTree<T> {
  protected root: Node<T>;

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  insert(key: T) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  private insertNode(node: Node<T>, key: T) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(node: Node<T>, callback: Function): void {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(node: Node<T>, callback: Function): void {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }

  private postOrderTraverseNode(node: Node<T>, callback: Function): void {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  search(key: T) {
    //   if(this.root.key == key){
    //     return this,
    //   }
  }

  min() {}

  max() {}

  remove() {}

  getRoot() {
    return this.root;
  }
}
