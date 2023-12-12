import "./index.css";

const TodoItem = (props) => {
  console.log(props);
  const { todoItem, doDelete } = props;
  const { id, title } = todoItem;
  const deleteQuote = () => {
    doDelete(id);
  };
  return (
    <li className="list">
      <p>{title}</p>
      <button type="button" className="deleteBtn" onClick={deleteQuote}>
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
