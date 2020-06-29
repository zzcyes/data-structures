import AVLTree from '@/data-structures/avl-tree';
import { createPreEl } from '@/utils/helps';

const logNode = (name: string, key: number) => {
  console.log(name, key);
};

const AVT: AVLTree<number> = new AVLTree();
const insertArray: number[] = [3, 2, 6, 5, 7, 4];

insertArray.forEach((node) => AVT.insert(node));

// 二叉树的遍历
AVT.inOrderTraverse(logNode.bind(null, 'inOrderTraverse'));

const root = AVT.getRoot();

console.log(root);

console.log('getNodeHeight', AVT.getNodeHeight(root));
console.log('getBalanceFactor', AVT.getBalanceFactor(root));
console.log('getDiffHeightRL', AVT.getDiffHeightRL(root));

createPreEl(root);
