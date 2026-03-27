import { Link } from '@tanstack/react-router'

export function Unit6() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 6</span>
        <h1>Iteration</h1>
        <p>
          Loops let you repeat code without rewriting it. This unit covers
          while loops, for loops, nested loops, sentinel values, random
          numbers, and common loop pitfalls.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#while">while Loops</a></li>
          <li><a href="#infinite">Infinite Loops & Off-by-One Errors</a></li>
          <li><a href="#do-while">do...while Loops</a></li>
          <li><a href="#for">for Loops</a></li>
          <li><a href="#nested">Nested Loops</a></li>
          <li><a href="#sentinel">Sentinel Values & Loop-and-a-Half</a></li>
          <li><a href="#boolean-loops">Boolean Variables in Loops</a></li>
          <li><a href="#random">Random Numbers</a></li>
          <li><a href="#math-random">Math.random()</a></li>
          <li><a href="#boolean-review">Boolean Review & De Morgan's Law</a></li>
        </ol>
      </nav>

      {/* ─── WHILE LOOPS ─── */}
      <section className="unit-section" id="while">
        <h2>while Loops</h2>
        <p>
          A <code>while</code> loop repeats a block of code <strong>as long
          as</strong> its condition is <code>true</code>. The condition is
          checked <em>before</em> each iteration — if it's <code>false</code>
          from the start, the body never executes.
        </p>

        <div className="code-block">
          <div className="code-label">Java — while loop basics</div>
          <pre><code>{`int count = 1;

while (count <= 5) {
    System.out.println("Count: " + count);
    count++;
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// The loop ran 5 times.
// After the loop, count is 6.`}</code></pre>
        </div>

        <div className="callout">
          <h4>while loop anatomy</h4>
          <table className="info-table">
            <thead>
              <tr><th>Part</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Initialization</strong></td><td>Set up the loop variable <em>before</em> the loop (<code>int count = 1</code>)</td></tr>
              <tr><td><strong>Condition</strong></td><td>Checked before each iteration (<code>count &lt;= 5</code>)</td></tr>
              <tr><td><strong>Update</strong></td><td>Change the loop variable inside the body (<code>count++</code>)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Summing numbers with while</div>
          <pre><code>{`// Sum of 1 to 100
int sum = 0;
int i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

System.out.println("Sum: " + sum);  // Sum: 5050`}</code></pre>
        </div>
      </section>

      {/* ─── INFINITE LOOPS & OFF-BY-ONE ─── */}
      <section className="unit-section" id="infinite">
        <h2>Infinite Loops & Off-by-One Errors</h2>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Infinite Loop</h4>
            <p>
              A loop whose condition <strong>never becomes false</strong>.
              The program runs forever (or until you force-quit it). Usually
              caused by forgetting the update step.
            </p>
            <div className="code-block">
              <div className="code-label">Bug — missing update</div>
              <pre><code>{`int x = 1;
while (x <= 10) {
    System.out.println(x);
    // forgot x++  ← runs forever!
}`}</code></pre>
            </div>
          </div>

          <div className="concept-card">
            <h4>Off-by-One Error</h4>
            <p>
              The loop runs <strong>one too many</strong> or <strong>one too
              few</strong> times. Usually caused by using <code>&lt;</code>
              instead of <code>&lt;=</code> (or vice versa).
            </p>
            <div className="code-block">
              <div className="code-label">Bug — one too few</div>
              <pre><code>{`// Goal: print 1 through 5
int i = 1;
while (i < 5) {       // < instead of <=
    System.out.println(i);
    i++;
}
// Only prints 1-4! Missing 5.`}</code></pre>
            </div>
          </div>
        </div>

        <div className="callout">
          <h4>Debugging tip</h4>
          <p>
            When tracing a loop, track the loop variable's value at the
            <strong> start</strong> of each iteration and check what the
            condition evaluates to. Write out a table:
            <code> i=1 (true), i=2 (true), ... i=5 (false → stop)</code>.
          </p>
        </div>
      </section>

      {/* ─── DO...WHILE ─── */}
      <section className="unit-section" id="do-while">
        <h2>do...while Loops</h2>
        <p>
          A <code>do...while</code> loop checks the condition <em>after</em>
          each iteration, so the body <strong>always executes at least
          once</strong>. Useful when you need to run the body before you can
          check the condition.
        </p>

        <div className="code-block">
          <div className="code-label">Java — do...while</div>
          <pre><code>{`import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int number;

do {
    System.out.print("Enter a positive number: ");
    number = sc.nextInt();
} while (number <= 0);

// The prompt runs at least once.
// If the user enters -3, it asks again.
// If the user enters 5, the loop ends.

System.out.println("You entered: " + number);`}</code></pre>
        </div>

        <div className="callout">
          <h4>while vs do...while</h4>
          <table className="info-table">
            <thead>
              <tr><th></th><th>while</th><th>do...while</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Condition check</strong></td><td>Before each iteration</td><td>After each iteration</td></tr>
              <tr><td><strong>Minimum runs</strong></td><td>0 (may never execute)</td><td>1 (always runs at least once)</td></tr>
              <tr><td><strong>Use when</strong></td><td>You might not need to run at all</td><td>You need at least one execution</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── FOR LOOPS ─── */}
      <section className="unit-section" id="for">
        <h2>for Loops</h2>
        <p>
          A <code>for</code> loop packs initialization, condition, and update
          into one line. It's ideal when you know how many iterations you need
          (a <strong>"fixed" loop</strong>).
        </p>

        <div className="code-block">
          <div className="code-label">Java — for loop structure</div>
          <pre><code>{`//  initialization;  condition;   update
//       ↓               ↓           ↓
for (int i = 0;      i < 5;       i++) {
    System.out.println("i = " + i);
}
// Output: i = 0, i = 1, i = 2, i = 3, i = 4
// Runs 5 times (0 through 4)`}</code></pre>
        </div>

        <div className="callout">
          <h4>The 3 parts of a for loop</h4>
          <table className="info-table">
            <thead>
              <tr><th>Part</th><th>Runs when</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Initialization</strong></td><td>Once, before the loop starts</td><td><code>int i = 0</code></td></tr>
              <tr><td><strong>Condition</strong></td><td>Before each iteration</td><td><code>i &lt; 5</code></td></tr>
              <tr><td><strong>Update</strong></td><td>After each iteration</td><td><code>i++</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Common for loop patterns</div>
          <pre><code>{`// Count up: 1 to 10
for (int i = 1; i <= 10; i++) {
    System.out.print(i + " ");
}
// 1 2 3 4 5 6 7 8 9 10

// Count down: 10 to 1
for (int i = 10; i >= 1; i--) {
    System.out.print(i + " ");
}
// 10 9 8 7 6 5 4 3 2 1

// Count by 2s (evens)
for (int i = 0; i <= 10; i += 2) {
    System.out.print(i + " ");
}
// 0 2 4 6 8 10

// Equivalent while loop:
int j = 0;
while (j < 5) {
    System.out.println(j);
    j++;
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>AP Exam Tip</h4>
          <p>
            <code>for (int i = 0; i &lt; n; i++)</code> runs exactly
            <strong> n</strong> times (0 through n-1).
            <code> for (int i = 1; i &lt;= n; i++)</code> also runs exactly
            <strong> n</strong> times (1 through n).
            Know both patterns cold.
          </p>
        </div>
      </section>

      {/* ─── NESTED LOOPS ─── */}
      <section className="unit-section" id="nested">
        <h2>Nested Loops</h2>
        <p>
          A loop inside a loop. The <strong>inner loop completes all its
          iterations</strong> for each single iteration of the outer loop.
          Think of it like a <strong>clock</strong>: the minute hand (inner)
          goes around 60 times for each tick of the hour hand (outer).
        </p>

        <div className="code-block">
          <div className="code-label">Java — Nested for loops</div>
          <pre><code>{`for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 4; col++) {
        System.out.print("* ");
    }
    System.out.println();  // new line after each row
}
// Output:
// * * * *
// * * * *
// * * * *

// Total iterations of inner loop: 3 × 4 = 12`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Multiplication table</div>
          <pre><code>{`for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.printf("%4d", i * j);
    }
    System.out.println();
}
// Output:
//    1   2   3   4   5
//    2   4   6   8  10
//    3   6   9  12  15
//    4   8  12  16  20
//    5  10  15  20  25`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Triangle pattern (inner depends on outer)</div>
          <pre><code>{`for (int row = 1; row <= 5; row++) {
    for (int col = 1; col <= row; col++) {
        System.out.print("* ");
    }
    System.out.println();
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *`}</code></pre>
        </div>

        <div className="callout">
          <h4>Clock analogy</h4>
          <p>
            Outer loop = <strong>hour hand</strong> (moves slowly).
            Inner loop = <strong>minute hand</strong> (completes a full cycle
            for each tick of the outer).
            For a 12-hour clock: <code>12 × 60 = 720</code> total minutes.
            For nested loops: <strong>outer iterations × inner iterations =
            total executions</strong>.
          </p>
        </div>
      </section>

      {/* ─── SENTINEL VALUES ─── */}
      <section className="unit-section" id="sentinel">
        <h2>Sentinel Values & Loop-and-a-Half</h2>
        <p>
          A <strong>sentinel value</strong> is a special value that signals the
          end of input. The loop keeps reading data until it encounters the
          sentinel.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Sentinel-controlled loop</div>
          <pre><code>{`import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int sum = 0;
int count = 0;

System.out.println("Enter numbers (-1 to stop):");

int number = sc.nextInt();        // read first value

while (number != -1) {            // -1 is the sentinel
    sum += number;
    count++;
    number = sc.nextInt();        // read next value
}

if (count > 0) {
    System.out.println("Average: " + (double) sum / count);
}`}</code></pre>
        </div>

        <h3>Loop-and-a-Half</h3>
        <p>
          Sometimes the cleanest way to write a sentinel loop is to check the
          condition in the <strong>middle</strong> of the loop body using
          <code>break</code>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Loop-and-a-half pattern</div>
          <pre><code>{`Scanner sc = new Scanner(System.in);
int sum = 0;
int count = 0;

while (true) {                        // "infinite" loop
    System.out.print("Enter a number (-1 to stop): ");
    int number = sc.nextInt();

    if (number == -1) {
        break;                        // exit the loop
    }

    sum += number;
    count++;
}

System.out.println("Total: " + sum);

// Advantage: the prompt only appears once in the code,
// and the sentinel is never processed as data.`}</code></pre>
        </div>
      </section>

      {/* ─── BOOLEAN VARIABLES IN LOOPS ─── */}
      <section className="unit-section" id="boolean-loops">
        <h2>Boolean Variables in Loops</h2>
        <p>
          A <code>boolean</code> flag can control loop execution or track
          whether a condition was ever met during iteration.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Boolean flag to control a loop</div>
          <pre><code>{`boolean found = false;
int[] numbers = {4, 7, 2, 9, 1, 5};
int target = 9;

int i = 0;
while (i < numbers.length && !found) {
    if (numbers[i] == target) {
        found = true;
    }
    i++;
}

if (found) {
    System.out.println(target + " was found!");
} else {
    System.out.println(target + " not found.");
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Flag to check a property of all elements</div>
          <pre><code>{`// Check if ALL scores are passing
int[] scores = {85, 92, 78, 95, 63};
boolean allPassing = true;

for (int k = 0; k < scores.length; k++) {
    if (scores[k] < 60) {
        allPassing = false;
    }
}

System.out.println("All passing? " + allPassing);  // true`}</code></pre>
        </div>
      </section>

      {/* ─── RANDOM NUMBERS ─── */}
      <section className="unit-section" id="random">
        <h2>Random Numbers</h2>
        <p>
          The <code>Random</code> class from <code>java.util</code> generates
          pseudo-random numbers. This is essential for games, simulations, and
          testing.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Random class</div>
          <pre><code>{`import java.util.Random;

Random rand = new Random();

// nextInt(n) → random int from 0 to n-1 (inclusive)
int die = rand.nextInt(6) + 1;      // 1 to 6
int coin = rand.nextInt(2);          // 0 or 1

// General formula for range [min, max]:
// rand.nextInt(max - min + 1) + min

int min = 10, max = 20;
int inRange = rand.nextInt(max - min + 1) + min;  // 10 to 20

// nextDouble() → random double from 0.0 (inclusive) to 1.0 (exclusive)
double probability = rand.nextDouble();  // 0.0 to 0.999...`}</code></pre>
        </div>

        <div className="callout">
          <h4>Random range formula</h4>
          <table className="info-table">
            <thead>
              <tr><th>Range you want</th><th>Code</th></tr>
            </thead>
            <tbody>
              <tr><td>0 to 9</td><td><code>rand.nextInt(10)</code></td></tr>
              <tr><td>1 to 10</td><td><code>rand.nextInt(10) + 1</code></td></tr>
              <tr><td>1 to 6 (die roll)</td><td><code>rand.nextInt(6) + 1</code></td></tr>
              <tr><td>5 to 15</td><td><code>rand.nextInt(11) + 5</code></td></tr>
              <tr><td>min to max</td><td><code>rand.nextInt(max - min + 1) + min</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── MATH.RANDOM ─── */}
      <section className="unit-section" id="math-random">
        <h2>Math.random()</h2>
        <p>
          <code>Math.random()</code> returns a <code>double</code> in the range
          <code>[0.0, 1.0)</code> — that is, 0.0 up to but <strong>not
          including</strong> 1.0. No import needed.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Math.random() for probability</div>
          <pre><code>{`// 30% chance of rain
if (Math.random() < 0.30) {
    System.out.println("It's raining!");
}

// 50/50 coin flip
if (Math.random() < 0.5) {
    System.out.println("Heads");
} else {
    System.out.println("Tails");
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Math.random() for integer ranges</div>
          <pre><code>{`// Formula: (int)(Math.random() * range) + min
// where range = max - min + 1

// Random int from 1 to 6
int die = (int)(Math.random() * 6) + 1;

// Random int from 10 to 20
int num = (int)(Math.random() * 11) + 10;

// How it works step by step for 1-6:
// Math.random()       → 0.0 to 0.999...
// * 6                 → 0.0 to 5.999...
// (int)               → 0 to 5
// + 1                 → 1 to 6`}</code></pre>
        </div>

        <div className="callout">
          <h4>Math.random() vs Random class</h4>
          <table className="info-table">
            <thead>
              <tr><th></th><th>Math.random()</th><th>Random class</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Import</strong></td><td>None</td><td><code>java.util.Random</code></td></tr>
              <tr><td><strong>Returns</strong></td><td><code>double</code> [0.0, 1.0)</td><td><code>int</code> or <code>double</code></td></tr>
              <tr><td><strong>For integers</strong></td><td>Requires casting</td><td><code>nextInt(n)</code> — cleaner</td></tr>
              <tr><td><strong>AP exam</strong></td><td>Tested</td><td>Tested</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── BOOLEAN REVIEW ─── */}
      <section className="unit-section" id="boolean-review">
        <h2>Boolean Review & De Morgan's Law</h2>
        <p>
          This unit reinforces the boolean concepts from Unit 5. Master these
          truth tables and De Morgan's Law — they appear heavily on the AP exam.
        </p>

        <div className="callout">
          <h4>Truth Tables</h4>
          <table className="info-table">
            <thead>
              <tr><th>A</th><th>B</th><th>A && B</th><th>A || B</th><th>!A</th></tr>
            </thead>
            <tbody>
              <tr><td>true</td><td>true</td><td>true</td><td>true</td><td>false</td></tr>
              <tr><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td></tr>
              <tr><td>false</td><td>true</td><td>false</td><td>true</td><td>true</td></tr>
              <tr><td>false</td><td>false</td><td>false</td><td>false</td><td>true</td></tr>
            </tbody>
          </table>
        </div>

        <div className="callout">
          <h4>De Morgan's Law</h4>
          <table className="info-table">
            <thead>
              <tr><th>Original</th><th>Equivalent</th></tr>
            </thead>
            <tbody>
              <tr><td><code>!(A && B)</code></td><td><code>!A || !B</code></td></tr>
              <tr><td><code>!(A || B)</code></td><td><code>!A && !B</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — AP-style boolean questions</div>
          <pre><code>{`int x = 5, y = 10;
boolean a = true, b = false;

// What does each evaluate to?
System.out.println(a && b);           // false
System.out.println(a || b);           // true
System.out.println(!a && b);          // false
System.out.println(!(a && b));        // true  (De Morgan's: !a || !b)
System.out.println(!(a || b));        // false (De Morgan's: !a && !b)

// With relational operators:
System.out.println(!(x > 3 && y < 20));
// De Morgan's: x <= 3 || y >= 20
// 5 <= 3 is false, 10 >= 20 is false → false || false → false

// Loop condition negation:
// "Keep going while NOT done"
// while (!(x == 0 || y == 0))
// is equivalent to:
// while (x != 0 && y != 0)`}</code></pre>
        </div>

        <div className="callout">
          <h4>Common AP Exam pattern</h4>
          <p>
            "Which of the following is equivalent to
            <code> !(x &gt; 5 && y &lt;= 10)</code>?"
            Apply De Morgan's: flip <code>&&</code> to <code>||</code>,
            negate each side: <code>x &lt;= 5 || y &gt; 10</code>.
          </p>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
