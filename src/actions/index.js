const BASE_URL = 'http://localhost:3000/api/v1/'

export function getShortUrl(decoded_url) {
  let url = decoded_url.decoded_url
  if (url.slice(0,7) === 'http://' || url.slice(0, 8) === 'https://') {
    decoded_url.decoded_url = url
  } else {
    decoded_url.decoded_url = 'http://' + url
  }
  return dispatch => {
    fetch(BASE_URL + 'shortener', {
    	method: 'POST',
    	headers: {
    	 'Content-Type': 'application/json',
    	 'Accept': 'application/json'
        },
    	body: JSON.stringify({
    		decoded_url
    	})
    })
    .then( res => res.json() )
    .then( shortUrl => {
      if (shortUrl.errors) {
        dispatch({ type: 'ADD_ERROR', payload: shortUrl.errors })
      }
      else {
        dispatch({ type: 'SHORTEN_URL', payload: shortUrl.slug})
        dispatch({ type: 'REMOVE_ERROR'})
      }
    })
  }
}

export function getTopUrls() {
  return dispatch => {
    fetch(BASE_URL + 'top-urls')
    .then( res => res.json() )
    .then( urls => {
      dispatch({type: 'FETCH_TOP_URLS', payload: urls })
    })
  }
}
