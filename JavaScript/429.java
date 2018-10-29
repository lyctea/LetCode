import java.util.ArrayList;
import java.util.LinkedList;

/*
* 按层次遍历树
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
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> res = new ArrayList<>();
	if(root==null) return res;

        Queue<Node> q = new LinkedList<>();
        
        q.offer(root);
        while(!q.isEmpty()){
            int size = q.size();
            List<Integer> list = new ArrayList<>();
               
            while(size>0){
                Node popQ = q.poll();
                list.add(popQ.val);
                for(int i=0;i<popQ.children.size();i++)
                {
                    q.offer(popQ.children.get(i));
                }
                size--;
                
            }
            res.add(new ArrayList(list));
        }
        return res;
    }
}
