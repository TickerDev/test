import { Link } from '@tanstack/react-router'

export function Unit3() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 3</span>
        <h1>Writing Classes</h1>
        <p>
          Now you go from <em>using</em> objects to <em>building</em> them.
          This unit teaches you how to design and implement your own classes —
          the core skill of object-oriented programming.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#vocab">Key Vocabulary</a></li>
          <li><a href="#anatomy">Anatomy of a Class</a></li>
          <li><a href="#instance-fields">Instance Fields</a></li>
          <li><a href="#constructors">Constructors & Initialization</a></li>
          <li><a href="#methods">Writing Methods</a></li>
          <li><a href="#parameters">Parameters: Implicit, Explicit, Formal, Actual</a></li>
          <li><a href="#this">The <code>this</code> Keyword</a></li>
          <li><a href="#access">Access Specifiers: public vs private</a></li>
          <li><a href="#encapsulation">Encapsulation & Black Box</a></li>
          <li><a href="#local-variables">Local Variables vs Instance Fields</a></li>
          <li><a href="#javadoc">Javadoc Documentation</a></li>
          <li><a href="#ood">Object-Oriented Design</a></li>
        </ol>
      </nav>

      {/* ─── KEY VOCABULARY ─── */}
      <section className="unit-section" id="vocab">
        <h2>Key Vocabulary</h2>
        <p>
          This unit introduces the mechanics of building classes from scratch.
          Use this table as a quick reference while reading through the sections below.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Term</th><th>Definition</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Abstraction</strong></td><td>Finding the essential feature set for a building block (class) of a program — keeping what matters, hiding what doesn't.</td></tr>
              <tr><td><strong>Access specifier</strong></td><td>A keyword (<code>public</code> or <code>private</code>) that controls who can access a feature.</td></tr>
              <tr><td><strong>Actual parameter</strong></td><td>The value passed in a method <em>call</em>. Goes into the formal parameter.</td></tr>
              <tr><td><strong>Black box</strong></td><td>Using something without knowing its internal implementation.</td></tr>
              <tr><td><strong>Constructor</strong></td><td>A special method that initializes a newly instantiated object.</td></tr>
              <tr><td><strong>Encapsulation</strong></td><td>Hiding implementation details behind a public interface.</td></tr>
              <tr><td><strong>Explicit parameter</strong></td><td>A parameter of a method other than the object on which it's invoked — the arguments in parentheses.</td></tr>
              <tr><td><strong>Formal parameter</strong></td><td>The parameter in a method <em>definition</em>. Includes a data type and variable name. Receives its value from the actual parameter.</td></tr>
              <tr><td><strong>Implement</strong></td><td>To write the details (body) of a method or class.</td></tr>
              <tr><td><strong>Implicit parameter</strong></td><td>The object on which a method is invoked. In <code>x.f(y)</code>, <code>x</code> is the implicit parameter.</td></tr>
              <tr><td><strong>Initialization</strong></td><td>Setting a variable to a well-defined value when it is created.</td></tr>
              <tr><td><strong>Instance field</strong></td><td>A variable defined in a class for which every object has its own value.</td></tr>
              <tr><td><strong>Javadoc</strong></td><td>Java's documentation generator — extracts <code>/** */</code> comments into linked HTML pages.</td></tr>
              <tr><td><strong>Local variable</strong></td><td>A variable whose scope is limited to the block (method) where it's declared.</td></tr>
              <tr><td><strong>Method body</strong></td><td>The statements inside curly braces that execute when a method is called.</td></tr>
              <tr><td><strong>Method call</strong></td><td>A statement that invokes a method.</td></tr>
              <tr><td><strong>Object-oriented design</strong></td><td>Designing a program by discovering objects, their properties, and their relationships.</td></tr>
              <tr><td><strong>Parameter / Argument</strong></td><td>Information specified to a method when it's called.</td></tr>
              <tr><td><strong>private</strong></td><td>Accessible only by methods of the same class (or inner class).</td></tr>
              <tr><td><strong>public</strong></td><td>Accessible by all classes.</td></tr>
              <tr><td><strong>Public interface</strong></td><td>The features (methods, fields, nested types) of a class accessible to all clients.</td></tr>
              <tr><td><strong>return</strong></td><td>The keyword that sends a value back from a method to the caller.</td></tr>
              <tr><td><strong>Return type</strong></td><td>The data type of the value a method returns (or <code>void</code> if it returns nothing).</td></tr>
              <tr><td><strong>this</strong></td><td>A keyword that refers to the implicit parameter — the object on which the method was called.</td></tr>
              <tr><td><strong>Type</strong></td><td>A named set of values and the operations that can be carried out with them.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── ANATOMY OF A CLASS ─── */}
      <section className="unit-section" id="anatomy">
        <h2>Anatomy of a Class</h2>
        <p>
          A class bundles together <strong>data</strong> (instance fields) and
          <strong> behavior</strong> (methods). Here's the full skeleton:
        </p>

        <div className="code-block">
          <div className="code-label">Java — Complete class structure</div>
          <pre><code>{`public class Student {

    // ── Instance fields (private data) ──
    private String name;
    private int grade;
    private double gpa;

    // ── Constructor (initializes a new Student) ──
    public Student(String name, int grade, double gpa) {
        this.name = name;
        this.grade = grade;
        this.gpa = gpa;
    }

    // ── Accessor methods (read data) ──
    public String getName() {
        return name;
    }

    public int getGrade() {
        return grade;
    }

    public double getGpa() {
        return gpa;
    }

    // ── Mutator methods (change data) ──
    public void setGpa(double newGpa) {
        gpa = newGpa;
    }

    // ── Other methods ──
    public boolean isHonorRoll() {
        return gpa >= 3.5;
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>The four parts of every class</h4>
          <table className="info-table">
            <thead>
              <tr><th>Part</th><th>Purpose</th><th>Access</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Instance fields</strong></td><td>Store the object's data</td><td><code>private</code></td></tr>
              <tr><td><strong>Constructor(s)</strong></td><td>Initialize new objects</td><td><code>public</code></td></tr>
              <tr><td><strong>Accessor methods</strong></td><td>Return data without changing it</td><td><code>public</code></td></tr>
              <tr><td><strong>Mutator methods</strong></td><td>Change the object's state</td><td><code>public</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── INSTANCE FIELDS ─── */}
      <section className="unit-section" id="instance-fields">
        <h2>Instance Fields</h2>
        <p>
          Instance fields (also called instance variables) store the data that
          makes each object unique. Every object of the class gets its own copy.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Each object has its own fields</div>
          <pre><code>{`Student alice = new Student("Alice", 11, 3.9);
Student bob   = new Student("Bob", 12, 3.2);

// alice.name is "Alice", bob.name is "Bob"
// They are separate copies — changing one doesn't affect the other.

System.out.println(alice.getName()); // Alice
System.out.println(bob.getName());   // Bob`}</code></pre>
        </div>

        <div className="callout">
          <h4>Always <code>private</code></h4>
          <p>
            Instance fields should always be declared <code>private</code>.
            This enforces <strong>encapsulation</strong> — outside code must
            use your accessor/mutator methods to interact with the data, which
            lets you control and validate access.
          </p>
        </div>
      </section>

      {/* ─── CONSTRUCTORS ─── */}
      <section className="unit-section" id="constructors">
        <h2>Constructors & Initialization</h2>
        <p>
          A constructor is called automatically when you use <code>new</code>.
          Its job is <strong>initialization</strong> — setting every field to a
          well-defined starting value.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Constructor rules</div>
          <pre><code>{`public class Circle {

    private double radius;

    // Constructor — same name as the class, NO return type
    public Circle(double radius) {
        this.radius = radius;  // "this.radius" = field
                                // "radius" = parameter
    }

    // Overloaded no-arg constructor with a default value
    public Circle() {
        this.radius = 1.0;  // default radius
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}

// Usage:
// Circle c1 = new Circle(5.0);  // radius = 5.0
// Circle c2 = new Circle();     // radius = 1.0 (default)`}</code></pre>
        </div>

        <div className="callout">
          <h4>Constructor vs Method</h4>
          <table className="info-table">
            <thead>
              <tr><th></th><th>Constructor</th><th>Method</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Name</strong></td><td>Must match the class name</td><td>Any valid identifier</td></tr>
              <tr><td><strong>Return type</strong></td><td>None (not even <code>void</code>)</td><td>Must have a return type</td></tr>
              <tr><td><strong>Called with</strong></td><td><code>new ClassName()</code></td><td><code>object.methodName()</code></td></tr>
              <tr><td><strong>Purpose</strong></td><td>Initialize a new object</td><td>Perform an action or return a value</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── WRITING METHODS ─── */}
      <section className="unit-section" id="methods">
        <h2>Writing Methods</h2>
        <p>
          A method has a <strong>header</strong> (signature) and a
          <strong> body</strong> (the statements that execute).
        </p>

        <div className="code-block">
          <div className="code-label">Java — Method anatomy</div>
          <pre><code>{`//  access  return-type  name      (formal parameters)
//    ↓        ↓         ↓               ↓
    public   double    getArea    ()
    {
        // method body — the implementation
        return Math.PI * radius * radius;
    }

//  access  return-type  name      (formal parameters)
//    ↓        ↓         ↓               ↓
    public   void      setRadius  (double newRadius)
    {
        radius = newRadius;  // no return — void method
    }`}</code></pre>
        </div>

        <div className="callout">
          <h4>Return types</h4>
          <table className="info-table">
            <thead>
              <tr><th>Return type</th><th>Meaning</th><th>Must have <code>return</code>?</th></tr>
            </thead>
            <tbody>
              <tr><td><code>void</code></td><td>Returns nothing</td><td>No (optional <code>return;</code>)</td></tr>
              <tr><td><code>int</code></td><td>Returns an integer</td><td>Yes — <code>return someInt;</code></td></tr>
              <tr><td><code>double</code></td><td>Returns a double</td><td>Yes — <code>return someDouble;</code></td></tr>
              <tr><td><code>String</code></td><td>Returns a String object</td><td>Yes — <code>return someString;</code></td></tr>
              <tr><td><code>boolean</code></td><td>Returns true or false</td><td>Yes — <code>return someBool;</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── PARAMETERS ─── */}
      <section className="unit-section" id="parameters">
        <h2>Parameters: Implicit, Explicit, Formal, Actual</h2>
        <p>
          The AP exam distinguishes between four kinds of parameters. They
          sound confusing, but they're just different names for the same pieces
          depending on <em>where</em> you're looking.
        </p>

        <div className="code-block">
          <div className="code-label">Java — All four parameter types in one example</div>
          <pre><code>{`public class Greeter {

    private String greeting;

    public Greeter(String greeting) {
        this.greeting = greeting;
    }

    //                formal parameter
    //                     ↓
    public String greet(String name) {
        return greeting + ", " + name + "!";
    }
}

// In another class:
Greeter g = new Greeter("Hello");

//    implicit     explicit (actual parameter)
//    parameter        ↓
//       ↓             ↓
String msg = g.greet("Alice");
//           ↑   ↑
//     object g   method greet
//  (implicit)    called with "Alice" (explicit/actual)

System.out.println(msg);  // Hello, Alice!`}</code></pre>
        </div>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Term</th><th>Where?</th><th>Example from above</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Formal parameter</strong></td><td>In the method <em>definition</em></td><td><code>String name</code> in the header of <code>greet</code></td></tr>
              <tr><td><strong>Actual parameter</strong></td><td>In the method <em>call</em></td><td><code>"Alice"</code> in <code>g.greet("Alice")</code></td></tr>
              <tr><td><strong>Explicit parameter</strong></td><td>The arguments in parentheses</td><td><code>"Alice"</code></td></tr>
              <tr><td><strong>Implicit parameter</strong></td><td>The object before the dot</td><td><code>g</code> in <code>g.greet(...)</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── THIS KEYWORD ─── */}
      <section className="unit-section" id="this">
        <h2>The <code>this</code> Keyword</h2>
        <p>
          <code>this</code> is a reference to the <strong>implicit
          parameter</strong> — the current object the method is running on.
          You use it most often when a parameter name shadows a field name.
        </p>

        <div className="code-block">
          <div className="code-label">Java — this disambiguates field vs parameter</div>
          <pre><code>{`public class Dog {

    private String name;
    private int age;

    public Dog(String name, int age) {
        // Without "this", Java thinks you mean the parameter
        // name = name;  ← assigns parameter to itself (bug!)

        this.name = name;  // this.name = the field
                            // name = the parameter
        this.age = age;
    }

    public void haveBirthday() {
        this.age++;        // "this" is optional here because
                            // there's no ambiguity
        // age++;           // ← also works, same thing
    }

    public String toString() {
        return this.name + " (age " + this.age + ")";
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>When is <code>this</code> required?</h4>
          <p>
            Only when there's a <strong>naming conflict</strong> between a
            field and a parameter/local variable. If names are different,
            <code>this</code> is optional — but many programmers use it in
            constructors by convention for clarity.
          </p>
        </div>
      </section>

      {/* ─── ACCESS SPECIFIERS ─── */}
      <section className="unit-section" id="access">
        <h2>Access Specifiers: <code>public</code> vs <code>private</code></h2>
        <p>
          Access specifiers control <em>who</em> can see and use a field or method.
          Java has more than two, but the AP exam only covers these two.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Specifier</th><th>Who can access?</th><th>Use for</th></tr>
            </thead>
            <tbody>
              <tr><td><code>public</code></td><td>Any class, anywhere</td><td>Methods and constructors that form the class's interface</td></tr>
              <tr><td><code>private</code></td><td>Only the class itself</td><td>Instance fields and helper methods</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Access in action</div>
          <pre><code>{`public class BankAccount {

    private double balance;      // private — only BankAccount can touch this
    private String accountId;

    public BankAccount(String id, double initial) {  // public — anyone can create
        accountId = id;
        balance = initial;
    }

    public double getBalance() {  // public — anyone can read
        return balance;
    }

    public void deposit(double amount) {  // public — anyone can deposit
        if (amount > 0) {
            balance += amount;
        }
    }

    private String formatBalance() {  // private — internal helper
        return "$" + String.format("%.2f", balance);
    }
}

// From outside:
// BankAccount acct = new BankAccount("A001", 500.0);
// acct.getBalance();        // OK — public
// acct.deposit(100);        // OK — public
// acct.balance;             // ERROR — private
// acct.formatBalance();     // ERROR — private`}</code></pre>
        </div>
      </section>

      {/* ─── ENCAPSULATION & BLACK BOX ─── */}
      <section className="unit-section" id="encapsulation">
        <h2>Encapsulation & the Black Box</h2>
        <p>
          <strong>Encapsulation</strong> means hiding the internal details of a
          class and exposing only what other code needs. The class becomes a
          <strong> black box</strong> — you know what goes in and what comes out,
          but not how it works inside.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Without encapsulation</h4>
            <p>
              Anyone can directly set <code>balance = -999</code>. The object
              has no way to protect itself from invalid data. A change to the
              internal structure breaks everyone's code.
            </p>
          </div>
          <div className="concept-card">
            <h4>With encapsulation</h4>
            <p>
              The <code>deposit</code> method checks <code>amount &gt; 0</code>
              before changing the balance. Invalid data is rejected. The internal
              structure can change without affecting users of the class.
            </p>
          </div>
        </div>

        <div className="callout">
          <h4>Encapsulation recipe</h4>
          <ol style={{ paddingLeft: '1.25rem', fontSize: '.9rem', lineHeight: '1.7', color: 'var(--on-surface-variant)' }}>
            <li>Make all instance fields <code>private</code></li>
            <li>Provide <code>public</code> accessor methods to read data</li>
            <li>Provide <code>public</code> mutator methods to change data (with validation)</li>
            <li>Hide any helper methods as <code>private</code></li>
          </ol>
        </div>
      </section>

      {/* ─── LOCAL VARIABLES VS INSTANCE FIELDS ─── */}
      <section className="unit-section" id="local-variables">
        <h2>Local Variables vs Instance Fields</h2>
        <p>
          Both store data, but they live in very different places and have
          different lifetimes.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th></th><th>Instance Field</th><th>Local Variable</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Declared in</strong></td><td>The class, outside any method</td><td>Inside a method or constructor</td></tr>
              <tr><td><strong>Scope</strong></td><td>Entire class — all methods can access it</td><td>Only the block <code>{'{ }'}</code> where it's declared</td></tr>
              <tr><td><strong>Lifetime</strong></td><td>As long as the object exists</td><td>Only while the method is running</td></tr>
              <tr><td><strong>Default value</strong></td><td><code>0</code>, <code>0.0</code>, <code>false</code>, <code>null</code></td><td>None — must be initialized before use</td></tr>
              <tr><td><strong>Access specifier</strong></td><td>Has one (<code>private</code>, <code>public</code>)</td><td>None — always local</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Instance field vs local variable</div>
          <pre><code>{`public class Counter {

    private int count;  // instance field — lives as long as the object

    public void increment() {
        int step = 1;   // local variable — dies when method ends
        count += step;
    }

    public int getCount() {
        // "count" is accessible here (instance field)
        // "step" is NOT accessible here (local to increment)
        return count;
    }
}`}</code></pre>
        </div>
      </section>

      {/* ─── JAVADOC ─── */}
      <section className="unit-section" id="javadoc">
        <h2>Javadoc Documentation</h2>
        <p>
          <strong>Javadoc</strong> is Java's built-in tool for generating HTML
          documentation from special <code>/** */</code> comments. The AP Quick
          Reference sheet is generated from Javadoc.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Javadoc comments</div>
          <pre><code>{`/**
 * Represents a student in Mr. Yee's AP CSA class.
 */
public class Student {

    private String name;
    private double gpa;

    /**
     * Constructs a Student with the given name and GPA.
     * @param name  the student's full name
     * @param gpa   the student's grade point average
     */
    public Student(String name, double gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    /**
     * Returns the student's name.
     * @return the name of this student
     */
    public String getName() {
        return name;
    }

    /**
     * Determines if this student qualifies for honor roll.
     * @return true if GPA is 3.5 or higher
     */
    public boolean isHonorRoll() {
        return gpa >= 3.5;
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Common Javadoc tags</h4>
          <table className="info-table">
            <thead>
              <tr><th>Tag</th><th>Meaning</th></tr>
            </thead>
            <tbody>
              <tr><td><code>@param name</code></td><td>Describes a method parameter</td></tr>
              <tr><td><code>@return</code></td><td>Describes what the method returns</td></tr>
              <tr><td><code>@throws</code></td><td>Describes an exception the method may throw</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── OBJECT-ORIENTED DESIGN ─── */}
      <section className="unit-section" id="ood">
        <h2>Object-Oriented Design</h2>
        <p>
          OOD is the process of designing a program by identifying
          <strong> objects</strong>, their <strong>data</strong> (fields), and their
          <strong> behavior</strong> (methods). Start by asking three questions:
        </p>

        <div className="concept-grid three-col">
          <div className="concept-card">
            <h4>1. What objects do I need?</h4>
            <p>
              Look for <strong>nouns</strong> in the problem description.
              "Student", "Course", "Grade" might all become classes.
            </p>
          </div>
          <div className="concept-card">
            <h4>2. What data does each object have?</h4>
            <p>
              These become <strong>instance fields</strong>.
              A Student has a name, grade, and GPA.
            </p>
          </div>
          <div className="concept-card">
            <h4>3. What can each object do?</h4>
            <p>
              Look for <strong>verbs</strong>. These become <strong>methods</strong>.
              A Student can enroll, drop, and check honor roll status.
            </p>
          </div>
        </div>

        <div className="code-block">
          <div className="code-label">Java — Putting it all together</div>
          <pre><code>{`// Problem: "A rectangle has a width and height.
// You can compute its area and perimeter."

// Nouns  → class: Rectangle, fields: width, height
// Verbs  → methods: getArea, getPerimeter

public class Rectangle {

    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getArea() {
        return width * height;
    }

    public double getPerimeter() {
        return 2 * (width + height);
    }

    public double getWidth()  { return width; }
    public double getHeight() { return height; }
}

// Usage:
// Rectangle r = new Rectangle(4.0, 7.0);
// r.getArea();       // 28.0
// r.getPerimeter();  // 22.0`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
