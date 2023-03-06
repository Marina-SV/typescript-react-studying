import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import axios from "axios";
import {ITodo, IUser} from "./types/types"
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";


const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
// почему не дублируется []? [[]]
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        console.log(response) // Зачем методу get типизация?
        setUsers(response.data)
    }

    async function fetchTodos() {
        const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
        console.log(response) // Зачем методу get типизация?
        setTodos(response.data)
    }


    return (
        <div>
            <Card width="200px"
                  height="200px"
                  variant={CardVariant.outlined}
                  onClick={(num) => console.log("yes", num)}>
                <button>Кнопка</button>
            </Card>
            {/*<UserList users={users}/>*/}
            <List items={users}
                  renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
            <List items={todos}
                  renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
            {/*Как понимает, что пропс users типа IUser[] ?*/}
        </div>
    );
}

export default App;
