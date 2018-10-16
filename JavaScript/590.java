/*
后续遍历一棵树
* */
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
  List<Integer> list = new ArrayList<>();
  public:
    vector<int> postorder(Node* root) {
      if (root == null) return list;

      for(Node node: root.children)
        postorder(node);

      list.add(root.val);

      return list;
    }
};
