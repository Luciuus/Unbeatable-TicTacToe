"use client";

import { useMemo, useState } from "react";
import { Cell, Difficulty } from "../types/tictactoe";
import {
  checkWinner,
  getBestMove,
  getRandomMove,
} from "../lib/minimax";

export default function useTicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));

  const [winner, setWinner] = useState<string | null>(null);

  const [gameOver, setGameOver] = useState(false);

  const [isThinking, setIsThinking] = useState(false);

  const [difficulty, setDifficulty] =
    useState<Difficulty>("Impossible");

  const getAIMove = (currentBoard: Cell[]) => {
    const randomChance = {
      Easy: 0.85,
      Medium: 0.45,
      Hard: 0.15,
      Impossible: 0,
    };

    const shouldPlayRandom =
      Math.random() < randomChance[difficulty];

    if (shouldPlayRandom) {
      return getRandomMove(currentBoard);
    }

    return getBestMove(currentBoard);
  };

  const makeMove = (index: number) => {
    if (board[index] || gameOver || isThinking) return;

    const updated = [...board];
    updated[index] = "X";

    setBoard(updated);

    const result = checkWinner(updated);

    if (result) {
      setWinner(result);
      setGameOver(true);
      return;
    }

    setIsThinking(true);

    setTimeout(() => {
      const aiBoard = [...updated];

      const move = getAIMove(aiBoard);

      if (move !== -1) {
        aiBoard[move] = "O";
      }

      setBoard(aiBoard);

      const aiResult = checkWinner(aiBoard);

      if (aiResult) {
        setWinner(aiResult);
        setGameOver(true);
      }

      setIsThinking(false);
    }, 450);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setGameOver(false);
    setIsThinking(false);
  };

  const status = useMemo(() => {
    if (winner === "X") return "You Won";
    if (winner === "O") return "AI Won";
    if (winner === "Draw") return "Draw";

    return isThinking ? "AI Thinking..." : "Your Turn";
  }, [winner, isThinking]);

  return {
    board,
    status,
    makeMove,
    resetGame,
    difficulty,
    setDifficulty,
  };
}