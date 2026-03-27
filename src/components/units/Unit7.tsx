import { Link } from '@tanstack/react-router'

export function Unit7() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 7</span>
        <h1>Arrays, 2D Arrays & ArrayList</h1>
        <p>
          When one variable isn't enough, you need collections. This unit covers
          arrays (fixed-size), 2D arrays (grids), and ArrayLists (resizable) —
          the three collection types on the AP exam.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#array-basics">Array Declaration & Instantiation</a></li>
          <li><a href="#array-access">Indexing, Bounds & Length</a></li>
          <li><a href="#array-traversal">Traversing Arrays</a></li>
          <li><a href="#enhanced-for">Enhanced for Loop</a></li>
          <li><a href="#array-algorithms">Simple Array Algorithms</a></li>
          <li><a href="#array-copy">Copying Arrays & Aliasing</a></li>
          <li><a href="#2d-arrays">2D Arrays</a></li>
          <li><a href="#2d-traversal">Traversing 2D Arrays</a></li>
          <li><a href="#arraylist">ArrayList Basics</a></li>
          <li><a href="#arraylist-methods">ArrayList Methods</a></li>
          <li><a href="#wrappers">Wrappers & Auto-boxing</a></li>
          <li><a href="#arraylist-enhanced">Enhanced for with ArrayList</a></li>
          <li><a href="#arraylist-algorithms">ArrayList Algorithms</a></li>
        </ol>
      </nav>

      {/* ═══ PART A: ARRAYS ═══ */}

      {/* ─── ARRAY BASICS ─── */}
      <section className="unit-section" id="array-basics">
        <h2>Array Declaration & Instantiation</h2>
        <p>
          An array is a <strong>fixed-size</strong> collection of elements, all
          the same type, stored in contiguous memory. Once created, its size
          cannot change.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Two ways to create arrays</div>
          <pre><code>{`// Method 1: Declare + instantiate with a size
double[] data = new double[10];    // 10 elements, all 0.0

// Method 2: Declare + initialize with values
double[] prices = {1.2, 3.4, 0.5, 6.0};  // 4 elements

// Declare without instantiating (uninitialized — can't use yet)
double[] empty;
// empty[0] = 5.0;  // ERROR — not instantiated!
empty = new double[5];  // now it's ready`}</code></pre>
        </div>

        <div className="callout">
          <h4>Default values when instantiated with <code>new</code></h4>
          <table className="info-table">
            <thead>
              <tr><th>Element type</th><th>Default value</th></tr>
            </thead>
            <tbody>
              <tr><td><code>int</code>, <code>long</code>, etc.</td><td><code>0</code></td></tr>
              <tr><td><code>double</code>, <code>float</code></td><td><code>0.0</code></td></tr>
              <tr><td><code>boolean</code></td><td><code>false</code></td></tr>
              <tr><td>Objects (<code>String</code>, etc.)</td><td><code>null</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── INDEXING ─── */}
      <section className="unit-section" id="array-access">
        <h2>Indexing, Bounds & Length</h2>
        <p>
          Array elements are accessed by <strong>index</strong> using square
          brackets. The first index is <strong>0</strong>, the last is
          <code> length - 1</code>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Array indexing</div>
          <pre><code>{`double[] data = {10.0, 20.0, 30.0, 40.0, 50.0};

// Access elements (0-indexed)
System.out.println(data[0]);   // 10.0 (first element)
System.out.println(data[2]);   // 30.0 (third element)
System.out.println(data[4]);   // 50.0 (last element)

// Modify an element
data[2] = 29.95;
System.out.println(data[2]);   // 29.95

// .length is a FIELD (not a method — no parentheses!)
System.out.println(data.length);  // 5

// Last element is always at index length - 1
System.out.println(data[data.length - 1]);  // 50.0`}</code></pre>
        </div>

        <div className="callout">
          <h4>ArrayIndexOutOfBoundsException</h4>
          <p>
            Accessing an index <code>&lt; 0</code> or <code>&gt;= length</code>
            causes a runtime crash. This is a <strong>bounds error</strong>.
          </p>
          <div className="code-block">
            <div className="code-label">Bug — out of bounds</div>
            <pre><code>{`int[] nums = new int[5];  // indices 0-4

nums[5] = 10;  // CRASH! ArrayIndexOutOfBoundsException
nums[-1] = 3;  // CRASH!`}</code></pre>
          </div>
        </div>
      </section>

      {/* ─── TRAVERSAL ─── */}
      <section className="unit-section" id="array-traversal">
        <h2>Traversing Arrays</h2>
        <p>
          Use a <code>for</code> loop to visit every element. The standard
          pattern uses <code>i &lt; data.length</code> as the condition.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Standard for loop traversal</div>
          <pre><code>{`int[] scores = {85, 92, 78, 95, 88};

// Print all elements
for (int i = 0; i < scores.length; i++) {
    System.out.println("Score " + i + ": " + scores[i]);
}

// Modify all elements (double each score)
for (int i = 0; i < scores.length; i++) {
    scores[i] = scores[i] * 2;
}`}</code></pre>
        </div>
      </section>

      {/* ─── ENHANCED FOR ─── */}
      <section className="unit-section" id="enhanced-for">
        <h2>Enhanced for Loop (for-each)</h2>
        <p>
          The enhanced for loop is a cleaner syntax for traversing an entire
          array. It visits <strong>every</strong> element from start to end.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Enhanced for loop</div>
          <pre><code>{`double[] data = {1.5, 2.7, 3.9, 4.1};

// Read each element — no index variable needed
for (double value : data) {
    System.out.println(value);
}

// Sum all elements
double sum = 0;
for (double value : data) {
    sum += value;
}
System.out.println("Sum: " + sum);  // 12.2`}</code></pre>
        </div>

        <div className="callout">
          <h4>Enhanced for loop rules</h4>
          <table className="info-table">
            <thead>
              <tr><th>Can do</th><th>Cannot do</th></tr>
            </thead>
            <tbody>
              <tr><td>Read every element</td><td>Modify array contents</td></tr>
              <tr><td>Accumulate values (sum, count)</td><td>Access the index</td></tr>
              <tr><td>Call methods on elements</td><td>Skip elements or traverse backwards</td></tr>
            </tbody>
          </table>
          <div className="code-block">
            <div className="code-label">Bug — assignment doesn't modify the array</div>
            <pre><code>{`int[] nums = {1, 2, 3};
for (int n : nums) {
    n = n * 2;  // changes the LOCAL copy, NOT the array!
}
// nums is still {1, 2, 3}`}</code></pre>
          </div>
        </div>
      </section>

      {/* ─── ARRAY ALGORITHMS ─── */}
      <section className="unit-section" id="array-algorithms">
        <h2>Simple Array Algorithms</h2>

        <div className="code-block">
          <div className="code-label">Java — Counting matches</div>
          <pre><code>{`int[] scores = {85, 92, 78, 95, 88, 91, 76};

int count = 0;
for (int score : scores) {
    if (score >= 90) {
        count++;
    }
}
System.out.println("A grades: " + count);  // 3`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Finding a value (linear search)</div>
          <pre><code>{`int[] data = {4, 7, 2, 9, 1, 5};
int target = 9;
int foundIndex = -1;

for (int i = 0; i < data.length; i++) {
    if (data[i] == target) {
        foundIndex = i;
        break;
    }
}

if (foundIndex >= 0) {
    System.out.println("Found at index " + foundIndex);  // Found at index 3
} else {
    System.out.println("Not found");
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Finding maximum and minimum</div>
          <pre><code>{`int[] data = {4, 7, 2, 9, 1, 5};

int max = data[0];  // start with first element
int min = data[0];

for (int i = 1; i < data.length; i++) {
    if (data[i] > max) {
        max = data[i];
    }
    if (data[i] < min) {
        min = data[i];
    }
}

System.out.println("Max: " + max);  // 9
System.out.println("Min: " + min);  // 1`}</code></pre>
        </div>
      </section>

      {/* ─── COPYING ─── */}
      <section className="unit-section" id="array-copy">
        <h2>Copying Arrays & Aliasing</h2>
        <p>
          Assigning one array variable to another does <strong>not</strong>
          copy the array — it creates an <strong>alias</strong> (both variables
          point to the same array in memory).
        </p>

        <div className="code-block">
          <div className="code-label">Java — Aliasing vs copying</div>
          <pre><code>{`double[] data = {1.0, 2.0, 3.0};

// ALIASING — both point to the SAME array
double[] prices = data;
prices[0] = 99.0;
System.out.println(data[0]);  // 99.0 — data changed too!

// TRUE COPY — create a new array and copy each element
double[] copy = new double[data.length];
for (int i = 0; i < data.length; i++) {
    copy[i] = data[i];
}
copy[0] = 0.0;
System.out.println(data[0]);  // 99.0 — data is unaffected`}</code></pre>
        </div>
      </section>

      {/* ═══ PART B: 2D ARRAYS ═══ */}

      {/* ─── 2D ARRAYS ─── */}
      <section className="unit-section" id="2d-arrays">
        <h2>2D Arrays</h2>
        <p>
          A 2D array is an <strong>array of arrays</strong> — essentially a
          grid with rows and columns. Declare it with two sets of brackets.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Creating 2D arrays</div>
          <pre><code>{`// Declare + instantiate: 3 rows × 4 columns
double[][] grid = new double[3][4];

// Access: grid[row][col]
grid[0][0] = 1.5;    // row 0, col 0
grid[1][2] = 9.9;    // row 1, col 2
System.out.println(grid[1][0]);  // 0.0 (default)

// Initializer list
double[][] data = {
    {1.0, 2.0, 3.0},
    {4.0, 5.0, 6.0},
    {7.0, 8.0, 9.0, 10.0}  // rows can have different lengths!
};

// Capture a single row
double[] row = data[1];  // row is {4.0, 5.0, 6.0}

// Number of rows
System.out.println(data.length);       // 3

// Number of columns in a specific row
System.out.println(data[0].length);    // 3
System.out.println(data[2].length);    // 4`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — 2D array of objects</div>
          <pre><code>{`// All elements default to null
BankAccount[][] accounts = new BankAccount[5][4];

// Must instantiate each object individually
accounts[0][0] = new BankAccount("A001", 500.0);
accounts[0][1] = new BankAccount("A002", 300.0);`}</code></pre>
        </div>
      </section>

      {/* ─── 2D TRAVERSAL ─── */}
      <section className="unit-section" id="2d-traversal">
        <h2>Traversing 2D Arrays</h2>
        <p>
          Use <strong>nested loops</strong>: the outer loop iterates over rows,
          the inner loop iterates over columns within each row.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Standard for loop traversal</div>
          <pre><code>{`double[][] data = {
    {1.0, 2.0, 3.0},
    {4.0, 5.0, 6.0},
    {7.0, 8.0, 9.0}
};

// Print the 2D array as a grid
for (int row = 0; row < data.length; row++) {
    for (int col = 0; col < data[row].length; col++) {
        System.out.print(data[row][col] + " ");
    }
    System.out.println();
}
// Output:
// 1.0 2.0 3.0
// 4.0 5.0 6.0
// 7.0 8.0 9.0`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Enhanced for loop with 2D arrays</div>
          <pre><code>{`double[][] data = {
    {1.0, 2.0, 3.0},
    {4.0, 5.0, 6.0},
    {7.0, 8.0, 9.0}
};

// Sum all elements
double sum = 0;
for (double[] row : data) {       // each row is a double[]
    for (double value : row) {     // each value in the row
        sum += value;
    }
}
System.out.println("Sum: " + sum);  // 45.0`}</code></pre>
        </div>

        <div className="callout">
          <h4>Key lengths</h4>
          <table className="info-table">
            <thead>
              <tr><th>Expression</th><th>Gives you</th></tr>
            </thead>
            <tbody>
              <tr><td><code>data.length</code></td><td>Number of <strong>rows</strong></td></tr>
              <tr><td><code>data[row].length</code></td><td>Number of <strong>columns</strong> in that row</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══ PART B: ARRAYLIST ═══ */}

      {/* ─── ARRAYLIST BASICS ─── */}
      <section className="unit-section" id="arraylist">
        <h2>ArrayList Basics</h2>
        <p>
          An <code>ArrayList</code> is a <strong>resizable</strong> collection
          from <code>java.util</code>. Unlike arrays, it grows and shrinks
          automatically as you add or remove elements.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Creating ArrayLists</div>
          <pre><code>{`import java.util.ArrayList;

// ArrayList of Strings (must use wrapper types, not primitives)
ArrayList<String> names = new ArrayList<>();

// ArrayList of Integers (not int — must use Integer wrapper)
ArrayList<Integer> scores = new ArrayList<>();

// Without a type parameter — stores Objects (avoid this)
ArrayList list = new ArrayList();  // not recommended`}</code></pre>
        </div>
      </section>

      {/* ─── ARRAYLIST METHODS ─── */}
      <section className="unit-section" id="arraylist-methods">
        <h2>ArrayList Methods</h2>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Method</th><th>What it does</th><th>Returns</th></tr>
            </thead>
            <tbody>
              <tr><td><code>add(obj)</code></td><td>Appends to end</td><td><code>boolean</code></td></tr>
              <tr><td><code>add(index, obj)</code></td><td>Inserts at index, shifts others right</td><td><code>void</code></td></tr>
              <tr><td><code>get(index)</code></td><td>Returns element at index</td><td>Element</td></tr>
              <tr><td><code>set(index, obj)</code></td><td>Replaces element at index</td><td>Old element</td></tr>
              <tr><td><code>remove(index)</code></td><td>Removes element at index, shifts left</td><td>Removed element</td></tr>
              <tr><td><code>remove(obj)</code></td><td>Removes first occurrence</td><td><code>boolean</code></td></tr>
              <tr><td><code>size()</code></td><td>Number of elements</td><td><code>int</code></td></tr>
              <tr><td><code>clear()</code></td><td>Removes all elements</td><td><code>void</code></td></tr>
              <tr><td><code>indexOf(obj)</code></td><td>Index of first occurrence, or -1</td><td><code>int</code></td></tr>
              <tr><td><code>contains(obj)</code></td><td>Checks if element exists</td><td><code>boolean</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — ArrayList methods in action</div>
          <pre><code>{`ArrayList<String> names = new ArrayList<>();

names.add("Alice");            // [Alice]
names.add("Bob");              // [Alice, Bob]
names.add("Charlie");          // [Alice, Bob, Charlie]

names.add(1, "Zara");          // [Alice, Zara, Bob, Charlie]
                                // inserted at index 1, shifted others right

System.out.println(names.get(0));      // Alice
System.out.println(names.size());      // 4

names.set(2, "Barbara");       // [Alice, Zara, Barbara, Charlie]
                                // replaced Bob with Barbara

names.remove(0);               // [Zara, Barbara, Charlie]
                                // removed Alice, shifted left

System.out.println(names.indexOf("Charlie"));  // 2
System.out.println(names.contains("Alice"));   // false

names.clear();                 // []
System.out.println(names.size());  // 0`}</code></pre>
        </div>

        <div className="callout">
          <h4>Array vs ArrayList</h4>
          <table className="info-table">
            <thead>
              <tr><th></th><th>Array</th><th>ArrayList</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Size</strong></td><td>Fixed at creation</td><td>Grows and shrinks</td></tr>
              <tr><td><strong>Type</strong></td><td>Primitives or objects</td><td>Objects only (wrappers for primitives)</td></tr>
              <tr><td><strong>Length</strong></td><td><code>.length</code> (field)</td><td><code>.size()</code> (method)</td></tr>
              <tr><td><strong>Access</strong></td><td><code>data[i]</code></td><td><code>list.get(i)</code></td></tr>
              <tr><td><strong>Modify</strong></td><td><code>data[i] = x</code></td><td><code>list.set(i, x)</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── WRAPPERS ─── */}
      <section className="unit-section" id="wrappers">
        <h2>Wrappers & Auto-boxing</h2>
        <p>
          ArrayLists can only hold <strong>objects</strong>, not primitives.
          Java provides <strong>wrapper classes</strong> (<code>Integer</code>,
          <code>Double</code>, etc.) and automatically converts between
          primitives and wrappers — this is <strong>auto-boxing</strong> and
          <strong>auto-unboxing</strong>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Auto-boxing and unboxing</div>
          <pre><code>{`ArrayList<Integer> numbers = new ArrayList<>();

// Auto-boxing: int → Integer (automatic)
numbers.add(42);           // 42 is auto-boxed to Integer.valueOf(42)
numbers.add(17);

// Auto-unboxing: Integer → int (automatic)
int first = numbers.get(0);   // Integer is auto-unboxed to int

// Manual boxing/unboxing (rarely needed)
Double d = 29.95;              // auto-boxing
double x = d;                   // auto-unboxing
double y = d.doubleValue();    // manual unboxing (same result)

int z = numbers.get(1).intValue();  // manual unboxing`}</code></pre>
        </div>

        <div className="callout">
          <h4>Wrapper classes</h4>
          <table className="info-table">
            <thead>
              <tr><th>Primitive</th><th>Wrapper</th></tr>
            </thead>
            <tbody>
              <tr><td><code>int</code></td><td><code>Integer</code></td></tr>
              <tr><td><code>double</code></td><td><code>Double</code></td></tr>
              <tr><td><code>boolean</code></td><td><code>Boolean</code></td></tr>
              <tr><td><code>char</code></td><td><code>Character</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── ENHANCED FOR WITH ARRAYLIST ─── */}
      <section className="unit-section" id="arraylist-enhanced">
        <h2>Enhanced for with ArrayList</h2>
        <p>
          The enhanced for loop works with ArrayLists just like arrays.
          <strong> No <code>get()</code> call needed</strong> — the variable
          holds each element directly.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Enhanced for with ArrayList</div>
          <pre><code>{`ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

// Read each element — no get() needed
for (String name : names) {
    System.out.println(name);
}

// You CAN call mutator methods on the elements
ArrayList<StringBuilder> builders = new ArrayList<>();
builders.add(new StringBuilder("Hello"));
builders.add(new StringBuilder("World"));

for (StringBuilder sb : builders) {
    sb.append("!");  // OK — mutating the object, not the list
}
// builders is now [Hello!, World!]

// You CANNOT add/remove from the list during enhanced for
// This throws ConcurrentModificationException:
// for (String name : names) {
//     names.remove(name);  // CRASH!
// }`}</code></pre>
        </div>
      </section>

      {/* ─── ARRAYLIST ALGORITHMS ─── */}
      <section className="unit-section" id="arraylist-algorithms">
        <h2>ArrayList Algorithms</h2>
        <p>
          The same algorithms from arrays apply to ArrayLists — just use
          <code>.get(i)</code> instead of <code>[i]</code> and
          <code>.size()</code> instead of <code>.length</code>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Counting matches</div>
          <pre><code>{`ArrayList<Integer> scores = new ArrayList<>();
scores.add(85); scores.add(92); scores.add(78);
scores.add(95); scores.add(88);

int count = 0;
for (int score : scores) {
    if (score >= 90) {
        count++;
    }
}
System.out.println("A grades: " + count);  // 2`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Finding max/min</div>
          <pre><code>{`ArrayList<Integer> data = new ArrayList<>();
data.add(4); data.add(7); data.add(2); data.add(9); data.add(1);

int max = data.get(0);
int min = data.get(0);

for (int value : data) {
    if (value > max) max = value;
    if (value < min) min = value;
}

System.out.println("Max: " + max);  // 9
System.out.println("Min: " + min);  // 1`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Removing elements (watch the index!)</div>
          <pre><code>{`ArrayList<Integer> nums = new ArrayList<>();
nums.add(3); nums.add(1); nums.add(4); nums.add(1); nums.add(5);

// Remove all 1s — traverse BACKWARDS to avoid skipping
for (int i = nums.size() - 1; i >= 0; i--) {
    if (nums.get(i) == 1) {
        nums.remove(i);
    }
}
System.out.println(nums);  // [3, 4, 5]

// Why backwards? When you remove index 1, everything shifts left.
// If you go forward, you skip the element that moved into index 1.`}</code></pre>
        </div>

        <div className="callout">
          <h4>equals() and toString()</h4>
          <div className="code-block">
            <div className="code-label">Java — Built-in ArrayList methods</div>
            <pre><code>{`ArrayList<String> a = new ArrayList<>();
a.add("X"); a.add("Y");

ArrayList<String> b = new ArrayList<>();
b.add("X"); b.add("Y");

// .equals() compares contents (not references)
System.out.println(a.equals(b));  // true

// .toString() gives a readable representation
System.out.println(a.toString()); // [X, Y]
System.out.println(a);            // [X, Y] (toString is called automatically)`}</code></pre>
          </div>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
