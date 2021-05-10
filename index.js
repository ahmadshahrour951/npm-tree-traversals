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

