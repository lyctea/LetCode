/*
* 求树的深度
* */

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public int maxDepth(Node root) {
        // 判断是否有root节点，没有返回 0
        //  判断当前递归的节点是否有子节点，没有则返回1
        if (root == null) {
            return 0;
        } else if (root.children.isEmpty()) {
            return 1;
        } else {
            // 创建一个数据
            List<Integer> heights = new LinkedList<>();
            for (Node item : root.children) {
                heights.add(maxDepth(item));
            }
            // 【1，1，1】 递归回来时，对数组中的数字进行累加，之和就是树深度
            return Collections.max(heights) + 1;
        }
    }
}
