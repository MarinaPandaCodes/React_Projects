import React from 'react';
import StyleCard from './components/StyleCard';
import ProfileCard from './components/ProfileCard';
import IconComponent from './components/IconComponent';

const MyButton = () => {
  const handleClick = () => {
    console.log(Math.round(Math.random()*10));
  };
  return <button onClick={handleClick}>Click</button>;
};

const Move = () => {
  const moveHandler = () => {
    alert('Mouse move event fired');
    console.log('Mouse move event fired');
  };
  return <div onMouseMove={moveHandler} style={{ border: '1px solid black', padding: '20px' }}>
    Move your mouse here
  </div>;
};

const App = () => {
  return (
    <div>
      <StyleCard />
      <ProfileCard />
      <IconComponent />
      <MyButton />
      <Move />
    </div>
  );
};

export default App;
