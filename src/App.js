import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Listitem from "./Listitem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  deleteItem = (i) => {
    const restOfItems = this.state.items.filter((item) => item.key !== i);

    this.setState({
      items: restOfItems,
    });
  };
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text) {
      this.setState({
        items: [...this.state.items, newItem],
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  editItem = (text, key) => {
    let items = this.state.items;
    items.map((item) => {
      if (item.key == key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h2> To Do List</h2>

          <form id="to-do-form">
            <input
              type="text"
              placeholder="Enter Task "
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button onClick={this.addItem} type="submit">
              Add
            </button>
          </form>

          <Listitem
            items={this.state.items}
            deleteItem={this.deleteItem}
            editItem={this.editItem}
          />
        </header>
      </div>
    );
  }
}
export default App;
