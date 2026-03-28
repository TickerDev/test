import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Mr. Yee's Classroom
            </Link>
            <p className="footer-tagline">
              Interactive CS puzzles for AP Computer Science A students.
              Learn algorithmic thinking one move at a time.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4>Games</h4>
              <ul>
                <li><Link to="/game">Tower of Hanoi</Link></li>
                <li><Link to="/binary-game">Binary Game</Link></li>
                <li><Link to="/binary-tetris">Binary Tetris</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-disclaimer">
            Not affiliated with Plano ISD, Plano Senior High School, or Mr. Yee.
          </span>
          <span className="footer-credit">
            Built by Dor Elboim &{' '}
            <img
              className="claude-icon"
              src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claude-color.png"
              alt="Claude"
              width={14}
              height={14}
            />
            Claude Opus
          </span>
        </div>
      </div>
    </footer>
  )
}
