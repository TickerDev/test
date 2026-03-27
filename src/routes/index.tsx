import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: "Mr. Yee's Classroom" }],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="hero-eyebrow">AP Computer Science A &middot; CS III</span>
        <h1>
          Your study hub for <span>CS.</span>
        </h1>
        <p>
          Notes, Java examples, and interactive games — everything you need
          for AP Computer Science A and CS III.
        </p>
        <div className="hero-actions">
          <Link to="/units/1" className="btn btn-primary">
            Start Learning
          </Link>
          <Link to="/game" className="btn btn-ghost">
            Play a Game
          </Link>
        </div>
      </section>

      <section className="home-courses">
        <div className="home-course-card">
          <span className="home-course-eyebrow">10 Units</span>
          <h2>AP Computer Science A</h2>
          <p>Java fundamentals, OOP, arrays, inheritance, recursion, and sorting — aligned to the AP exam.</p>
          <Link to="/units/1" className="feature-link">Browse units &rarr;</Link>
        </div>
        <div className="home-course-card">
          <span className="home-course-eyebrow">10 Units</span>
          <h2>Computer Science III</h2>
          <p>Files, sets &amp; maps, regex, linked lists, stacks, trees, multithreading, and advanced algorithms.</p>
          <Link to="/cs3/1" className="feature-link">Browse units &rarr;</Link>
        </div>
      </section>

      <section className="home-games">
        <span className="features-eyebrow">Interactive</span>
        <h2 className="home-games-heading">Learn by playing</h2>
        <div className="home-games-grid">
          <Link to="/game" className="home-game-card">
            <span className="home-game-icon">&#x1F9E9;</span>
            <h3>Tower of Hanoi</h3>
            <p>Master recursion and divide-and-conquer with this classic puzzle.</p>
          </Link>
          <Link to="/binary-game" className="home-game-card">
            <span className="home-game-icon">&#x1F4A1;</span>
            <h3>Binary Game</h3>
            <p>Toggle 8 bits to match target decimals — race against the clock.</p>
          </Link>
          <Link to="/binary-tetris" className="home-game-card">
            <span className="home-game-icon">&#x1F579;</span>
            <h3>Binary Tetris</h3>
            <p>Convert falling binary numbers to decimal before they hit the bottom.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
