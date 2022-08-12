//Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
//
//
// Example 1:
//
//
// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

let root = [3, 9, 20, null, null, 15, 7]

let averageOfLevels = function (root) {
    const queue = [ root ];
    const resp = [];
    let sum = 0;
    let count = 1;
    let ref = root;

    while ( queue.length > 0 ) {
        const polled = queue.shift();
        sum += polled.value;
        if ( polled.left !== null ) queue.push(polled.left);
        if ( polled.right !== null ) queue.push(polled.right);
        if ( polled === ref ) {
            resp.push(sum / count);
            count = queue.length;
            sum = 0;
            ref = queue[queue.length - 1];
        }
    }
    return resp;
};

console.log(averageOfLevels(root))