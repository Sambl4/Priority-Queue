const Node = require('./node');

class MaxHeap {
	constructor() {
			this.root = null;
			this.parentNodes = [];

	}

	push(data, priority) {
		var node = new Node (data, priority);
		this.insertNode (node);
		this.shiftNodeUp (node);
	}

	pop() {
		
	}

	detachRoot() {
		this.root = null;
		this.parentNodes[0].data = node;
		this.parentNodes[0].priority = node;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		
	}

	insertNode(node) {
		if ( this.root === null) {
			this.root = node;
			this.parentNodes[0] = node;
		} else {
			var parent = this.parentNodes[0];
			parent.appendChild(node);
			this.parentNodes.push(node);
			if (parent.right !== null) {
				this.parentNodes.shift ();
			}
		}
	}



/**
        10                       20
       /  \                     /  \
      5    7  - shift up ->   10   7
     /                        /
    20                       5
**/


	shiftNodeUp(node) {
	/*	if (this.root === node) {
			return;
		} else if ( node.priority < node.parent.priority) {
			return;
		} else {
			node.swapWithParent();
		}
*/






	}


	shiftNodeDown(node) {

		
	}
}

module.exports = MaxHeap;
