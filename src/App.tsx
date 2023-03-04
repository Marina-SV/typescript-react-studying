import React, {useState} from 'react';
import Card, {CardVariant} from "./components/Card";


const App = () => {

    return (
        <div>
            <Card width="200px"
                  height="200px"
                  variant={CardVariant.outlined}
                  onClick={(num) => console.log("yes", num)}>
                <button>Кнопка</button>
            </Card>
        </div>
    );
}

export default App;
