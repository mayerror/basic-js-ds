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
    return this.hasRec(this, data);
  }

  hasRec(node, data) {
    if (node == null){
      return false;
    } else if (node.data == data)
      return true;
    if (data > node.data) {
      return this.hasRec(node.right, data);
    } else {
      return this.hasRec(node.left, data);
    }
  }

  find(data) {
    return this.findRec(this, data);
  }

  findRec(node, data) {
    if (node == null || node.data == data)
      return node;
    if (data > node.data) {
      return this.findRec(node.right, data);
    } else {
      return this.findRec(node.left, data);
    }
  }

  remove(data) {
    return this.removeRec(this, data);
  }

  removeRec(node, data) {
    if (node.data == data) {
      node.data = null;
      node.left = null;
      node.right = null;
      return true;
    } else if (node.data == null) {
      return false;
    }
    if (data > node.data) {
      return this.removeRec(node.right, data);
    } else {
      return this.removeRec(node.left, data);
    }
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

// tree.find(3);

// console.log(JSON.stringify(tree.find(5)));