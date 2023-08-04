function Finished({ highestScore, points, maxPoints, dispatch }) {
  const percentage = (points * 100) / maxPoints;
  let emoji;
  switch (true) {
    case percentage === 0:
      emoji = "😞";
      break;
    case percentage > 0 && percentage <= 50:
      emoji = "👍";
      break;
    case percentage > 50 && percentage <= 70:
      emoji = "👌";
      break;
    case percentage > 70 && percentage <= 90:
      emoji = "😎";
      break;
    case percentage > 90 && percentage < 100:
      emoji = "🤩";
      break;
    case percentage === 100:
      emoji = "🤯🤯🤯";
      break;
    default:
      emoji = "🤔";
  }
  return (
    <section id="finished">
      <p>
        {emoji} You scored {points} of {maxPoints} ({Math.floor(percentage)}%)
        {percentage === 100 && <span> Incredible!!!!!</span>}
        {percentage > 90 && percentage < 100 && <span> Awesome!</span>}
      </p>

      <p>⭐ Your highest score is: {highestScore} ⭐</p>
      <button id="reset" onClick={() => dispatch({ type: "reset" })}>
        Restart Quiz
      </button>
    </section>
  );
}

export default Finished;
