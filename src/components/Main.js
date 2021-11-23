import React from 'react'
import c from './Main.module.css'

export const Main = ({value, plusOne, minusOne, reset, deleteCounter}) => {
    return (
        <div className={value % 2 === 0 ? c.mainField + ' ' + c.even : c.mainField + ' ' + c.odd}>
            <div className={c.numberContainer}>
                <span className={c.number}>{value}</span>
            </div>
            <div className={c.infoNumberContainer}>
                {value % 2 === 0 ? <div className={c.infoNumber}>Введено чётное число</div> :
                    <div className={c.infoNumber}>Введено нечетное число</div>}
            </div>
            <div className={c.buttonsContainer}>
                <div className={c.buttonsGroup}>
                    <button disabled={value <= 0} onClick={() => minusOne()}>-</button>
                    <button onClick={() => reset()}>Reset</button>
                    <button onClick={() => plusOne()}>+</button>
                </div>
            </div>
                <button onClick={() => deleteCounter()}>delete</button>
        </div>
    )
}