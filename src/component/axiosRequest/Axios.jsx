import React, { useEffect, useState } from "react";
import axios from "axios"; // Надо скачать этот пакет с помощью npm install axios

const src = "https://jsonplaceholder.typicode.com/todos" // это ссылка взята из сайта api placeholder


const Axios = () => {

    const [state, setState] = useState([])

    useEffect( () => {
        axios
        .get(src)
        .then(data => {
            setState(data.data)
            console.log(data.data)
        })
    }, []);

    return(
            <div>
                {state.map(data => {
                    return(
                        <p>
                            {/* внутри массива данных есть ключь title */}
                            {data.title} 
                        </p>
                    )
                })}
             </div>
    )
}
export default Axios;