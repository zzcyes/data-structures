export class Node<K> {
  //   key: K;
  left: Node<K>;
  right: Node<K>;

  constructor(public key: K) {
    // this.key = key;
  }

  toString() {
    return `${this.key}`;
  }
}
