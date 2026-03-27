import { Link } from '@tanstack/react-router'

export function CS3Unit2() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 2</span>
        <h1>Sets & Maps</h1>
        <p>
          When you need fast lookups, no duplicates, or key-value pairs, arrays
          and ArrayLists aren't enough. Sets and Maps are the collections that
          power real-world Java applications.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#set-interface">The Set Interface</a></li>
          <li><a href="#hashset">HashSet</a></li>
          <li><a href="#treeset">TreeSet</a></li>
          <li><a href="#set-operations">Set Operations</a></li>
          <li><a href="#map-interface">The Map Interface</a></li>
          <li><a href="#hashmap">HashMap</a></li>
          <li><a href="#treemap">TreeMap</a></li>
          <li><a href="#iterating-maps">Iterating Over Maps</a></li>
          <li><a href="#choosing">Choosing the Right Collection</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="set-interface">
        <h2>The Set Interface</h2>
        <p>
          A <code>Set</code> is a collection with <strong>no duplicate
          elements</strong>. Adding a value that already exists has no effect.
          Sets don't have indices — you can't do <code>set.get(0)</code>.
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Method</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>add(e)</code></td><td>Adds element; returns <code>false</code> if already present</td></tr>
              <tr><td><code>remove(e)</code></td><td>Removes element</td></tr>
              <tr><td><code>contains(e)</code></td><td>Returns <code>true</code> if element is in the set</td></tr>
              <tr><td><code>size()</code></td><td>Number of elements</td></tr>
              <tr><td><code>isEmpty()</code></td><td>Returns <code>true</code> if empty</td></tr>
              <tr><td><code>clear()</code></td><td>Removes all elements</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="hashset">
        <h2>HashSet</h2>
        <p>
          <code>HashSet</code> stores elements in a hash table. Lookups, adds,
          and removes are <strong>O(1)</strong> average. Elements are in
          <strong>no particular order</strong>.
        </p>
        <div className="code-block">
          <div className="code-label">Java — HashSet basics</div>
          <pre><code>{`import java.util.HashSet;
import java.util.Set;

Set<String> names = new HashSet<>();

names.add("Alice");
names.add("Bob");
names.add("Alice");  // duplicate — ignored, set unchanged

System.out.println(names.size());       // 2
System.out.println(names.contains("Bob")); // true

for (String name : names) {
    System.out.println(name);  // order is NOT guaranteed
}

// Common use: remove duplicates from a list
ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 2, 3, 3, 3));
Set<Integer> unique = new HashSet<>(list);
System.out.println(unique);  // [1, 2, 3]`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="treeset">
        <h2>TreeSet</h2>
        <p>
          <code>TreeSet</code> keeps elements in <strong>sorted order</strong>
          (natural ordering or a custom Comparator). Operations are
          <strong> O(log N)</strong> instead of O(1).
        </p>
        <div className="code-block">
          <div className="code-label">Java — TreeSet keeps elements sorted</div>
          <pre><code>{`import java.util.TreeSet;
import java.util.Set;

Set<Integer> nums = new TreeSet<>();
nums.add(5);
nums.add(1);
nums.add(9);
nums.add(3);

System.out.println(nums);  // [1, 3, 5, 9] — always sorted!

// TreeSet-specific methods (cast to TreeSet to use):
TreeSet<Integer> tree = (TreeSet<Integer>) nums;
System.out.println(tree.first());   // 1  (smallest)
System.out.println(tree.last());    // 9  (largest)
System.out.println(tree.floor(4));  // 3  (largest <= 4)
System.out.println(tree.ceiling(4)); // 5 (smallest >= 4)`}</code></pre>
        </div>
        <div className="callout">
          <h4>HashSet vs TreeSet</h4>
          <table className="info-table">
            <thead><tr><th></th><th>HashSet</th><th>TreeSet</th></tr></thead>
            <tbody>
              <tr><td><strong>Order</strong></td><td>None</td><td>Sorted</td></tr>
              <tr><td><strong>add/contains/remove</strong></td><td>O(1) average</td><td>O(log N)</td></tr>
              <tr><td><strong>Use when</strong></td><td>You just need uniqueness + speed</td><td>You need elements in order</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="set-operations">
        <h2>Set Operations</h2>
        <div className="code-block">
          <div className="code-label">Java — Union, intersection, difference</div>
          <pre><code>{`Set<Integer> a = new HashSet<>(Arrays.asList(1, 2, 3, 4));
Set<Integer> b = new HashSet<>(Arrays.asList(3, 4, 5, 6));

// Union (all elements from both)
Set<Integer> union = new HashSet<>(a);
union.addAll(b);
System.out.println(union);  // [1, 2, 3, 4, 5, 6]

// Intersection (elements in both)
Set<Integer> intersection = new HashSet<>(a);
intersection.retainAll(b);
System.out.println(intersection);  // [3, 4]

// Difference (in a but not in b)
Set<Integer> difference = new HashSet<>(a);
difference.removeAll(b);
System.out.println(difference);  // [1, 2]`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="map-interface">
        <h2>The Map Interface</h2>
        <p>
          A <code>Map</code> stores <strong>key-value pairs</strong>. Each key
          maps to exactly one value. Keys must be unique; values can repeat.
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Method</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>put(key, value)</code></td><td>Adds/updates a key-value pair</td></tr>
              <tr><td><code>get(key)</code></td><td>Returns the value for key, or <code>null</code></td></tr>
              <tr><td><code>getOrDefault(key, def)</code></td><td>Returns value or default if key not found</td></tr>
              <tr><td><code>containsKey(key)</code></td><td>Returns <code>true</code> if key exists</td></tr>
              <tr><td><code>containsValue(val)</code></td><td>Returns <code>true</code> if value exists</td></tr>
              <tr><td><code>remove(key)</code></td><td>Removes the key-value pair</td></tr>
              <tr><td><code>size()</code></td><td>Number of key-value pairs</td></tr>
              <tr><td><code>keySet()</code></td><td>Returns a <code>Set</code> of all keys</td></tr>
              <tr><td><code>values()</code></td><td>Returns a <code>Collection</code> of all values</td></tr>
              <tr><td><code>entrySet()</code></td><td>Returns a <code>Set</code> of key-value entries</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="hashmap">
        <h2>HashMap</h2>
        <p>
          <code>HashMap</code> is the most common Map. O(1) average for
          put/get/remove. <strong>No ordering</strong> of keys.
        </p>
        <div className="code-block">
          <div className="code-label">Java — HashMap basics</div>
          <pre><code>{`import java.util.HashMap;
import java.util.Map;

Map<String, Integer> scores = new HashMap<>();

scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);
scores.put("Alice", 98);     // overwrites Alice's old score

System.out.println(scores.get("Bob"));         // 87
System.out.println(scores.get("Dave"));        // null
System.out.println(scores.getOrDefault("Dave", 0)); // 0
System.out.println(scores.containsKey("Alice"));    // true
System.out.println(scores.size());             // 3

// Word frequency counter
String text = "the cat sat on the mat the cat";
Map<String, Integer> freq = new HashMap<>();
for (String word : text.split(" ")) {
    freq.put(word, freq.getOrDefault(word, 0) + 1);
}
System.out.println(freq);  // {the=3, cat=2, sat=1, on=1, mat=1}`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="treemap">
        <h2>TreeMap</h2>
        <p>
          <code>TreeMap</code> keeps keys in <strong>sorted order</strong>.
          O(log N) operations. Useful when you need to iterate keys in order.
        </p>
        <div className="code-block">
          <div className="code-label">Java — TreeMap sorted keys</div>
          <pre><code>{`Map<String, Integer> sorted = new TreeMap<>();
sorted.put("Charlie", 92);
sorted.put("Alice", 95);
sorted.put("Bob", 87);

System.out.println(sorted);
// {Alice=95, Bob=87, Charlie=92} — keys sorted alphabetically`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="iterating-maps">
        <h2>Iterating Over Maps</h2>
        <div className="code-block">
          <div className="code-label">Java — Three ways to iterate a Map</div>
          <pre><code>{`Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);

// 1. Iterate over keys
for (String key : scores.keySet()) {
    System.out.println(key + ": " + scores.get(key));
}

// 2. Iterate over entries (most efficient)
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// 3. Iterate over values only
for (int score : scores.values()) {
    System.out.println(score);
}`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="choosing">
        <h2>Choosing the Right Collection</h2>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Need</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td>Ordered list, access by index</td><td><code>ArrayList</code></td></tr>
              <tr><td>No duplicates, fast lookup</td><td><code>HashSet</code></td></tr>
              <tr><td>No duplicates, sorted</td><td><code>TreeSet</code></td></tr>
              <tr><td>Key → value mapping, fast</td><td><code>HashMap</code></td></tr>
              <tr><td>Key → value mapping, sorted keys</td><td><code>TreeMap</code></td></tr>
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
