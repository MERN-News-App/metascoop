import axios from 'axios'

async function fetchNews(){
    console.log("Fetch News Called")
    let newsData;
    try{
        newsData = await axios.get('https://api.currentsapi.services/v1/latest-news/?&&page_number=1&apiKey=pLe7rH90EDy1ZfcnxREvmUPPJ1Kh6fznQ_0v3VtIBngz1Fs0')
        setArticles(newsData.data.news)
    }
    catch(error){
        newsData = error
    }
    return newsData
}


export default fetchNews