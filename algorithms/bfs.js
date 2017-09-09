/**
 * Medium blog by Vaidehi Joshi
 * Found at the following link
 * https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9
 */
function levelOrderSearch(rootNode) {
    // Check that a root node exists
    if (rootNode === null) {
        return;
    }
    
    // Create our queue and push our root node into it
    var queue = [];
    queue.push(rootNode);
    
    // Continue searching through the queue as long as it's not empty
    while (queue.length > 0) {
        // Create a reference to the currentNode, at the top of the queue
        var currentNode = queue[0];
        
        // If currentNode has a left child node, add it
        if (currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        
        // If currentNode has a right child node, add it
        if (currentNode.right !== null) {
            queue.push(currentNode.right);
        }
        
        // Remove the currentNode from the queue
        queue.shift();
    }
}