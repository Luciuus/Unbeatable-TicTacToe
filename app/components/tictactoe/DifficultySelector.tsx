import { Difficulty } from "../../types/tictactoe";

interface Props {
    difficulty: Difficulty;
    setDifficulty: (difficulty: Difficulty) => void;
}

const difficulties: Difficulty[] = [
    "Easy",
    "Medium",
    "Hard",
    "Impossible",
];

export default function DifficultySelector({
    difficulty,
    setDifficulty,
}: Props) {
    return (
        <div className="mb-6 grid grid-cols-2 gap-2">
            {difficulties.map((level) => (
                <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-200 font-sub-title ${difficulty === level
                        ? "border-zinc-500 bg-zinc-700 text-white"
                        : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                        }`}
                >
                    {level}
                </button>
            ))}
        </div>
    );
}