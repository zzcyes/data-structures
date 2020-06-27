import BinarySearchTree from '@/data-structures/binary-search-tree';

function getBSTRoot(insertArray: number[] = [1, 3, 5, 5, 4, 2, 6]) {
  const BST: BinarySearchTree<number> = new BinarySearchTree();
  insertArray.forEach((node) => BST.insert(node));
  const logNode = (name: string, key: number) => {
    console.log(name, key);
  };
  BST.inOrderTraverse(logNode.bind(null, 'inOrderTraverse'));
  BST.preOrderTraverse(logNode.bind(null, 'preOrderTraverse'));
  BST.postOrderTraverse(logNode.bind(null, 'postOrderTraverse'));
  return BST.getRoot();
}

const root = getBSTRoot();

const rootEl = document.createElement('pre');
rootEl.textContent = JSON.stringify(root, null, 4);
document.querySelector('#app').appendChild(rootEl);
