import { Link } from '@tanstack/react-router'

export function Unit8() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Units 8 & 9 & 10</span>
        <h1>Inheritance, Polymorphism & Abstract Classes</h1>
        <p>
          Object-oriented programming's most powerful ideas: building new classes
          on top of existing ones, letting objects behave differently through the
          same interface, and designing with abstraction.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#vocab">Key Vocabulary</a></li>
          <li><a href="#scope-static">Scope, Static Fields & Methods</a></li>
          <li><a href="#preconditions">Preconditions & Postconditions</a></li>
          <li><a href="#inheritance">Inheritance (extends)</a></li>
          <li><a href="#subclass-construction">Subclass Construction & super()</a></li>
          <li><a href="#overriding">Overriding Methods & super.</a></li>
          <li><a href="#type-conversion">Type Conversion & instanceof</a></li>
          <li><a href="#polymorphism">Polymorphism & Late Binding</a></li>
          <li><a href="#abstract">Abstract Classes & Methods</a></li>
          <li><a href="#access-control">Access Control: public, private, protected</a></li>
          <li><a href="#object-class">The Object Class</a></li>
          <li><a href="#interfaces">Interfaces</a></li>
          <li><a href="#design">Cohesion, Coupling & Immutability</a></li>
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
              <tr><td><strong>Scope</strong></td><td>The part of a program in which a variable is defined (alive).</td></tr>
              <tr><td><strong>Static method</strong></td><td>A method with no implicit parameter — belongs to the class, not an object.</td></tr>
              <tr><td><strong>Static field</strong></td><td>A variable with one value shared by the whole class.</td></tr>
              <tr><td><strong>Precondition</strong></td><td>A condition that must be true when a method is called for it to work correctly.</td></tr>
              <tr><td><strong>Postcondition</strong></td><td>A condition that is true after a method completes.</td></tr>
              <tr><td><strong>Cohesion</strong></td><td>A class is cohesive if its features support a single abstraction.</td></tr>
              <tr><td><strong>Coupling</strong></td><td>The degree to which classes depend on each other.</td></tr>
              <tr><td><strong>Immutable</strong></td><td>A class with no mutator methods — objects cannot be changed after creation.</td></tr>
              <tr><td><strong>Polymorphism</strong></td><td>Selecting a method based on the actual type of the object at runtime.</td></tr>
              <tr><td><strong>Late (dynamic) binding</strong></td><td>Choosing the method implementation at runtime based on the object type.</td></tr>
              <tr><td><strong>Early binding</strong></td><td>Choosing among overloaded methods at compile time based on parameter types.</td></tr>
              <tr><td><strong>Abstract method</strong></td><td>A method with a name, parameters, and return type but no implementation.</td></tr>
              <tr><td><strong>Interface</strong></td><td>A type with only abstract methods and constants — no instance variables.</td></tr>
              <tr><td><strong>Cast</strong></td><td>Explicitly converting a value from one type to another.</td></tr>
              <tr><td><strong>implements</strong></td><td>Keyword used when a class implements an interface.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SCOPE & STATIC ─── */}
      <section className="unit-section" id="scope-static">
        <h2>Scope, Static Fields & Methods</h2>

        <div className="code-block">
          <div className="code-label">Java — Static field and method</div>
          <pre><code>{`public class BankAccount {

    // Static field — shared by ALL BankAccount objects
    private static int accountCount = 0;

    private String id;
    private double balance;

    public BankAccount(double balance) {
        accountCount++;                    // shared counter increments
        this.id = "ACCT-" + accountCount;
        this.balance = balance;
    }

    // Static method — called on the CLASS, not an object
    public static int getAccountCount() {
        return accountCount;
    }
}

// Usage:
BankAccount a = new BankAccount(100);
BankAccount b = new BankAccount(200);

// Static method called on the class
System.out.println(BankAccount.getAccountCount());  // 2`}</code></pre>
        </div>

        <div className="callout">
          <h4>Reminder: constants</h4>
          <pre style={{ background: 'none', margin: 0, padding: 0 }}><code style={{ fontSize: '.85rem' }}>{`public static final int MAX = 100;
// final = can't change, static = one copy, public = accessible anywhere`}</code></pre>
        </div>
      </section>

      {/* ─── PRECONDITIONS ─── */}
      <section className="unit-section" id="preconditions">
        <h2>Preconditions & Postconditions</h2>

        <div className="code-block">
          <div className="code-label">Java — Documenting pre/postconditions</div>
          <pre><code>{`/**
 * Deposits money into the account.
 * @param amount the amount to deposit
 * Precondition: amount > 0
 * Postcondition: balance is increased by amount
 */
public void deposit(double amount) {
    // Caller is responsible for ensuring precondition
    balance += amount;
}

// If precondition is violated (amount is negative),
// the method behavior is UNDEFINED — it's the caller's fault.`}</code></pre>
        </div>
      </section>

      {/* ─── INHERITANCE ─── */}
      <section className="unit-section" id="inheritance">
        <h2>Inheritance (extends)</h2>
        <p>
          <code>extends</code> creates a <strong>subclass</strong> that inherits
          all fields and methods from a <strong>superclass</strong>. The subclass
          <em>is-a</em> type of the superclass.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Inheritance basics</div>
          <pre><code>{`// Superclass
public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public double getBalance() { return balance; }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        balance -= amount;
    }
}

// Subclass — inherits all of BankAccount
public class CheckingAccount extends BankAccount {

    private int transactionCount;  // new field (not in superclass)

    public CheckingAccount(double balance) {
        super(balance);            // call superclass constructor
        transactionCount = 0;
    }

    // New method — only in CheckingAccount
    public int getTransactionCount() {
        return transactionCount;
    }

    // Override — different behavior than superclass
    @Override
    public void deposit(double amount) {
        super.deposit(amount);     // call superclass version
        transactionCount++;
    }
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Inheritance rules</h4>
          <table className="info-table">
            <thead>
              <tr><th>Rule</th><th>Detail</th></tr>
            </thead>
            <tbody>
              <tr><td>A class can extend <strong>only 1</strong> superclass</td><td>No multiple inheritance in Java</td></tr>
              <tr><td>Subclass inherits <strong>all</strong> public methods</td><td>Can call them directly</td></tr>
              <tr><td>Subclass <strong>cannot</strong> access private fields directly</td><td>Must use public getters/setters</td></tr>
              <tr><td>Every class extends <code>Object</code></td><td>Automatically, if no <code>extends</code> clause</td></tr>
              <tr><td>Subclass methods are <strong>not</strong> available to superclass references</td><td>Unless you cast</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SUBCLASS CONSTRUCTION ─── */}
      <section className="unit-section" id="subclass-construction">
        <h2>Subclass Construction & super()</h2>
        <p>
          A subclass constructor must initialize the superclass part of the
          object first. Use <code>super(...)</code> to call the superclass
          constructor — it <strong>must be the first statement</strong>.
        </p>

        <div className="code-block">
          <div className="code-label">Java — super() in constructors</div>
          <pre><code>{`public class SavingsAccount extends BankAccount {

    private double interestRate;

    public SavingsAccount(double balance, double rate) {
        super(balance);          // MUST be first line
        // "must have potato head before you can have Darth Tater"
        interestRate = rate;
    }

    public void addInterest() {
        double interest = getBalance() * interestRate;
        deposit(interest);       // inherited method
    }
}

// If you don't write super(), Java calls super() with no args.
// If the superclass has NO no-arg constructor, this causes a compile error.`}</code></pre>
        </div>

        <div className="callout">
          <h4>Constructor rules</h4>
          <table className="info-table">
            <thead>
              <tr><th>Scenario</th><th>What happens</th></tr>
            </thead>
            <tbody>
              <tr><td>No constructor at all</td><td>Java provides a default no-arg constructor; fields get default values</td></tr>
              <tr><td>Superclass has no constructor</td><td>Subclass doesn't need one either</td></tr>
              <tr><td>Superclass constructor has parameters</td><td>Subclass <strong>must</strong> have a constructor and call <code>super(...)</code></td></tr>
              <tr><td>An empty class</td><td>Totally valid — extends Object implicitly</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── OVERRIDING ─── */}
      <section className="unit-section" id="overriding">
        <h2>Overriding Methods & super.</h2>
        <p>
          A subclass can <strong>override</strong> an inherited method by
          defining a method with the <em>exact same signature</em>. Use
          <code>super.methodName()</code> to call the superclass version.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Overriding and super.</div>
          <pre><code>{`public class CheckingAccount extends BankAccount {

    private static final double FEE = 2.0;

    // Override withdraw to add a fee
    @Override
    public void withdraw(double amount) {
        super.withdraw(amount);    // call superclass withdraw
        super.withdraw(FEE);       // deduct fee
    }

    // super.withdraw() calls BankAccount's version
    // NOT CheckingAccount's (avoids infinite recursion)
}`}</code></pre>
        </div>

        <div className="callout">
          <h4>Don't shadow instance fields!</h4>
          <div className="code-block">
            <div className="code-label">Bug — shadowed field</div>
            <pre><code>{`public class Parent {
    protected int value = 10;
}

public class Child extends Parent {
    private int value = 20;  // BAD! Shadows Parent.value
    // Now Child objects have TWO 'value' fields
    // Parent methods see 10, Child methods see 20
    // This is almost always a bug.
}`}</code></pre>
          </div>
        </div>
      </section>

      {/* ─── TYPE CONVERSION ─── */}
      <section className="unit-section" id="type-conversion">
        <h2>Type Conversion & instanceof</h2>

        <div className="code-block">
          <div className="code-label">Java — Superclass/subclass type conversion</div>
          <pre><code>{`// Superclass on the left — always safe (is-a relationship)
BankAccount ba = new CheckingAccount(100);
// A CheckingAccount IS-A BankAccount ✓

// Subclass on the left — requires a cast
CheckingAccount ca = (CheckingAccount) ba;
// Only safe if ba actually refers to a CheckingAccount

// instanceof — check before casting
if (ba instanceof CheckingAccount) {
    CheckingAccount ca2 = (CheckingAccount) ba;
    System.out.println(ca2.getTransactionCount());
}

// Everything is an instanceof Object
System.out.println(ba instanceof Object);   // true
System.out.println("hi" instanceof Object); // true`}</code></pre>
        </div>

        <div className="callout">
          <h4>Compile time vs runtime</h4>
          <p>
            The <strong>compiler</strong> checks the <em>reference type</em> (left
            side). The <strong>JVM</strong> uses the <em>object type</em> (right
            side of <code>new</code>) to decide which method to call.
          </p>
          <div className="code-block">
            <div className="code-label">Key distinction</div>
            <pre><code>{`BankAccount ba = new CheckingAccount(100);
// Reference type: BankAccount (compiler sees this)
// Object type: CheckingAccount (JVM uses this)

ba.deposit(50);               // OK — BankAccount has deposit
// ba.getTransactionCount();  // ERROR — compiler only sees BankAccount`}</code></pre>
          </div>
        </div>
      </section>

      {/* ─── POLYMORPHISM ─── */}
      <section className="unit-section" id="polymorphism">
        <h2>Polymorphism & Late Binding</h2>
        <p>
          <strong>Polymorphism</strong> means the same method call can behave
          differently depending on the actual object type. The JVM decides
          which version to call at <strong>runtime</strong> (late binding).
        </p>

        <div className="code-block">
          <div className="code-label">Java — Polymorphism in action</div>
          <pre><code>{`BankAccount[] accounts = new BankAccount[3];
accounts[0] = new BankAccount(100);
accounts[1] = new CheckingAccount(200);
accounts[2] = new SavingsAccount(300, 0.05);

// Same method call — different behavior for each type
for (BankAccount acct : accounts) {
    acct.deposit(10);
    // BankAccount.deposit()       for accounts[0]
    // CheckingAccount.deposit()   for accounts[1] (also counts transaction)
    // BankAccount.deposit()       for accounts[2] (inherited)
}

// This is polymorphism:
// Compiler ensures BankAccount has deposit() ← compile-time check
// JVM calls the correct version for each object ← runtime (late binding)`}</code></pre>
        </div>
      </section>

      {/* ─── ABSTRACT CLASSES ─── */}
      <section className="unit-section" id="abstract">
        <h2>Abstract Classes & Methods</h2>
        <p>
          An <strong>abstract class</strong> cannot be instantiated — it serves
          as a base for subclasses. An <strong>abstract method</strong> has no
          body; subclasses must provide the implementation.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Abstract class</div>
          <pre><code>{`public abstract class Shape {

    private String color;  // abstract classes CAN have fields

    public Shape(String color) {
        this.color = color;
    }

    public String getColor() { return color; }  // concrete method

    // Abstract method — no body, subclasses MUST implement
    public abstract double getArea();
    public abstract double getPerimeter();
}

// Concrete subclass — must implement ALL abstract methods
public class Circle extends Shape {

    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

// Shape s = new Shape("red");     // ERROR — can't instantiate abstract
Shape s = new Circle("red", 5.0); // OK — Circle is concrete`}</code></pre>
        </div>

        <div className="callout">
          <h4>Abstract class rules</h4>
          <table className="info-table">
            <thead>
              <tr><th>Rule</th><th>Detail</th></tr>
            </thead>
            <tbody>
              <tr><td>Can have instance fields</td><td>Yes — and constructors, concrete methods, everything</td></tr>
              <tr><td>Must have abstract methods?</td><td>No — but a class <strong>with</strong> abstract methods <strong>must</strong> be abstract</td></tr>
              <tr><td>Can extend another class</td><td>Yes — abstract or concrete</td></tr>
              <tr><td>Subclass doesn't implement all abstract methods?</td><td>Subclass must also be declared <code>abstract</code></td></tr>
              <tr><td>Can be instantiated?</td><td>No — only concrete subclasses can</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── ACCESS CONTROL ─── */}
      <section className="unit-section" id="access-control">
        <h2>Access Control: public, private, protected</h2>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Modifier</th><th>Same class</th><th>Same package</th><th>Subclass</th><th>Everywhere</th></tr>
            </thead>
            <tbody>
              <tr><td><code>public</code></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
              <tr><td><code>protected</code></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
              <tr><td>(no modifier)</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td><code>private</code></td><td>Yes</td><td>No</td><td>No</td><td>No</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Java — protected in inheritance</div>
          <pre><code>{`public class Animal {
    private String name;           // only Animal can access
    protected int age;             // Animal + subclasses + same package
    public String getSound() {     // anyone can access
        return "...";
    }
}

public class Dog extends Animal {
    public void birthday() {
        age++;             // OK — age is protected
        // name = "Rex";   // ERROR — name is private to Animal
    }
}`}</code></pre>
        </div>
      </section>

      {/* ─── OBJECT CLASS ─── */}
      <section className="unit-section" id="object-class">
        <h2>The Object Class</h2>
        <p>
          Every class extends <code>Object</code>. It provides
          <code>toString()</code> and <code>equals()</code> that you should
          override in your classes.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Overriding toString() and equals()</div>
          <pre><code>{`public class Student {
    private String name;
    private int id;

    public Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    // Required signature: public String toString()
    @Override
    public String toString() {
        return name + " (#" + id + ")";
    }

    // Required signature: public boolean equals(Object o)
    @Override
    public boolean equals(Object o) {
        if (o instanceof Student) {
            Student other = (Student) o;
            return this.id == other.id && this.name.equals(other.name);
        }
        return false;
    }
}

Student s1 = new Student("Alice", 101);
System.out.println(s1);                 // Alice (#101) — toString()
System.out.println(s1.equals(new Student("Alice", 101)));  // true`}</code></pre>
        </div>

        <div className="callout">
          <h4>Subclasses can reuse superclass code</h4>
          <div className="code-block">
            <div className="code-label">Java — super.toString() and super.equals()</div>
            <pre><code>{`public class GradStudent extends Student {
    private String advisor;

    @Override
    public String toString() {
        return super.toString() + " — Advisor: " + advisor;
    }

    @Override
    public boolean equals(Object o) {
        if (!super.equals(o)) return false;  // reuse parent check
        if (o instanceof GradStudent) {
            return advisor.equals(((GradStudent) o).advisor);
        }
        return false;
    }
}`}</code></pre>
          </div>
        </div>
      </section>

      {/* ─── INTERFACES ─── */}
      <section className="unit-section" id="interfaces">
        <h2>Interfaces</h2>
        <p>
          An <strong>interface</strong> defines a contract: abstract methods and
          constants only, no instance variables. A class <code>implements</code>
          an interface (not <code>extends</code>), and can implement
          <strong> multiple</strong> interfaces.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Interface definition and implementation</div>
          <pre><code>{`public interface Measurable {
    double getArea();       // abstract (no body)
    double getPerimeter();  // abstract (no body)
}

public interface Printable {
    void printInfo();
}

// A class can implement MULTIPLE interfaces
public class Rectangle implements Measurable, Printable {

    private double width, height;

    public Rectangle(double w, double h) {
        width = w; height = h;
    }

    @Override
    public double getArea() { return width * height; }

    @Override
    public double getPerimeter() { return 2 * (width + height); }

    @Override
    public void printInfo() {
        System.out.println(width + " x " + height);
    }
}

// Interface as a type (polymorphism!)
Measurable m = new Rectangle(3, 4);
System.out.println(m.getArea());  // 12.0`}</code></pre>
        </div>

        <div className="callout">
          <h4>Interface vs Abstract class</h4>
          <table className="info-table">
            <thead>
              <tr><th></th><th>Interface</th><th>Abstract class</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Methods</strong></td><td>Abstract only (+ constants)</td><td>Abstract and concrete</td></tr>
              <tr><td><strong>Fields</strong></td><td>Constants only</td><td>Instance fields allowed</td></tr>
              <tr><td><strong>Keyword</strong></td><td><code>implements</code></td><td><code>extends</code></td></tr>
              <tr><td><strong>Multiple?</strong></td><td>Yes — can implement many</td><td>No — can extend only one</td></tr>
              <tr><td><strong>Constructor?</strong></td><td>No</td><td>Yes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── DESIGN ─── */}
      <section className="unit-section" id="design">
        <h2>Cohesion, Coupling & Immutability</h2>

        <div className="concept-grid three-col">
          <div className="concept-card">
            <h4>Cohesion (high = good)</h4>
            <p>
              A class is <strong>cohesive</strong> if all its features support
              a single responsibility. A <code>Student</code> class that also
              handles printing and file I/O has <em>low</em> cohesion.
            </p>
          </div>
          <div className="concept-card">
            <h4>Coupling (low = good)</h4>
            <p>
              <strong>Coupling</strong> is how much classes depend on each other.
              If changing one class forces changes in ten others, coupling is
              too high. Use interfaces and encapsulation to reduce it.
            </p>
          </div>
          <div className="concept-card">
            <h4>Immutability</h4>
            <p>
              An <strong>immutable</strong> class has no mutator methods — once
              created, an object's state never changes. <code>String</code> is
              the most famous immutable class in Java.
            </p>
          </div>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
