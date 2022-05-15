import React, { useState } from 'react';
import Circle from './Circle';

const App = () => {
  const [value, setValue] = useState("")
  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = event;
    setValue(value);
  };
  
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', value)
  }

  return (
    <div>
      {/* styled-components와 기본 div */}
      <Circle bgColor="teal" borderColor='blue'/>
      <Circle bgColor="tomato" text='테스트'/>

      {/* form type 설정 */}
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username" value={value} onChange={onchange}/>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default App;