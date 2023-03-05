import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import axios from "axios";
import {IUser} from "./types/types"
import UserList from "./components/UserList";


const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
// почему не дублируется []? [[]]
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        console.log(response)
        setUsers(response.data)
    }

    return (
        <div>
            <Card width="200px"
                  height="200px"
                  variant={CardVariant.outlined}
                  onClick={(num) => console.log("yes", num)}>
                <button>Кнопка</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
}

export default App;
