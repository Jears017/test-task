import React, {useState} from 'react'
import {Main} from "./components/Main";
import './App.css';


export const App = () => {
    const [count, setCount] = useState([])
    const add = () => {
        let newArr = [...count]
        setCount(newArr.reduce((total, amount) => {
            if (amount % 2 === 0) {
                total.push(amount + 1)
            } else {
                total.push(amount)
            }
            return total
        }, []))
        setCount(prev => {
            return [...prev, 0]
        })
    }

    const plusNumber = (idx) => {
        let newArr = [...count]
        newArr[idx]++
        setCount(newArr)
    }

    const minusNumber = (idx) => {
        let newArr = [...count]
        newArr[idx]--
        setCount(newArr)
    }

    const resetNumber = (idx) => {
        let newArr = [...count]
        newArr[idx] = 0;
        setCount(newArr)
    }

    const deleteCounter = (idx) => {
        let newArr = [...count]
        setCount(newArr.filter((el, ind) => ind !== idx).reduce((total, amount) => {
            if (amount % 2 !== 0) {
                total.push(amount - 1)
            } else {
                total.push(amount)
            }
            return total
        }, []))
    }

    const reset = () => {
        setCount([])
    }

    return (
        <div className='wrapper'>
            <div className='count-buttons'>
                <button onClick={add}>Add count</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>Count: {count.length}</div>
            <div>Sum: {count.reduce((sum, current) => sum + current, 0)}</div>
            <div className='counters'>
                {count.map((el, idx) => {
                        return (
                            <Main value={el} deleteCounter={() => deleteCounter(idx)}
                                  reset={() => resetNumber(idx)} minusOne={() => minusNumber(idx)}
                                  plusOne={() => plusNumber(idx)}
                            />
                        )
                    }
                )}
            </div>

        </div>
    );
}

export default App;
