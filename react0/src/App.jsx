import React from 'react'

const App = () => {

  return <User img="/crafty-gen-img.png" name="Marina Panda" age={24} isMarried={false} hobbies={["Reading", "Traveling", "Cooking"]} />

};

const User = (props) => {

  return (
    <section> 
      <img src={props.img} alt={props.name} width={200} />

      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Married: {props.isMarried ? "Yes" : "No"}</h1>
      <h1>Hobbies:</h1>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
  };

export default App;
