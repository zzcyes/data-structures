export class Node<K> {
  //   key: K;
  left: Node<K>;
  right: Node<K>;

  constructor(public key: K) {
    // this.key = key;
    this.left = null;
    this.right = null;
  }

  toString() {
    return `${this.key}`;
  }
}
