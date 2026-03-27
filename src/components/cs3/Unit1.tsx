import { Link } from '@tanstack/react-router'

export function CS3Unit1() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 1</span>
        <h1>Files & Exceptions</h1>
        <p>
          Real programs read and write files and handle errors gracefully. This
          unit covers the File class, reading/writing text files with Scanner
          and PrintWriter, and Java's exception handling system.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#file-class">The File Class</a></li>
          <li><a href="#file-methods">File Methods</a></li>
          <li><a href="#printwriter">Writing Files with PrintWriter</a></li>
          <li><a href="#scanner-files">Reading Files with Scanner</a></li>
          <li><a href="#loops-scanner">Loops with Scanner & Files</a></li>
          <li><a href="#exceptions">What Are Exceptions?</a></li>
          <li><a href="#hierarchy">Exception Hierarchy</a></li>
          <li><a href="#checked-unchecked">Checked vs Unchecked Exceptions</a></li>
          <li><a href="#try-catch">try, catch, finally</a></li>
          <li><a href="#throw-throws">throw and throws</a></li>
          <li><a href="#tracing">Tracing Exception Code</a></li>
        </ol>
      </nav>

      {/* ─── FILE CLASS ─── */}
      <section className="unit-section" id="file-class">
        <h2>The File Class</h2>
        <p>
          A <code>File</code> object represents a <strong>path</strong> to a
          file or directory on disk. Creating a <code>File</code> object does
          <strong>not</strong> create an actual file — it's just a reference to
          a location that may or may not exist.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Creating File objects</div>
          <pre><code>{`import java.io.File;

// A File object is just a path — the file may not exist yet
File f = new File("data.txt");
File dir = new File("output/reports");
File abs = new File("C:/Users/student/Desktop/scores.txt");

// The file is NOT created on disk by this.
// It's just a Java object that knows the path.
System.out.println(f.getName());  // data.txt`}</code></pre>
        </div>
      </section>

      {/* ─── FILE METHODS ─── */}
      <section className="unit-section" id="file-methods">
        <h2>File Methods</h2>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Method</th><th>Returns</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><code>getName()</code></td><td><code>String</code></td><td>The file name (not the full path)</td></tr>
              <tr><td><code>exists()</code></td><td><code>boolean</code></td><td><code>true</code> if the file/directory exists on disk</td></tr>
              <tr><td><code>length()</code></td><td><code>long</code></td><td>File size in bytes (0 if doesn't exist)</td></tr>
              <tr><td><code>getAbsolutePath()</code></td><td><code>String</code></td><td>The full path from the root of the filesystem</td></tr>
              <tr><td><code>canRead()</code></td><td><code>boolean</code></td><td><code>true</code> if the program can read this file</td></tr>
              <tr><td><code>canWrite()</code></td><td><code>boolean</code></td><td><code>true</code> if the program can write to this file</td></tr>
              <tr><td><code>createNewFile()</code></td><td><code>boolean</code></td><td>Creates the file if it doesn't exist. Returns <code>true</code> if created. Throws <code>IOException</code>.</td></tr>
              <tr><td><code>delete()</code></td><td><code>boolean</code></td><td>Deletes the file. Returns <code>true</code> if successful.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — File methods in action</div>
          <pre><code>{`import java.io.File;
import java.io.IOException;

File f = new File("data.txt");

System.out.println(f.getName());           // data.txt
System.out.println(f.exists());            // false (doesn't exist yet)
System.out.println(f.getAbsolutePath());   // C:\\projects\\data.txt

f.createNewFile();  // actually creates the file on disk now
                     // throws IOException — must handle it!

System.out.println(f.exists());            // true
System.out.println(f.length());            // 0 (empty file)
System.out.println(f.canRead());           // true
System.out.println(f.canWrite());          // true

f.delete();                                // removes the file
System.out.println(f.exists());            // false`}</code></pre>
        </div>

        <div className="callout">
          <h4>Tracing tip</h4>
          <p>
            <code>new File("x.txt")</code> does NOT create a file.
            <code> createNewFile()</code> does. <code>exists()</code> returns
            <code>false</code> until the file is actually on disk. Watch for
            this distinction in trace questions.
          </p>
        </div>
      </section>

      {/* ─── PRINTWRITER ─── */}
      <section className="unit-section" id="printwriter">
        <h2>Writing Files with PrintWriter</h2>
        <p>
          <code>PrintWriter</code> writes text to a file sequentially. It has
          the same <code>print</code>/<code>println</code> methods you already
          know from <code>System.out</code>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Writing to a file</div>
          <pre><code>{`import java.io.PrintWriter;
import java.io.File;
import java.io.IOException;

public class WriteDemo {
    public static void main(String[] args) throws IOException {
        // Creates the file if it doesn't exist; overwrites if it does
        PrintWriter out = new PrintWriter(new File("output.txt"));

        out.println("Name: Alice");
        out.println("Score: 95");
        out.print("Grade: ");
        out.println("A");

        // IMPORTANT: must close or flush to save!
        out.close();

        // output.txt now contains:
        // Name: Alice
        // Score: 95
        // Grade: A
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Critical: always close the writer</h4>
          <p>
            If you don't call <code>out.close()</code>, the data may never
            actually be written to disk. <code>PrintWriter</code> buffers
            output — <code>close()</code> flushes the buffer and releases
            the file.
          </p>
        </div>
      </section>

      {/* ─── SCANNER FILES ─── */}
      <section className="unit-section" id="scanner-files">
        <h2>Reading Files with Scanner</h2>
        <p>
          You already know <code>Scanner</code> for keyboard input
          (<code>System.in</code>). It works the same way with files — just
          pass a <code>File</code> object instead.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Reading from a file</div>
          <pre><code>{`import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

public class ReadDemo {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner in = new Scanner(new File("data.txt"));

        // Same methods as reading from keyboard
        String line = in.nextLine();       // reads entire line
        String word = in.next();           // reads one token
        int num = in.nextInt();            // reads an integer
        double dec = in.nextDouble();      // reads a double

        in.close();
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Scanner methods for files</h4>
          <table className="info-table">
            <thead>
              <tr><th>Reading</th><th>Checking (has more?)</th></tr>
            </thead>
            <tbody>
              <tr><td><code>next()</code></td><td><code>hasNext()</code></td></tr>
              <tr><td><code>nextLine()</code></td><td><code>hasNextLine()</code></td></tr>
              <tr><td><code>nextInt()</code></td><td><code>hasNextInt()</code></td></tr>
              <tr><td><code>nextDouble()</code></td><td><code>hasNextDouble()</code></td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: '.5rem' }}>
            The <code>hasNext...()</code> methods return <code>true</code> if
            there's more data of that type to read — essential for loops.
          </p>
        </div>
      </section>

      {/* ─── LOOPS WITH SCANNER ─── */}
      <section className="unit-section" id="loops-scanner">
        <h2>Loops with Scanner & Files</h2>
        <p>
          The most common file-reading pattern: loop until there's no more
          data.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Read all lines from a file</div>
          <pre><code>{`Scanner in = new Scanner(new File("names.txt"));

while (in.hasNextLine()) {
    String line = in.nextLine();
    System.out.println(line);
}
in.close();`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Read all integers and compute sum</div>
          <pre><code>{`Scanner in = new Scanner(new File("numbers.txt"));

int sum = 0;
int count = 0;

while (in.hasNextInt()) {
    sum += in.nextInt();
    count++;
}

System.out.println("Sum: " + sum);
System.out.println("Count: " + count);
System.out.println("Average: " + (double) sum / count);
in.close();`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Read words, skip non-integers</div>
          <pre><code>{`// File contents: "Alice 95 Bob 87 Charlie 92"
Scanner in = new Scanner(new File("mixed.txt"));

while (in.hasNext()) {
    if (in.hasNextInt()) {
        int score = in.nextInt();
        System.out.println("Score: " + score);
    } else {
        String name = in.next();
        System.out.println("Name: " + name);
    }
}
in.close();
// Output:
// Name: Alice
// Score: 95
// Name: Bob
// Score: 87
// Name: Charlie
// Score: 92`}</code></pre>
        </div>

        <div className="callout">
          <h4>Tracing tip</h4>
          <p>
            <code>hasNext()</code> checks for <strong>any</strong> token.
            <code>hasNextLine()</code> checks for another line.
            <code>hasNextInt()</code> checks if the next token is an integer.
            When the file is exhausted, all return <code>false</code>.
          </p>
        </div>
      </section>

      {/* ─── EXCEPTIONS ─── */}
      <section className="unit-section" id="exceptions">
        <h2>What Are Exceptions?</h2>
        <p>
          An <strong>exception</strong> is an event that disrupts the normal
          flow of a program. When an error occurs, Java creates an exception
          object and <strong>throws</strong> it. If nobody catches it, the
          program crashes with a stack trace.
        </p>

        <div className="code-block">
          <div className="code-label">Java — An unhandled exception</div>
          <pre><code>{`int[] arr = {1, 2, 3};
System.out.println(arr[5]);  // throws ArrayIndexOutOfBoundsException

// If unhandled, the program crashes and prints:
// Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 5
//     at Main.main(Main.java:3)`}</code></pre>
        </div>
      </section>

      {/* ─── HIERARCHY ─── */}
      <section className="unit-section" id="hierarchy">
        <h2>Exception Hierarchy</h2>
        <p>
          All exceptions are objects that extend <code>Throwable</code>. The
          two main branches are <code>Error</code> (serious, unrecoverable)
          and <code>Exception</code> (can be handled).
        </p>

        <div className="code-block">
          <div className="code-label">Exception inheritance tree</div>
          <pre><code className="language-none">{`Throwable
├── Error                          (serious — don't catch these)
│   ├── StackOverflowError
│   └── OutOfMemoryError
│
└── Exception                      (can be caught and handled)
    ├── IOException                (checked)
    │   └── FileNotFoundException  (checked)
    ├── ClassNotFoundException     (checked)
    │
    └── RuntimeException           (unchecked)
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        ├── ArithmeticException
        ├── ClassCastException
        ├── IllegalArgumentException
        └── NumberFormatException`}</code></pre>
        </div>
      </section>

      {/* ─── CHECKED VS UNCHECKED ─── */}
      <section className="unit-section" id="checked-unchecked">
        <h2>Checked vs Unchecked Exceptions</h2>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th></th><th>Checked</th><th>Unchecked</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Extends</strong></td><td><code>Exception</code> (not RuntimeException)</td><td><code>RuntimeException</code></td></tr>
              <tr><td><strong>Compiler enforces?</strong></td><td>Yes — must handle or declare</td><td>No — compiler doesn't check</td></tr>
              <tr><td><strong>When?</strong></td><td>External problems (file not found, network error)</td><td>Programmer bugs (null, bad index)</td></tr>
              <tr><td><strong>Handle with</strong></td><td><code>try/catch</code> or <code>throws</code></td><td>Fix the bug in your code</td></tr>
              <tr><td><strong>Examples</strong></td><td><code>IOException</code>, <code>FileNotFoundException</code></td><td><code>NullPointerException</code>, <code>ArithmeticException</code></td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Checked exception: won't compile without handling</div>
          <pre><code>{`import java.io.File;
import java.util.Scanner;

// This WON'T compile:
// Scanner in = new Scanner(new File("data.txt"));
// Error: unreported exception FileNotFoundException; must be caught or declared

// Fix 1: declare it with throws
public static void main(String[] args) throws FileNotFoundException {
    Scanner in = new Scanner(new File("data.txt"));
}

// Fix 2: catch it with try/catch
public static void main(String[] args) {
    try {
        Scanner in = new Scanner(new File("data.txt"));
    } catch (FileNotFoundException e) {
        System.out.println("File not found!");
    }
}`}</code></pre>
        </div>
      </section>

      {/* ─── TRY CATCH FINALLY ─── */}
      <section className="unit-section" id="try-catch">
        <h2>try, catch, finally</h2>
        <p>
          <code>try</code> wraps code that might throw. <code>catch</code>
          handles the exception. <code>finally</code> runs <strong>no matter
          what</strong> — whether an exception occurred or not.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Full try/catch/finally</div>
          <pre><code>{`import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

Scanner in = null;
try {
    in = new Scanner(new File("data.txt"));
    int num = in.nextInt();
    System.out.println("Read: " + num);

} catch (FileNotFoundException e) {
    System.out.println("File not found: " + e.getMessage());

} catch (Exception e) {
    System.out.println("Something else went wrong: " + e);

} finally {
    // ALWAYS runs — even if an exception was thrown
    if (in != null) {
        in.close();
    }
    System.out.println("Cleanup done.");
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Execution flow</h4>
          <table className="info-table">
            <thead>
              <tr><th>Scenario</th><th>What runs</th></tr>
            </thead>
            <tbody>
              <tr><td>No exception</td><td>try block → finally block</td></tr>
              <tr><td>Exception is caught</td><td>try (up to error) → matching catch → finally</td></tr>
              <tr><td>Exception not caught</td><td>try (up to error) → finally → program crashes</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Multiple catch blocks</div>
          <pre><code>{`try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Bad index!");
} catch (Exception e) {
    System.out.println("Some other error");
}
// Output: Bad index!

// Catch blocks are checked TOP to BOTTOM.
// Put more specific exceptions FIRST.
// Putting Exception first would catch everything — the specific
// catches below it would never run (compiler error).`}</code></pre>
        </div>
      </section>

      {/* ─── THROW AND THROWS ─── */}
      <section className="unit-section" id="throw-throws">
        <h2>throw and throws</h2>
        <p>
          <code>throw</code> creates and throws an exception.
          <code>throws</code> declares that a method <em>might</em> throw an
          exception (passes the responsibility to the caller).
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Keyword</th><th>Where</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td><code>throw</code></td><td>Inside a method body</td><td>Actually throws an exception object</td></tr>
              <tr><td><code>throws</code></td><td>In the method signature</td><td>Declares what exceptions the method might throw</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — throw vs throws</div>
          <pre><code>{`// throws — in the method SIGNATURE (declares possibility)
public static double divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        // throw — in the method BODY (actually throws)
        throw new ArithmeticException("Cannot divide by zero");
    }
    return (double) a / b;
}

// Caller must handle it:
try {
    double result = divide(10, 0);
} catch (ArithmeticException e) {
    System.out.println(e.getMessage());  // Cannot divide by zero
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Throwing custom checked exceptions</div>
          <pre><code>{`import java.io.IOException;

// throws passes the buck to the caller
public static void readConfig(String path) throws IOException {
    File f = new File(path);
    if (!f.exists()) {
        throw new IOException("Config file missing: " + path);
    }
    // ... read the file
}

// Whoever calls readConfig must either:
// 1. Wrap it in try/catch, OR
// 2. Add "throws IOException" to their own method signature`}</code></pre>
        </div>
      </section>

      {/* ─── TRACING ─── */}
      <section className="unit-section" id="tracing">
        <h2>Tracing Exception Code</h2>
        <p>
          On exams, you'll trace through code with try/catch and predict the
          output. The key rule: when an exception is thrown, <strong>the rest
          of the try block is skipped</strong> and execution jumps to the
          matching catch.
        </p>

        <div className="code-block">
          <div className="code-label">Java — What does this print?</div>
          <pre><code>{`try {
    System.out.println("A");
    int x = 10 / 0;              // ArithmeticException thrown here
    System.out.println("B");     // SKIPPED
} catch (ArithmeticException e) {
    System.out.println("C");
} catch (Exception e) {
    System.out.println("D");     // not reached — caught above
} finally {
    System.out.println("E");
}
System.out.println("F");`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Answer</div>
          <pre><code className="language-none">{`A
C
E
F`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Harder trace: exception in a method</div>
          <pre><code>{`public static int process(int x) {
    System.out.println("P1");
    int result = 100 / x;
    System.out.println("P2");
    return result;
}

public static void main(String[] args) {
    try {
        System.out.println("M1");
        int val = process(0);        // throws ArithmeticException inside process
        System.out.println("M2");    // SKIPPED
    } catch (ArithmeticException e) {
        System.out.println("M3");
    } finally {
        System.out.println("M4");
    }
    System.out.println("M5");
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Answer</div>
          <pre><code className="language-none">{`M1
P1
M3
M4
M5`}</code></pre>
        </div>

        <div className="callout">
          <h4>Tracing rules</h4>
          <ol style={{ paddingLeft: '1.25rem', fontSize: '.9rem', lineHeight: '1.8', color: 'var(--on-surface-variant)' }}>
            <li>When an exception is thrown, skip the rest of the try block</li>
            <li>Check catch blocks top-to-bottom for a matching type</li>
            <li>If caught: run that catch block, then finally, then continue after the try/catch</li>
            <li>If not caught: run finally, then the exception propagates up to the caller</li>
            <li><code>finally</code> ALWAYS runs (even if there's a <code>return</code> in try or catch)</li>
          </ol>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
