import { Link } from '@tanstack/react-router'

export function CS3Unit8() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 8</span>
        <h1>Binary Trees</h1>
        <p>
          Trees are hierarchical data structures. Binary trees — where each
          node has at most two children — are the foundation for BSTs, heaps,
          and expression trees.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#tree-vocab">Tree Vocabulary</a></li>
          <li><a href="#node-class">TreeNode Class</a></li>
          <li><a href="#traversals">Traversals: Inorder, Preorder, Postorder</a></li>
          <li><a href="#bfs-tree">Level-Order Traversal (BFS)</a></li>
          <li><a href="#bst">Binary Search Tree (BST)</a></li>
          <li><a href="#bst-operations">BST Operations</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="tree-vocab">
        <h2>Tree Vocabulary</h2>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Term</th><th>Definition</th></tr></thead>
            <tbody>
              <tr><td><strong>Root</strong></td><td>The topmost node (no parent)</td></tr>
              <tr><td><strong>Leaf</strong></td><td>A node with no children</td></tr>
              <tr><td><strong>Parent/Child</strong></td><td>A node directly above/below another</td></tr>
              <tr><td><strong>Height</strong></td><td>Longest path from root to a leaf</td></tr>
              <tr><td><strong>Depth</strong></td><td>Number of edges from root to a node</td></tr>
              <tr><td><strong>Subtree</strong></td><td>A node and all its descendants</td></tr>
              <tr><td><strong>Binary tree</strong></td><td>Each node has at most 2 children (left and right)</td></tr>
            </tbody>
          </table>
        </div>
        <div className="code-block">
          <div className="code-label">Example tree</div>
          <pre><code className="language-none">{`        8          ← root (depth 0)
       / \\
      3   10        ← depth 1
     / \\    \\
    1   6    14     ← depth 2 (1, 14 are leaves)
       / \\   /
      4   7  13     ← depth 3 (all leaves)

Height = 3`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="node-class">
        <h2>TreeNode Class</h2>
        <div className="code-block">
          <div className="code-label">Java — Binary tree node</div>
          <pre><code>{`public class TreeNode<E> {
    E data;
    TreeNode<E> left;
    TreeNode<E> right;

    public TreeNode(E data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Build a tree manually:
TreeNode<Integer> root = new TreeNode<>(8);
root.left = new TreeNode<>(3);
root.right = new TreeNode<>(10);
root.left.left = new TreeNode<>(1);
root.left.right = new TreeNode<>(6);`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="traversals">
        <h2>Traversals: Inorder, Preorder, Postorder</h2>
        <p>
          All three are <strong>depth-first</strong> traversals using
          recursion. They differ in <em>when</em> the current node is processed
          relative to its children.
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Traversal</th><th>Order</th><th>Mnemonic</th></tr></thead>
            <tbody>
              <tr><td><strong>Inorder</strong></td><td>Left → Node → Right</td><td>LNR — gives sorted order for BSTs</td></tr>
              <tr><td><strong>Preorder</strong></td><td>Node → Left → Right</td><td>NLR — process parent before children</td></tr>
              <tr><td><strong>Postorder</strong></td><td>Left → Right → Node</td><td>LRN — process children before parent</td></tr>
            </tbody>
          </table>
        </div>
        <div className="code-block">
          <div className="code-label">Java — All three traversals</div>
          <pre><code>{`public static void inorder(TreeNode<Integer> node) {
    if (node == null) return;
    inorder(node.left);
    System.out.print(node.data + " ");
    inorder(node.right);
}

public static void preorder(TreeNode<Integer> node) {
    if (node == null) return;
    System.out.print(node.data + " ");
    preorder(node.left);
    preorder(node.right);
}

public static void postorder(TreeNode<Integer> node) {
    if (node == null) return;
    postorder(node.left);
    postorder(node.right);
    System.out.print(node.data + " ");
}

//     8
//    / \\
//   3   10
//  / \\
// 1   6
//
// Inorder:   1 3 6 8 10
// Preorder:  8 3 1 6 10
// Postorder: 1 6 3 10 8`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="bfs-tree">
        <h2>Level-Order Traversal (BFS)</h2>
        <div className="code-block">
          <div className="code-label">Java — BFS with a Queue</div>
          <pre><code>{`public static void levelOrder(TreeNode<Integer> root) {
    if (root == null) return;
    Queue<TreeNode<Integer>> queue = new LinkedList<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
        TreeNode<Integer> node = queue.poll();
        System.out.print(node.data + " ");
        if (node.left != null)  queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
}
// For the tree above: 8 3 10 1 6`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="bst">
        <h2>Binary Search Tree (BST)</h2>
        <p>
          A BST has the property: for every node, all values in the <strong>left
          subtree are smaller</strong> and all values in the <strong>right
          subtree are larger</strong>. This enables O(log N) search.
        </p>
      </section>

      <section className="unit-section" id="bst-operations">
        <h2>BST Operations</h2>
        <div className="code-block">
          <div className="code-label">Java — BST search and insert</div>
          <pre><code>{`public static TreeNode<Integer> search(TreeNode<Integer> node, int target) {
    if (node == null) return null;
    if (target == node.data) return node;
    if (target < node.data) return search(node.left, target);
    return search(node.right, target);
}

public static TreeNode<Integer> insert(TreeNode<Integer> node, int value) {
    if (node == null) return new TreeNode<>(value);
    if (value < node.data) {
        node.left = insert(node.left, value);
    } else if (value > node.data) {
        node.right = insert(node.right, value);
    }
    return node;  // duplicates ignored
}

// Build BST by inserting: 8, 3, 10, 1, 6
TreeNode<Integer> root = null;
for (int v : new int[]{8, 3, 10, 1, 6}) {
    root = insert(root, v);
}`}</code></pre>
        </div>
        <div className="callout">
          <h4>BST performance</h4>
          <table className="info-table">
            <thead><tr><th>Operation</th><th>Average</th><th>Worst (unbalanced)</th></tr></thead>
            <tbody>
              <tr><td>Search</td><td>O(log N)</td><td>O(N)</td></tr>
              <tr><td>Insert</td><td>O(log N)</td><td>O(N)</td></tr>
              <tr><td>Delete</td><td>O(log N)</td><td>O(N)</td></tr>
              <tr><td>Inorder traversal</td><td>O(N)</td><td>O(N)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
