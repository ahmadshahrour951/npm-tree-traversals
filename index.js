const Queue = require('./data_structures')

function bfs(tree, callback) {
  if (tree === null) return;

  let queue = new Queue()
  queue.enqueue(tree)

  while (!queue.isEmpty()) {
    const item = queue.dequeue()
    const data = item.data
    callback(data)

    if (item.left !== null) queue.enqueue(item.left)
    if (item.right !== null) queue.enqueue(item.right)
  } 
}

function preorder(item, callback) {
  if (item !== null) {
    callback(item.data)
    preorder(item.left)
    preorder(item.right);
  }
}

function inorder(item, callback) {
  if (item !== null) {
    inorder(item.left)
    callback(item.data)
    inorder(item.right)
  }
}

function postorder(item, callback) {
  if (item !== null) {
    postorder(item.left)
    postorder(item.right)
    callback(item.data)
  }
}

function dfs(traversaType, tree, callback) {
  switch (traversaType) {
    case 'preorder':
      return preorder(tree, callback);
    case 'inorder':
      return inorder(tree, callback);
    case 'postorder':
      return postorder(tree, callback);
    
    default:
      throw new Error('Traversal type input is not available.')
  }
}


module.exports = {
  dfs,
  bfs,
};