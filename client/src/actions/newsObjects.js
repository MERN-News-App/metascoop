// ACTION CREATOR

export const updateCategory = (category) => (dispatch) => {

    console.log(category, "this ONE")
    const url = `https://api.currentsapi.services/v1/search?category=${category}&apiKey=X2DqXEqyVN2kKq2QJPwiiZZ-xpRGdj7EEFCqpfDjv6CuX-fD` 

    const  data  = {
        title: category,
        apiURL: url
    }
console.log(data,"HEEEEEEEEEEEEEEEERE")
    dispatch({ type: 'UPDATE_CATEGORY', payload: data })
}



export const updatePublication = (publication) => (dispatch) => {
    const url = `https://api.currentsapi.services/v1/search?domain=${publication}&apiKey=pLe7rH90EDy1ZfcnxREvmUPPJ1Kh6fznQ_0v3VtIBngz1Fs0`

    const data = {
        title: publication,
        apiURL: url
    }

    dispatch({ type: 'UPDATE_PUBLICATION', payload: data })
}

export const updateSearch = (search) => (dispatch) => {
    const url = `https://api.currentsapi.services/v1/search?keywords=${search}&apiKey=pLe7rH90EDy1ZfcnxREvmUPPJ1Kh6fznQ_0v3VtIBngz1Fs0`

    const data = {
        title: search,
        apiURL: url
    }

    dispatch({ type: 'UPDATE_SEARCH', payload: data })
}

