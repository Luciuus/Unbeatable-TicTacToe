interface Props {
    resetGame: () => void;
}

export default function PlayAgainButton({
    resetGame,
}: Props) {
    return (
        <button
            onClick={resetGame}
            className="w-full rounded-2xl font-title border border-white/5 bg-[#2b3440] px-5 py-3 font-semibold text-zinc-100 transition-all duration-200 hover:bg-[#37404d]"
        >
            Play Again
        </button>
    );
}