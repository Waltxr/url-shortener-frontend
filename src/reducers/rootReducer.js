import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import { shorturlReducer} from './shorturlReducer'
import { topurlsReducer } from './topurlsReducer'
import { usererrorsReducer } from './usererrorsReducer'
import { modalopenReducer } from './modalopenReducer'


const rootReducer = combineReducers({
  form: formReducer,
  shortenedUrl: shorturlReducer,
  topUrls: topurlsReducer,
  userErrors: usererrorsReducer,
  modalOpen: modalopenReducer
})

export default rootReducer;
