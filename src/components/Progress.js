function Progress({ index, points, length, answer, maxPoints }) {
  return (
    <div id="progress">
      <progress max={length} value={index + +Number.isInteger(answer)} id="bar" />
      <div id="details">
        <p>
          Question <span>{index + 1}</span> / {length}
        </p>
        <p>
          <span>{points}</span> / {maxPoints} points
        </p>
      </div>
    </div>
  );
}

export default Progress;
