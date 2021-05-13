# npm-tree-traversals

This npm module helps developers traverse a binary search tree with a callback function.

```npm install --save bst-traversals```

There are two main types of ways to traverse a binary search tree in the computer science world. One is the breadth first search and the other depth first search.

## BFS
You can extract the bfs (breath first search) function then call it as so, ```bfs(rootTreeNode, callbackFn)```, The root tree node parameter must have three properties (This is usually how nodes are defined):

```javascript
class Node(data, left, right) {
  constructor {
    this.data = data || null;
    this.left = left || null;
    this.right = right || null;
  }
}
```

Then you can pass the ```callbackFn``` parameter which will call the function for every element for each level from left to right.

## DFS
You can extract the dfs (depth first search) function then call it as so, ```dfs(traversalType, rootTreeNode, callbackFn)```, The parameters are the same except for the first which is the traversal type. There are three traversal types:
- preorder
- inorder
- postorder

Google on what each traversal means and what they do, it is the beyond the scope of this documentation.

You must provide one of these strings as the first parameter otherwise you'll receive an error.
