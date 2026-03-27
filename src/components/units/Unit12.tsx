import { Link } from '@tanstack/react-router'

export function Unit12() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 12</span>
        <h1>Searching & Sorting</h1>
        <p>
          How do you find a value in a list? How do you put a list in order?
          This unit covers the classic search and sort algorithms, their
          trade-offs, and Big O time complexity.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#vocab">Key Vocabulary</a></li>
          <li><a href="#big-o">Big O Time Complexity</a></li>
          <li><a href="#swap">The Swap Pattern</a></li>
          <li><a href="#linear-search">Linear Search (Inefficient & Efficient)</a></li>
          <li><a href="#binary-search">Binary Search</a></li>
          <li><a href="#search-summary">Search Comparison</a></li>
          <li><a href="#bubble-sort">Bubble Sort (Dumb & Smart)</a></li>
          <li><a href="#selection-sort">Selection Sort</a></li>
          <li><a href="#insertion-sort">Insertion Sort</a></li>
          <li><a href="#merge-sort">Merge Sort</a></li>
          <li><a href="#sort-summary">Sort Comparison</a></li>
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
              <tr><td><strong>Pass</strong></td><td>Going through a list once, making changes to progress the algorithm. Sorts usually need multiple passes.</td></tr>
              <tr><td><strong>Check</strong></td><td>A comparison between 2 values. Faster than a swap.</td></tr>
              <tr><td><strong>Swap</strong></td><td>Exchanging 2 values in a list. Requires a temporary variable. Slower than a check.</td></tr>
              <tr><td><strong>Big O</strong></td><td>A measure of how efficiently code runs. Smaller = better/faster. Measures time complexity (or space). We focus on time.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── BIG O ─── */}
      <section className="unit-section" id="big-o">
        <h2>Big O Time Complexity</h2>
        <p>
          Big O describes how the number of operations grows as the input size
          <strong> N</strong> grows. We care about the <em>worst case</em>.
        </p>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Big O</th><th>Name</th><th>N = 1,000</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td><code>O(1)</code></td><td>Constant</td><td>1 operation</td><td>Array access by index</td></tr>
              <tr><td><code>O(log N)</code></td><td>Logarithmic</td><td>~10 operations</td><td>Binary search</td></tr>
              <tr><td><code>O(N)</code></td><td>Linear</td><td>1,000 operations</td><td>Linear search</td></tr>
              <tr><td><code>O(N log N)</code></td><td>Linearithmic</td><td>~10,000 operations</td><td>Merge sort</td></tr>
              <tr><td><code>O(N²)</code></td><td>Quadratic</td><td>1,000,000 operations</td><td>Bubble, selection, insertion sort</td></tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-label">Visualizing growth</div>
          <pre><code className="language-none">{`N        O(log N)    O(N)     O(N log N)    O(N²)
10       3           10       33            100
100      7           100      664           10,000
1,000    10          1,000    9,966         1,000,000
10,000   13          10,000   132,877       100,000,000

O(N²) gets TERRIBLE fast. That's why efficient sorts matter.`}</code></pre>
        </div>
      </section>

      {/* ─── SWAP ─── */}
      <section className="unit-section" id="swap">
        <h2>The Swap Pattern</h2>
        <p>
          Every sorting algorithm uses swaps. You <strong>need a temporary
          variable</strong> — you can't swap two values without one.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Swapping two elements</div>
          <pre><code>{`int[] arr = {3, 7, 1, 5};

// Swap arr[0] and arr[2]
int temp = arr[0];     // save first value
arr[0] = arr[2];       // overwrite first with second
arr[2] = temp;         // put saved value in second

// arr is now {1, 7, 3, 5}

// WITHOUT temp:
// arr[0] = arr[2];  // arr[0] is now 1... but 3 is GONE forever!`}</code></pre>
        </div>
      </section>

      {/* ─── LINEAR SEARCH ─── */}
      <section className="unit-section" id="linear-search">
        <h2>Linear Search (Inefficient & Efficient)</h2>
        <p>
          Check elements one by one from the start. The <strong>inefficient</strong>
          version always checks every element. The <strong>efficient</strong>
          version stops as soon as it finds the target.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Inefficient Linear Search</h4>
            <p>Always checks <strong>all N</strong> elements, even if the target is found early.</p>
            <div className="code-block">
              <div className="code-label">Always N checks</div>
              <pre><code>{`public static int linearBad(
    int[] arr, int target) {
  int index = -1;
  for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      index = i;
      // no break — keeps going!
    }
  }
  return index;
}`}</code></pre>
            </div>
          </div>
          <div className="concept-card">
            <h4>Efficient Linear Search</h4>
            <p>Stops immediately when found. Worst case N, best case 1.</p>
            <div className="code-block">
              <div className="code-label">Stops early</div>
              <pre><code>{`public static int linearGood(
    int[] arr, int target) {
  for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;  // found — stop!
    }
  }
  return -1;     // not found
}`}</code></pre>
            </div>
          </div>
        </div>

        <div className="callout">
          <h4>Linear search checks</h4>
          <table className="info-table">
            <thead>
              <tr><th></th><th>Best case</th><th>Worst case (not found)</th><th>Big O</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Inefficient</strong></td><td>N checks</td><td>N checks</td><td>O(N)</td></tr>
              <tr><td><strong>Efficient</strong></td><td>1 check</td><td>N checks</td><td>O(N)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── BINARY SEARCH ─── */}
      <section className="unit-section" id="binary-search">
        <h2>Binary Search</h2>
        <p>
          <strong>Requires a sorted array.</strong> Repeatedly cuts the search
          space in half by comparing the target to the middle element.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Binary search</div>
          <pre><code>{`public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;

    while (low <= high) {
        int mid = (low + high) / 2;

        if (arr[mid] == target) {
            return mid;              // found it!
        } else if (arr[mid] < target) {
            low = mid + 1;           // target is in right half
        } else {
            high = mid - 1;          // target is in left half
        }
    }
    return -1;  // not found
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Trace: binary search for 7 in [1, 3, 5, 7, 9, 11, 13]</div>
          <pre><code className="language-none">{`Pass 1: low=0, high=6, mid=3 → arr[3]=7 → FOUND!
Only 1 check needed.

Trace: binary search for 2 in [1, 3, 5, 7, 9, 11, 13]
Pass 1: low=0, high=6, mid=3 → arr[3]=7 > 2 → high=2
Pass 2: low=0, high=2, mid=1 → arr[1]=3 > 2 → high=0
Pass 3: low=0, high=0, mid=0 → arr[0]=1 < 2 → low=1
low > high → NOT FOUND. 3 checks needed.`}</code></pre>
        </div>

        <div className="callout">
          <h4>Binary search checks</h4>
          <p>
            Each pass eliminates <strong>half</strong> the remaining elements.
            For N elements, maximum checks = <strong>log₂(N) + 1</strong>.
          </p>
          <table className="info-table">
            <thead>
              <tr><th>N elements</th><th>Max checks</th></tr>
            </thead>
            <tbody>
              <tr><td>7</td><td>3</td></tr>
              <tr><td>15</td><td>4</td></tr>
              <tr><td>100</td><td>7</td></tr>
              <tr><td>1,000</td><td>10</td></tr>
              <tr><td>1,000,000</td><td>20</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: '.5rem' }}><strong>Big O: O(log N)</strong> — massively faster than linear for large arrays.</p>
        </div>
      </section>

      {/* ─── SEARCH SUMMARY ─── */}
      <section className="unit-section" id="search-summary">
        <h2>Search Comparison</h2>
        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Algorithm</th><th>Sorted required?</th><th>Big O</th><th>N=1,000 worst</th></tr>
            </thead>
            <tbody>
              <tr><td>Inefficient linear</td><td>No</td><td>O(N)</td><td>1,000 checks</td></tr>
              <tr><td>Efficient linear</td><td>No</td><td>O(N)</td><td>1,000 checks</td></tr>
              <tr><td>Binary search</td><td><strong>Yes</strong></td><td>O(log N)</td><td>10 checks</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── BUBBLE SORT ─── */}
      <section className="unit-section" id="bubble-sort">
        <h2>Bubble Sort (Dumb & Smart)</h2>
        <p>
          Repeatedly walks through the list, comparing adjacent elements and
          swapping them if they're in the wrong order. Largest values "bubble"
          to the end.
        </p>

        <div className="concept-grid">
          <div className="concept-card">
            <h4>Dumb Bubble Sort</h4>
            <p>Always does N-1 passes, even if already sorted.</p>
            <div className="code-block">
              <div className="code-label">Always N-1 passes</div>
              <pre><code>{`public static void bubbleDumb(
    int[] arr) {
  for (int pass = 0;
       pass < arr.length - 1;
       pass++) {
    for (int i = 0;
         i < arr.length - 1 - pass;
         i++) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}`}</code></pre>
            </div>
          </div>
          <div className="concept-card">
            <h4>Smart Bubble Sort</h4>
            <p>Stops early if a pass makes <strong>no swaps</strong> (list is sorted).</p>
            <div className="code-block">
              <div className="code-label">Stops when sorted</div>
              <pre><code>{`public static void bubbleSmart(
    int[] arr) {
  boolean swapped = true;
  int pass = 0;
  while (swapped) {
    swapped = false;
    for (int i = 0;
         i < arr.length - 1 - pass;
         i++) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    pass++;
  }
}`}</code></pre>
            </div>
          </div>
        </div>

        <div className="code-block">
          <div className="code-label">Trace: bubble sort [5, 3, 8, 1]</div>
          <pre><code className="language-none">{`Pass 1: [5,3,8,1] → [3,5,8,1] → [3,5,8,1] → [3,5,1,8]  (8 bubbled to end)
Pass 2: [3,5,1,8] → [3,5,1,8] → [3,1,5,8]                (5 in place)
Pass 3: [3,1,5,8] → [1,3,5,8]                              (3 in place)
Sorted: [1, 3, 5, 8]  — 3 passes`}</code></pre>
        </div>

        <p><strong>Big O: O(N²)</strong> — nested loops, each up to N.</p>
      </section>

      {/* ─── SELECTION SORT ─── */}
      <section className="unit-section" id="selection-sort">
        <h2>Selection Sort</h2>
        <p>
          Find the <strong>smallest</strong> (or largest) unsorted element and
          swap it into its correct position. Repeat for each position.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Selection sort (ascending)</div>
          <pre><code>{`public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        // Find the index of the minimum in unsorted portion
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap minimum into position i
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Trace: selection sort [5, 3, 8, 1]</div>
          <pre><code className="language-none">{`Pass 1: find min in [5,3,8,1] → min is 1 at index 3 → swap with index 0 → [1,3,8,5]
Pass 2: find min in [_,3,8,5] → min is 3 at index 1 → already in place  → [1,3,8,5]
Pass 3: find min in [_,_,8,5] → min is 5 at index 3 → swap with index 2 → [1,3,5,8]
Sorted: [1, 3, 5, 8]  — 3 passes, exactly 1 swap per pass`}</code></pre>
        </div>

        <div className="callout">
          <p>
            <strong>Big O: O(N²)</strong> — always makes N-1 passes, each scanning
            the unsorted portion. However, selection sort does <strong>fewer
            swaps</strong> than bubble sort (exactly N-1 swaps total).
          </p>
        </div>
      </section>

      {/* ─── INSERTION SORT ─── */}
      <section className="unit-section" id="insertion-sort">
        <h2>Insertion Sort</h2>
        <p>
          Build a sorted portion from left to right. Take the next unsorted
          element and <strong>insert</strong> it into the correct position in
          the sorted portion by shifting elements over.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Insertion sort</div>
          <pre><code>{`public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];       // element to insert
        int j = i - 1;

        // Shift elements right to make room
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;      // insert into correct spot
    }
}`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Trace: insertion sort [5, 3, 8, 1]</div>
          <pre><code className="language-none">{`Start:  [5, 3, 8, 1]   sorted portion: [5]
Pass 1: insert 3 → shift 5 right → [3, 5, 8, 1]   sorted: [3, 5]
Pass 2: insert 8 → already in place → [3, 5, 8, 1]   sorted: [3, 5, 8]
Pass 3: insert 1 → shift 8,5,3 right → [1, 3, 5, 8]   sorted: [1, 3, 5, 8]
Sorted: [1, 3, 5, 8]  — 3 passes`}</code></pre>
        </div>

        <div className="callout">
          <p>
            <strong>Big O: O(N²)</strong> worst case. But insertion sort is
            <strong> very fast on nearly-sorted data</strong> — best case O(N)
            if the array is already sorted (just one check per element, no shifts).
          </p>
        </div>
      </section>

      {/* ─── MERGE SORT ─── */}
      <section className="unit-section" id="merge-sort">
        <h2>Merge Sort</h2>
        <p>
          A <strong>divide-and-conquer</strong> algorithm that uses recursion.
          Split the array in half, recursively sort each half, then
          <strong> merge</strong> the two sorted halves together.
        </p>

        <div className="code-block">
          <div className="code-label">Java — Merge sort</div>
          <pre><code>{`public static void mergeSort(int[] arr, int left, int right) {
    if (left >= right) return;         // base case: 1 element

    int mid = (left + right) / 2;
    mergeSort(arr, left, mid);          // sort left half
    mergeSort(arr, mid + 1, right);     // sort right half
    merge(arr, left, mid, right);       // merge the two halves
}

private static void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;

    // Compare elements from both halves
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy remaining elements
    while (i <= mid)   temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    // Copy back to original array
    for (int m = 0; m < temp.length; m++) {
        arr[left + m] = temp[m];
    }
}

// Usage: mergeSort(arr, 0, arr.length - 1);`}</code></pre>
        </div>

        <div className="code-block">
          <div className="code-label">Trace: merge sort [5, 3, 8, 1]</div>
          <pre><code className="language-none">{`Split:  [5, 3, 8, 1]
         /            \\
     [5, 3]          [8, 1]
      /   \\          /   \\
    [5]   [3]      [8]   [1]      ← base cases (single elements)

Merge:
    [5] + [3]  → [3, 5]           ← compare & merge
    [8] + [1]  → [1, 8]           ← compare & merge
    [3,5] + [1,8] → [1, 3, 5, 8] ← merge sorted halves

Sorted: [1, 3, 5, 8]`}</code></pre>
        </div>

        <div className="callout">
          <p>
            <strong>Big O: O(N log N)</strong> — always, regardless of input.
            The split is log N levels deep, and each level does N work to merge.
            This is <strong>much faster</strong> than O(N²) for large arrays,
            but uses extra memory for the temporary array.
          </p>
        </div>
      </section>

      {/* ─── SORT SUMMARY ─── */}
      <section className="unit-section" id="sort-summary">
        <h2>Sort Comparison</h2>

        <div className="callout">
          <table className="info-table">
            <thead>
              <tr><th>Algorithm</th><th>Best</th><th>Worst</th><th>Stable?</th><th>Key trait</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Dumb Bubble</strong></td><td>O(N²)</td><td>O(N²)</td><td>Yes</td><td>Always N-1 passes, simple but slow</td></tr>
              <tr><td><strong>Smart Bubble</strong></td><td>O(N)</td><td>O(N²)</td><td>Yes</td><td>Stops early if sorted</td></tr>
              <tr><td><strong>Selection</strong></td><td>O(N²)</td><td>O(N²)</td><td>No</td><td>Fewest swaps (exactly N-1)</td></tr>
              <tr><td><strong>Insertion</strong></td><td>O(N)</td><td>O(N²)</td><td>Yes</td><td>Fast on nearly-sorted data</td></tr>
              <tr><td><strong>Merge</strong></td><td>O(N log N)</td><td>O(N log N)</td><td>Yes</td><td>Fastest guaranteed, uses extra memory</td></tr>
            </tbody>
          </table>
        </div>

        <div className="callout">
          <h4>Ascending vs Descending</h4>
          <p>
            To change any sort from <strong>ascending</strong> to
            <strong> descending</strong>, just flip the comparison operator.
            For example, change <code>arr[j] &gt; key</code> to
            <code> arr[j] &lt; key</code> in insertion sort.
          </p>
        </div>

        <div className="callout">
          <h4>AP Exam: Identifying algorithms from code</h4>
          <table className="info-table">
            <thead>
              <tr><th>If you see...</th><th>It's probably...</th></tr>
            </thead>
            <tbody>
              <tr><td>Adjacent swaps (<code>arr[i]</code> vs <code>arr[i+1]</code>)</td><td>Bubble sort</td></tr>
              <tr><td>Finding a min/max index, then one swap per pass</td><td>Selection sort</td></tr>
              <tr><td>A <code>key</code> variable and shifting elements right</td><td>Insertion sort</td></tr>
              <tr><td>Recursion + merge helper method</td><td>Merge sort</td></tr>
              <tr><td><code>low</code>, <code>high</code>, <code>mid</code> with halving</td><td>Binary search</td></tr>
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
