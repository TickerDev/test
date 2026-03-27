import { Link } from '@tanstack/react-router'

export function CS3Unit3() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 3</span>
        <h1>Regular Expressions (Regex)</h1>
        <p>
          Regular expressions are a powerful mini-language for matching patterns
          in text. Java supports regex through the <code>String</code> class
          and the <code>java.util.regex</code> package.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#basics">Regex Basics</a></li>
          <li><a href="#character-classes">Character Classes</a></li>
          <li><a href="#quantifiers">Quantifiers</a></li>
          <li><a href="#anchors">Anchors & Boundaries</a></li>
          <li><a href="#groups">Groups & Alternation</a></li>
          <li><a href="#string-methods">String Regex Methods</a></li>
          <li><a href="#pattern-matcher">Pattern & Matcher Classes</a></li>
          <li><a href="#examples">Practical Examples</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="basics">
        <h2>Regex Basics</h2>
        <p>
          A regex is a pattern that describes a set of strings. Most characters
          match themselves literally, but special <strong>metacharacters</strong>
          have special meaning.
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Metacharacter</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><code>.</code></td><td>Any single character (except newline)</td></tr>
              <tr><td><code>\\d</code></td><td>Any digit [0-9]</td></tr>
              <tr><td><code>\\D</code></td><td>Any non-digit</td></tr>
              <tr><td><code>\\w</code></td><td>Any word character [a-zA-Z0-9_]</td></tr>
              <tr><td><code>\\W</code></td><td>Any non-word character</td></tr>
              <tr><td><code>\\s</code></td><td>Any whitespace (space, tab, newline)</td></tr>
              <tr><td><code>\\S</code></td><td>Any non-whitespace</td></tr>
            </tbody>
          </table>
        </div>
        <div className="callout">
          <h4>Java string escaping</h4>
          <p>
            In Java strings, backslash is an escape character. To write
            the regex <code>\d</code>, you need <code>"\\d"</code> in Java
            (double backslash).
          </p>
        </div>
      </section>

      <section className="unit-section" id="character-classes">
        <h2>Character Classes</h2>
        <p>
          Square brackets define a <strong>character class</strong> — a set of
          characters to match one position.
        </p>
        <div className="code-block">
          <div className="code-label">Java — Character classes</div>
          <pre><code>{`// [abc]    matches a, b, or c
// [a-z]    matches any lowercase letter
// [A-Z]    matches any uppercase letter
// [0-9]    matches any digit (same as \\d)
// [a-zA-Z] matches any letter
// [^abc]   matches anything EXCEPT a, b, c (^ = negation)

System.out.println("hello".matches("[a-z]+"));   // true
System.out.println("Hello".matches("[a-z]+"));   // false (H is uppercase)
System.out.println("Hello".matches("[a-zA-Z]+")); // true`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="quantifiers">
        <h2>Quantifiers</h2>
        <p>Quantifiers specify <strong>how many</strong> of the preceding element to match.</p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Quantifier</th><th>Meaning</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><code>*</code></td><td>0 or more</td><td><code>a*</code> matches "", "a", "aaa"</td></tr>
              <tr><td><code>+</code></td><td>1 or more</td><td><code>a+</code> matches "a", "aaa" (not "")</td></tr>
              <tr><td><code>?</code></td><td>0 or 1</td><td><code>a?</code> matches "" or "a"</td></tr>
              <tr><td><code>{'{n}'}</code></td><td>Exactly n</td><td><code>a{'{3}'}</code> matches "aaa"</td></tr>
              <tr><td><code>{'{n,m}'}</code></td><td>Between n and m</td><td><code>a{'{2,4}'}</code> matches "aa", "aaa", "aaaa"</td></tr>
              <tr><td><code>{'{n,}'}</code></td><td>n or more</td><td><code>a{'{2,}'}</code> matches "aa", "aaa", ...</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="anchors">
        <h2>Anchors & Boundaries</h2>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Anchor</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><code>^</code></td><td>Start of string</td></tr>
              <tr><td><code>$</code></td><td>End of string</td></tr>
              <tr><td><code>\\b</code></td><td>Word boundary</td></tr>
            </tbody>
          </table>
        </div>
        <div className="code-block">
          <div className="code-label">Java — Anchors</div>
          <pre><code>{`// matches() checks the ENTIRE string (implicit ^...$)
System.out.println("hello".matches("hel.*"));  // true

// For partial matching, use Pattern/Matcher or find()
// "^hello" matches strings that START with hello
// "world$" matches strings that END with world`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="groups">
        <h2>Groups & Alternation</h2>
        <div className="code-block">
          <div className="code-label">Java — Groups and alternation</div>
          <pre><code>{`// Parentheses create groups
// | is alternation (OR)

// Match "cat" or "dog"
"cat".matches("cat|dog");  // true
"dog".matches("cat|dog");  // true

// Groups with quantifiers
"ababab".matches("(ab)+"); // true — 1 or more "ab"

// Capturing groups — extract matched parts
import java.util.regex.*;

Pattern p = Pattern.compile("(\\d{3})-(\\d{4})");
Matcher m = p.matcher("Call 555-1234 today");
if (m.find()) {
    System.out.println(m.group(0)); // 555-1234 (whole match)
    System.out.println(m.group(1)); // 555 (first group)
    System.out.println(m.group(2)); // 1234 (second group)
}`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="string-methods">
        <h2>String Regex Methods</h2>
        <div className="code-block">
          <div className="code-label">Java — String methods that use regex</div>
          <pre><code>{`String s = "Hello World 123";

// matches — does the ENTIRE string match?
System.out.println(s.matches(".*\\d+"));        // true

// split — break string by a pattern
String[] words = "one,two,,three".split(",");
// ["one", "two", "", "three"]

String[] tokens = "a  b   c".split("\\s+");
// ["a", "b", "c"] — split on 1+ whitespace

// replaceAll — replace all matches
String cleaned = "a1b2c3".replaceAll("\\d", "");
System.out.println(cleaned);  // abc

// replaceFirst — replace first match only
String result = "foo bar foo".replaceFirst("foo", "baz");
System.out.println(result);   // baz bar foo`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="pattern-matcher">
        <h2>Pattern & Matcher Classes</h2>
        <p>
          For complex or repeated matching, compile the regex into a
          <code>Pattern</code> and create a <code>Matcher</code>.
        </p>
        <div className="code-block">
          <div className="code-label">Java — Finding all matches in a string</div>
          <pre><code>{`import java.util.regex.*;

String text = "Scores: 95, 87, 92, 100, 78";
Pattern p = Pattern.compile("\\d+");
Matcher m = p.matcher(text);

while (m.find()) {
    System.out.println("Found: " + m.group() + " at index " + m.start());
}
// Found: 95 at index 8
// Found: 87 at index 12
// Found: 92 at index 16
// Found: 100 at index 20
// Found: 78 at index 25`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="examples">
        <h2>Practical Examples</h2>
        <div className="code-block">
          <div className="code-label">Java — Common regex patterns</div>
          <pre><code>{`// Email (simplified)
String emailRegex = "\\w+@\\w+\\.\\w+";
System.out.println("user@example.com".matches(emailRegex));  // true

// Phone number: (XXX) XXX-XXXX
String phoneRegex = "\\(\\d{3}\\) \\d{3}-\\d{4}";
System.out.println("(555) 123-4567".matches(phoneRegex));    // true

// Date: MM/DD/YYYY
String dateRegex = "\\d{2}/\\d{2}/\\d{4}";
System.out.println("03/27/2026".matches(dateRegex));         // true

// Extract all words from a string
Pattern wordPattern = Pattern.compile("[a-zA-Z]+");
Matcher wm = wordPattern.matcher("Hello, World! 123");
while (wm.find()) {
    System.out.println(wm.group());  // Hello, World
}`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
