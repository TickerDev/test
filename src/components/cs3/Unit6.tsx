import { Link } from '@tanstack/react-router'

export function CS3Unit6() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 6</span>
        <h1>Writing Recursive Code</h1>
        <p>
          You learned what recursion is in AP CSA. Now it's time to
          <em> write</em> it — solving problems from scratch using recursive
          thinking, backtracking, and helper methods.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#thinking">Thinking Recursively</a></li>
          <li><a href="#helpers">Helper Methods & Accumulators</a></li>
          <li><a href="#string-recursion">Recursion on Strings</a></li>
          <li><a href="#array-recursion">Recursion on Arrays</a></li>
          <li><a href="#backtracking">Backtracking</a></li>
          <li><a href="#recursion-trees">Drawing Recursion Trees</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="thinking">
        <h2>Thinking Recursively</h2>
        <p>
          The recipe: <strong>(1)</strong> Identify the base case.
          <strong>(2)</strong> Assume the recursive call works on a smaller
          input. <strong>(3)</strong> Combine the result of the recursive call
          with the current step.
        </p>
        <div className="code-block">
          <div className="code-label">Java — Reverse a string recursively</div>
          <pre><code>{`public static String reverse(String s) {
    if (s.length() <= 1) return s;  // base case
    // last char + reverse of everything before it
    return s.charAt(s.length() - 1) + reverse(s.substring(0, s.length() - 1));
}

System.out.println(reverse("hello"));  // olleh`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="helpers">
        <h2>Helper Methods & Accumulators</h2>
        <p>
          Sometimes the public method signature doesn't have enough parameters
          for recursion. Use a <strong>private helper</strong> with extra
          parameters (like an index or accumulator).
        </p>
        <div className="code-block">
          <div className="code-label">Java — Helper with accumulator</div>
          <pre><code>{`// Public method — clean API
public static int sum(int[] arr) {
    return sumHelper(arr, 0);
}

// Private helper — carries the index
private static int sumHelper(int[] arr, int index) {
    if (index >= arr.length) return 0;  // base case
    return arr[index] + sumHelper(arr, index + 1);
}

int[] data = {3, 7, 2, 8};
System.out.println(sum(data));  // 20`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="string-recursion">
        <h2>Recursion on Strings</h2>
        <div className="code-block">
          <div className="code-label">Java — Is a string a palindrome?</div>
          <pre><code>{`public static boolean isPalindrome(String s) {
    if (s.length() <= 1) return true;
    if (s.charAt(0) != s.charAt(s.length() - 1)) return false;
    return isPalindrome(s.substring(1, s.length() - 1));
}

System.out.println(isPalindrome("racecar")); // true
System.out.println(isPalindrome("hello"));   // false`}</code></pre>
        </div>
        <div className="code-block">
          <div className="code-label">Java — Count occurrences of a character</div>
          <pre><code>{`public static int countChar(String s, char target) {
    if (s.isEmpty()) return 0;
    int rest = countChar(s.substring(1), target);
    return (s.charAt(0) == target ? 1 : 0) + rest;
}

System.out.println(countChar("mississippi", 's')); // 4`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="array-recursion">
        <h2>Recursion on Arrays</h2>
        <div className="code-block">
          <div className="code-label">Java — Binary search (recursive)</div>
          <pre><code>{`public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) return -1;  // not found
    int mid = (low + high) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);
    return binarySearch(arr, target, low, mid - 1);
}

int[] sorted = {1, 3, 5, 7, 9, 11};
System.out.println(binarySearch(sorted, 7, 0, sorted.length - 1)); // 3`}</code></pre>
        </div>
        <div className="code-block">
          <div className="code-label">Java — Find maximum recursively</div>
          <pre><code>{`public static int max(int[] arr, int index) {
    if (index == arr.length - 1) return arr[index];
    return Math.max(arr[index], max(arr, index + 1));
}

int[] data = {3, 9, 1, 7, 5};
System.out.println(max(data, 0));  // 9`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="backtracking">
        <h2>Backtracking</h2>
        <p>
          <strong>Backtracking</strong> is a recursive technique that tries a
          choice, recurses, and <em>undoes</em> the choice if it doesn't lead
          to a solution.
        </p>
        <div className="code-block">
          <div className="code-label">Java — Generate all permutations</div>
          <pre><code>{`public static void permute(String prefix, String remaining) {
    if (remaining.isEmpty()) {
        System.out.println(prefix);  // base case: print solution
        return;
    }
    for (int i = 0; i < remaining.length(); i++) {
        char chosen = remaining.charAt(i);
        String rest = remaining.substring(0, i) + remaining.substring(i + 1);
        permute(prefix + chosen, rest);  // choose, recurse
        // undo happens automatically (rest is unchanged)
    }
}

permute("", "ABC");
// ABC, ACB, BAC, BCA, CAB, CBA`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="recursion-trees">
        <h2>Drawing Recursion Trees</h2>
        <p>
          For any recursive call, draw the call tree to understand the
          execution flow. Each node is a method call; branches are recursive
          calls made from that node.
        </p>
        <div className="code-block">
          <div className="code-label">Recursion tree for permute("", "AB")</div>
          <pre><code className="language-none">{`permute("", "AB")
├── permute("A", "B")
│   └── permute("AB", "")  → prints "AB"
└── permute("B", "A")
    └── permute("BA", "")  → prints "BA"`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
