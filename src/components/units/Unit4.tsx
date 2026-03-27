import { Link } from '@tanstack/react-router'

export function Unit4() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 4</span>
        <h1>Expressions, Math & Strings</h1>
        <p>
          This unit covers the building blocks of computation in Java —
          arithmetic with numbers, the Math class, type casting, and the full
          power of Strings and user input.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#vocab">Key Vocabulary</a></li>
          <li><a href="#assignment">Assignment & Arithmetic</a></li>
          <li><a href="#increment">Increment & Decrement Operators</a></li>
          <li><a href="#casting">Type Casting</a></li>
          <li><a href="#modulus">The Modulus Operator</a></li>
          <li><a href="#constants">Constants & Magic Numbers</a></li>
          <li><a href="#math-class">The Math Class</a></li>
          <li><a href="#rounding-error">Rounding Errors</a></li>
          <li><a href="#strings">Strings & Concatenation</a></li>
          <li><a href="#string-methods">String Methods</a></li>
          <li><a href="#escape">Escape Sequences</a></li>
          <li><a href="#input">Reading Input with Scanner</a></li>
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
              <tr><td><strong>Assignment</strong></td><td>Placing a new value into a variable using <code>=</code>.</td></tr>
              <tr><td><strong>Cast</strong></td><td>Explicitly converting a value from one type to another, e.g. <code>(int) 3.7</code>.</td></tr>
              <tr><td><strong>Concatenation</strong></td><td>Joining strings together with <code>+</code> to form a new string.</td></tr>
              <tr><td><strong>Constant</strong></td><td>A value that cannot change. Declared with the <code>final</code> keyword.</td></tr>
              <tr><td><strong>Decrement operator</strong></td><td><code>--</code> subtracts one from a variable.</td></tr>
              <tr><td><strong>Increment operator</strong></td><td><code>++</code> adds one to a variable.</td></tr>
              <tr><td><strong>final</strong></td><td>Keyword used to declare a constant.</td></tr>
              <tr><td><strong>Magic number</strong></td><td>A number that appears in code without explanation — avoid these.</td></tr>
              <tr><td><strong>Modulus operator</strong></td><td><code>%</code> returns the remainder of integer division.</td></tr>
              <tr><td><strong>Rounding error</strong></td><td>An error caused by the finite precision of floating-point storage.</td></tr>
              <tr><td><strong>Static method</strong></td><td>A method called on a class (not an object), e.g. <code>Math.sqrt()</code>.</td></tr>
              <tr><td><strong>String</strong></td><td>A sequence of characters.</td></tr>
              <tr><td><strong>Substring</strong></td><td>A portion of a string.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── ASSIGNMENT & ARITHMETIC ─── */}
      <section className="unit-section" id="assignment">
        <h2>Assignment & Arithmetic</h2>
        <p>
          The <code>=</code> operator stores a value in a variable. Java also
          provides compound assignment operators that combine arithmetic and
          assignment in one step.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Assignment and compound operators</div>
          <pre><code>{`int x = 10;       // assign 10 to x

x = x + 5;        // x is now 15
x += 5;            // same thing — shorthand

x = x - 3;        // x is now 12
x -= 3;            // same thing

x = x * 2;        // x is now 24
x *= 2;            // same thing

x = x / 4;        // x is now 6
x /= 4;            // same thing

// Integer division truncates (drops the decimal)
int result = 7 / 2;        // 3, NOT 3.5
double precise = 7.0 / 2;  // 3.5 (at least one operand is double)`}</code></pre>
        </div>

        <div className="callout">
          <h4>AP Exam Trap: Integer Division</h4>
          <p>
            When <strong>both</strong> operands are <code>int</code>, Java
            performs integer division — the result is truncated, not rounded.
            <code> 7 / 2</code> is <code>3</code>, not <code>4</code>.
            To get a decimal result, at least one operand must be a <code>double</code>.
          </p>
        </div>
      </section>

      {/* ─── INCREMENT & DECREMENT ─── */}
      <section className="unit-section" id="increment">
        <h2>Increment & Decrement Operators</h2>
        <p>
          Shorthand for adding or subtracting 1.
        </p>

        <div className="code-block">
          <div className="code-label">Java — ++ and --</div>
          <pre><code>{`int count = 0;

count++;    // count is now 1  (same as count = count + 1)
count++;    // count is now 2
count--;    // count is now 1  (same as count = count - 1)

// These are used everywhere — especially in loops (Unit 4 of AP curriculum)
// for (int i = 0; i < 10; i++) { ... }`}</code></pre>
        </div>
      </section>

      {/* ─── TYPE CASTING ─── */}
      <section className="unit-section" id="casting">
        <h2>Type Casting</h2>
        <p>
          <strong>Casting</strong> explicitly converts a value from one type to
          another. Put the target type in parentheses before the value.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Casting between int and double</div>
          <pre><code>{`double pi = 3.14159;
int truncated = (int) pi;       // 3 — decimal part is chopped off
                                 // (NOT rounded)

int a = 7;
int b = 2;
double result = (double) a / b; // 3.5
// Cast a to double FIRST, then divide
// Without the cast: 7 / 2 = 3 (integer division)

// Be careful with order:
double wrong = (double) (a / b);  // 3.0 — integer division happened first!`}</code></pre>
        </div>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Conversion</th><th>What happens</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td><code>double</code> → <code>int</code></td><td>Truncates (drops decimal)</td><td><code>(int) 9.99</code> → <code>9</code></td></tr>
              <tr><td><code>int</code> → <code>double</code></td><td>Adds <code>.0</code> (no data loss)</td><td><code>(double) 5</code> → <code>5.0</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── MODULUS ─── */}
      <section className="unit-section" id="modulus">
        <h2>The Modulus Operator <code>%</code></h2>
        <p>
          The modulus (remainder) operator returns the <strong>remainder</strong> after
          integer division. It's incredibly useful for checking divisibility,
          extracting digits, and cycling through values.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Modulus examples</div>
          <pre><code>{`System.out.println(15 % 4);   // 3   (15 / 4 = 3 remainder 3)
System.out.println(10 % 5);   // 0   (10 / 5 = 2 remainder 0)
System.out.println(7 % 10);   // 7   (7 / 10 = 0 remainder 7)
System.out.println(20 % 3);   // 2

// Common uses:
int num = 12345;
int lastDigit = num % 10;           // 5 — extract last digit
boolean isEven = (num % 2 == 0);    // false — check even/odd
int hour = 25 % 24;                 // 1 — wrap around (clock math)`}</code></pre>
        </div>
      </section>

      {/* ─── CONSTANTS ─── */}
      <section className="unit-section" id="constants">
        <h2>Constants & Magic Numbers</h2>
        <p>
          A <strong>magic number</strong> is a raw number in your code with no
          explanation. Replace them with named <strong>constants</strong> using
          the <code>final</code> keyword. Constants make code readable and easy to change.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Bad: Magic numbers</h4>
            <div className="code-block">
              <div className="code-label">Confusing</div>
              <pre><code>{`double tax = price * 0.0825;
if (age >= 16) {
    // what is 16? voting? driving?
}`}</code></pre>
            </div>
          </div>
          <div className="concept-card">
            <h4>Good: Named constants</h4>
            <div className="code-block">
              <div className="code-label">Clear</div>
              <pre><code>{`final double TAX_RATE = 0.0825;
final int DRIVING_AGE = 16;

double tax = price * TAX_RATE;
if (age >= DRIVING_AGE) {
    // much clearer!
}`}</code></pre>
            </div>
          </div>
        </div>

        <div className="callout">
          <h4>Convention</h4>
          <p>
            Constant names use <code>ALL_CAPS_WITH_UNDERSCORES</code> by
            convention. The <code>final</code> keyword prevents the value from
            being changed after initialization — attempting to reassign it
            causes a compile error.
          </p>
        </div>
      </section>

      {/* ─── MATH CLASS ─── */}
      <section className="unit-section" id="math-class">
        <h2>The Math Class</h2>
        <p>
          The <code>Math</code> class (in <code>java.lang</code> — no import
          needed) provides <strong>static methods</strong> for common
          mathematical operations. You call them on the class itself, not on an
          object.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Method</th><th>Returns</th><th>Example</th><th>Result</th></tr>
            </thead>
            <tbody>
              <tr><td><code>Math.abs(x)</code></td><td>Absolute value</td><td><code>Math.abs(-7)</code></td><td><code>7</code></td></tr>
              <tr><td><code>Math.pow(x, y)</code></td><td>x raised to y</td><td><code>Math.pow(2, 10)</code></td><td><code>1024.0</code></td></tr>
              <tr><td><code>Math.sqrt(x)</code></td><td>Square root</td><td><code>Math.sqrt(25)</code></td><td><code>5.0</code></td></tr>
              <tr><td><code>Math.min(a, b)</code></td><td>Smaller of two</td><td><code>Math.min(3, 7)</code></td><td><code>3</code></td></tr>
              <tr><td><code>Math.max(a, b)</code></td><td>Larger of two</td><td><code>Math.max(3, 7)</code></td><td><code>7</code></td></tr>
              <tr><td><code>Math.ceil(x)</code></td><td>Round up to integer</td><td><code>Math.ceil(2.1)</code></td><td><code>3.0</code></td></tr>
              <tr><td><code>Math.floor(x)</code></td><td>Round down to integer</td><td><code>Math.floor(2.9)</code></td><td><code>2.0</code></td></tr>
              <tr><td><code>Math.round(x)</code></td><td>Round to nearest integer</td><td><code>Math.round(2.5)</code></td><td><code>3</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Math class in action</div>
          <pre><code>{`// Distance formula: sqrt((x2-x1)^2 + (y2-y1)^2)
double x1 = 1, y1 = 2, x2 = 4, y2 = 6;
double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
System.out.println(distance);  // 5.0

// Clamping a value to a range [0, 100]
int score = 115;
score = (int) Math.min(100, Math.max(0, score));
System.out.println(score);  // 100

// ceil vs floor vs round
System.out.println(Math.ceil(2.1));   // 3.0
System.out.println(Math.floor(2.9));  // 2.0
System.out.println(Math.round(2.5));  // 3  (ties round up)
System.out.println(Math.round(2.4));  // 2`}</code></pre>
        </div>

        <div className="callout">
          <h4>Why are these static methods?</h4>
          <p>
            <code>Math.sqrt(25)</code> doesn't need an object — there's no
            "Math object" with state. The <code>Math</code> class is just a
            container for utility functions. That's what <strong>static
            methods</strong> are: methods called on the <em>class</em>, not on
            an instance.
          </p>
        </div>
      </section>

      {/* ─── ROUNDING ERRORS ─── */}
      <section className="unit-section" id="rounding-error">
        <h2>Rounding Errors</h2>
        <p>
          Computers store floating-point numbers in binary, and some decimal
          values can't be represented exactly. This leads to tiny inaccuracies
          called <strong>rounding errors</strong>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Rounding error in action</div>
          <pre><code>{`double result = 0.1 + 0.2;
System.out.println(result);
// Prints: 0.30000000000000004  (NOT 0.3!)

// This means you should NEVER compare doubles with ==
if (result == 0.3) {
    // This will NOT execute!
}

// Instead, check if the difference is very small:
final double EPSILON = 1e-10;
if (Math.abs(result - 0.3) < EPSILON) {
    // This WILL execute
    System.out.println("Close enough!");
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>AP Exam Tip</h4>
          <p>
            The AP exam won't usually test epsilon comparisons, but they
            <strong> will</strong> test that you understand <code>double</code>
            arithmetic can produce imprecise results. Don't assume
            <code> 0.1 + 0.2 == 0.3</code> is <code>true</code>.
          </p>
        </div>
      </section>

      {/* ─── STRINGS & CONCATENATION ─── */}
      <section className="unit-section" id="strings">
        <h2>Strings & Concatenation</h2>
        <p>
          A <code>String</code> is a sequence of characters. Strings are
          <strong> objects</strong> (not primitives) and are <strong>immutable</strong> —
          every operation returns a new String.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Concatenation</div>
          <pre><code>{`String first = "Hello";
String second = "World";

// Concatenation with +
String greeting = first + " " + second;  // "Hello World"

// Concatenation with +=
String message = "AP";
message += " CSA";   // "AP CSA"

// Concatenation with .concat()
String full = first.concat(" ").concat(second);  // "Hello World"

// Numbers are auto-converted when concatenated with a String
int score = 95;
String report = "Score: " + score;  // "Score: 95"

// Watch out for order of operations!
System.out.println("Sum: " + 3 + 4);    // "Sum: 34"  (string concat)
System.out.println("Sum: " + (3 + 4));  // "Sum: 7"   (math first)`}</code></pre>
        </div>

        <h3>Converting Strings to Numbers</h3>

        <div className="code-block">
          <div className="code-label">Java — Parsing strings to numbers</div>
          <pre><code>{`String numStr = "42";
String piStr = "3.14";

int num = Integer.parseInt(numStr);       // 42
double pi = Double.parseDouble(piStr);    // 3.14

// These throw NumberFormatException if the string isn't a valid number:
// int bad = Integer.parseInt("hello");   // CRASH!`}</code></pre>
        </div>
      </section>

      {/* ─── STRING METHODS ─── */}
      <section className="unit-section" id="string-methods">
        <h2>String Methods</h2>
        <p>
          These are the String methods you need to know for the AP exam.
          Remember: Strings are <strong>immutable</strong> — these methods
          return new Strings; they never modify the original.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Method</th><th>Returns</th><th>Example (<code>s = "Hello World"</code>)</th><th>Result</th></tr>
            </thead>
            <tbody>
              <tr><td><code>s.length()</code></td><td>Number of characters</td><td><code>s.length()</code></td><td><code>11</code></td></tr>
              <tr><td><code>s.substring(a, b)</code></td><td>Characters from index a to b-1</td><td><code>s.substring(0, 5)</code></td><td><code>"Hello"</code></td></tr>
              <tr><td><code>s.substring(a)</code></td><td>Characters from index a to end</td><td><code>s.substring(6)</code></td><td><code>"World"</code></td></tr>
              <tr><td><code>s.indexOf(str)</code></td><td>First index of str, or -1</td><td><code>s.indexOf("World")</code></td><td><code>6</code></td></tr>
              <tr><td><code>s.lastIndexOf(str)</code></td><td>Last index of str, or -1</td><td><code>s.lastIndexOf("l")</code></td><td><code>9</code></td></tr>
              <tr><td><code>s.charAt(i)</code></td><td>Character at index i</td><td><code>s.charAt(0)</code></td><td><code>'H'</code></td></tr>
              <tr><td><code>s.toUpperCase()</code></td><td>All uppercase copy</td><td><code>s.toUpperCase()</code></td><td><code>"HELLO WORLD"</code></td></tr>
              <tr><td><code>s.toLowerCase()</code></td><td>All lowercase copy</td><td><code>s.toLowerCase()</code></td><td><code>"hello world"</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — String methods in practice</div>
          <pre><code>{`String s = "AP Computer Science A";

// substring — remember: endIndex is EXCLUSIVE
System.out.println(s.substring(3, 11));   // "Computer"
System.out.println(s.substring(12));      // "Science A"

// indexOf — returns -1 if not found
System.out.println(s.indexOf("Science")); // 12
System.out.println(s.indexOf("math"));    // -1

// charAt — 0-indexed
System.out.println(s.charAt(0));          // 'A'
System.out.println(s.charAt(3));          // 'C'

// Chaining methods
String first3 = s.substring(0, 3).toLowerCase();
System.out.println(first3);  // "ap "

// Strings are IMMUTABLE — original is unchanged
String upper = s.toUpperCase();
System.out.println(s);       // "AP Computer Science A" (unchanged!)
System.out.println(upper);   // "AP COMPUTER SCIENCE A" (new String)`}</code></pre>
        </div>

        <h3>Characters</h3>

        <div className="code-block">
          <div className="code-label">Java — char type</div>
          <pre><code>{`// Characters use single quotes — Strings use double quotes
char letter = 'A';        // single character
String word = "A";        // String with one character — NOT the same type

// charAt returns a char
String name = "Java";
char first = name.charAt(0);  // 'J'

// Characters are secretly integers (ASCII/Unicode values)
char a = 'A';       // ASCII value 65
char b = (char)(a + 1);  // 'B' (ASCII 66)
System.out.println((int) 'A');  // 65
System.out.println((int) 'a');  // 97
System.out.println((int) '0');  // 48`}</code></pre>
        </div>
      </section>

      {/* ─── ESCAPE SEQUENCES ─── */}
      <section className="unit-section" id="escape">
        <h2>Escape Sequences</h2>
        <p>
          Some characters can't be typed directly in a String. Use a backslash
          <code>\</code> to create <strong>escape sequences</strong>.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Escape</th><th>Meaning</th><th>Example output</th></tr>
            </thead>
            <tbody>
              <tr><td><code>\n</code></td><td>Newline (line break)</td><td>Line 1↵Line 2</td></tr>
              <tr><td><code>\t</code></td><td>Tab</td><td>Col1→Col2</td></tr>
              <tr><td><code>\"</code></td><td>Double quote</td><td>She said "hi"</td></tr>
              <tr><td><code>\\</code></td><td>Backslash</td><td>C:\Users</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Escape sequences</div>
          <pre><code>{`System.out.println("Line 1\\nLine 2");
// Output:
// Line 1
// Line 2

System.out.println("Name\\tScore");
System.out.println("Alice\\t95");
// Output:
// Name    Score
// Alice   95

System.out.println("She said \\"hello\\"");
// Output: She said "hello"

System.out.println("C:\\\\Users\\\\Documents");
// Output: C:\\Users\\Documents`}</code></pre>
        </div>
      </section>

      {/* ─── READING INPUT ─── */}
      <section className="unit-section" id="input">
        <h2>Reading Input with Scanner</h2>
        <p>
          The <code>Scanner</code> class reads user input from the keyboard
          (<code>System.in</code>). It requires an import from <code>java.util</code>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Scanner basics</div>
          <pre><code>{`import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Reading different types
        System.out.print("Enter your name: ");
        String name = sc.nextLine();       // reads entire line

        System.out.print("Enter your age: ");
        int age = sc.nextInt();            // reads an integer

        System.out.print("Enter your GPA: ");
        double gpa = sc.nextDouble();      // reads a double

        System.out.print("Enter your initial: ");
        String word = sc.next();           // reads one word (to whitespace)

        System.out.println("Hello, " + name + "! Age: " + age);
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Scanner methods</h4>
          <table className="info-table">
            <thead>
              <tr><th>Method</th><th>Reads</th><th>Stops at</th></tr>
            </thead>
            <tbody>
              <tr><td><code>nextInt()</code></td><td>An integer</td><td>Whitespace (leaves newline in buffer)</td></tr>
              <tr><td><code>nextDouble()</code></td><td>A double</td><td>Whitespace (leaves newline in buffer)</td></tr>
              <tr><td><code>next()</code></td><td>One word</td><td>Whitespace (leaves newline in buffer)</td></tr>
              <tr><td><code>nextLine()</code></td><td>Entire line</td><td>Newline (consumes the newline)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>The Buffer Bug</h3>
        <p>
          This is the <strong>most common Scanner mistake</strong>. When you
          call <code>nextInt()</code>, <code>nextDouble()</code>, or
          <code>next()</code>, they leave the newline character <code>\n</code>
          in the input buffer. If <code>nextLine()</code> is called next, it
          reads that leftover newline and returns an empty string.
        </p>

        <div className="code-block">
          <div className="code-label">Java — The buffer bug and its fix</div>
          <pre><code>{`Scanner sc = new Scanner(System.in);

System.out.print("Enter age: ");
int age = sc.nextInt();          // reads 17, but \\n is still in buffer

System.out.print("Enter name: ");
String name = sc.nextLine();     // reads the leftover \\n — name is ""!

// FIX: add an empty nextLine() to consume the leftover \\n
System.out.print("Enter age: ");
int age2 = sc.nextInt();
sc.nextLine();                   // <-- clears the buffer!

System.out.print("Enter name: ");
String name2 = sc.nextLine();   // now this works correctly`}</code></pre>
        </div>

        <div className="callout">
          <h4>Rule of thumb</h4>
          <p>
            Whenever a <code>nextLine()</code> call follows a
            <code> nextInt()</code>, <code>nextDouble()</code>, or
            <code> next()</code>, add an extra <code>sc.nextLine()</code> in
            between to clear the buffer. This is tested on the AP exam.
          </p>
        </div>

        <h3>Converting Input Strings to Numbers</h3>

        <div className="code-block">
          <div className="code-label">Java — Parse input from dialog or text</div>
          <pre><code>{`// If you get input as a String (e.g. from JOptionPane):
String input = "42";

int num = Integer.parseInt(input);       // 42
double dec = Double.parseDouble("3.14"); // 3.14

// JOptionPane example (returns a String):
// String response = JOptionPane.showInputDialog("Enter a number:");
// int value = Integer.parseInt(response);

// showInputDialog ALWAYS returns a String,
// so you must parse it to use it as a number.`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
