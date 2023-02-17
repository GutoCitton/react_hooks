import { useState, useEffect } from "react";


const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {

    console.log('buscando itens do DB...')

    setMyItems(getItems)

  }, [getItems])

  return (
    <div>
      {myItems &&
        myItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
      <h2>List</h2>
      <hr />
    </div>
  )
} 

export default List;