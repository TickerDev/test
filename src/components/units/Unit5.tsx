import { Link } from '@tanstack/react-router'

export function Unit5() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 5</span>
        <h1>Boolean Expressions & if Statements</h1>
        <p>
          Programs need to make decisions. This unit covers how to write
          conditions, combine them with logical operators, and control the flow
          of your program with if/else statements.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#vocab">Key Vocabulary</a></li>
          <li><a href="#booleans">Boolean Type & Expressions</a></li>
          <li><a href="#relational">Relational Operators</a></li>
          <li><a href="#if">if Statements</a></li>
          <li><a href="#if-else">if/else & else if</a></li>
          <li><a href="#nesting">Nested if Statements</a></li>
          <li><a href="#logical">Logical Operators: &&, ||, !</a></li>
          <li><a href="#short-circuit">Short-Circuit Evaluation</a></li>
          <li><a href="#demorgan">De Morgan's Law</a></li>
          <li><a href="#comparing">Comparing Objects & Strings</a></li>
          <li><a href="#dangling-else">The Dangling else Problem</a></li>
          <li><a href="#testing">Boundary Test Cases</a></li>
        </ol>
      </nav>

      {/* ─── KEY VOCABULARY ─── */}
      <section className="unit-section" id="vocab">
        <h2>Key Vocabulary</h2>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Term</th><th>Definition</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>boolean</strong></td><td>A type with exactly two values: <code>true</code> and <code>false</code>.</td></tr>
              <tr><td><strong>Condition</strong></td><td>An expression that evaluates to <code>true</code> or <code>false</code>.</td></tr>
              <tr><td><strong>Expression</strong></td><td>A construct made of constants, variables, method calls, and operators.</td></tr>
              <tr><td><strong>Relational operator</strong></td><td>An operator that compares two values, yielding a boolean (<code>&lt;</code>, <code>&gt;</code>, <code>==</code>, etc.).</td></tr>
              <tr><td><strong>Boolean / Logical operator</strong></td><td>An operator applied to boolean values: <code>&&</code> (and), <code>||</code> (or), <code>!</code> (not).</td></tr>
              <tr><td><strong>Block statement</strong></td><td>A group of statements in <code>{'{}'}</code> that act as a single statement.</td></tr>
              <tr><td><strong>Nesting</strong></td><td>Placing a decision inside another decision structure.</td></tr>
              <tr><td><strong>Dangling else</strong></td><td>An ambiguous <code>else</code> that could match more than one <code>if</code>.</td></tr>
              <tr><td><strong>Short-circuit evaluation</strong></td><td>Skipping evaluation of the rest of a boolean expression when the result is already determined.</td></tr>
              <tr><td><strong>De Morgan's Law</strong></td><td>Rules for negating <code>&&</code> and <code>||</code> expressions.</td></tr>
              <tr><td><strong>equals</strong></td><td>The <code>==</code> operator compares primitives by value and objects by reference.</td></tr>
              <tr><td><strong>Lexicographic ordering</strong></td><td>Dictionary-style String ordering by comparing first non-matching characters. Case-sensitive in Java (<code>Z</code> &lt; <code>a</code>).</td></tr>
              <tr><td><strong>null</strong></td><td>A reference that does not refer to any object.</td></tr>
              <tr><td><strong>Boundary test case</strong></td><td>A test using values at the edge of the legal range (e.g., 0 for non-negative integers).</td></tr>
              <tr><td><strong>Side effect</strong></td><td>An effect of a method other than returning a value.</td></tr>
              <tr><td><strong>Indentation</strong></td><td>Formatting that shows structure. Not required by Java, but essential for readability.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── BOOLEAN TYPE ─── */}
      <section className="unit-section" id="booleans">
        <h2>Boolean Type & Expressions</h2>
        <p>
          A <code>boolean</code> is a primitive type that holds exactly one of
          two values: <code>true</code> or <code>false</code>. Boolean
          expressions are the foundation of every decision in your code.
        </p>

        <div className="code-block">
          <div className="code-label">Java — boolean basics</div>
          <pre><code>{`boolean isRaining = true;
boolean isSunny = false;

// Boolean expressions evaluate to true or false
boolean canDrive = age >= 16;
boolean isAdult = age >= 18;

// Booleans can be used directly in conditions
if (isRaining) {
    System.out.println("Bring an umbrella");
}

// No need to write: if (isRaining == true) — that's redundant`}</code></pre>
        </div>
      </section>

      {/* ─── RELATIONAL OPERATORS ─── */}
      <section className="unit-section" id="relational">
        <h2>Relational Operators</h2>
        <p>
          Relational operators compare two values and return a <code>boolean</code>.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
            </thead>
            <tbody>
              <tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code></td><td><code>true</code></td></tr>
              <tr><td><code>!=</code></td><td>Not equal to</td><td><code>5 != 3</code></td><td><code>true</code></td></tr>
              <tr><td><code>&lt;</code></td><td>Less than</td><td><code>3 &lt; 5</code></td><td><code>true</code></td></tr>
              <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>5 &gt; 3</code></td><td><code>true</code></td></tr>
              <tr><td><code>&lt;=</code></td><td>Less than or equal to</td><td><code>5 &lt;= 5</code></td><td><code>true</code></td></tr>
              <tr><td><code>&gt;=</code></td><td>Greater than or equal to</td><td><code>3 &gt;= 5</code></td><td><code>false</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Relational operators</div>
          <pre><code>{`int score = 85;

System.out.println(score > 90);   // false
System.out.println(score >= 85);  // true
System.out.println(score == 100); // false
System.out.println(score != 0);   // true
System.out.println(score < 90);   // true`}</code></pre>
        </div>
      </section>

      {/* ─── IF STATEMENTS ─── */}
      <section className="unit-section" id="if">
        <h2>if Statements</h2>
        <p>
          An <code>if</code> statement executes a block of code only when a
          condition is <code>true</code>. If the condition is <code>false</code>,
          the block is skipped entirely.
        </p>

        <div className="code-block">
          <div className="code-label">Java — if statement</div>
          <pre><code>{`int temperature = 95;

// One-way decision
if (temperature > 90) {
    System.out.println("It's hot outside!");
}

// This always runs — it's OUTSIDE the if block
System.out.println("Have a nice day.");

// Single-statement body (no braces) — legal but risky
if (temperature > 100)
    System.out.println("Stay inside!");

// AP Exam Tip: ALWAYS use braces {} to avoid bugs.`}</code></pre>
        </div>
      </section>

      {/* ─── IF/ELSE ─── */}
      <section className="unit-section" id="if-else">
        <h2>if/else & else if</h2>
        <p>
          <code>if/else</code> provides a two-way decision. <code>else if</code>
          chains let you test multiple conditions in sequence — only the first
          matching branch executes.
        </p>

        <div className="code-block">
          <div className="code-label">Java — if/else (two-way decision)</div>
          <pre><code>{`int score = 75;

if (score >= 60) {
    System.out.println("You passed!");
} else {
    System.out.println("You failed.");
}
// Output: You passed!`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — else if chain (multi-way decision)</div>
          <pre><code>{`int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else if (score >= 60) {
    System.out.println("D");
} else {
    System.out.println("F");
}
// Output: B

// IMPORTANT: only ONE branch executes.
// Even though 85 >= 80 AND 85 >= 70, only the first
// matching condition ("B") runs. The rest are skipped.`}</code></pre>
        </div>

        <div className="callout">
          <h4>AP Exam Trap: independent if vs else if</h4>

          <div className="code-block">
            <div className="code-label">These are NOT the same!</div>
            <pre><code>{`int x = 5;

// CHAINED — only one runs
if (x > 3)
    System.out.print("A");     // prints A
else if (x > 1)
    System.out.print("B");     // skipped (first matched)

// INDEPENDENT — both run
if (x > 3)
    System.out.print("A");     // prints A
if (x > 1)
    System.out.print("B");     // also prints B

// Chained output: A
// Independent output: AB`}</code></pre>
          </div>
        </div>
      </section>

      {/* ─── NESTING ─── */}
      <section className="unit-section" id="nesting">
        <h2>Nested if Statements</h2>
        <p>
          You can place an <code>if</code> inside another <code>if</code>. The
          inner condition is only checked when the outer condition is
          <code> true</code>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Nested if</div>
          <pre><code>{`int age = 17;
boolean hasPermit = true;

if (age >= 16) {
    if (hasPermit) {
        System.out.println("You can drive!");
    } else {
        System.out.println("Get your permit first.");
    }
} else {
    System.out.println("Too young to drive.");
}

// Equivalent using && (often cleaner):
if (age >= 16 && hasPermit) {
    System.out.println("You can drive!");
}`}</code></pre>
        </div>
      </section>

      {/* ─── LOGICAL OPERATORS ─── */}
      <section className="unit-section" id="logical">
        <h2>Logical Operators: &&, ||, !</h2>
        <p>
          Logical operators combine or negate boolean expressions.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Operator</th><th>Name</th><th>Meaning</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td><code>&&</code></td><td>AND</td><td><code>true</code> only if <strong>both</strong> sides are true</td><td><code>a &gt; 0 && b &gt; 0</code></td></tr>
              <tr><td><code>||</code></td><td>OR</td><td><code>true</code> if <strong>either</strong> side is true</td><td><code>a &gt; 0 || b &gt; 0</code></td></tr>
              <tr><td><code>!</code></td><td>NOT</td><td>Flips <code>true</code> to <code>false</code> and vice versa</td><td><code>!done</code></td></tr>
            </tbody>
          </table>
        </div>

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

        <div className="code-block">
          <div className="code-label">Java — Logical operators in practice</div>
          <pre><code>{`int age = 17;
double gpa = 3.8;
boolean isEnrolled = true;

// AND — both must be true
if (age >= 16 && gpa >= 3.5) {
    System.out.println("Eligible for honors driving program");
}

// OR — at least one must be true
if (gpa >= 4.0 || age >= 18) {
    System.out.println("Special privileges");
}

// NOT — flips the boolean
if (!isEnrolled) {
    System.out.println("Please enroll first");
}

// Combining all three
if ((age >= 16 && gpa >= 3.0) || !isEnrolled) {
    System.out.println("See counselor");
}`}</code></pre>
        </div>
      </section>

      {/* ─── SHORT-CIRCUIT EVALUATION ─── */}
      <section className="unit-section" id="short-circuit">
        <h2>Short-Circuit Evaluation</h2>
        <p>
          Java stops evaluating a boolean expression as soon as the result is
          determined. This is called <strong>short-circuit evaluation</strong>.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>&& short-circuits on false</h4>
            <p>
              If the left side is <code>false</code>, the whole expression
              is <code>false</code> — the right side is <strong>never
              evaluated</strong>.
            </p>
          </div>
          <div className="concept-card">
            <h4>|| short-circuits on true</h4>
            <p>
              If the left side is <code>true</code>, the whole expression
              is <code>true</code> — the right side is <strong>never
              evaluated</strong>.
            </p>
          </div>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Short-circuit prevents crashes</div>
          <pre><code>{`String name = null;

// WITHOUT short-circuit, this would crash:
// name.length() would throw NullPointerException

// WITH short-circuit, this is SAFE:
if (name != null && name.length() > 0) {
    System.out.println("Name: " + name);
}
// name is null → left side is false → right side is SKIPPED
// No crash!

// Same idea with ||:
// if (x == 0 || y / x > 10)
// If x is 0, left side is true, division is skipped (no / by zero)`}</code></pre>
        </div>

        <div className="callout">
          <h4>AP Exam Tip</h4>
          <p>
            The AP exam frequently tests short-circuit evaluation. When tracing
            code, always check the left side first — if it determines the
            result, the right side <strong>does not execute</strong> (including
            any side effects like method calls or increments).
          </p>
        </div>
      </section>

      {/* ─── DE MORGAN'S LAW ─── */}
      <section className="unit-section" id="demorgan">
        <h2>De Morgan's Law</h2>
        <p>
          De Morgan's Law tells you how to negate compound boolean expressions.
          When you push a <code>!</code> through <code>&&</code> or
          <code> ||</code>, the operator flips and each part gets negated.
        </p>

        <div className="callout">
          <h4>The two rules</h4>
          <table className="info-table">
            <thead>
              <tr><th>Original</th><th>Equivalent</th><th>Rule</th></tr>
            </thead>
            <tbody>
              <tr><td><code>!(A && B)</code></td><td><code>!A || !B</code></td><td>NOT-AND becomes OR of NOTs</td></tr>
              <tr><td><code>!(A || B)</code></td><td><code>!A && !B</code></td><td>NOT-OR becomes AND of NOTs</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — De Morgan's Law examples</div>
          <pre><code>{`int age = 15;
boolean hasID = false;

// Original
if (!(age >= 18 && hasID)) {
    System.out.println("Cannot enter");
}

// Apply De Morgan's: !(A && B) → !A || !B
if (age < 18 || !hasID) {
    System.out.println("Cannot enter");  // same result!
}

// Another example:
// !(x > 5 || y < 10)
// becomes: x <= 5 && y >= 10

// Key: flip the operator AND negate each side
//   &&  ↔  ||     (swap)
//   >   ↔  <=     (negate)
//   <   ↔  >=     (negate)
//   ==  ↔  !=     (negate)`}</code></pre>
        </div>

        <div className="callout">
          <h4>Negation cheat sheet</h4>
          <table className="info-table">
            <thead>
              <tr><th>Operator</th><th>Negated</th></tr>
            </thead>
            <tbody>
              <tr><td><code>==</code></td><td><code>!=</code></td></tr>
              <tr><td><code>!=</code></td><td><code>==</code></td></tr>
              <tr><td><code>&lt;</code></td><td><code>&gt;=</code></td></tr>
              <tr><td><code>&gt;</code></td><td><code>&lt;=</code></td></tr>
              <tr><td><code>&lt;=</code></td><td><code>&gt;</code></td></tr>
              <tr><td><code>&gt;=</code></td><td><code>&lt;</code></td></tr>
              <tr><td><code>&&</code></td><td><code>||</code></td></tr>
              <tr><td><code>||</code></td><td><code>&&</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── COMPARING OBJECTS & STRINGS ─── */}
      <section className="unit-section" id="comparing">
        <h2>Comparing Objects & Strings</h2>
        <p>
          <code>==</code> compares <strong>primitives by value</strong> but
          <strong> objects by reference</strong> (memory address). To compare
          object <em>contents</em>, use <code>.equals()</code>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — == vs .equals()</div>
          <pre><code>{`// PRIMITIVES — == compares values (this is fine)
int a = 5;
int b = 5;
System.out.println(a == b);  // true

// STRINGS — == compares references (WRONG for content)
String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1 == s2);      // false! (different objects)
System.out.println(s1.equals(s2)); // true  (same content)

// String literals are special (shared in the "String pool")
String s3 = "Hello";
String s4 = "Hello";
System.out.println(s3 == s4);      // true (same pool reference)
// But NEVER rely on this — always use .equals() for Strings`}</code></pre>
        </div>

        <h3>Comparing Strings (Lexicographic Order)</h3>

        <div className="code-block">
          <div className="code-label">Java — compareTo for ordering</div>
          <pre><code>{`String a = "apple";
String b = "banana";

int result = a.compareTo(b);
// result < 0  → a comes BEFORE b
// result == 0 → a EQUALS b
// result > 0  → a comes AFTER b

System.out.println(a.compareTo(b));  // negative (a before b)
System.out.println(b.compareTo(a));  // positive (b after a)
System.out.println(a.compareTo("apple"));  // 0 (equal)

// Case-sensitive! Uppercase letters come BEFORE lowercase
System.out.println("Zoo".compareTo("apple"));  // negative
// 'Z' (90) < 'a' (97) in Unicode`}</code></pre>
        </div>

        <div className="callout">
          <h4>null safety</h4>
          <p>
            Calling <code>.equals()</code> or <code>.compareTo()</code> on
            <code>null</code> throws a <code>NullPointerException</code>.
            Always check for <code>null</code> first, or put the known
            non-null value on the left: <code>"hello".equals(myString)</code>.
          </p>
        </div>
      </section>

      {/* ─── DANGLING ELSE ─── */}
      <section className="unit-section" id="dangling-else">
        <h2>The Dangling else Problem</h2>
        <p>
          Without braces, an <code>else</code> attaches to the <strong>nearest
          </strong> <code>if</code> — which may not be what you intended.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Dangling else trap</div>
          <pre><code>{`int x = 5;

// What does this print?
if (x > 0)
    if (x > 100)
        System.out.println("Big");
else
    System.out.println("Not positive");

// Surprise! The else matches the INNER if (x > 100),
// NOT the outer if (x > 0).
// x is 5: outer if is true, inner if is false,
// so "Not positive" prints — even though x IS positive!

// FIX: always use braces
if (x > 0) {
    if (x > 100) {
        System.out.println("Big");
    }
} else {
    System.out.println("Not positive");
}
// Now the else correctly matches the OUTER if.
// x is 5: outer if is true, nothing prints.`}</code></pre>
        </div>

        <div className="callout">
          <h4>Rule</h4>
          <p>
            <strong>Always use braces <code>{'{}'}</code></strong>, even for
            single-statement bodies. This eliminates dangling else bugs entirely
            and makes your intent clear. The AP exam tests this.
          </p>
        </div>
      </section>

      {/* ─── BOUNDARY TESTING ─── */}
      <section className="unit-section" id="testing">
        <h2>Boundary Test Cases</h2>
        <p>
          When testing code with conditions, you need to check values at the
          <strong> edges</strong> (boundaries) of the valid range, not just
          typical values in the middle.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Testing a grade function</div>
          <pre><code>{`// Method: getLetterGrade(int score)
// Supposed to work for scores 0-100

// BOUNDARY test cases:
// getLetterGrade(0)    → edge: minimum valid input
// getLetterGrade(100)  → edge: maximum valid input
// getLetterGrade(90)   → edge: A/B boundary
// getLetterGrade(89)   → edge: just below A
// getLetterGrade(80)   → edge: B/C boundary
// getLetterGrade(60)   → edge: D/F boundary
// getLetterGrade(59)   → edge: just below passing

// TYPICAL test cases (less revealing):
// getLetterGrade(95)   → middle of A range
// getLetterGrade(42)   → middle of F range`}</code></pre>
        </div>

        <div className="callout">
          <h4>Boundary testing strategy</h4>
          <p>
            For a condition like <code>score &gt;= 90</code>, test:
            <strong> 89</strong> (just below), <strong>90</strong> (exactly at),
            and <strong>91</strong> (just above). Bugs almost always hide at
            boundaries, not in the middle of a range.
          </p>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
