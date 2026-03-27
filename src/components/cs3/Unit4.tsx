import { Link } from '@tanstack/react-router'

export function CS3Unit4() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 4</span>
        <h1>Iterators & Linked Lists</h1>
        <p>
          Go beyond array-based storage. This unit covers the Iterator
          interface for traversing collections and LinkedList — a node-based
          data structure with very different performance characteristics.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#iterator">The Iterator Interface</a></li>
          <li><a href="#listiterator">ListIterator</a></li>
          <li><a href="#linked-concept">Linked List Concept</a></li>
          <li><a href="#linkedlist-class">Java's LinkedList Class</a></li>
          <li><a href="#arraylist-vs-linked">ArrayList vs LinkedList</a></li>
          <li><a href="#implementing">Implementing a Singly Linked List</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="iterator">
        <h2>The Iterator Interface</h2>
        <p>
          An <code>Iterator</code> is an object that steps through a collection
          one element at a time. It provides a <strong>safe way to remove
          elements</strong> during traversal (unlike enhanced for).
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Method</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>hasNext()</code></td><td>Returns <code>true</code> if more elements</td></tr>
              <tr><td><code>next()</code></td><td>Returns the next element and advances</td></tr>
              <tr><td><code>remove()</code></td><td>Removes the last element returned by <code>next()</code></td></tr>
            </tbody>
          </table>
        </div>
        <div className="code-block">
          <div className="code-label">Java — Using an Iterator</div>
          <pre><code>{`import java.util.*;

ArrayList<String> names = new ArrayList<>(Arrays.asList("Alice", "Bob", "Charlie", "Bob"));

// Remove all "Bob" entries safely
Iterator<String> it = names.iterator();
while (it.hasNext()) {
    String name = it.next();
    if (name.equals("Bob")) {
        it.remove();  // safe! unlike names.remove() in a for-each
    }
}
System.out.println(names);  // [Alice, Charlie]`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="listiterator">
        <h2>ListIterator</h2>
        <p>
          <code>ListIterator</code> extends <code>Iterator</code> with
          bidirectional traversal and the ability to add/set elements.
        </p>
        <div className="code-block">
          <div className="code-label">Java — ListIterator bidirectional traversal</div>
          <pre><code>{`List<String> list = new LinkedList<>(Arrays.asList("A", "B", "C"));
ListIterator<String> lit = list.listIterator();

// Forward
while (lit.hasNext()) {
    System.out.print(lit.next() + " ");  // A B C
}
System.out.println();

// Backward
while (lit.hasPrevious()) {
    System.out.print(lit.previous() + " ");  // C B A
}

// Add and set
lit = list.listIterator(1);  // start at index 1
lit.next();                  // returns "B"
lit.set("X");                // replaces "B" with "X"
lit.add("Y");                // inserts "Y" after "X"
System.out.println(list);   // [A, X, Y, C]`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="linked-concept">
        <h2>Linked List Concept</h2>
        <p>
          A linked list stores elements in <strong>nodes</strong>. Each node
          holds a value and a reference to the next node. There's no backing
          array — elements are scattered in memory, connected by pointers.
        </p>
        <div className="code-block">
          <div className="code-label">Structure</div>
          <pre><code className="language-none">{`head → [Alice | →] → [Bob | →] → [Charlie | null]

Each node contains:
  - data: the element value
  - next: reference to the next node (null for last node)`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="linkedlist-class">
        <h2>Java's LinkedList Class</h2>
        <div className="code-block">
          <div className="code-label">Java — LinkedList as a List and a Deque</div>
          <pre><code>{`import java.util.LinkedList;

LinkedList<String> list = new LinkedList<>();

// Same List methods as ArrayList
list.add("A");
list.add("B");
list.add("C");

// Plus efficient head/tail operations
list.addFirst("Z");     // [Z, A, B, C]
list.addLast("D");      // [Z, A, B, C, D]
list.removeFirst();     // [A, B, C, D]
list.removeLast();      // [A, B, C]

System.out.println(list.getFirst());  // A
System.out.println(list.getLast());   // C`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="arraylist-vs-linked">
        <h2>ArrayList vs LinkedList</h2>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Operation</th><th>ArrayList</th><th>LinkedList</th></tr></thead>
            <tbody>
              <tr><td>get(index)</td><td><strong>O(1)</strong></td><td>O(N)</td></tr>
              <tr><td>add to end</td><td><strong>O(1)</strong> amortized</td><td><strong>O(1)</strong></td></tr>
              <tr><td>add/remove at beginning</td><td>O(N) — shift all</td><td><strong>O(1)</strong></td></tr>
              <tr><td>add/remove in middle</td><td>O(N) — shift</td><td>O(N) to find + <strong>O(1)</strong> to link</td></tr>
              <tr><td>Memory</td><td>Compact (array)</td><td>More (node objects + pointers)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="implementing">
        <h2>Implementing a Singly Linked List</h2>
        <div className="code-block">
          <div className="code-label">Java — Node class and basic operations</div>
          <pre><code>{`public class SinglyLinkedList<E> {

    private static class Node<E> {
        E data;
        Node<E> next;
        Node(E data) { this.data = data; this.next = null; }
    }

    private Node<E> head;
    private int size;

    public SinglyLinkedList() { head = null; size = 0; }

    public void addFirst(E data) {
        Node<E> newNode = new Node<>(data);
        newNode.next = head;
        head = newNode;
        size++;
    }

    public E removeFirst() {
        if (head == null) throw new NoSuchElementException();
        E data = head.data;
        head = head.next;
        size--;
        return data;
    }

    public E get(int index) {
        Node<E> current = head;
        for (int i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    public int size() { return size; }
}`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
