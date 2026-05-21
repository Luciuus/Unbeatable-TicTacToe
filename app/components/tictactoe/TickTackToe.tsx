"use client";

import useTicTacToe from "../../hooks/useTicTacToe";

import BackgroundEffects from "./BackgroundEffects";
import Board from "./Board";
import DifficultySelector from "./DifficultySelector";
import PlayAgainButton from "./PlayAgainButton";
import Status from "./Status";

export default function TicTacToe() {
    const {
        board,
        status,
        makeMove,
        resetGame,
        difficulty,
        setDifficulty,
    } = useTicTacToe();

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f1115] px-4 py-10 text-white">
            <BackgroundEffects />

            <div id="game-card" className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/5 bg-[#181c23]/90 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">

                    <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-zinc-100 font-title">
                                Tic Tac Toe
                            </h1>

                            <p className="mt-2 text-sm tracking-wide text-zinc-500 font-sub-title">
                                AI Difficulty System
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 font-title">
                                Difficulty
                            </p>

                            <DifficultySelector
                                difficulty={difficulty}
                                setDifficulty={setDifficulty}
                            />
                        </div>

                        <div className="mt-8">
                            <Status status={status} />
                        </div>

                        <div className="mt-8">
                            <PlayAgainButton resetGame={resetGame} />
                        </div>

                        <div className="mt-8 text-sm leading-relaxed text-zinc-500 font-sub-title">
                            <p>
                                You are playing as{" "}
                                <span className="font-semibold text-zinc-200">
                                    X
                                </span>
                                .
                            </p>

                            <p className="mt-2">
                                The AI uses different strategies depending on
                                the selected difficulty.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center px-6 pb-6 lg:pl-0">
                        <div className="w-full max-w-[420px]">
                            <Board board={board} makeMove={makeMove} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}