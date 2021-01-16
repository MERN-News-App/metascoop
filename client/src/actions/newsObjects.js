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

