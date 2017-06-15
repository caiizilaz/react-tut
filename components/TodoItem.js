import React, { Component } from 'react';
import actions from '../redux/actions';

class TodoItem extends Component {

    handleComplete() {
        this.props.actions.completeTodo(this.props.todo.id)
    }

    handleDelete() {
        this.props.actions.deleteTodo(this.props.todo.id)
    }

    render() {
        return (
            <li>
                <button onClick={this.handleComplete.bind(this)}>Mark as Completed</button>
                <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
                <span>{this.props.todo.text}</span>
            </li>
        );
    }
}

export default TodoItem;