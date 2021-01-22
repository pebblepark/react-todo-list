import React,{Component} from 'react';
import TodoItem from './TodoItem';

// 3 props
// 1. todos : An array of objects.
// 2. onToggle : Functions to turn the checkbox on and off.
// 3. onRemove : Functions to delete an item.

// Rendering multiple TodoItem components
// When rendering a 'List', use it as a class type component rather than a functional type for component optimization

class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove } = this.props;
        return (
            <div>
                <TodoItem text="hello"></TodoItem>
                <TodoItem text="react"></TodoItem>
            </div>
        );
    };
}

export default TodoItemList;