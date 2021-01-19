import React from 'react'
import axios from 'axios'



const thing = () => {
    console.log("click")
    return axios.get('https://api.currentsapi.services/v1/latest-news/?&&page_number=1&apiKey=pLe7rH90EDy1ZfcnxREvmUPPJ1Kh6fznQ_0v3VtIBngz1Fs0')
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err =>{})
}



const NewsApi = () => {
    return (
        <div>
            <button onClick={() => {thing()}}>button</button>
        </div>
    )
}


export default NewsApi

