import { useState } from "react";

type ListProps = {
  initialItems: string[];
};

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);
    }, 500);
  }

  function removeFromList(value: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== value));
    }, 500);
  }

  return (
    <div className="List">
      <input placeholder="Novo item" value={newItem} onChange={ev => setNewItem(ev.target.value)} />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => (
          <li key={item}>
            <span>{item}</span>
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
