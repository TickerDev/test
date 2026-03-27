import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useCallback, useRef } from 'react'

export const Route = createFileRoute('/binary-tetris')({
  head: () => ({
    meta: [{ title: "Binary Tetris — Mr. Yee's Classroom" }],
  }),
  component: BinaryTetrisPage,
})

interface FallingBlock {
  id: number
  binary: string
  decimal: number
  y: number
  lane: number
}

function randomBinary(difficulty: number): { binary: string; decimal: number } {
  const bits = difficulty <= 3 ? 4 : difficulty <= 6 ? 6 : 8
  const max = Math.pow(2, bits) - 1
  const decimal = Math.floor(Math.random() * max) + 1
  const binary = decimal.toString(2).padStart(bits, '0')
  return { binary, decimal }
}

function BinaryTetrisPage() {
  const [blocks, setBlocks] = useState<FallingBlock[]>([])
  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [level, setLevel] = useState(1)
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'over'>('idle')
  const [combo, setCombo] = useState(0)
  const [flash, setFlash] = useState<'correct' | 'wrong' | null>(null)

  const nextId = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const gameLoopRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const blocksRef = useRef(blocks)
  blocksRef.current = blocks

  const speed = Math.max(12, 30 - level * 2)
  const spawnRate = Math.max(1500, 3500 - level * 200)

  const spawnBlock = useCallback(() => {
    const { binary, decimal } = randomBinary(level)
    const lane = Math.floor(Math.random() * 3)
    const block: FallingBlock = {
      id: nextId.current++,
      binary,
      decimal,
      y: 0,
      lane,
    }
    setBlocks((prev) => [...prev, block])
  }, [level])

  const startGame = useCallback(() => {
    setBlocks([])
    setScore(0)
    setLives(3)
    setLevel(1)
    setCombo(0)
    setInput('')
    setGameState('playing')
    nextId.current = 0
    inputRef.current?.focus()
  }, [])

  const endGame = useCallback(() => {
    setGameState('over')
    if (gameLoopRef.current) clearInterval(gameLoopRef.current)
    if (spawnRef.current) clearInterval(spawnRef.current)
    gameLoopRef.current = null
    spawnRef.current = null
  }, [])

  // Game loop: move blocks down
  useEffect(() => {
    if (gameState !== 'playing') return

    gameLoopRef.current = setInterval(() => {
      setBlocks((prev) => {
        const next: FallingBlock[] = []
        let lost = 0
        for (const block of prev) {
          const newY = block.y + 1
          if (newY >= 100) {
            lost++
          } else {
            next.push({ ...block, y: newY })
          }
        }
        if (lost > 0) {
          setLives((l) => {
            const newLives = l - lost
            if (newLives <= 0) {
              setTimeout(() => endGame(), 0)
            }
            return Math.max(0, newLives)
          })
          setCombo(0)
        }
        return next
      })
    }, speed)

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
    }
  }, [gameState, speed, endGame])

  // Spawn blocks
  useEffect(() => {
    if (gameState !== 'playing') return

    spawnBlock()
    spawnRef.current = setInterval(spawnBlock, spawnRate)

    return () => {
      if (spawnRef.current) clearInterval(spawnRef.current)
    }
  }, [gameState, spawnRate, spawnBlock])

  // Level up every 5 correct answers
  useEffect(() => {
    const newLevel = Math.floor(score / 5) + 1
    if (newLevel !== level && newLevel <= 15) {
      setLevel(newLevel)
    }
  }, [score, level])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (gameState !== 'playing' || !input.trim()) return

    const answer = parseInt(input.trim(), 10)
    const matchIndex = blocks.findIndex((b) => b.decimal === answer)

    if (matchIndex >= 0) {
      setBlocks((prev) => prev.filter((_, i) => i !== matchIndex))
      const points = 1 + Math.floor(combo / 3)
      setScore((s) => s + points)
      setCombo((c) => c + 1)
      setFlash('correct')
    } else {
      setCombo(0)
      setFlash('wrong')
    }
    setInput('')
    setTimeout(() => setFlash(null), 300)
  }

  return (
    <div className="game-page">
      <header>
        <h1>Binary Tetris</h1>
        <p>Convert falling binary numbers to decimal before they hit the bottom</p>
      </header>

      <div className="controls">
        {gameState === 'idle' && (
          <button className="btn btn-primary" onClick={startGame}>Start Game</button>
        )}
        {gameState === 'over' && (
          <>
            <span style={{ fontWeight: 600, color: 'var(--on-surface)' }}>
              Game Over! Final Score: {score}
            </span>
            <button className="btn btn-primary" onClick={startGame}>Play Again</button>
          </>
        )}
        {gameState === 'playing' && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type decimal..."
              autoFocus
              className="bt-input"
            />
            <button type="submit" className="btn btn-primary">Enter</button>
          </form>
        )}
      </div>

      {gameState !== 'idle' && (
        <div className="stats">
          <span>Score<strong>{score}</strong></span>
          <span>Level<strong>{level}</strong></span>
          <span>Lives<strong>{'❤'.repeat(lives)}{lives === 0 ? '—' : ''}</strong></span>
          {combo >= 2 && <span>Combo<strong>x{combo}</strong></span>}
        </div>
      )}

      <div className={`bt-arena${flash === 'correct' ? ' bt-flash-correct' : flash === 'wrong' ? ' bt-flash-wrong' : ''}`}>
        {gameState === 'idle' && (
          <div className="bt-instructions">
            <p>Binary numbers will fall from the top.</p>
            <p>Type the <strong>decimal equivalent</strong> and press Enter to clear them.</p>
            <p>Don't let them reach the bottom!</p>
          </div>
        )}
        {blocks.map((block) => (
          <div
            key={block.id}
            className="bt-block"
            style={{
              top: block.y + '%',
              left: `calc(${block.lane * 33.33 + 16.66}% - 3.5rem)`,
            }}
          >
            {block.binary}
          </div>
        ))}
        {gameState === 'playing' && (
          <div className="bt-floor" />
        )}
      </div>
    </div>
  )
}
