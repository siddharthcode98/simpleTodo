import { Component } from "react";
import TodoItem from "../TodoItem";
import "./index.css";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];

// Write your code here
class SimpleTodos extends Component {
  state = { todoList: initialTodosList };
  onDelete = (id) => {
    const { todoList } = this.state;
    const filteredTodoList = todoList.filter((eachItem) => eachItem.id !== id);
    this.setState({ todoList: filteredTodoList });
    // console.log(id);
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className="orangeBackground">
        <div className="whiteBackground">
          <h1 className="mainHeading">Simple Todos</h1>
          <ul className="listStyle">
            {todoList.map((eachItem) => {
              return (
                <TodoItem
                  todoItem={eachItem}
                  key={eachItem.id}
                  doDelete={this.onDelete}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SimpleTodos;