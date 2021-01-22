import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id = 0

  state = {
    input: '',
    todos: [],
    color: '',
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6']
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value   // Change value of input
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input : '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key == 'Enter') {
      this.handleCreate();
    }
  }

  handleSelected = (color) => {
    this.setState({
      color: color
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos:nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo=>todo.id !== id)
    });
  }

  render() {
    const { input,todos,color,colors } = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelected
    } = this;

    return (
      <TodoListTemplate
        palette={
          <Palette colors={colors} selected={handleSelected} />
        }
        form={
          <Form value={input} color={color} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate}/>
        }
      >
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
