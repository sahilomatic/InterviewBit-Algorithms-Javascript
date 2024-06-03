"""
link : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Definition for a binary tree node 
 class Treenode{
     constructor(data){
         this.data = data;
         this.left = null;
         this.right = null;
     }
 }


const balancedBST = (arr, left, right)=>{
    if(right< left){
        return null;
    }
    let mid = Math.floor((left+right)/2);

    let node = new Treenode(arr[mid]);
    node.left = balancedBST(arr,left, mid-1);
    node.right = balancedBST(arr, mid +1, right);
    return node;
}
module.exports = { 
    /*** param A: list of integer 
    ***  return: root node of balanced BST 
    ***/ 
    sortedArrayToBST: function (nums) { 
            return balancedBST(nums, 0 , nums.length - 1);
           
    }, 
};

"""
