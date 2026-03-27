import { Link } from '@tanstack/react-router'

export function Unit2() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 2</span>
        <h1>Using Objects</h1>
        <p>
          Java is an object-oriented language. This unit introduces the
          fundamental vocabulary and mechanics of working with objects — creating
          them, calling their methods, and understanding how they live in memory.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#vocab">Key Vocabulary</a></li>
          <li><a href="#classes-objects">Classes vs Objects</a></li>
          <li><a href="#constructors">Constructors & the new Keyword</a></li>
          <li><a href="#methods">Calling Methods</a></li>
          <li><a href="#accessor-mutator">Accessor vs Mutator Methods</a></li>
          <li><a href="#overloading">Method Overloading</a></li>
          <li><a href="#primitives-vs-objects">Primitive Types vs Objects</a></li>
          <li><a href="#references-aliases">Object References & Aliasing</a></li>
          <li><a href="#packages-imports">Packages & Imports</a></li>
          <li><a href="#public-private">Public Interface vs Private Implementation</a></li>
        </ol>
      </nav>

      {/* ─── KEY VOCABULARY ─── */}
      <section className="unit-section" id="vocab">
        <h2>Key Vocabulary</h2>
        <p>
          Unit 2 introduces a lot of terminology. Use this table as a quick
          reference — every term below will be explained in detail throughout
          this unit.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Term</th><th>Definition</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Class</strong></td><td>A programmer-defined data type — a blueprint for creating objects.</td></tr>
              <tr><td><strong>Object</strong></td><td>An instance of a class type. Created at runtime with <code>new</code>.</td></tr>
              <tr><td><strong>Constructor</strong></td><td>A special method that initializes a newly instantiated object.</td></tr>
              <tr><td><strong>Method</strong></td><td>A named sequence of statements that may have parameters and may return a value. Can be invoked any number of times.</td></tr>
              <tr><td><strong>Accessor</strong></td><td>A method that accesses (reads) an object's data but does not change it.</td></tr>
              <tr><td><strong>Mutator</strong></td><td>A method that changes (modifies) the state of an object.</td></tr>
              <tr><td><strong>Argument</strong></td><td>The actual input value passed in the parentheses of a method call.</td></tr>
              <tr><td><strong>Return value</strong></td><td>The value a method sends back to the caller.</td></tr>
              <tr><td><strong>Variable</strong></td><td>A symbol that identifies a storage location which can hold different values.</td></tr>
              <tr><td><strong>Identifier</strong></td><td>The name of a variable, method, or class.</td></tr>
              <tr><td><strong>Type</strong></td><td>A named set of values and the operations that can be carried out with them.</td></tr>
              <tr><td><strong>Assignment operator</strong></td><td><code>=</code> — places a new value into a variable.</td></tr>
              <tr><td><strong>Primitive type</strong></td><td>A number type, <code>char</code>, or <code>boolean</code>. Not objects — cannot invoke methods.</td></tr>
              <tr><td><strong>Integer</strong></td><td>A number that cannot have a fractional part (<code>int</code>).</td></tr>
              <tr><td><strong>Double</strong></td><td>A floating-point number that can have a fractional part (<code>double</code>).</td></tr>
              <tr><td><strong>Floating-point number</strong></td><td>A number that can have a fractional part (e.g. <code>3.14</code>).</td></tr>
              <tr><td><strong>Object reference</strong></td><td>A value denoting the location of an object in memory.</td></tr>
              <tr><td><strong>Alias</strong></td><td>A second variable that references the same object in memory.</td></tr>
              <tr><td><strong>Overloading</strong></td><td>Giving more than one meaning to a method name — multiple implementations with different parameter lists in the same class.</td></tr>
              <tr><td><strong>Package</strong></td><td>A collection of related classes.</td></tr>
              <tr><td><strong>Import</strong></td><td>A statement used to access classes defined in other packages.</td></tr>
              <tr><td><strong>Public interface</strong></td><td>Specifies what you can do with a class's objects.</td></tr>
              <tr><td><strong>Private implementation</strong></td><td>Describes the internal data and method instructions hidden inside the class.</td></tr>
              <tr><td><strong>new</strong></td><td>An operator that instantiates (constructs) new objects.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── CLASSES VS OBJECTS ─── */}
      <section className="unit-section" id="classes-objects">
        <h2>Classes vs Objects</h2>
        <p>
          A <strong>class</strong> is a blueprint. An <strong>object</strong> is
          a thing built from that blueprint. You write the class once, then
          create as many objects from it as you need.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Class (the blueprint)</h4>
            <p>
              Defines what data an object holds (fields) and what it can do
              (methods). Think of it like the architectural plans for a house.
              The plans aren't a house — they describe how to build one.
            </p>
          </div>
          <div className="concept-card">
            <h4>Object (the instance)</h4>
            <p>
              A concrete thing created from a class at runtime using
              <code>new</code>. Each object has its own copy of the data
              defined by the class. You can build many houses from the same plans.
            </p>
          </div>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Class vs Object</div>
          <pre><code>{`// String is a CLASS (built into Java)
// "Hello" is an OBJECT (an instance of String)

String greeting = new String("Hello");
String name = new String("Alice");

// greeting and name are two different String objects
// Both were built from the same String class blueprint`}</code></pre>
        </div>
      </section>

      {/* ─── CONSTRUCTORS ─── */}
      <section className="unit-section" id="constructors">
        <h2>Constructors & the <code>new</code> Keyword</h2>
        <p>
          A <strong>constructor</strong> is a special method that runs
          automatically when you create a new object. It sets up the object's
          initial state. The <code>new</code> operator triggers the constructor.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Using constructors</div>
          <pre><code>{`// Syntax: ClassName variableName = new ClassName(arguments);

// No-argument constructor
String empty = new String();

// Constructor with an argument
String word = new String("Java");

// Scanner is a class from java.util package
// Its constructor takes an input source as an argument
import java.util.Scanner;
Scanner keyboard = new Scanner(System.in);`}</code></pre>
        </div>

        <div className="callout">
          <h4>What happens when you write <code>new</code>?</h4>
          <ol style={{ paddingLeft: '1.25rem', fontSize: '.9rem', lineHeight: '1.7', color: 'var(--on-surface-variant)' }}>
            <li>Java allocates memory for the new object</li>
            <li>The constructor runs, initializing the object's data</li>
            <li>A <strong>reference</strong> (memory address) to the new object is returned</li>
            <li>That reference is stored in your variable</li>
          </ol>
        </div>
      </section>

      {/* ─── CALLING METHODS ─── */}
      <section className="unit-section" id="methods">
        <h2>Calling Methods</h2>
        <p>
          A <strong>method</strong> is a named sequence of statements. You call
          (invoke) a method using the dot operator on an object. Methods can take
          <strong> arguments</strong> (inputs) and may return a <strong>value</strong> (output).
        </p>

        <div className="code-block">
          <div className="code-label">Java — Method calls with arguments and return values</div>
          <pre><code>{`String message = "Hello, AP CSA!";

// .length() takes no arguments, returns an int
int len = message.length();
System.out.println(len);  // 14

// .substring(int, int) takes two arguments, returns a String
String sub = message.substring(0, 5);
System.out.println(sub);  // Hello

// .toUpperCase() takes no arguments, returns a new String
String loud = message.toUpperCase();
System.out.println(loud); // HELLO, AP CSA!

// .indexOf(String) takes one argument, returns an int
int pos = message.indexOf("CSA");
System.out.println(pos);  // 10`}</code></pre>
        </div>

        <div className="callout">
          <h4>Anatomy of a method call</h4>
          <table className="info-table">
            <thead>
              <tr><th>Part</th><th>Example</th><th>Meaning</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Object</strong></td><td><code>message</code></td><td>The object you're calling the method on</td></tr>
              <tr><td><strong>Dot</strong></td><td><code>.</code></td><td>Connects the object to its method</td></tr>
              <tr><td><strong>Method name</strong></td><td><code>substring</code></td><td>Which method to run</td></tr>
              <tr><td><strong>Arguments</strong></td><td><code>(0, 5)</code></td><td>Input values passed to the method</td></tr>
              <tr><td><strong>Return value</strong></td><td><code>"Hello"</code></td><td>The result sent back by the method</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── ACCESSOR VS MUTATOR ─── */}
      <section className="unit-section" id="accessor-mutator">
        <h2>Accessor vs Mutator Methods</h2>
        <p>
          Methods fall into two categories based on whether they change the
          object or just read from it.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Accessor (getter)</h4>
            <p>
              <strong>Reads</strong> data from the object without modifying it.
              Typically returns a value. The object looks exactly the same
              before and after the call.
            </p>
            <div className="code-block">
              <div className="code-label">Examples</div>
              <pre><code>{`String s = "Java";
s.length();      // 4 (accessor)
s.charAt(0);     // 'J' (accessor)
s.toUpperCase(); // "JAVA" (accessor)
// s is still "Java" — unchanged`}</code></pre>
            </div>
          </div>

          <div className="concept-card">
            <h4>Mutator (setter)</h4>
            <p>
              <strong>Changes</strong> the state of the object. After calling a
              mutator, the object's internal data is different than before.
            </p>
            <div className="code-block">
              <div className="code-label">Examples</div>
              <pre><code>{`import java.util.ArrayList;
ArrayList<String> list = new ArrayList<>();

list.add("Hello");  // mutator — list
                     // now has 1 element
list.add("World");  // mutator — list
                     // now has 2 elements
list.remove(0);     // mutator — removed
                     // "Hello"
// list is now ["World"]`}</code></pre>
            </div>
          </div>
        </div>

        <div className="callout">
          <h4>AP Exam Tip</h4>
          <p>
            <code>String</code> objects are <strong>immutable</strong> — they
            have no mutator methods. Methods like <code>toUpperCase()</code>
            return a <em>new</em> String; they don't change the original. This
            is a common AP exam trick question.
          </p>
        </div>
      </section>

      {/* ─── OVERLOADING ─── */}
      <section className="unit-section" id="overloading">
        <h2>Method Overloading</h2>
        <p>
          <strong>Overloading</strong> means a class has multiple methods with
          the <em>same name</em> but <em>different parameter lists</em>. Java
          decides which version to call based on the arguments you pass.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Overloaded substring method</div>
          <pre><code>{`String s = "Computer Science";

// substring(int beginIndex) — one parameter
String a = s.substring(9);
System.out.println(a);  // Science

// substring(int beginIndex, int endIndex) — two parameters
String b = s.substring(0, 8);
System.out.println(b);  // Computer

// Same method name "substring", different parameter lists
// Java picks the right version based on your arguments`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Overloaded constructors</div>
          <pre><code>{`// The String class has multiple constructors:

String s1 = new String();          // no-arg constructor → ""
String s2 = new String("Hello");   // one-arg constructor → "Hello"

// Constructors can be overloaded too!
// Same class name, different parameter lists.`}</code></pre>
        </div>

        <div className="callout">
          <h4>Key rule</h4>
          <p>
            Overloaded methods must differ in their <strong>parameter
            list</strong> (number of parameters, types, or order of types).
            They <em>cannot</em> differ only by return type — that won't compile.
          </p>
        </div>
      </section>

      {/* ─── PRIMITIVES VS OBJECTS ─── */}
      <section className="unit-section" id="primitives-vs-objects">
        <h2>Primitive Types vs Objects</h2>
        <p>
          Java has two categories of types. Understanding the difference is
          critical for the AP exam.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th></th><th>Primitive Types</th><th>Reference Types (Objects)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Examples</strong></td><td><code>int</code>, <code>double</code>, <code>boolean</code>, <code>char</code></td><td><code>String</code>, <code>Scanner</code>, <code>ArrayList</code></td></tr>
              <tr><td><strong>Stores</strong></td><td>The actual value</td><td>A reference (memory address) to the object</td></tr>
              <tr><td><strong>Methods?</strong></td><td>No — cannot call methods on primitives</td><td>Yes — call methods with the dot operator</td></tr>
              <tr><td><strong>Created with <code>new</code>?</strong></td><td>No</td><td>Yes (except String literals)</td></tr>
              <tr><td><strong>Default value</strong></td><td><code>0</code>, <code>0.0</code>, <code>false</code>, <code>'\0'</code></td><td><code>null</code></td></tr>
              <tr><td><strong>Lowercase/uppercase</strong></td><td>Lowercase (<code>int</code>)</td><td>Uppercase (<code>String</code>)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Primitives vs Objects side by side</div>
          <pre><code>{`// PRIMITIVE — stores the actual value
int score = 95;
double gpa = 3.8;
boolean passed = true;

// OBJECT — stores a reference to the object in memory
String name = new String("Alice");
String name2 = "Bob";  // shorthand (String literal)

// This works:
int len = name.length();  // calling a method on an object

// This does NOT compile:
// int x = score.length(); // ERROR — int is a primitive,
                           // not an object`}</code></pre>
        </div>
      </section>

      {/* ─── REFERENCES & ALIASING ─── */}
      <section className="unit-section" id="references-aliases">
        <h2>Object References & Aliasing</h2>
        <p>
          When you store an object in a variable, the variable doesn't hold the
          object itself — it holds a <strong>reference</strong> (a memory address
          pointing to where the object lives). This has important consequences.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Aliasing</div>
          <pre><code>{`import java.util.ArrayList;

ArrayList<String> list1 = new ArrayList<>();
list1.add("Hello");

// list2 is an ALIAS — it points to the SAME object as list1
ArrayList<String> list2 = list1;

list2.add("World");

System.out.println(list1);  // [Hello, World]
System.out.println(list2);  // [Hello, World]

// Both print the same thing!
// There is only ONE ArrayList in memory.
// list1 and list2 are two references to that same object.`}</code></pre>
        </div>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Primitives: values are copied</h4>
            <div className="code-block">
              <div className="code-label">Independent copies</div>
              <pre><code>{`int a = 10;
int b = a;  // b gets a COPY of 10
b = 20;

System.out.println(a); // 10
System.out.println(b); // 20
// Changing b does NOT affect a`}</code></pre>
            </div>
          </div>

          <div className="concept-card">
            <h4>Objects: references are copied</h4>
            <div className="code-block">
              <div className="code-label">Shared object</div>
              <pre><code>{`int[] arr1 = {1, 2, 3};
int[] arr2 = arr1; // alias!
arr2[0] = 99;

System.out.println(arr1[0]); // 99
// Changing arr2 DOES affect arr1
// because they share the object`}</code></pre>
            </div>
          </div>
        </div>

        <div className="callout">
          <h4>null</h4>
          <p>
            A reference variable that doesn't point to any object has the
            value <code>null</code>. Calling a method on <code>null</code>
            causes a <code>NullPointerException</code> at runtime — one of the
            most common bugs in Java.
          </p>
        </div>

        <div className="code-block">
          <div className="code-label">Java — null reference</div>
          <pre><code>{`String s = null;         // s points to nothing
System.out.println(s);   // prints: null

// This compiles but CRASHES at runtime:
// s.length();
// → NullPointerException`}</code></pre>
        </div>
      </section>

      {/* ─── PACKAGES & IMPORTS ─── */}
      <section className="unit-section" id="packages-imports">
        <h2>Packages & Imports</h2>
        <p>
          Java organizes classes into <strong>packages</strong> — groups of
          related classes. To use a class from another package, you need an
          <code> import</code> statement at the top of your file.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Import statements</div>
          <pre><code>{`// Import a specific class
import java.util.Scanner;
import java.util.ArrayList;

// Import ALL classes from a package
import java.util.*;

// Classes in java.lang (like String, Math, System)
// are auto-imported — you never need to import them.

public class ImportDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();
        String greeting = "Hello";  // no import needed
        int max = Math.max(5, 10);  // no import needed
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Package</th><th>Contains</th><th>Import needed?</th></tr>
            </thead>
            <tbody>
              <tr><td><code>java.lang</code></td><td><code>String</code>, <code>Math</code>, <code>System</code>, <code>Integer</code>, <code>Double</code></td><td>No (auto-imported)</td></tr>
              <tr><td><code>java.util</code></td><td><code>Scanner</code>, <code>ArrayList</code>, <code>Random</code></td><td>Yes</td></tr>
              <tr><td><code>java.io</code></td><td><code>File</code>, <code>IOException</code></td><td>Yes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── PUBLIC INTERFACE VS PRIVATE IMPLEMENTATION ─── */}
      <section className="unit-section" id="public-private">
        <h2>Public Interface vs Private Implementation</h2>
        <p>
          Every class has two sides. The <strong>public interface</strong> is
          what other code can see and use. The <strong>private
          implementation</strong> is the hidden internal machinery.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Public Interface</h4>
            <p>
              The methods and constructors marked <code>public</code>. This is
              the "menu" — it tells you <strong>what</strong> the class can do,
              without revealing <strong>how</strong> it does it.
            </p>
          </div>
          <div className="concept-card">
            <h4>Private Implementation</h4>
            <p>
              The internal data (fields) and the code inside each method,
              typically marked <code>private</code>. Users of the class don't
              need to know — and can't access — these details.
            </p>
          </div>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Public vs Private</div>
          <pre><code>{`public class BankAccount {

    // PRIVATE IMPLEMENTATION — hidden from outside
    private double balance;

    // PUBLIC INTERFACE — accessible from outside

    public BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    // Accessor — reads balance without changing it
    public double getBalance() {
        return balance;
    }

    // Mutator — changes the balance
    public void deposit(double amount) {
        balance = balance + amount;
    }
}

// In another class:
// BankAccount acct = new BankAccount(100.0);
// acct.deposit(50.0);           // OK — public method
// double b = acct.getBalance(); // OK — public method
// double x = acct.balance;      // ERROR — balance is private`}</code></pre>
        </div>

        <div className="callout">
          <h4>Why hide implementation?</h4>
          <p>
            This is called <strong>encapsulation</strong>. It protects the
            object's data from being set to invalid values, and it lets the
            class author change the internal code without breaking everyone
            else's code that uses the class.
          </p>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
