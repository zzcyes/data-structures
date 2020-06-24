import BinarySearchTree from './src/tree/binary-search-tree';

function getBSTRoot(insertArray: number[] = [1, 3, 5, 4, 2, 6]) {
    const BST: BinarySearchTree = new BinarySearchTree();
    insertArray.forEach(node => BST.insert(node));
    const logNode = (key: any) => { }
    BST.inOrderTraverse(logNode);
    BST.preOrderTraverse(logNode);
    BST.postOrderTraverse(logNode);
    return BST.root;
}

const Root = getBSTRoot();
console.log(Root);

