const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    if (!this.treeRoot) {
      this.treeRoot = new Node(data)
    } else {
      this.addNode(this.treeRoot, data)
    }
  }

  addNode(parentNode, data) {
    if (data < parentNode.data) {
        if (parentNode.left === null) {
            parentNode.left = new Node(data);
        } else {
            this.addNode(parentNode.left, data);
        }
    } else {
        if (parentNode.right === null) {
            parentNode.right = new Node(data);
        } else {
            this.addNode(parentNode.right, data);
      }
    }
  }

  has(data) {
    return Boolean(this.search(this.treeRoot, data))
  }

  search(parentNode, data) {   
    if (parentNode === null) {
      return null
    } if (data < parentNode.data) {
      return this.search(parentNode.left, data);
    } else if (data > parentNode.data) { 
        return this.search(parentNode.right, data);
    } else {
        return parentNode;
    }
  }

  find(data) {   
    return this.search(this.treeRoot, data)
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data) 
  }

  removeNode(parentNode, data) {
    if (parentNode === null) {
        return null;
    } else if (data < parentNode.data) {
      parentNode.left = this.removeNode(parentNode.left, data);
        return parentNode;
    } else if (data > parentNode.data) {
      parentNode.right = this.removeNode(parentNode.right, data);
        return parentNode;
    } else {
        if (parentNode.left === null && parentNode.right === null) {
          parentNode = null;
          return parentNode;
        }
        if (parentNode.left === null) {
          return parentNode.right;
          
        } else if(parentNode.right === null) {
          parentNode = parentNode.left;
            return parentNode;
        }
        let newNode = this.getMin(parentNode.right);
        parentNode.data = newNode.data;
        parentNode.right = this.removeNode(parentNode.right, newNode.data);
        return parentNode;
    }
  }

  getMin(parentNode)  {
    if (parentNode.left === null) {
    return parentNode
  } else {
    return this.getMin(parentNode.left)
  }
}

  min() {
  return this.getMin(this.treeRoot).data
}

getMax(parentNode)  {
  if (parentNode.right === null) {
  return parentNode
} else {
  return this.getMax(parentNode.right)
}
}

  max() {
    return this.getMax(this.treeRoot).data
  }
}



module.exports = {
  BinarySearchTree
};