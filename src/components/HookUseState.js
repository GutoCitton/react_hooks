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


  // 2 - useState e input 
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault()

    //envio a uma API

    console.log(age)
  }

  return (
    <div>
      {/* 1 - useState */}
     <h2>useState</h2>
     <p>Variável: {userName}</p>
     <p>useState: {name}</p>
     <button onClick={changeName}>Mudar Nomes!</button>
     {/* 2 - useState e input */}
     <p>Digite a sua idade: </p>
     <form onSubmit={handleSubmit}>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="submit" value='Enviar' />
     </form>
     <p>Você tem {age} anos!</p>
     <hr />


    </div>
  );
}

export default HookUseState;