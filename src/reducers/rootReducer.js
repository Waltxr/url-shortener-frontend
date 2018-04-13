import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import { shorturlReducer} from './shorturlReducer'
import { topurlsReducer } from './topurlsReducer'
import { usererrorsReducer } from './usererrorsReducer'


const rootReducer = combineReducers({
  form: formReducer,
  shortenedUrl: shorturlReducer,
  topUrls: topurlsReducer,
  userErrors: usererrorsReducer
})

export default rootReducer;
