const Greet = () => {
  const greet = "Hello";
  const date = new Date();
  return (
    <div>
      <h1>{greet} World!</h1>
      <p>Current date and time: {date.toLocaleString()}</p>
    </div>
  );
};

export default Greet;
