const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

// console.log(Node.toString());
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions  module.exports = 
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.data ? this : null;
  }

  add(data) {
    if (this.data == null) {
      this.data = data;
    } else {
      let x = this;
      while (x.data != data) {
        if (data > x.data) {
          if (x.right) {
            x = x.right;
          } else {
            x.right = new Node(data);
          }
        } else
        if (x.left) {
          x = x.left;
        } else {
          x.left = new Node(data);
        }
      }
    }
  }

  has(data) {
    return this.hasRec(data, this);
  }

  hasRec(data, node) {
    if (node.data == data) return true;
    if (node.left || node.right) {

    }
  }

  find(data) {
    return this.findRec(this, data);
  }

  findRec(node, data) {
    if (node == null || node.data == data)
      return root;
    if (node.data < data)
      return search(node.right, data);
    return search(node.left, data);
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}

// const tree = new BinarySearchTree();
// tree.add(5);
// tree.add(10);
// tree.add(3);
// tree.add(8);
// tree.add(4);

// console.log(JSON.stringify(tree));