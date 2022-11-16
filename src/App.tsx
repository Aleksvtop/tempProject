import React, {MouseEvent, MouseEventHandler} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {TopCars} from "./components/TopCars";
import './components/TopCars.css'
import {Button} from "./components/Button";
import {log} from "util";

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
    const button1Foo = (subscriber: string, age: number) => {
        console.log("I'm " + subscriber + ". My age: " + age)
    }
    const button2Foo = (subscriber: string, age: number) => {
        console.log("I'm " + subscriber + ". My age: " + age)
    }
    const buttonStupid = (txt: string) => {
        console.log(txt)
    }
    return (
        <>
            {/*<NewComponent students={students} />
            <TopCars cars={topCars}/>   */}
            <Button name={"YouTubeChannel - 1"} callBack={() => button1Foo('Vasya', 21)}/>
            <Button name={"YouTubeChannel - 2"} callBack={() => button2Foo('Petya', 33)}/>
            <Button name={"Stupid button"} callBack={() => buttonStupid("I'm stupid button")}/>
        </>
    );
}

export default App;
