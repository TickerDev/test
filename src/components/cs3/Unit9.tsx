import { Link } from '@tanstack/react-router'

export function CS3Unit9() {
  return (
    <div className="unit-content">
      <div className="unit-hero">
        <span className="unit-label">Unit 9</span>
        <h1>Multithreading in Java</h1>
        <p>
          Modern programs do many things at once. This unit covers threads,
          synchronization, race conditions, and the basics of concurrent
          programming in Java.
        </p>
      </div>

      <nav className="unit-toc">
        <h3>In this unit</h3>
        <ol>
          <li><a href="#what">What Are Threads?</a></li>
          <li><a href="#creating">Creating Threads</a></li>
          <li><a href="#lifecycle">Thread Lifecycle</a></li>
          <li><a href="#race">Race Conditions</a></li>
          <li><a href="#synchronized">synchronized Keyword</a></li>
          <li><a href="#sleep-join">sleep() and join()</a></li>
        </ol>
      </nav>

      <section className="unit-section" id="what">
        <h2>What Are Threads?</h2>
        <p>
          A <strong>thread</strong> is an independent path of execution within
          a program. A single Java program can have many threads running
          concurrently — sharing the same memory but executing different code.
        </p>
        <div className="callout">
          <table className="info-table">
            <thead><tr><th>Term</th><th>Definition</th></tr></thead>
            <tbody>
              <tr><td><strong>Process</strong></td><td>A running program with its own memory space</td></tr>
              <tr><td><strong>Thread</strong></td><td>A path of execution within a process — shares memory with other threads</td></tr>
              <tr><td><strong>Concurrency</strong></td><td>Multiple threads making progress (may not be simultaneous)</td></tr>
              <tr><td><strong>Parallelism</strong></td><td>Multiple threads running at the same time (multi-core)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="unit-section" id="creating">
        <h2>Creating Threads</h2>
        <div className="concept-grid">
          <div className="concept-card">
            <h4>Method 1: Extend Thread</h4>
            <div className="code-block">
              <div className="code-label">Extend Thread class</div>
              <pre><code>{`public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(
              getName() + ": " + i);
        }
    }
}

MyThread t = new MyThread();
t.start(); // NOT t.run()!`}</code></pre>
            </div>
          </div>
          <div className="concept-card">
            <h4>Method 2: Implement Runnable</h4>
            <div className="code-block">
              <div className="code-label">Implement Runnable (preferred)</div>
              <pre><code>{`public class MyTask implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(
              Thread.currentThread()
                .getName() + ": " + i);
        }
    }
}

Thread t = new Thread(new MyTask());
t.start();`}</code></pre>
            </div>
          </div>
        </div>
        <div className="callout">
          <h4>start() vs run()</h4>
          <p>
            <code>start()</code> creates a new thread and calls <code>run()</code>
            on it. Calling <code>run()</code> directly just executes it on the
            current thread — no new thread is created!
          </p>
        </div>
      </section>

      <section className="unit-section" id="lifecycle">
        <h2>Thread Lifecycle</h2>
        <div className="code-block">
          <div className="code-label">Thread states</div>
          <pre><code className="language-none">{`NEW → (start()) → RUNNABLE → (run() completes) → TERMINATED
                      ↕
              BLOCKED / WAITING / TIMED_WAITING
              (waiting for lock, sleep, join)`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="race">
        <h2>Race Conditions</h2>
        <p>
          A <strong>race condition</strong> occurs when two threads read/write
          shared data at the same time and the result depends on timing.
        </p>
        <div className="code-block">
          <div className="code-label">Java — Race condition example</div>
          <pre><code>{`public class Counter {
    private int count = 0;

    public void increment() {
        count++;  // NOT atomic! Read → Add → Write
    }

    public int getCount() { return count; }
}

// Two threads both incrementing 1000 times:
Counter c = new Counter();
Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.increment(); });
Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.increment(); });
t1.start(); t2.start();
t1.join(); t2.join();

System.out.println(c.getCount());
// Expected: 2000
// Actual: often less! (e.g. 1847) — race condition!`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="synchronized">
        <h2>synchronized Keyword</h2>
        <p>
          <code>synchronized</code> ensures only <strong>one thread at a
          time</strong> can execute a block of code. It acquires a lock on the
          object.
        </p>
        <div className="code-block">
          <div className="code-label">Java — Fix the race condition</div>
          <pre><code>{`public class SafeCounter {
    private int count = 0;

    // synchronized method — only one thread at a time
    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() { return count; }
}

// Now both threads incrementing 1000 times will always give 2000

// Alternative: synchronized block
public void increment() {
    synchronized (this) {
        count++;
    }
}`}</code></pre>
        </div>
      </section>

      <section className="unit-section" id="sleep-join">
        <h2>sleep() and join()</h2>
        <div className="code-block">
          <div className="code-label">Java — Thread coordination</div>
          <pre><code>{`// sleep — pause current thread for N milliseconds
Thread.sleep(1000);  // sleep 1 second (throws InterruptedException)

// join — wait for another thread to finish
Thread worker = new Thread(() -> {
    System.out.println("Working...");
    try { Thread.sleep(2000); } catch (InterruptedException e) {}
    System.out.println("Done!");
});

worker.start();
worker.join();  // main thread waits here until worker finishes
System.out.println("Worker is done, continuing main thread.");`}</code></pre>
        </div>
      </section>

      <div className="unit-footer">
        <Link to="/" className="btn btn-ghost">&larr; Back to All Units</Link>
      </div>
    </div>
  )
}
