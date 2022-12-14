import React, {MouseEvent, MouseEventHandler, useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {TopCars} from "./components/TopCars";
import './components/TopCars.css'
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {InputButton} from "./components/InputButton";
/*import {MoneyComponent} from './components/MoneyComponent'*/

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

/*export type FilterType = 'All' | 'Dollar' | 'Ruble'*/
function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
        ])
    const addMessage = (title:string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }
    let [title, setTitle] = useState('')
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <InputButton name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el,index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

    /*const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'c1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'x1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'v1234567890'}
    ])
    let currentMoney = money
    const [filter, setFilter] = useState<FilterType>('All')
     if (filter === 'Ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
    }
    if (filter === 'Dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }
    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    return (
        <>
            <MoneyComponent setMoney={setMoney} currentMoney={currentMoney}  onClickFilterHandler={onClickFilterHandler}/>
        </>
    )*/
    /*const button1Foo = (subscriber: string, age: number) => {
        console.log("I'm " + subscriber + ". My age: " + age)
    }
    const button2Foo = (subscriber: string, age: number) => {
        console.log("I'm " + subscriber + ". My age: " + age)
    }
    const buttonStupid = (txt: string) => {
        console.log(txt)
    }*/
    /*let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }
    const onClickHandler1 = () => {
        setA(a=0)
    }
    return (
        <>
            {/!*<NewComponent students={students} />
            <TopCars cars={topCars}/>   *!/}
            {/!*<Button name={"YouTubeChannel - 1"} callBack={() => button1Foo('Vasya', 21)}/>
            <Button name={"YouTubeChannel - 2"} callBack={() => button2Foo('Petya', 33)}/>
            <Button name={"Stupid button"} callBack={() => buttonStupid("I'm stupid button")}/>*!/}
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickHandler1}>0</button>
        </>
    );
}*/
}

export default App;
