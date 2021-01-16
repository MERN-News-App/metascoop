// ACTION CREATOR

const fetchCategory = (category) => (dispatch) => {
    const url = () => {
        return `https://api.currentsapi.services/v1/search?category=${category}&apiKey=X2DqXEqyVN2kKq2QJPwiiZZ-xpRGdj7EEFCqpfDjv6CuX-fD` 
    } 

    const { data } = {
        title: category,
        apiURL: url
    }

    dispatch({ type: 'CATEGORY', payload: data })
}