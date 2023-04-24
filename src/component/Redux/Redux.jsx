import React from "react";
import { useDispatch, useSelector } from "react-redux"; // мы заранее скачали этот пакет с помощью "npm install react-redux"

const Redux = () => {
   

    const dispatch = useDispatch() // dispatch нужет для того чтобы изменмить состояние(defaultState)
    const cash = useSelector(anyWord => anyWord.cash) // useSelectore нужен чтобы дабраться до начального состояния(defaultState), например на данный момент есть defaultState а в state есть ключь cash со значением 5
    console.log(cash)

    const addCash =() => {
        dispatch({type: "ADD_CASH", payload: 5})
    }

    const getCash = () => {
        dispatch({type: "GET_CASH", payload: 5})
    }


    return(

        <div style={{marginTop: "100px"}}> 
        <h3>{cash}</h3>
            <div>
                <button onClick={() => addCash()}>Пополнить счет</button>
                <button onClick={() => getCash()}>Снять со счета</button>
            </div>
        </div>
    )
}

export default Redux;
