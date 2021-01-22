import React, {Component} from 'react';
import './TodoItem.css';

// 5 props
// 1. text : todo value
// 2. checked : state of checkbox
// 3. id : todo's identifier
// 4. onToggle : Functions to turn the checkbox on and off
// 5. onRemove : Functions to delete an item

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();    // Do not execute onToggle
                    // 이렇게 처리 안해주면 해당 DOM의 부모의 클릭 이벤트에
                    // 연결되어 있는 onToggle이 onRemove -> onToggle 순으로 실행됨
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        );
    }
}
export default TodoItem;