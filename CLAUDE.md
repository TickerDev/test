# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-file Tower of Hanoi browser game (`index.html`). No build tools, dependencies, or package manager — just open `index.html` in a browser.

## Architecture

Everything lives in `index.html`: HTML structure, CSS (in `<style>`), and JavaScript (in `<script>`). Key sections:

- **CSS (~288 lines)**: Dark theme using CSS custom properties (`:root` vars). Responsive layout with flexbox. Visual states for drag targets, hints, and win overlay.
- **JS game state**: `towers` (array of 3 arrays holding disk sizes), `selected` (clicked tower index), `history` (move stack for undo), `moves`, `seconds`.
- **Interaction modes**: Click-to-select-then-click-to-place, HTML5 drag-and-drop, and touch drag — all converge on `tryMove(fromIdx, toIdx)`.
- **Hint system**: Recursive solver (`solveStep`/`getOptimalMove`) computes the next optimal move. Limited to ≤20 disks due to recursion depth.
- **Keyboard shortcuts**: 1/a, 2/b, 3/c select towers; u/Ctrl+Z undo; h hint; n new game.
