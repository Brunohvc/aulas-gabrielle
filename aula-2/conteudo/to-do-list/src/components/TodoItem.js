

function TodoItem({ itemList, index, handleCheckedParent, handleDeleteParent }) {

  const handleChecked = (element) => {
    handleCheckedParent(index, element.target.checked);
  }

  const handleDelete = () => {
    handleDeleteParent(index);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={itemList.checked} onChange={handleChecked} /> {itemList.name}
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default TodoItem;