import { Cell } from "../types/tictactoe";

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: Cell[]) {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every((cell) => cell !== null)) {
    return "Draw";
  }

  return null;
}

function minimax(
  board: Cell[],
  depth: number,
  maximizing: boolean
): number {
  const result = checkWinner(board);

  if (result === "O") return 10 - depth;
  if (result === "X") return depth - 10;
  if (result === "Draw") return 0;

  if (maximizing) {
    let best = -Infinity;

    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "O";
        best = Math.max(best, minimax(board, depth + 1, false));
        board[i] = null;
      }
    }

    return best;
  }

  let best = Infinity;

  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = "X";
      best = Math.min(best, minimax(board, depth + 1, true));
      board[i] = null;
    }
  }

  return best;
}

export function getBestMove(board: Cell[]) {
  let bestScore = -Infinity;
  let move = -1;

  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = "O";

      const score = minimax(board, 0, false);

      board[i] = null;

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

export function getRandomMove(board: Cell[]) {
  const available = board
    .map((cell, index) => (!cell ? index : null))
    .filter((v) => v !== null) as number[];

  return available[Math.floor(Math.random() * available.length)];
}