class Node {
	constructor(data, priority) {

		this.data = data;
		this.priority = priority;	

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		if (this.left == null) {
			this.left = node;
			node.parent = this;

		} else if (this.right == null) {
			this.right = node;
			node.parent = this;

		} else {
			return;
		}
	}

	removeChild(node) {
		
		if (this.left == node) {
			this.left = null;
		
		} else if (this.right == node) {
			this.right = null;
		
		} else {
			throw ('') ;
		}
		
		node.parent = null;
	}

	remove() {
		
		if (this.parent == null) {
			return;
		
		} else {
			this.parent.removeChild (this);
		}
	}

//неудобно думать (с)
	swapWithParent() {
		
		if (this.parent == null) {
			return;
		}

		var currentNode = this;
		var parent = this.parent;
		var parentOfParent = this.parent.parent;
		var currentLeft = this.left;
		var currentRight = this.right;
		
		
		if (parentOfParent == null) {
			currentNode.parent = null;
		 
		} else if ( parentOfParent != null ) {
		 	if (  parent == parentOfParent.left ) {
		 		parentOfParent.left = currentNode;
		 		currentNode.parent = parentOfParent;

		 	} else if (parent == parentOfParent.right) {
		 		parentOfParent.right = currentNode;
		 		currentNode.parent = parentOfParent;
		 	}
		} 

		if (parent.left == currentNode ) {
		 	currentNode.left = parent;
			currentNode.right = parent.right;
		 	if (parent.right != null) {
			 	parent.right.parent = currentNode;
			 }	

		} else if (parent.right == currentNode) {
		 	currentNode.right = parent;
			currentNode.left = parent.left;
	 		if (parent.left != null) {
			 	parent.left.parent = currentNode;	
	 		}	
		}

		parent.left = currentLeft;
		if (parent.left != null) {
			currentLeft.parent = parent;
		}

		parent.right = currentRight;
		if (parent.right != null) {
			currentRight.parent = parent;
		}

		parent.parent = currentNode;
	} 
}

module.exports = Node;
                 