import { Link } from '@tanstack/react-router'

export function CS3Unit10() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 10</span>
        <h1>Algorithms: Radix Sort & Heap Sort</h1>
        <p>
          Beyond comparison-based sorts. Radix sort breaks the O(N log N)
          barrier by not comparing elements. Heap sort uses the heap data
          structure for guaranteed O(N log N) in-place sorting.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#heaps">Heaps (Min-Heap & Max-Heap)</a></li>
          <li><a href="#heap-operations">Heap Operations</a></li>
          <li><a href="#heap-sort">Heap Sort</a></li>
          <li><a href="#radix-concept">Radix Sort Concept</a></li>
          <li><a href="#radix-code">Radix Sort Implementation</a></li>
          <li><a href="#comparison">Algorithm Comparison</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="heaps">
        <h2>Heaps (Min-Heap & Max-Heap)</h2>
        <p>
          A <strong>heap</strong> is a complete binary tree stored in an
          array. In a <strong>max-heap</strong>, every parent is larger than
          its children. In a <strong>min-heap</strong>, every parent is smaller.
        </p>
        <div className="code-block">
          <div className="code-label">Max-heap stored as array</div>
          <pre><code className="language-none">{`Tree view:        Array view:
       90          [90, 70, 80, 30, 50, 60, 20]
      /  \\          idx: 0   1   2   3   4   5   6
    70    80
   / \\   / \\       Parent of i:     (i - 1) / 2
  30 50 60  20     Left child of i:  2 * i + 1
                   Right child of i: 2 * i + 2`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="heap-operations">
        <h2>Heap Operations</h2>
        <div className="code-block">
          <div className="code-label">Java — Heapify (sift down) for max-heap</div>
          <pre><code>{`// Sift down: fix the heap property at index i
private static void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        // swap
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, n, largest);  // recurse down
    }
}`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="heap-sort">
        <h2>Heap Sort</h2>
        <p>
          <strong>Step 1:</strong> Build a max-heap from the array.
          <strong> Step 2:</strong> Repeatedly extract the max (root), place it
          at the end, and re-heapify the smaller heap.
        </p>
        <div className="code-block">
          <div className="code-label">Java — Heap sort</div>
          <pre><code>{`public static void heapSort(int[] arr) {
    int n = arr.length;

    // Step 1: Build max-heap (start from last non-leaf)
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements one by one
    for (int i = n - 1; i > 0; i--) {
        // Swap root (max) with last element
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Heapify the reduced heap
        heapify(arr, i, 0);
    }
}

int[] data = {5, 3, 8, 1, 9, 2};
heapSort(data);
// data is now [1, 2, 3, 5, 8, 9]`}</code></pre>
        </div>
        <div className="code-block">
          <div className="code-label">Trace: heap sort [5, 3, 8, 1]</div>
          <pre><code className="language-none">{`Build max-heap: [8, 3, 5, 1]
Swap 8↔1, heapify: [5, 3, 1, |8]
Swap 5↔1, heapify: [3, 1, |5, 8]
Swap 3↔1:          [1, |3, 5, 8]
Sorted: [1, 3, 5, 8]`}</code></pre>
        </div>
        <p><strong>Big O: O(N log N)</strong> always — no worst case degradation. In-place (no extra array).</p>
      </section>

      <section className="unit-section" id="radix-concept">
        <h2>Radix Sort Concept</h2>
        <p>
          Radix sort is a <strong>non-comparison</strong> sort. It sorts
          integers digit by digit, from least significant to most significant
          (LSD radix sort). Each pass uses <strong>counting sort</strong> on
          one digit.
        </p>
        <div className="code-block">
          <div className="code-label">Trace: radix sort [170, 45, 75, 90, 2, 802, 66]</div>
          <pre><code className="language-none">{`Original: [170, 45, 75, 90, 2, 802, 66]

Pass 1 (ones digit):
  Bucket 0: 170, 90
  Bucket 2: 2, 802
  Bucket 5: 45, 75
  Bucket 6: 66
  Result: [170, 90, 2, 802, 45, 75, 66]

Pass 2 (tens digit):
  Bucket 0: 2, 802
  Bucket 4: 45
  Bucket 6: 66
  Bucket 7: 170, 75
  Bucket 9: 90
  Result: [2, 802, 45, 66, 170, 75, 90]

Pass 3 (hundreds digit):
  Bucket 0: 2, 45, 66, 75, 90
  Bucket 1: 170
  Bucket 8: 802
  Result: [2, 45, 66, 75, 90, 170, 802]  ✓ Sorted!`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="radix-code">
        <h2>Radix Sort Implementation</h2>
        <div className="code-block">
          <div className="code-label">Java — LSD Radix sort</div>
          <pre><code>{`public static void radixSort(int[] arr) {
    int max = Arrays.stream(arr).max().getAsInt();

    // Process each digit (1s, 10s, 100s, ...)
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}

private static void countingSortByDigit(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];  // digits 0-9

    // Count occurrences of each digit
    for (int num : arr) {
        int digit = (num / exp) % 10;
        count[digit]++;
    }

    // Cumulative count (positions)
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build output (traverse right-to-left for stability)
    for (int i = n - 1; i >= 0; i--) {
        int digit = (arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy back
    System.arraycopy(output, 0, arr, 0, n);
}`}</code></pre>
        </div>
        <p>
          <strong>Big O: O(d * N)</strong> where d is the number of digits.
          For fixed-size integers, d is constant so it's effectively
          <strong> O(N)</strong> — faster than comparison sorts!
        </p>
      </section>

      <section className="unit-section" id="comparison">
        <h2>Algorithm Comparison</h2>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Algorithm</th><th>Best</th><th>Worst</th><th>Space</th><th>Type</th></tr></thead>
            <tbody>
              <tr><td>Bubble Sort</td><td>O(N)</td><td>O(N²)</td><td>O(1)</td><td>Comparison</td></tr>
              <tr><td>Selection Sort</td><td>O(N²)</td><td>O(N²)</td><td>O(1)</td><td>Comparison</td></tr>
              <tr><td>Insertion Sort</td><td>O(N)</td><td>O(N²)</td><td>O(1)</td><td>Comparison</td></tr>
              <tr><td>Merge Sort</td><td>O(N log N)</td><td>O(N log N)</td><td>O(N)</td><td>Comparison</td></tr>
              <tr><td><strong>Heap Sort</strong></td><td>O(N log N)</td><td>O(N log N)</td><td>O(1)</td><td>Comparison</td></tr>
              <tr><td><strong>Radix Sort</strong></td><td>O(dN)</td><td>O(dN)</td><td>O(N + k)</td><td>Non-comparison</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
