import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text : 'first', checked : false },
      { id: 1, text : 'second', checked : true },
      { id: 2, text : 'third', checked : false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value   // Change value of input
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input : '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key == 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input,todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}/>
      }>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    );
  }
}

export default App;
