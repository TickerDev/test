import { Link } from '@tanstack/react-router'

export function Unit1() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 1</span>
        <h1>Primitive Types & Intro to Java</h1>
        <p>
          Before writing code, you need to understand the machine running it and
          the language you're writing in. This unit covers the foundations.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#hardware">Computer Hardware</a></li>
          <li><a href="#software">Computer Software & Programming Languages</a></li>
          <li><a href="#number-systems">Number Systems & Base Conversion</a></li>
          <li><a href="#memory-measurement">Measuring Memory</a></li>
          <li><a href="#java-structure">Java Source Code Structure</a></li>
          <li><a href="#comments">Comments in Java</a></li>
          <li><a href="#errors">3 Types of Errors</a></li>
          <li><a href="#compiler-interpreter">Compiler vs Interpreter</a></li>
          <li><a href="#jvm">Java Virtual Machine & Bytecode</a></li>
          <li><a href="#print">print vs println</a></li>
        </ol>
      </nav>

      {/* ─── COMPUTER HARDWARE ─── */}
      <section className="unit-section" id="hardware">
        <h2>Computer Hardware</h2>
        <p>
          Hardware is the physical stuff you can touch. Every computer — from a
          phone to a server rack — has these core components working together.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>CPU (Central Processing Unit)</h4>
            <p>
              The "brain" of the computer. It executes instructions from programs
              by performing arithmetic, logic, and control operations. Modern CPUs
              have multiple <strong>cores</strong>, allowing them to run
              instructions in parallel.
            </p>
          </div>

          <div className="concept-card">
            <h4>Motherboard</h4>
            <p>
              The main circuit board that connects all components together. The
              CPU, RAM, storage, and peripherals all plug into the motherboard.
              Think of it as the nervous system connecting every organ.
            </p>
          </div>

          <div className="concept-card">
            <h4>Busses</h4>
            <p>
              Electrical pathways that carry data between components. The
              <strong> data bus</strong> moves data, the <strong>address bus</strong> tells
              where to send it, and the <strong>control bus</strong> coordinates
              the operation. Wider busses = more data moved per cycle.
            </p>
          </div>

          <div className="concept-card">
            <h4>Hard Drive (Storage)</h4>
            <p>
              Long-term, <strong>non-volatile</strong> storage — data persists
              when power is off. HDDs use spinning magnetic platters; SSDs use
              flash memory chips (faster, no moving parts).
            </p>
          </div>

          <div className="concept-card">
            <h4>RAM (Random Access Memory)</h4>
            <p>
              Fast, <strong>volatile</strong> memory used for data the CPU needs
              right now. Programs and their variables live in RAM while running.
              When you turn off the computer, RAM is wiped clean.
            </p>
          </div>

          <div className="concept-card">
            <h4>ROM (Read-Only Memory)</h4>
            <p>
              <strong>Non-volatile</strong> memory with permanent instructions,
              like the BIOS/UEFI firmware that starts the boot process. It
              cannot be easily modified — that's the "read-only" part.
            </p>
          </div>
        </div>

        <div className="callout">
          <h4>Volatile vs Non-Volatile Memory</h4>
          <table className="info-table">
            <thead>
              <tr><th></th><th>Volatile</th><th>Non-Volatile</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Data on power off?</strong></td><td>Lost</td><td>Retained</td></tr>
              <tr><td><strong>Speed</strong></td><td>Very fast</td><td>Slower</td></tr>
              <tr><td><strong>Example</strong></td><td>RAM</td><td>Hard drive, SSD, ROM</td></tr>
              <tr><td><strong>Purpose</strong></td><td>Active working memory</td><td>Permanent storage</td></tr>
            </tbody>
          </table>
        </div>

        <div className="concept-card">
          <h4>Peripherals</h4>
          <p>
            External devices connected to the computer.
            <strong> Input</strong> peripherals send data in (keyboard, mouse, microphone).
            <strong> Output</strong> peripherals display results (monitor, speakers, printer).
            Some are both — like a touchscreen.
          </p>
        </div>
      </section>

      {/* ─── SOFTWARE & PROGRAMMING LANGUAGES ─── */}
      <section className="unit-section" id="software">
        <h2>Computer Software & Programming Languages</h2>
        <p>
          Software is the set of instructions that tells hardware what to do.
          Programming languages are how humans write those instructions.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Low-Level Programming Languages</h4>
            <p>
              Close to the hardware. <strong>Machine code</strong> (binary 1s and
              0s) is the lowest — it's what the CPU actually executes.
              <strong> Assembly language</strong> is one step up, using short
              mnemonics like <code>MOV</code>, <code>ADD</code>, <code>JMP</code>.
              Fast but hard for humans to read and write.
            </p>
          </div>

          <div className="concept-card">
            <h4>High-Level Programming Languages</h4>
            <p>
              Closer to human language. Java, Python, C++ — these are high-level.
              They must be <strong>translated</strong> into machine code before
              the CPU can run them. Much easier to write, read, and maintain.
              Java is the language used on the AP CSA exam.
            </p>
          </div>
        </div>

        <div className="concept-card">
          <h4>Binary Digit (Bit)</h4>
          <p>
            The smallest unit of data in computing. A <strong>bit</strong> is a
            single 0 or 1. Everything in a computer — numbers, text, images,
            your Java programs — is ultimately represented as sequences of bits.
            Why binary? Because electronic circuits have two states: on (1) and
            off (0).
          </p>
        </div>
      </section>

      {/* ─── NUMBER SYSTEMS ─── */}
      <section className="unit-section" id="number-systems">
        <h2>Number Systems & Base Conversion</h2>
        <p>
          We normally count in <strong>base 10</strong> (decimal) because we have
          10 fingers. Computers use <strong>base 2</strong> (binary). Programmers
          also use <strong>base 8</strong> (octal) and <strong>base 16</strong> (hexadecimal)
          as shorthand for binary.
        </p>

        <div className="callout">
          <h4>Common Bases</h4>
          <table className="info-table">
            <thead>
              <tr><th>Base</th><th>Name</th><th>Digits</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td>2</td><td>Binary</td><td>0, 1</td><td><code>1010</code> = 10 in decimal</td></tr>
              <tr><td>8</td><td>Octal</td><td>0 - 7</td><td><code>12</code> = 10 in decimal</td></tr>
              <tr><td>10</td><td>Decimal</td><td>0 - 9</td><td><code>10</code></td></tr>
              <tr><td>16</td><td>Hexadecimal</td><td>0 - 9, A - F</td><td><code>A</code> = 10 in decimal</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Converting Decimal to Binary</h3>
        <p>
          Divide by 2 repeatedly, record the remainders, then read them <strong>bottom to top</strong>.
        </p>
        <div className="code-block">
          <div className="code-label">Example: Convert 13 to binary</div>
          <pre><code className="language-none">{`13 / 2 = 6  remainder 1
 6 / 2 = 3  remainder 0
 3 / 2 = 1  remainder 1
 1 / 2 = 0  remainder 1
                      ↑ read bottom-to-top
13 in decimal = 1101 in binary`}</code></pre>
        </div>

        <h3>Converting Binary to Decimal</h3>
        <p>
          Multiply each digit by its place value (powers of 2) and add them up.
        </p>
        <div className="code-block">
          <div className="code-label">Example: Convert 1101 to decimal</div>
          <pre><code className="language-none">{`Position:  3    2    1    0
Binary:    1    1    0    1
Value:     2³   2²   2¹   2⁰
         = 8  + 4  + 0  + 1  = 13`}</code></pre>
        </div>

        <h3>In Java</h3>
        <div className="code-block">
          <div className="code-label">Java — Number literals in different bases</div>
          <pre><code>{`int decimal     = 13;      // base 10 (normal)
int binary      = 0b1101;  // base 2  (prefix 0b)
int octal       = 015;     // base 8  (prefix 0)
int hexadecimal = 0xD;     // base 16 (prefix 0x)

// All four variables hold the same value: 13
System.out.println(decimal);      // 13
System.out.println(binary);       // 13
System.out.println(octal);        // 13
System.out.println(hexadecimal);  // 13`}</code></pre>
        </div>
      </section>

      {/* ─── MEASURING MEMORY ─── */}
      <section className="unit-section" id="memory-measurement">
        <h2>Measuring Memory</h2>
        <p>
          Memory is measured in bits and bytes. Everything scales by powers of 2
          (in computer science) or powers of 10 (in marketing — watch out for that on the exam).
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Unit</th><th>Size</th><th>Approx. Real-World</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1 Bit</strong></td><td>0 or 1</td><td>A single yes/no answer</td></tr>
              <tr><td><strong>1 Byte</strong></td><td>8 bits</td><td>A single character (like 'A')</td></tr>
              <tr><td><strong>1 Kilobyte (KB)</strong></td><td>1,024 bytes</td><td>A short email</td></tr>
              <tr><td><strong>1 Megabyte (MB)</strong></td><td>1,024 KB</td><td>A photo or short song</td></tr>
              <tr><td><strong>1 Gigabyte (GB)</strong></td><td>1,024 MB</td><td>~250 songs or a short movie</td></tr>
              <tr><td><strong>1 Terabyte (TB)</strong></td><td>1,024 GB</td><td>~500 hours of video</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── JAVA SOURCE CODE STRUCTURE ─── */}
      <section className="unit-section" id="java-structure">
        <h2>Java Source Code Structure</h2>
        <p>
          Every Java program needs at minimum: a <strong>class</strong> and a
          <strong> main method</strong>. The file name must match the class name
          exactly (including capitalization) and end in <code>.java</code>.
        </p>

        <div className="code-block">
          <div className="code-label">HelloWorld.java — The minimum required structure</div>
          <pre><code>{`public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello, AP CSA!");
    }

}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Breaking it down</h4>
          <table className="info-table">
            <thead>
              <tr><th>Part</th><th>Meaning</th></tr>
            </thead>
            <tbody>
              <tr><td><code>public</code></td><td>Accessible from anywhere</td></tr>
              <tr><td><code>class HelloWorld</code></td><td>Defines a class named HelloWorld (must match file name)</td></tr>
              <tr><td><code>{'{ }'}</code></td><td>Curly braces define the body of the class / method</td></tr>
              <tr><td><code>public static void main(String[] args)</code></td><td>The entry point — Java starts running here</td></tr>
              <tr><td><code>System.out.println(...)</code></td><td>Prints text to the console with a newline</td></tr>
              <tr><td><code>;</code></td><td>Every statement in Java ends with a semicolon</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── COMMENTS ─── */}
      <section className="unit-section" id="comments">
        <h2>Comments in Java</h2>
        <p>
          Comments are notes for humans. The compiler ignores them completely.
          Use them to explain <em>why</em> code exists, not <em>what</em> it does
          (the code itself should show that).
        </p>

        <div className="code-block">
          <div className="code-label">Java — Two styles of comments</div>
          <pre><code>{`// This is a single-line comment.
// Everything after // on this line is ignored.

/*
   This is a multi-line comment.
   It can span as many lines as you need.
   Great for longer explanations.
*/

/**
 * This is a Javadoc comment.
 * Used to generate documentation for classes and methods.
 * You'll see these in the AP Quick Reference sheet.
 */
public class CommentDemo {
    public static void main(String[] args) {
        System.out.println("Comments are ignored by the compiler");
        // System.out.println("This line won't run — it's commented out");
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Quick Reference</h4>
          <table className="info-table">
            <thead>
              <tr><th>Type</th><th>Syntax</th><th>Use Case</th></tr>
            </thead>
            <tbody>
              <tr><td>Single-line</td><td><code>{'// comment'}</code></td><td>Short notes, disabling one line</td></tr>
              <tr><td>Multi-line</td><td><code>{'/* comment */'}</code></td><td>Longer explanations, block-disable code</td></tr>
              <tr><td>Javadoc</td><td><code>{'/** comment */'}</code></td><td>API documentation for classes/methods</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── 3 TYPES OF ERRORS ─── */}
      <section className="unit-section" id="errors">
        <h2>3 Types of Errors</h2>
        <p>
          When code doesn't work, the error falls into one of three categories.
          Knowing which type you're dealing with tells you <em>where</em> and
          <em>how</em> to fix it.
        </p>

        <div className="concept-grid three-col">
          <div className="concept-card error-compile">
            <h4>1. Compile / Syntax Error</h4>
            <p>
              The code violates Java's grammar rules. The compiler catches these
              <strong> before</strong> the program runs. You literally cannot run
              the program until these are fixed.
            </p>
            <div className="code-block">
              <div className="code-label">Example — missing semicolon</div>
              <pre><code>{`System.out.println("Hello")
//                              ^ missing ;
// Compiler error:
// ';' expected`}</code></pre>
            </div>
          </div>

          <div className="concept-card error-runtime">
            <h4>2. Runtime Error (Exception)</h4>
            <p>
              The code compiles fine, but crashes <strong>while running</strong>.
              The program terminates with an exception message. Common causes:
              dividing by zero, accessing a null object, array index out of bounds.
            </p>
            <div className="code-block">
              <div className="code-label">Example — division by zero</div>
              <pre><code>{`int x = 10;
int y = 0;
System.out.println(x / y);
// Compiles fine, but crashes:
// ArithmeticException: / by zero`}</code></pre>
            </div>
          </div>

          <div className="concept-card error-logic">
            <h4>3. Runtime Error (Logic)</h4>
            <p>
              The code compiles and runs without crashing, but produces the
              <strong> wrong result</strong>. No error message — the program just
              does the wrong thing. These are the hardest to find.
            </p>
            <div className="code-block">
              <div className="code-label">Example — wrong formula</div>
              <pre><code>{`// Goal: average of 3 scores
int a = 80, b = 90, c = 100;
double avg = a + b + c / 3;
System.out.println(avg);
// Prints 203.0 — not 90.0!
// Bug: division happens before
// addition (operator precedence).
// Fix: (a + b + c) / 3.0`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPILER VS INTERPRETER ─── */}
      <section className="unit-section" id="compiler-interpreter">
        <h2>Compiler vs Interpreter</h2>
        <p>
          High-level code must be translated into something the machine
          understands. There are two main strategies:
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th></th><th>Compiler</th><th>Interpreter</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>How it works</strong></td>
                <td>Translates the <em>entire</em> program at once, producing an output file</td>
                <td>Translates and runs the program <em>one line at a time</em></td>
              </tr>
              <tr>
                <td><strong>Error detection</strong></td>
                <td>Reports all syntax errors before running</td>
                <td>Stops at the first error it encounters</td>
              </tr>
              <tr>
                <td><strong>Speed</strong></td>
                <td>Slower to compile, faster to run</td>
                <td>No compile step, but slower execution</td>
              </tr>
              <tr>
                <td><strong>Output</strong></td>
                <td>A separate executable or bytecode file</td>
                <td>No separate file — runs directly</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Java (javac), C, C++</td>
                <td>Python, JavaScript</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Java uses both.</strong> The <code>javac</code> compiler
          translates your <code>.java</code> source into <strong>bytecode</strong> (<code>.class</code> files).
          Then the JVM <em>interprets</em> (or JIT-compiles) that bytecode at runtime.
        </p>
      </section>

      {/* ─── JVM & BYTECODE ─── */}
      <section className="unit-section" id="jvm">
        <h2>Java Virtual Machine & Bytecode</h2>
        <p>
          This is Java's superpower: <strong>"Write once, run anywhere."</strong>
        </p>

        <div className="pipeline">
          <div className="pipeline-step">
            <span className="pipeline-icon">&#128196;</span>
            <strong>HelloWorld.java</strong>
            <span>Source code (you write this)</span>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className="pipeline-step">
            <span className="pipeline-icon">&#9881;</span>
            <strong>javac compiler</strong>
            <span>Checks syntax, translates to bytecode</span>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className="pipeline-step">
            <span className="pipeline-icon">&#128230;</span>
            <strong>HelloWorld.class</strong>
            <span>Bytecode (platform-independent)</span>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className="pipeline-step">
            <span className="pipeline-icon">&#9889;</span>
            <strong>JVM (java)</strong>
            <span>Interprets bytecode for your OS</span>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className="pipeline-step">
            <span className="pipeline-icon">&#128187;</span>
            <strong>Output</strong>
            <span>Hello, AP CSA!</span>
          </div>
        </div>

        <div className="callout">
          <h4>Why bytecode?</h4>
          <p>
            Bytecode is <strong>not</strong> machine code — it's an intermediate
            format that any JVM can understand. So the same <code>.class</code> file
            runs on Windows, macOS, or Linux without recompiling. Each
            platform just needs its own JVM installed.
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">Terminal — Compiling and running Java</div>
          <pre><code className="language-bash">{`$ javac HelloWorld.java    # Step 1: compile → creates HelloWorld.class
$ java HelloWorld          # Step 2: run bytecode on the JVM
Hello, AP CSA!             # Output`}</code></pre>
        </div>
      </section>

      {/* ─── PRINT VS PRINTLN ─── */}
      <section className="unit-section" id="print">
        <h2>print vs println</h2>
        <p>
          Both methods belong to the <code>PrintStream</code> class (accessed
          via <code>System.out</code>). The only difference: does the cursor
          move to the next line after printing?
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Method</th><th>Newline after?</th><th>Usage</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>System.out.print()</code></td>
                <td>No</td>
                <td>Keeps cursor on the same line</td>
              </tr>
              <tr>
                <td><code>System.out.println()</code></td>
                <td>Yes</td>
                <td>Moves cursor to the next line after printing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">PrintDemo.java</div>
          <pre><code>{`public class PrintDemo {
    public static void main(String[] args) {

        // println moves to the next line after each call
        System.out.println("Line 1");
        System.out.println("Line 2");

        System.out.println(); // prints a blank line

        // print stays on the same line
        System.out.print("Hello ");
        System.out.print("World");
        System.out.println("!"); // finishes the line

        // Mixing them together
        System.out.print("A");
        System.out.println("B");
        System.out.print("C");
        System.out.print("D");
    }
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Output</div>
          <pre><code className="language-none">{`Line 1
Line 2

Hello World!
AB
CD`}</code></pre>
        </div>

        <div className="callout">
          <h4>AP Exam Tip</h4>
          <p>
            The AP exam <strong>loves</strong> asking you to predict the output
            of code that mixes <code>print</code> and <code>println</code>. Trace
            through each statement and track where the cursor is. Pay close
            attention to <strong>spaces</strong> — they only appear if you
            explicitly include them in the string.
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">Tracing exercise — What does this print?</div>
          <pre><code>{`System.out.print("AP");
System.out.println(" CSA");
System.out.print("Unit ");
System.out.print(1);
System.out.println();
System.out.println("Done!");`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Answer</div>
          <pre><code className="language-none">{`AP CSA
Unit 1
Done!`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
