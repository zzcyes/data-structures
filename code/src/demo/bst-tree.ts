import BinarySearchTree from '@/data-structures/binary-search-tree';
// import AVLTree from '@/data-structures/avl-tree';

const logNode = (name: string, key: number) => {
  //   console.log(name, key);
};

const insertArray: number[] = [1, 3, 5, 5, 4, 2, 6];
const BST: BinarySearchTree<number> = new BinarySearchTree();

insertArray.forEach((node) => BST.insert(node));

const logSearch = (key: number) => {
  console.log(`search ${key} ->`, BST.search(key));
};

logSearch(12);

console.log('===min===', BST.min());
console.log('===max===', BST.max());

// 二叉树的遍历
BST.inOrderTraverse(logNode.bind(null, 'inOrderTraverse'));
BST.preOrderTraverse(logNode.bind(null, 'preOrderTraverse'));
BST.postOrderTraverse(logNode.bind(null, 'postOrderTraverse'));

const root = BST.getRoot();

BST.sequenceTraverse();

// const AVL = new AVLTree();

const rootEl = document.createElement('pre');
rootEl.textContent = JSON.stringify(root, null, 4);
document.querySelector('#app').appendChild(rootEl);
