import React, {MouseEvent, MouseEventHandler} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {TopCars} from "./components/TopCars";
import './components/TopCars.css'

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("hello, Vasya is here!")
    }
    const petyaIsHere = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Petya is here")
    }
    const onClickHandler = (name: string) => {
        console.log(name)
    }*/
    const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('100500')
    }
    const foo2 = (num: number) => {
        return (
            console.log(num)
        )
    }

    return (
        <>
            {/*<NewComponent students={students} />*/}
            {/*<TopCars cars={topCars}/>*/}
            {/*<button onClick={(event) => onClickHandler("Vasya")}>
                MyYouTubeChannel-1
            </button>
            <button onClick={(event : MouseEvent<HTMLButtonElement>) => onClickHandler("Petya")}>Petya is here</button>
            <button onClick={() => onClickHandler("some info")}>Some info</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100500)}>2</button>
        </>
    );
}

export default App;
