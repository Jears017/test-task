import React, {useState} from 'react'
import c from './Main.module.css'

export const Main = () => {
    const [number, setNumber] = useState(0)
    return (
        <div className={number % 2 === 0 ? c.mainField + ' ' + c.even : c.mainField + ' ' + c.odd}>
            <div className={c.numberContainer}>
                <span className={c.number}>{number}</span>
            </div>
            <div className={c.infoNumberContainer}>
                {number % 2 === 0 ? <div className={c.infoNumber}>Введено чётное число</div> :
                    <div className={c.infoNumber}>Введено нечетное число</div>}
            </div>
            <div className={c.buttonsContainer}>
                <div className={c.buttonsGroup}>
                    <button disabled={number <= 0} onClick={() => setNumber(number - 1)}>-</button>
                    <button onClick={() => setNumber(0)}>Reset</button>
                    <button onClick={() => setNumber(number + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}