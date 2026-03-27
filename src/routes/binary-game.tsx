import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useCallback, useRef } from 'react'

export const Route = createFileRoute('/binary-game')({
  head: () => ({
    meta: [{ title: "Binary Game — Mr. Yee's Classroom" }],
  }),
  component: BinaryGamePage,
})

const BIT_VALUES = [128, 64, 32, 16, 8, 4, 2, 1]

function BinaryGamePage() {
  const [bits, setBits] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [target, setTarget] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'over'>('idle')
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [solved, setSolved] = useState(0)
  const [flash, setFlash] = useState<'correct' | null>(null)
  const [level, setLevel] = useState<'easy' | 'medium' | 'hard'>('medium')

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentValue = bits.reduce((sum, bit, i) => sum + bit * BIT_VALUES[i], 0)

  function getRandomTarget(lvl: 'easy' | 'medium' | 'hard'): number {
    if (lvl === 'easy') return Math.floor(Math.random() * 16) + 1
    if (lvl === 'medium') return Math.floor(Math.random() * 128) + 1
    return Math.floor(Math.random() * 255) + 1
  }

  const newTarget = useCallback(() => {
    setBits([0, 0, 0, 0, 0, 0, 0, 0])
    setTarget(getRandomTarget(level))
  }, [level])

  const startGame = useCallback(() => {
    setScore(0)
    setStreak(0)
    setBestStreak(0)
    setSolved(0)
    setTimeLeft(60)
    setGameState('playing')
    setBits([0, 0, 0, 0, 0, 0, 0, 0])
    setTarget(getRandomTarget(level))
  }, [level])

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameState('over')
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState])

  // Check for match
  useEffect(() => {
    if (gameState !== 'playing') return
    if (currentValue === target) {
      const timeBonus = Math.ceil(timeLeft / 10)
      const streakBonus = Math.floor(streak / 3)
      const points = 10 + timeBonus + streakBonus * 5
      setScore((s) => s + points)
      setStreak((s) => {
        const newStreak = s + 1
        setBestStreak((b) => Math.max(b, newStreak))
        return newStreak
      })
      setSolved((s) => s + 1)
      setFlash('correct')
      setTimeout(() => setFlash(null), 250)
      setTimeout(() => newTarget(), 150)
    }
  }, [currentValue, target, gameState, timeLeft, streak, newTarget])

  function toggleBit(index: number) {
    if (gameState !== 'playing') return
    setBits((prev) => {
      const next = [...prev]
      next[index] = next[index] === 0 ? 1 : 0
      return next
    })
  }

  // Keyboard: 1-8 toggle bits, R to reset bits
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (gameState !== 'playing') return
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return
      const num = parseInt(e.key)
      if (num >= 1 && num <= 8) {
        toggleBit(num - 1)
      } else if (e.key === 'r' || e.key === 'R') {
        setBits([0, 0, 0, 0, 0, 0, 0, 0])
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  })

  const timerPercent = (timeLeft / 60) * 100
  const timerColor = timeLeft <= 10 ? 'var(--danger)' : timeLeft <= 20 ? '#e37400' : 'var(--primary)'

  return (
    <div className="game-page">
      <header>
        <h1>Binary Game</h1>
        <p>Toggle bits to match the target decimal number</p>
      </header>

      {gameState === 'idle' && (
        <div className="controls">
          <div className="bg-level-select">
            <label>Difficulty:</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as 'easy' | 'medium' | 'hard')}
              className="bg-select"
            >
              <option value="easy">Easy (1-15)</option>
              <option value="medium">Medium (1-127)</option>
              <option value="hard">Hard (1-255)</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={startGame}>Start Game</button>
        </div>
      )}

      {gameState === 'over' && (
        <div className="controls" style={{ flexDirection: 'column', gap: '1rem' }}>
          <div className="bg-game-over">
            <h2>Time's Up!</h2>
            <div className="bg-final-stats">
              <span>Score: <strong>{score}</strong></span>
              <span>Solved: <strong>{solved}</strong></span>
              <span>Best Streak: <strong>{bestStreak}</strong></span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '.75rem' }}>
            <button className="btn btn-primary" onClick={startGame}>Play Again</button>
          </div>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="stats">
          <span>Score<strong>{score}</strong></span>
          <span>Solved<strong>{solved}</strong></span>
          <span>Streak<strong>{streak}</strong></span>
          <span>Time<strong>{timeLeft}s</strong></span>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="bg-timer-bar">
          <div className="bg-timer-fill" style={{ width: timerPercent + '%', background: timerColor }} />
        </div>
      )}

      <div className={`bg-board${flash === 'correct' ? ' bg-flash' : ''}`}>
        <div className="bg-target">
          <span className="bg-target-label">Target</span>
          <span className="bg-target-number">{gameState === 'idle' ? '?' : target}</span>
        </div>

        <div className="bg-equals">=</div>

        <div className="bg-current">
          <span className="bg-current-number">{currentValue}</span>
        </div>

        <div className="bg-bits">
          <div className="bg-bit-labels">
            {BIT_VALUES.map((val) => (
              <span key={val} className="bg-bit-label">{val}</span>
            ))}
          </div>
          <div className="bg-bit-row">
            {bits.map((bit, i) => (
              <button
                key={i}
                className={`bg-bit${bit === 1 ? ' bg-bit-on' : ''}`}
                onClick={() => toggleBit(i)}
                disabled={gameState !== 'playing'}
              >
                {bit}
              </button>
            ))}
          </div>
          <div className="bg-bit-keys">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <span key={n} className="bg-bit-key">{n}</span>
            ))}
          </div>
        </div>

        {gameState === 'playing' && (
          <button className="btn btn-ghost bg-reset" onClick={() => setBits([0, 0, 0, 0, 0, 0, 0, 0])}>
            Reset (R)
          </button>
        )}

        {gameState === 'idle' && (
          <div className="bg-help">
            <p>Click the bits or press <strong>1-8</strong> to toggle. Press <strong>R</strong> to reset.</p>
          </div>
        )}
      </div>
    </div>
  )
}
