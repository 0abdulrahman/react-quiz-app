function Start({ length, dispatch }) {
  return (
    <article id="start">
      <h2>Welcome to The React Quiz!</h2>
      <h4>{length} questions to test your React mastery</h4>
      <button onClick={() => dispatch({ type: "start" })}>Let's start!</button>
    </article>
  );
}

export default Start;
