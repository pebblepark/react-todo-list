import React from 'react';
import './TodoListTemplate.css';

// 함수형 컴포넌트
// 파라미터로 받는것은 props -> form, children
const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                What to do
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;