
const def = { title: "science", apiURL:`https://api.currentsapi.services/v1/search?category=science&apiKey=X2DqXEqyVN2kKq2QJPwiiZZ-xpRGdj7EEFCqpfDjv6CuX-fD`}


// eslint-disable-next-line
export default (newsObject = def, action) => {
    switch (action.type) {
       case 'CATEGORY':
           return action.payload;
    //    case 'PUBLICATION':
    //        return action.payload;
    //     case 'SEARCH':
    //        return action.payload;   
       default:
           return newsObject;
       
    }
   }