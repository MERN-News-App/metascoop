
const def = { title: "", apiURL:""}

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