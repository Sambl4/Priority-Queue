class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;	

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left === null) {
			this.left = node;
			node.parent = this;
		} else if (this.right === null) {
			this.right = node;
			node.parent = this;
		} else {
			return;
		}
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
		} else if (this.right === node) {
			this.right = null;
		} else {
			throw ('err') ;
		}
		node.parent = null;
	}

	remove() {
		if (this.parent === null) {
			return;
		} else {
			this.parent.removeChild (this);
		}

	}

	swapWithParent() {
	
	}
}

module.exports = Node;
                 