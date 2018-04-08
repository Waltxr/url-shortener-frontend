import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import { shorturlReducer} from './shorturlReducer'
import { topurlsReducer } from './topurlsReducer'


const rootReducer = combineReducers({
  form: formReducer,
  shortenedUrl: shorturlReducer,
  topUrls: topurlsReducer
})

export default rootReducer;
