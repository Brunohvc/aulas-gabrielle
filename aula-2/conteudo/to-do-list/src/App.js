import { useState } from 'react';

import logo from './logo.svg';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todoList, setTodoList] = useState([
    { name: 'Item 1', checked: false },
    { name: 'Item 2', checked: false },
    { name: 'Item 3', checked: true },
    { name: 'Item 4', checked: false },
    { name: 'Item 5', checked: true }
  ]);

  const handleChangeNewItemName = (name) => {
    console.log(name);
    setNewItem(name);
  }

  const addNewItem = () => {
    const newList = [
      ...todoList
    ];

    newList.push({ name: newItem, checked: false });

    setTodoList(newList);
    setNewItem('');
  }

  const handleChecked = (index, checked) => {
    const newList = [
      ...todoList
    ];

    newList[index].checked = checked;

    setTodoList(newList);
  }

  const handleDelete = (index) => {
    const newList = [
      ...todoList
    ];

    newList.splice(index, 1);
    setTodoList(newList);
  }

  return (
    <div className="App">
      <input id='newItem' type="text" value={newItem} onChange={element => { handleChangeNewItemName(element.target.value) }} />
      <button onClick={addNewItem}>Add</button>

      {
        todoList.map((listItem, index) => {
          return <TodoItem
            key={listItem.name}
            index={index}
            itemList={listItem}
            handleCheckedParent={handleChecked}
            handleDeleteParent={handleDelete}
          />
        })
      }
    </div>
  );
}

export default App;
