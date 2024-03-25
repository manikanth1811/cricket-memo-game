export default function Score({
  score,
  highScore,
}: {
  score: Number;
  highScore: Number;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-[100%] justify-center items-center text-lg font-bold">
      <div className="score">Score: {score.toString()}</div>
      <div className="highscore">High Score: {highScore.toString()}</div>
    </div>
  );
}
