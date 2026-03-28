import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useCallback, useRef } from 'react'

export const Route = createFileRoute('/game')({
  head: () => ({
    meta: [{ title: 'Tower of Hanoi' }],
  }),
  component: GamePage,
})

const COLORS = [
  '#005bbf', '#c5221f', '#e37400', '#1e8e5f', '#7b1fa2',
  '#0d7377', '#a8430f', '#1a73e8', '#4a6741', '#9334e6',
  '#b06000', '#0b57d0', '#8e3a06', '#146c2e', '#7627bb',
]

function diskColor(size: number) {
  return COLORS[(size - 1) % COLORS.length]
}

interface DragState {
  towerIdx: number
  diskSize: number
  ghostEl?: HTMLDivElement
}

function GamePage() {
  const [diskCount, setDiskCount] = useState(3)
  const [towers, setTowers] = useState<number[][]>(() => {
    const t: number[][] = [[], [], []]
    for (let i = 3; i >= 1; i--) t[0].push(i)
    return t
  })
  const [selected, setSelected] = useState<number | null>(null)
  const [moves, setMoves] = useState(0)
  const [history, setHistory] = useState<{ from: number; to: number }[]>([])
  const [seconds, setSeconds] = useState(0)
  const [showWin, setShowWin] = useState(false)

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timerStartedRef = useRef(false)
  const draggingRef = useRef<DragState | null>(null)
  const touchDragRef = useRef<{
    towerIdx: number
    diskSize: number
    ghostEl: HTMLDivElement
    diskEl: HTMLElement
    offsetX: number
  } | null>(null)
  const diskCountInputRef = useRef<HTMLInputElement>(null)
  const towersRef = useRef(towers)
  towersRef.current = towers



  // Timer effect
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  function startTimer() {
    if (timerStartedRef.current) return
    timerStartedRef.current = true
    timerRef.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
  }

  function formatTime(s: number) {
    const m = Math.floor(s / 60)
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  function minMovesStr(dc: number) {
    if (dc <= 30) return ((1 << dc) - 1).toLocaleString()
    return `2^${dc}-1`
  }

  const initGame = useCallback((count?: number) => {
    const dc = count ?? Math.max(1, Math.min(99, +(diskCountInputRef.current?.value || '3')))
    setDiskCount(dc)
    const t: number[][] = [[], [], []]
    for (let i = dc; i >= 1; i--) t[0].push(i)
    setTowers(t)
    setSelected(null)
    setMoves(0)
    setHistory([])
    setSeconds(0)
    setShowWin(false)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    timerStartedRef.current = false
  }, [])

  const tryMove = useCallback(
    (fromIdx: number, toIdx: number) => {
      if (fromIdx === toIdx) return
      setTowers((prev) => {
        const from = [...prev[fromIdx]]
        const to = [...prev[toIdx]]
        const disk = from[from.length - 1]
        if (!disk) return prev
        if (to.length > 0 && to[to.length - 1] < disk) return prev

        startTimer()
        from.pop()
        to.push(disk)
        const next = prev.map((t, i) =>
          i === fromIdx ? from : i === toIdx ? to : [...t]
        )
        setHistory((h) => [...h, { from: fromIdx, to: toIdx }])
        setMoves((m) => m + 1)
        setSelected(null)

        // Check win
        const currentDiskCount = from.length + to.length + prev.filter((_, i) => i !== fromIdx && i !== toIdx).reduce((a, t) => a + t.length, 0)
        if (next[2].length === currentDiskCount) {
          if (timerRef.current) clearInterval(timerRef.current)
          setTimeout(() => setShowWin(true), 0)
        }
        return next
      })
    },
    []
  )

  function handleClick(ti: number) {
    if (draggingRef.current) return
    if (selected === null) {
      if (towers[ti].length === 0) return
      setSelected(ti)
    } else if (selected === ti) {
      setSelected(null)
    } else {
      tryMove(selected, ti)
    }
  }

  function undo() {
    setHistory((prev) => {
      if (prev.length === 0) return prev
      const last = prev[prev.length - 1]
      setTowers((t) => {
        const next = t.map((col) => [...col])
        const disk = next[last.to].pop()!
        next[last.from].push(disk)
        return next
      })
      setMoves((m) => m + 1)
      setSelected(null)
      return prev.slice(0, -1)
    })
  }

  // Keyboard shortcuts
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.target as HTMLElement).tagName === 'INPUT') return
      if (e.key === '1' || e.key === 'a') handleClick(0)
      else if (e.key === '2' || e.key === 'b') handleClick(1)
      else if (e.key === '3' || e.key === 'c') handleClick(2)
      else if (e.key === 'u' || (e.ctrlKey && e.key === 'z')) {
        e.preventDefault()
        undo()
      } else if (e.key === 'n') initGame()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  })

  function cleanupDrag() {
    if (draggingRef.current?.ghostEl) {
      draggingRef.current.ghostEl.remove()
    }
    draggingRef.current = null
  }

  const poleHeight = Math.max(160, diskCount * 29 + 40)
  const labels = ['A', 'B', 'C']

  function getWinMessage() {
    const min = diskCount <= 30 ? (1 << diskCount) - 1 : Infinity
    const m = Math.floor(seconds / 60)
    const s = (seconds % 60).toString().padStart(2, '0')
    let rating: string
    if (min !== Infinity) {
      rating = moves === min ? 'Perfect score.' : moves <= min * 1.2 ? 'Excellent.' : 'Well done.'
    } else {
      rating = 'Impressive.'
    }
    const minStr = min !== Infinity ? ` Minimum was ${min.toLocaleString()}.` : ''
    return `${rating} ${moves.toLocaleString()} moves in ${m}:${s}.${minStr}`
  }

  function handleDragStart(
    e: React.DragEvent,
    ti: number,
    size: number,
    color: string,
    diskEl: HTMLElement
  ) {
    draggingRef.current = { towerIdx: ti, diskSize: size }
    e.dataTransfer.effectAllowed = 'move'
    const ghost = document.createElement('div')
    ghost.className = 'drag-ghost'
    ghost.style.width = diskEl.offsetWidth + 'px'
    ghost.style.background = color
    ghost.style.left = '-9999px'
    ghost.style.top = '-9999px'
    document.body.appendChild(ghost)
    e.dataTransfer.setDragImage(ghost, ghost.offsetWidth / 2, 13)
    draggingRef.current.ghostEl = ghost
    setTimeout(() => {
      diskEl.style.opacity = '0.3'
    }, 0)
  }

  function handleDragEnd(diskEl: HTMLElement) {
    diskEl.style.opacity = ''
    cleanupDrag()
    document.querySelectorAll('.tower').forEach((t) =>
      t.classList.remove('drop-target', 'drop-invalid')
    )
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  function handleDrop(e: React.DragEvent, ti: number) {
    e.preventDefault()
      ; (e.currentTarget as HTMLElement).classList.remove('drop-target', 'drop-invalid')
    if (!draggingRef.current) return
    tryMove(draggingRef.current.towerIdx, ti)
    cleanupDrag()
  }

  function handleDragEnter(e: React.DragEvent, ti: number) {
    e.preventDefault()
    if (!draggingRef.current) return
    const el = e.currentTarget as HTMLElement
    const topDisk =
      towers[ti].length > 0 ? towers[ti][towers[ti].length - 1] : Infinity
    if (draggingRef.current.diskSize > topDisk) {
      el.classList.add('drop-invalid')
      el.classList.remove('drop-target')
    } else {
      el.classList.add('drop-target')
      el.classList.remove('drop-invalid')
    }
  }

  function handleDragLeave(e: React.DragEvent) {
    const el = e.currentTarget as HTMLElement
    const related = e.relatedTarget as Node | null
    if (related && el.contains(related)) return
    el.classList.remove('drop-target', 'drop-invalid')
  }

  // Touch drag handlers
  function handleTouchStart(
    e: React.TouchEvent,
    ti: number,
    size: number,
    color: string,
    diskEl: HTMLElement
  ) {
    e.preventDefault()
    const touch = e.touches[0]
    const rect = diskEl.getBoundingClientRect()
    const ghost = document.createElement('div')
    ghost.className = 'drag-ghost'
    ghost.style.width = rect.width + 'px'
    ghost.style.background = color
    ghost.style.left = touch.clientX - rect.width / 2 + 'px'
    ghost.style.top = touch.clientY - 13 + 'px'
    document.body.appendChild(ghost)
    diskEl.style.opacity = '0.3'

    touchDragRef.current = {
      towerIdx: ti,
      diskSize: size,
      ghostEl: ghost,
      diskEl,
      offsetX: rect.width / 2,
    }

    document.addEventListener('touchmove', onTouchMove, { passive: false })
    document.addEventListener('touchend', onTouchEnd)
  }

  function onTouchMove(e: TouchEvent) {
    if (!touchDragRef.current) return
    e.preventDefault()
    const touch = e.touches[0]
    touchDragRef.current.ghostEl.style.left =
      touch.clientX - touchDragRef.current.offsetX + 'px'
    touchDragRef.current.ghostEl.style.top = touch.clientY - 13 + 'px'

    document.querySelectorAll('.tower').forEach((t) =>
      t.classList.remove('drop-target', 'drop-invalid')
    )
    const el = document.elementFromPoint(touch.clientX, touch.clientY)
    const tower = el?.closest('.tower') as HTMLElement | null
    if (tower) {
      const idx = +(tower.dataset.index || 0)
      const currentTowers = towersRef.current
      const topDisk =
        currentTowers[idx].length > 0
          ? currentTowers[idx][currentTowers[idx].length - 1]
          : Infinity
      if (touchDragRef.current.diskSize > topDisk) {
        tower.classList.add('drop-invalid')
      } else {
        tower.classList.add('drop-target')
      }
    }
  }

  function onTouchEnd(e: TouchEvent) {
    if (!touchDragRef.current) return
    document.removeEventListener('touchmove', onTouchMove)
    document.removeEventListener('touchend', onTouchEnd)
    document.querySelectorAll('.tower').forEach((t) =>
      t.classList.remove('drop-target', 'drop-invalid')
    )

    const touch = e.changedTouches[0]
    const el = document.elementFromPoint(touch.clientX, touch.clientY)
    const tower = el?.closest('.tower') as HTMLElement | null

    touchDragRef.current.diskEl.style.opacity = ''
    touchDragRef.current.ghostEl.remove()

    if (tower) {
      const idx = +(tower.dataset.index || 0)
      tryMove(touchDragRef.current.towerIdx, idx)
    }
    touchDragRef.current = null
  }

  return (
    <div className="game-page">
      <header>
        <h1>Tower of Hanoi</h1>
        <p>Move all disks to the last peg</p>
      </header>

      <div className="controls">
        <div className="disk-input-group">
          <label htmlFor="disk-count">Disks</label>
          <input
            ref={diskCountInputRef}
            type="number"
            id="disk-count"
            value={diskCount}
            min={1}
            max={99}
            onChange={(e) => setDiskCount(Math.max(1, Math.min(99, +e.target.value || 3)))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') initGame()
            }}
          />
          <div className="disk-stepper">
            <button
              aria-label="Increase"
              onClick={() => setDiskCount((c) => Math.min(99, c + 1))}
            >
              &#9650;
            </button>
            <button
              aria-label="Decrease"
              onClick={() => setDiskCount((c) => Math.max(1, c - 1))}
            >
              &#9660;
            </button>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => initGame()}>
          Start
        </button>
        <button
          className="btn btn-ghost"
          disabled={history.length === 0}
          onClick={undo}
        >
          Undo
        </button>
      </div>

      <div className="stats">
        <span>
          Moves<strong>{moves}</strong>
        </span>
        <span>
          Minimum<strong>{minMovesStr(diskCount)}</strong>
        </span>
        <span>
          Time<strong>{formatTime(seconds)}</strong>
        </span>
      </div>

      <div className="board">
        {towers.map((disks, ti) => {
          const maxW = 80
          const minW = 20
          return (
            <div
              key={ti}
              className={`tower${selected === ti ? ' selected' : ''}`}
              style={{ minHeight: poleHeight + 70 + 'px' }}
              data-index={ti}
              onClick={() => handleClick(ti)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, ti)}
              onDragEnter={(e) => handleDragEnter(e, ti)}
              onDragLeave={handleDragLeave}
            >
              <span className="tower-label">{labels[ti]}</span>
              <div className="pole" style={{ height: poleHeight }} />
              <div className="base-line" />
              <div className="disks">
                {disks.map((size, di) => {
                  const isTop = di === disks.length - 1
                  const pct =
                    diskCount === 1
                      ? 55
                      : minW + ((size - 1) / (diskCount - 1)) * (maxW - minW)
                  const c = diskColor(size)
                  return (
                    <div
                      key={size}
                      className={`disk${isTop ? ' top-disk' : ''}${selected === ti && isTop ? ' lifting' : ''}`}
                      style={{
                        width: pct + '%',
                        background: c,
                        boxShadow: `0 4px 24px ${c}18`,
                      }}
                      draggable={isTop}
                      onDragStart={
                        isTop
                          ? (e) =>
                            handleDragStart(
                              e,
                              ti,
                              size,
                              c,
                              e.currentTarget as HTMLElement
                            )
                          : undefined
                      }
                      onDragEnd={
                        isTop
                          ? (e) =>
                            handleDragEnd(e.currentTarget as HTMLElement)
                          : undefined
                      }
                      onTouchStart={
                        isTop
                          ? (e) =>
                            handleTouchStart(
                              e,
                              ti,
                              size,
                              c,
                              e.currentTarget as HTMLElement
                            )
                          : undefined
                      }
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>



      {/* Win overlay */}
      <div className={`win-overlay${showWin ? ' show' : ''}`}>
        <h2>Solved</h2>
        <p>{getWinMessage()}</p>
        <button className="btn btn-primary" onClick={() => initGame()}>
          Play Again
        </button>
      </div>
    </div>
  )
}
