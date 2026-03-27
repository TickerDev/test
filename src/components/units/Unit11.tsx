import { Link } from '@tanstack/react-router'

export function Unit11() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 11</span>
        <h1>Recursion</h1>
        <p>
          A method that calls itself. Recursion is an alternative to iteration
          for solving problems that have a repeating structure — and it's the
          key to understanding the Tower of Hanoi game on this very site.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#vocab">Key Vocabulary</a></li>
          <li><a href="#how-it-works">How Recursion Works</a></li>
          <li><a href="#program-stack">The Program Stack</a></li>
          <li><a href="#tracing">Tracing Recursion</a></li>
          <li><a href="#pre-post">Pre-Recursion vs Post-Recursion Printing</a></li>
          <li><a href="#return-recursion">Return Recursion</a></li>
          <li><a href="#multiple-calls">Multiple Recursive Calls</a></li>
          <li><a href="#vs-iteration">Recursion vs Iteration</a></li>
          <li><a href="#hanoi">Tower of Hanoi</a></li>
          <li><a href="#fibonacci">Fibonacci Sequence</a></li>
        </ol>
      </nav>

      {/* ─── VOCAB ─── */}
      <section className="unit-section" id="vocab">
        <h2>Key Vocabulary</h2>
        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Term</th><th>Definition</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Recursion</strong></td><td>A method that calls itself.</td></tr>
              <tr><td><strong>Recursive call</strong></td><td>The method call statement to itself inside the body of a recursive method.</td></tr>
              <tr><td><strong>Base case</strong></td><td>The condition that stops the recursive process. You can have multiple base cases.</td></tr>
              <tr><td><strong>Infinite recursion</strong></td><td>When a recursive method has no base case or it's never reached — theoretically calls itself forever.</td></tr>
              <tr><td><strong>Stack overflow error</strong></td><td>The practical result of infinite recursion. The program stack has a limit; exceeding it crashes the program.</td></tr>
              <tr><td><strong>Program stack</strong></td><td>The order methods are called and executed. Methods are added to the top; last in, first out (LIFO).</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="unit-section" id="how-it-works">
        <h2>How Recursion Works</h2>
        <p>
          Every recursive method needs two things: a <strong>base case</strong>
          (when to stop) and a <strong>recursive case</strong> (the method
          calling itself with a smaller/simpler input).
        </p>

        <div className="code-block">
          <div className="code-label">Java — Countdown: your first recursive method</div>
          <pre><code>{`public static void countdown(int n) {
    if (n <= 0) {                  // BASE CASE — stop!
        System.out.println("Go!");
        return;
    }
    System.out.println(n);         // do work
    countdown(n - 1);              // RECURSIVE CALL — smaller input
}

// countdown(3) prints:
// 3
// 2
// 1
// Go!`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Factorial (classic example)</div>
          <pre><code>{`// n! = n × (n-1) × (n-2) × ... × 1
// 5! = 5 × 4 × 3 × 2 × 1 = 120

public static int factorial(int n) {
    if (n <= 1) {           // base case
        return 1;
    }
    return n * factorial(n - 1);  // recursive case
}

System.out.println(factorial(5));  // 120`}</code></pre>
        </div>

        <div className="callout">
          <h4>The two ingredients</h4>
          <table className="info-table">
            <thead>
              <tr><th>Part</th><th>Purpose</th><th>What happens without it</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Base case</strong></td><td>Stops the recursion</td><td>Infinite recursion → StackOverflowError</td></tr>
              <tr><td><strong>Recursive case</strong></td><td>Breaks problem into smaller piece</td><td>No recursion happens at all</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── PROGRAM STACK ─── */}
      <section className="unit-section" id="program-stack">
        <h2>The Program Stack</h2>
        <p>
          Every time a method is called, Java pushes it onto the <strong>program
          stack</strong>. When the method returns, it's popped off. Recursion
          stacks up many calls, then unwinds them in reverse order (LIFO).
        </p>

        <div className="code-block">
          <div className="code-label">Tracing factorial(4) on the stack</div>
          <pre><code className="language-none">{`Call stack (growing down):

  factorial(4)  →  calls factorial(3)
  factorial(3)  →  calls factorial(2)
  factorial(2)  →  calls factorial(1)
  factorial(1)  →  BASE CASE: returns 1

Now unwind (bottom-up):
  factorial(1) returns 1
  factorial(2) returns 2 × 1 = 2
  factorial(3) returns 3 × 2 = 6
  factorial(4) returns 4 × 6 = 24  ← final answer`}</code></pre>
        </div>

        <div className="callout">
          <h4>StackOverflowError</h4>
          <p>
            The stack has a finite size. If recursion goes too deep (no base
            case, or input is too large), Java runs out of stack space and
            throws a <code>StackOverflowError</code> — a runtime crash.
          </p>
        </div>
      </section>

      {/* ─── TRACING ─── */}
      <section className="unit-section" id="tracing">
        <h2>Tracing Recursion</h2>
        <p>
          On the AP exam, you'll need to trace through recursive methods and
          determine the output or return value. Write out each call and its
          result.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Trace this: what does mystery(4) return?</div>
          <pre><code>{`public static int mystery(int n) {
    if (n == 0) {
        return 0;
    }
    return n + mystery(n - 1);
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Trace</div>
          <pre><code className="language-none">{`mystery(4) = 4 + mystery(3)
mystery(3) = 3 + mystery(2)
mystery(2) = 2 + mystery(1)
mystery(1) = 1 + mystery(0)
mystery(0) = 0  ← base case

Unwind:
mystery(1) = 1 + 0 = 1
mystery(2) = 2 + 1 = 3
mystery(3) = 3 + 3 = 6
mystery(4) = 4 + 6 = 10

Answer: 10  (it computes the sum 1+2+3+4)`}</code></pre>
        </div>
      </section>

      {/* ─── PRE/POST RECURSION ─── */}
      <section className="unit-section" id="pre-post">
        <h2>Pre-Recursion vs Post-Recursion Printing</h2>
        <p>
          Code <strong>before</strong> the recursive call runs on the way
          <em> down</em> (as calls stack up). Code <strong>after</strong> the
          recursive call runs on the way <em>back up</em> (as calls unwind).
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Pre-recursion (print before)</h4>
            <div className="code-block">
              <div className="code-label">Prints top-down</div>
              <pre><code>{`public static void pre(int n) {
    if (n <= 0) return;
    System.out.println(n); // BEFORE
    pre(n - 1);
}
// pre(3) prints:
// 3
// 2
// 1`}</code></pre>
            </div>
          </div>
          <div className="concept-card">
            <h4>Post-recursion (print after)</h4>
            <div className="code-block">
              <div className="code-label">Prints bottom-up</div>
              <pre><code>{`public static void post(int n) {
    if (n <= 0) return;
    post(n - 1);
    System.out.println(n); // AFTER
}
// post(3) prints:
// 1
// 2
// 3`}</code></pre>
            </div>
          </div>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Both pre and post in the same method</div>
          <pre><code>{`public static void both(int n) {
    if (n <= 0) return;
    System.out.println("Down: " + n);  // pre-recursion
    both(n - 1);
    System.out.println("Up: " + n);    // post-recursion
}

// both(3) prints:
// Down: 3    ← going down
// Down: 2
// Down: 1
// Up: 1      ← coming back up
// Up: 2
// Up: 3`}</code></pre>
        </div>
      </section>

      {/* ─── RETURN RECURSION ─── */}
      <section className="unit-section" id="return-recursion">
        <h2>Return Recursion</h2>
        <p>
          When a recursive method returns a value, each call waits for the
          result of its recursive call before computing its own result.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Power function</div>
          <pre><code>{`// Compute base^exp recursively
public static int power(int base, int exp) {
    if (exp == 0) {           // base case: anything^0 = 1
        return 1;
    }
    return base * power(base, exp - 1);
}

// power(2, 4):
// 2 * power(2, 3)
// 2 * 2 * power(2, 2)
// 2 * 2 * 2 * power(2, 1)
// 2 * 2 * 2 * 2 * power(2, 0)
// 2 * 2 * 2 * 2 * 1 = 16`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Sum of digits</div>
          <pre><code>{`public static int digitSum(int n) {
    if (n < 10) {              // base case: single digit
        return n;
    }
    return (n % 10) + digitSum(n / 10);
}

// digitSum(1234):
// 4 + digitSum(123)
// 4 + 3 + digitSum(12)
// 4 + 3 + 2 + digitSum(1)
// 4 + 3 + 2 + 1 = 10`}</code></pre>
        </div>
      </section>

      {/* ─── MULTIPLE RECURSIVE CALLS ─── */}
      <section className="unit-section" id="multiple-calls">
        <h2>Multiple Recursive Calls</h2>
        <p>
          A method can make <strong>more than one</strong> recursive call. This
          creates a tree of calls instead of a chain. Each branch must
          eventually hit a base case.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Binary recursion</div>
          <pre><code>{`public static int mystery(int n) {
    if (n <= 1) {
        return n;
    }
    return mystery(n - 1) + mystery(n - 2);
}

// mystery(4):
//                  mystery(4)
//                /            \\
//         mystery(3)      mystery(2)
//         /       \\        /       \\
//   mystery(2) mystery(1) mystery(1) mystery(0)
//    /     \\       = 1       = 1       = 0
// mystery(1) mystery(0)
//    = 1       = 0
//
// = (1+0) + 1 + 1 + 0 = 3`}</code></pre>
        </div>
      </section>

      {/* ─── VS ITERATION ─── */}
      <section className="unit-section" id="vs-iteration">
        <h2>Recursion vs Iteration</h2>
        <p>
          Any problem that can be solved recursively can also be solved with
          loops, and vice versa. Each approach has trade-offs.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th></th><th>Recursion</th><th>Iteration (loops)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Code length</strong></td><td>Often shorter, more elegant</td><td>Often longer, more explicit</td></tr>
              <tr><td><strong>Speed</strong></td><td>Slower (method call overhead, stack)</td><td>Faster (no call overhead)</td></tr>
              <tr><td><strong>Memory</strong></td><td>More (each call uses stack space)</td><td>Less (just loop variables)</td></tr>
              <tr><td><strong>Risk</strong></td><td>StackOverflowError if too deep</td><td>Infinite loop if condition never false</td></tr>
              <tr><td><strong>Best for</strong></td><td>Tree-like problems, divide-and-conquer</td><td>Simple counting, linear traversal</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Same problem, both ways</div>
          <pre><code>{`// Factorial — iterative
public static int factorialLoop(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Factorial — recursive
public static int factorialRec(int n) {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1);
}

// Both return 120 for n=5
// The iterative version is faster and uses less memory
// The recursive version is shorter and mirrors the math definition`}</code></pre>
        </div>
      </section>

      {/* ─── TOWER OF HANOI ─── */}
      <section className="unit-section" id="hanoi">
        <h2>Tower of Hanoi</h2>
        <p>
          The Tower of Hanoi is the <strong>classic</strong> recursion problem.
          Move N disks from peg A to peg C, using peg B as a helper. Rules:
          only move one disk at a time, and never place a larger disk on a
          smaller one.
        </p>

        <div className="callout">
          <h4>The algorithm (3 steps)</h4>
          <ol style={{ paddingLeft: '1.25rem', fontSize: '.9rem', lineHeight: '1.9', color: 'var(--on-surface-variant)' }}>
            <li>Move the top <strong>N-1</strong> disks from source to helper (using destination as temp)</li>
            <li>Move the <strong>1 remaining</strong> (largest) disk from source to destination</li>
            <li>Move the <strong>N-1</strong> disks from helper to destination (using source as temp)</li>
          </ol>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Tower of Hanoi recursive solution</div>
          <pre><code>{`public static void hanoi(int n, String from, String to, String helper) {
    if (n == 1) {
        System.out.println("Move disk 1 from " + from + " to " + to);
        return;
    }
    hanoi(n - 1, from, helper, to);      // Step 1: move N-1 to helper
    System.out.println("Move disk " + n + " from " + from + " to " + to);
    hanoi(n - 1, helper, to, from);      // Step 3: move N-1 to destination
}

// hanoi(3, "A", "C", "B") prints:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C`}</code></pre>
        </div>

        <div className="callout">
          <h4>Minimum number of moves</h4>
          <p>
            For <strong>N</strong> disks, the minimum number of moves is
            <strong> 2<sup>N</sup> - 1</strong>.
          </p>
          <table className="info-table">
            <thead>
              <tr><th>Disks (N)</th><th>Minimum moves (2<sup>N</sup> - 1)</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>1</td></tr>
              <tr><td>2</td><td>3</td></tr>
              <tr><td>3</td><td>7</td></tr>
              <tr><td>4</td><td>15</td></tr>
              <tr><td>5</td><td>31</td></tr>
              <tr><td>10</td><td>1,023</td></tr>
              <tr><td>20</td><td>1,048,575</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: '.75rem' }}>
            Try it yourself! <Link to="/game" style={{ color: 'var(--primary)', fontWeight: 600 }}>Play Tower of Hanoi →</Link>
          </p>
        </div>
      </section>

      {/* ─── FIBONACCI ─── */}
      <section className="unit-section" id="fibonacci">
        <h2>Fibonacci Sequence</h2>
        <p>
          The Fibonacci sequence starts with 0 and 1, then each subsequent
          number is the sum of the two before it:
          <strong> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</strong>
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Recursive solution (elegant but BAD)</h4>
            <div className="code-block">
              <div className="code-label">Simple but exponentially slow</div>
              <pre><code>{`public static int fibRec(int n) {
    if (n <= 1) return n;
    return fibRec(n - 1) + fibRec(n - 2);
}

// fibRec(5) = fibRec(4) + fibRec(3)
//           = (fibRec(3) + fibRec(2))
//             + (fibRec(2) + fibRec(1))
//           = ... massive tree of calls`}</code></pre>
            </div>
          </div>
          <div className="concept-card">
            <h4>Iterative solution (fast and good)</h4>
            <div className="code-block">
              <div className="code-label">Linear time, no wasted work</div>
              <pre><code>{`public static int fibIter(int n) {
    if (n <= 1) return n;
    int prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`}</code></pre>
            </div>
          </div>
        </div>

        <div className="callout">
          <h4>Why is recursive Fibonacci terrible?</h4>
          <p>
            The recursive version recalculates the <strong>same values over and
            over</strong>. To compute <code>fib(5)</code>, it computes
            <code>fib(3)</code> twice, <code>fib(2)</code> three times, etc.
            The number of calls grows <strong>exponentially</strong>.
          </p>
          <table className="info-table">
            <thead>
              <tr><th>N</th><th>Recursive calls</th><th>Iterative steps</th></tr>
            </thead>
            <tbody>
              <tr><td>5</td><td>15</td><td>4</td></tr>
              <tr><td>10</td><td>177</td><td>9</td></tr>
              <tr><td>20</td><td>21,891</td><td>19</td></tr>
              <tr><td>30</td><td>2,692,537</td><td>29</td></tr>
              <tr><td>40</td><td>331,160,281</td><td>39</td></tr>
              <tr><td>50</td><td>~40 billion</td><td>49</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: '.75rem' }}>
            <strong>Lesson:</strong> Just because a problem <em>can</em> be
            solved recursively doesn't mean it <em>should</em> be. Use
            recursion when it simplifies the problem (like Tower of Hanoi).
            Use iteration when recursion would repeat work.
          </p>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
