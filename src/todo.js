import React ,{Component} from 'react';
import Button from './Button';
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import SideBar from "./components/SideBar";
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name : ''
        };
    }

    onInput = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }

    removeTodo = (index) => {
        const { todos } = this.state;
        this.setState({
            todos: [...todos.slice(0,index),...todos.slice(index+ 1)]
        });
    }
    render(){
        const { todos } = this.state;

        return (
        <div>
            <Header />
            <SideBar />
            <input type="text" onInput= { this.onInput} />
            <Button onClick={this.addTodo} name="登録" />
            <ul>
                {todos.map((todo,index) => <li key={index}>
                {todo}
                <Button onClick={() => {this.removeTodo(index) }} name="削除"/>
                </li>)}
            </ul>
            <Footer />
        </div>);
    }
}