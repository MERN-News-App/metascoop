import { combineReducers } from 'redux';

import posts from './posts'
import newsObjects from './newsObjects'

export default combineReducers({ posts, newsObjects })

console.log(newsObjects)