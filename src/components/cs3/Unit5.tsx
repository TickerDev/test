import { Link } from '@tanstack/react-router'

export function CS3Unit5() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 5</span>
        <h1>Stacks & Expressions</h1>
        <p>
          The stack is one of the most fundamental data structures in CS. This
          unit covers how stacks work, how to use Java's Stack class, and the
          classic application: evaluating mathematical expressions.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#stack-concept">Stack Concept (LIFO)</a></li>
          <li><a href="#java-stack">Java's Stack Class</a></li>
          <li><a href="#infix-postfix">Infix vs Postfix Notation</a></li>
          <li><a href="#infix-to-postfix">Converting Infix to Postfix</a></li>
          <li><a href="#eval-postfix">Evaluating Postfix Expressions</a></li>
          <li><a href="#balanced-parens">Balanced Parentheses</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="stack-concept">
        <h2>Stack Concept (LIFO)</h2>
        <p>
          A stack is <strong>Last In, First Out</strong> (LIFO). Think of a
          stack of plates — you add and remove from the <strong>top</strong>
          only.
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Operation</th><th>Description</th><th>Time</th></tr></thead>
            <tbody>
              <tr><td><code>push(e)</code></td><td>Add element to top</td><td>O(1)</td></tr>
              <tr><td><code>pop()</code></td><td>Remove and return top element</td><td>O(1)</td></tr>
              <tr><td><code>peek()</code></td><td>Look at top element without removing</td><td>O(1)</td></tr>
              <tr><td><code>isEmpty()</code></td><td>Check if stack is empty</td><td>O(1)</td></tr>
              <tr><td><code>size()</code></td><td>Number of elements</td><td>O(1)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="java-stack">
        <h2>Java's Stack Class</h2>
        <div className="code-block">
          <div className="code-label">Java — Stack basics</div>
          <pre><code>{`import java.util.Stack;

Stack<Integer> stack = new Stack<>();

stack.push(10);
stack.push(20);
stack.push(30);
// Stack (top to bottom): [30, 20, 10]

System.out.println(stack.peek());   // 30 (top, not removed)
System.out.println(stack.pop());    // 30 (removed)
System.out.println(stack.pop());    // 20
System.out.println(stack.size());   // 1
System.out.println(stack.isEmpty()); // false
System.out.println(stack.pop());    // 10
System.out.println(stack.isEmpty()); // true`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="infix-postfix">
        <h2>Infix vs Postfix Notation</h2>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Notation</th><th>Operator position</th><th>Example</th><th>Needs parens?</th></tr></thead>
            <tbody>
              <tr><td><strong>Infix</strong></td><td>Between operands</td><td><code>3 + 4 * 2</code></td><td>Yes (for precedence)</td></tr>
              <tr><td><strong>Postfix</strong> (RPN)</td><td>After operands</td><td><code>3 4 2 * +</code></td><td>No — order is unambiguous</td></tr>
              <tr><td><strong>Prefix</strong></td><td>Before operands</td><td><code>+ 3 * 4 2</code></td><td>No</td></tr>
            </tbody>
          </table>
        </div>
        <div className="code-block">
          <div className="code-label">More infix → postfix examples</div>
          <pre><code className="language-none">{`Infix:    (3 + 4) * 2      →  Postfix: 3 4 + 2 *
Infix:    5 + 3 * 2        →  Postfix: 5 3 2 * +
Infix:    (1 + 2) * (3 + 4) →  Postfix: 1 2 + 3 4 + *`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="infix-to-postfix">
        <h2>Converting Infix to Postfix (Shunting Yard)</h2>
        <div className="code-block">
          <div className="code-label">Java — Infix to Postfix conversion</div>
          <pre><code>{`public static String infixToPostfix(String infix) {
    StringBuilder output = new StringBuilder();
    Stack<Character> ops = new Stack<>();

    for (char c : infix.toCharArray()) {
        if (Character.isDigit(c)) {
            output.append(c).append(' ');
        } else if (c == '(') {
            ops.push(c);
        } else if (c == ')') {
            while (ops.peek() != '(') {
                output.append(ops.pop()).append(' ');
            }
            ops.pop(); // remove '('
        } else if ("+-*/".indexOf(c) >= 0) {
            while (!ops.isEmpty() && precedence(ops.peek()) >= precedence(c)) {
                output.append(ops.pop()).append(' ');
            }
            ops.push(c);
        }
    }
    while (!ops.isEmpty()) {
        output.append(ops.pop()).append(' ');
    }
    return output.toString().trim();
}

private static int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="eval-postfix">
        <h2>Evaluating Postfix Expressions</h2>
        <div className="code-block">
          <div className="code-label">Java — Postfix evaluation with a stack</div>
          <pre><code>{`public static int evalPostfix(String expr) {
    Stack<Integer> stack = new Stack<>();

    for (String token : expr.split("\\s+")) {
        if (token.matches("\\d+")) {
            stack.push(Integer.parseInt(token));
        } else {
            int b = stack.pop();  // second operand (popped first!)
            int a = stack.pop();  // first operand
            switch (token) {
                case "+": stack.push(a + b); break;
                case "-": stack.push(a - b); break;
                case "*": stack.push(a * b); break;
                case "/": stack.push(a / b); break;
            }
        }
    }
    return stack.pop();
}

// evalPostfix("3 4 2 * +") → 3 + (4*2) = 11
// evalPostfix("5 3 2 * +") → 5 + (3*2) = 11`}</code></pre>
        </div>
        <div className="code-block">
          <div className="code-label">Trace: evaluate "3 4 2 * +"</div>
          <pre><code className="language-none">{`Token  Action              Stack
3      push 3              [3]
4      push 4              [3, 4]
2      push 2              [3, 4, 2]
*      pop 2,4 → push 8   [3, 8]
+      pop 8,3 → push 11  [11]
Result: 11`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="balanced-parens">
        <h2>Balanced Parentheses</h2>
        <div className="code-block">
          <div className="code-label">Java — Check balanced brackets with a stack</div>
          <pre><code>{`public static boolean isBalanced(String expr) {
    Stack<Character> stack = new Stack<>();
    for (char c : expr.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else if (c == ')' || c == ']' || c == '}') {
            if (stack.isEmpty()) return false;
            char open = stack.pop();
            if ((c == ')' && open != '(') ||
                (c == ']' && open != '[') ||
                (c == '}' && open != '{')) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

System.out.println(isBalanced("((()))"));    // true
System.out.println(isBalanced("([{}])"));    // true
System.out.println(isBalanced("((]"));       // false
System.out.println(isBalanced("(()"));       // false`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
