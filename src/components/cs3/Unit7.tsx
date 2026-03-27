import { Link } from '@tanstack/react-router'

export function CS3Unit7() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 7</span>
        <h1>Queues & Priority Queues</h1>
        <p>
          If a stack is LIFO, a queue is FIFO — first in, first out. Priority
          queues add a twist: the highest-priority element comes out first.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#queue-concept">Queue Concept (FIFO)</a></li>
          <li><a href="#queue-interface">The Queue Interface</a></li>
          <li><a href="#queue-usage">Queue Usage Patterns</a></li>
          <li><a href="#deque">Deque (Double-Ended Queue)</a></li>
          <li><a href="#priority-queue">PriorityQueue</a></li>
          <li><a href="#comparable">Comparable & Custom Ordering</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="queue-concept">
        <h2>Queue Concept (FIFO)</h2>
        <p>
          A queue is <strong>First In, First Out</strong>. Think of a line at a
          store — the first person in line is the first served.
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Operation</th><th>Throws exception</th><th>Returns null/false</th></tr></thead>
            <tbody>
              <tr><td>Add to back</td><td><code>add(e)</code></td><td><code>offer(e)</code></td></tr>
              <tr><td>Remove from front</td><td><code>remove()</code></td><td><code>poll()</code></td></tr>
              <tr><td>Look at front</td><td><code>element()</code></td><td><code>peek()</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="queue-interface">
        <h2>The Queue Interface</h2>
        <div className="code-block">
          <div className="code-label">Java — Using Queue with LinkedList</div>
          <pre><code>{`import java.util.Queue;
import java.util.LinkedList;

Queue<String> line = new LinkedList<>();

line.offer("Alice");   // add to back
line.offer("Bob");
line.offer("Charlie");
// Queue (front to back): Alice, Bob, Charlie

System.out.println(line.peek());   // Alice (front, not removed)
System.out.println(line.poll());   // Alice (removed)
System.out.println(line.poll());   // Bob
System.out.println(line.size());   // 1
System.out.println(line.poll());   // Charlie
System.out.println(line.poll());   // null (empty — no exception)`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="queue-usage">
        <h2>Queue Usage Patterns</h2>
        <div className="code-block">
          <div className="code-label">Java — BFS uses a queue</div>
          <pre><code>{`// Process tasks in order
Queue<String> tasks = new LinkedList<>();
tasks.offer("Compile");
tasks.offer("Test");
tasks.offer("Deploy");

while (!tasks.isEmpty()) {
    String task = tasks.poll();
    System.out.println("Processing: " + task);
    // could add more tasks back: tasks.offer("Rollback");
}`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="deque">
        <h2>Deque (Double-Ended Queue)</h2>
        <p>
          A <code>Deque</code> supports insertion and removal at <strong>both
          ends</strong>. It can act as both a stack and a queue.
        </p>
        <div className="code-block">
          <div className="code-label">Java — ArrayDeque as stack and queue</div>
          <pre><code>{`import java.util.ArrayDeque;
import java.util.Deque;

Deque<String> deque = new ArrayDeque<>();

// As a queue (FIFO)
deque.offerLast("A");
deque.offerLast("B");
deque.pollFirst();  // A

// As a stack (LIFO)
deque.offerFirst("X");
deque.pollFirst();  // X

// ArrayDeque is faster than Stack and LinkedList for both use cases`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="priority-queue">
        <h2>PriorityQueue</h2>
        <p>
          A <code>PriorityQueue</code> orders elements by priority. The
          <strong> smallest</strong> element (by natural order) is always at
          the front. Internally uses a min-heap.
        </p>
        <div className="code-block">
          <div className="code-label">Java — PriorityQueue basics</div>
          <pre><code>{`import java.util.PriorityQueue;

PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(30);
pq.offer(10);
pq.offer(20);

// Always polls the SMALLEST element
System.out.println(pq.poll());  // 10
System.out.println(pq.poll());  // 20
System.out.println(pq.poll());  // 30

// Max-heap: use reverse comparator
PriorityQueue<Integer> maxPQ = new PriorityQueue<>(Collections.reverseOrder());
maxPQ.offer(30);
maxPQ.offer(10);
maxPQ.offer(20);
System.out.println(maxPQ.poll());  // 30 (largest first)`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="comparable">
        <h2>Comparable & Custom Ordering</h2>
        <div className="code-block">
          <div className="code-label">Java — Custom priority with Comparable</div>
          <pre><code>{`public class Task implements Comparable<Task> {
    String name;
    int priority;  // lower number = higher priority

    public Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }

    @Override
    public int compareTo(Task other) {
        return Integer.compare(this.priority, other.priority);
    }

    @Override
    public String toString() { return name + "(" + priority + ")"; }
}

PriorityQueue<Task> pq = new PriorityQueue<>();
pq.offer(new Task("Low", 3));
pq.offer(new Task("Critical", 1));
pq.offer(new Task("Medium", 2));

while (!pq.isEmpty()) {
    System.out.println(pq.poll());
}
// Critical(1), Medium(2), Low(3)`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
