const Node = require('./node');

class MaxHeap {
	constructor() {

		this.root = null;
		this.parentNodes = [];
		this.quantity = 0;
	}

	push(data, priority) {

		var node = new Node (data, priority);
		this.insertNode (node);
		this.shiftNodeUp (node);
		++this.quantity;
	}

	pop() {

		if (this.root == null) {
			return;

		} else {
			var rootForDel = this.detachRoot();
			this.restoreRootFromLastInsertedNode (rootForDel);
			if (this.root != null) {
				this.shiftNodeDown(this.root);
			}

			--this.quantity;
			return rootForDel.data;
		}
	}

	detachRoot() {

		var rootForDel = this.root;
		if (this.parentNodes[0] == this.root) {
			this.parentNodes.shift();	
		}

		this.root = null;
		return rootForDel;
	}

	restoreRootFromLastInsertedNode(detached) {
		
		if (this.parentNodes.length == 0){
			return;
		}

		var LastInsertNode = this.parentNodes[this.parentNodes.length - 1];
		if (LastInsertNode == this.root) {
			return;

		} else {
			this.root = LastInsertNode;
			this.root.left = detached.left;
			this.root.right = detached.right;
			if (this.root.right != null) {
				this.root.right.parent = this.root;

			} else {
				this.parentNodes.unshift(this.root);
			}

			if (this.root.left != null) {
				this.root.left.parent = this.root;
			} 
			
			if ( LastInsertNode.parent.left == LastInsertNode) {
				LastInsertNode.parent.left = null;
				LastInsertNode.parent = null;

			} else	if ( LastInsertNode.parent.right == LastInsertNode) {
				LastInsertNode.parent.right = null;
				this.parentNodes.unshift(LastInsertNode.parent);
				LastInsertNode.parent = null;
			}
		}
		this.parentNodes.pop();
	}	

	size() {

		return this.quantity;
	}

	isEmpty() {

		if ( this.root == null ) {
			return true;

		} else {
			return false;
		}
	}

	clear() {

		this.root = null;
		this.parentNodes = [];
		this.quantity = 0;
	}

	insertNode(node) {

		if ( this.root == null) {
			this.root = node;
			this.parentNodes[0] = node;

		} else {
			var parent = this.parentNodes[0];
			parent.appendChild(node);
			this.parentNodes.push(node);
			if (parent.right != null) {
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

		if (node.parent == null) {
			this.root = node;
			return;
		}

		if (node.priority <= node.parent.priority) {
			return;

		} else if (this.parentNodes.length != 0) {
			var indexOfNode = this.parentNodes.indexOf (node);
			var indexOfNodeParent = this.parentNodes.indexOf (node.parent);
			if ( indexOfNode != -1) {
				this.parentNodes[indexOfNode] = node.parent;
				if (indexOfNodeParent != -1) {
					this.parentNodes[indexOfNodeParent] = node;
				}	
			}	

		if (this.root == node.parent) { 
			this.root = node; 
		}

		node.swapWithParent ();
		this.shiftNodeUp(node);
		} 	
	}

	shiftNodeDown(node) {

		var maxChild; 
		var indexOfNode = this.parentNodes.indexOf (node); 
		var indexOfNodeLeft = this.parentNodes.indexOf (node.left); 
		var indexOfNodeRight = this.parentNodes.indexOf (node.right); 


		if (this.root == null || this.parentNodes.length == 0) { 
			return; 
		} 

		if ( node.left != null && node.right != null) { 
			if (node.left.priority != node.right.priority) {
				maxChild = Math.max (node.left.priority, node.right.priority);

			} else {
				maxChild = node.right.priority;
			}

		} else if ( node.left != null && node.right == null) {                                                     
			maxChild = node.left.priority; 
		}
		if (maxChild > node.priority) {
			if (maxChild == node.left.priority ) { 
				if (indexOfNodeLeft != -1) { 
					this.parentNodes[indexOfNodeLeft] = node;
					if ( indexOfNode != -1) { 
		 				this.parentNodes[indexOfNode] = node.left;
					} 
				}

				if (this.root == node) { 
					this.root = node.left; 
				}

				node.left.swapWithParent();
				this.shiftNodeDown(node);

			} else	if (maxChild == node.right.priority) { 
				if (indexOfNodeRight != -1) { 
					this.parentNodes[indexOfNodeRight] = node; 
					if ( indexOfNode != -1) { 
						this.parentNodes[indexOfNode] = node.right;
					}
				} 
					
				if (this.root == node) { 
					this.root = node.right; 
				}

				node.right.swapWithParent();
				this.shiftNodeDown(node); 
			}
		}	 
	}
}

module.exports = MaxHeap;
