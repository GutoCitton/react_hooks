import { useState, useEffect, useLayoutEffect } from "react";


const HookUseLayoutEffect = () => {
  const [name, setName] = useState('Açgum nome');

  useEffect(() => {
    console.log('2');
    setName('Mudou de novo!')
  }, []);

  useLayoutEffect(() => {
    console.log('1');
    setName('Outro nome')
  }, []);

  console.log(name)

  return (
    <div>
      <h2>HookUseLayoutEffect</h2>
      <p>{name}</p>
      <hr />
    </div>
  )
} 

export default HookUseLayoutEffect;