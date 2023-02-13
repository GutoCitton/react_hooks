import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = 'Bruno';

  const [name, setName] = useState('Guto');

  const changeName = () => {

    userName = 'Bruno Artêmio'

    setName('Augusto Citton')

    console.log('userName:', userName, 'Nome:', name)

  }


  return (
    <div>
      {/* 1 - useState */}
     <h2>useState</h2>
     <p>Variável: {userName}</p>
     <p>useState: {name}</p>
     <button onClick={changeName}>Mudar Nomes!</button>
     <hr />


    </div>
  );
}

export default HookUseState;